import Entity from './Entity';
import {observable} from 'mobx';
import realm from '../../servers/realm';
import global from '../Global'
import _ from 'lodash'
export default class User extends Entity {
    // 用户主键
    @observable pk_uuid = '';
    // 登录账号
    @observable user_no = '';
    // 操作员姓名
    @observable user_name = '';
    // 密码
    @observable user_pwd = '';
    // 电话号码
    @observable phone_number = '';
    constructor() {
        super();
        this.policy_uuid = this.serno;
    }

    static create(user) {
        realm.create('User', realm.cascadingCopy(user), true)
    }

    static deleteAll(){
        let loadedUsers = realm.objects('User')
        realm.delete(loadedUsers)
    }
}