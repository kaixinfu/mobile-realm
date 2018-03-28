import {observable} from 'mobx';
import realm from '../../servers/realm';
import Entity from './Entity'
import {copyProperties} from '../../lib/ComFuncs'

export default class Patry extends Entity {
    @observable policy_uuid = '';
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
}