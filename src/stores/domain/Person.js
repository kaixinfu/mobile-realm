import {observable} from 'mobx';
import realm from '../../servers/realm';
import Base from './Base'
import {copyProperties} from '../../lib/ComFuncs'

export default class Person extends Base {
    @observable person_uuid = '';
    // 人员类型
    @observable person_type = '';
    // 姓名
    @observable name = '';
    // 性别
    @observable sex = '';
    // 出生日期
    @observable birthdate = '';

    constructor() {
        super();
    }

    static create(person) {
        realm.create('Person', realm.cascadingCopy(person), true);
    }
}
