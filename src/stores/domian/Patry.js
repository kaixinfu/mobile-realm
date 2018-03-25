import {observable} from 'mobx';
import realm from '../../servers/realm';
import Entity from './Entity'
import {copyProperties} from '../../lib/ComFuncs'

export default class Patry extends Entity {
    @observable policy_uuid = ''; // 保单UUID
    @observable party_uuid = ''; // 人员编码, 主键
    @observable party_type = ''; // 人员类型,  枚举：PartyType
    @observable name = ''; // 客户姓名
    @observable sex = ''; // 性别
    @observable birthdate = ''; // 出生日期

    constructor(policy_uuid, party_type) {
        super();
        this.policy_uuid = this.serno;
        this.policy_uuid = (_.isString(policy_uuid) && !_.isUndefined(policy_uuid)) ? policy_uuid : '';
        this.party_type = (_.isString(party_type) && !_.isUndefined(party_type)) ? party_type : '';
    }
    static create(party) {
        let realmParty = realm.create('Party', realm.cascadingCopy(party), true);
    }
    // 将查到的realm对象转换为实际对象并保存回原对象
    static reformParty(party) {

        // 复制联系信息列表
        let partyContacts = [];
        party.partyContacts.forEach((realmContact) => { // forEach 与for of有区别
            let partyContact = new PartyContact();
            copyProperties(partyContact, realmContact);
            partyContacts.push(partyContact)
        });
        party.partyContacts = partyContacts;

        // 复制险种信息列表
        let partyAddresses = [];
        party.partyAddresses.forEach((realmAddress) => {
            let partyAddress = new PartyAddress();
            copyProperties(partyAddress, realmAddress);
            partyAddresses.push(partyAddress)
        });
        party.partyAddresses = partyAddresses;

        // 复制险种信息列表
        let policyRisks = [];
        party.policyRisks.forEach((realmRisk) => {
            let policyRisk = new PolicyRisk();
            copyProperties(policyRisk, realmRisk);
            policyRisks.push(policyRisk)
        });
        party.policyRisks = policyRisks;

        // 复制影像信息列表
        let policyImages = [];
        party.policyImages.forEach((realmImage) => {
            let policyImage = new PolicyImage();
            copyProperties(policyImage, realmImage);
            policyImages.push(policyImage)
        });
        party.policyImages = policyImages;

    }
    static findByPk(party_uuid) {
        let loadedParty = realm.objectForPrimaryKey('Party', party_uuid);
        loadedParty = {...loadedParty};
        if (_.isEmpty(loadedParty)) {
            return observable({});
        }
        Party.reformParty(loadedParty);
        return observable(loadedParty)
    }
    static findParty(policy_uuid, party_type) {

        let loadedParty = realm.objects('Party').filtered("policy_uuid = $0 and party_type = $1", policy_uuid, party_type)[0];

        if (_.isEmpty(loadedParty)) {
            return observable({})
        }

        loadedParty = {...loadedParty};
        Party.reformParty(loadedParty);
        return observable(loadedParty)
    }
    static update(party) {

        let updated_party = new Party();
        copyProperties(updated_party, party);
        Party.reformParty(updated_party);

        Party.logParty(updated_party);

        updated_party.mdf_date = moment().format("YYYY/MM/DD HH:mm:ss");
        realm.create("Party", realm.cascadingCopy(updated_party), true);
    }
    //根据party_uuid删除
    static deleteByPartyUUID(party_uuid) {
        let needDeleteParty = realm.objects('Party').filtered("party_uuid = $0", party_uuid);
        if (_.isEmpty(needDeleteParty)) {
            return;
        }
        realm.delete(needDeleteParty)
    }
}