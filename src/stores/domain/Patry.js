import {observable} from 'mobx';
import realm from '../../servers/realm';
import Entity from './Entity'
import {copyProperties} from '../../lib/ComFuncs'

export default class Patry extends Entity {
    @observable party_uuid = '';
    // 人员类型
    @observable party_type = '';
    // 姓名
    @observable name = '';
    // 性别
    @observable sex = '';
    // 出生日期
    @observable birthdate = '';

    constructor() {
        super();
    }

    static create(party) {
        realm.create('Party', realm.cascadingCopy(party), true);
    }
}