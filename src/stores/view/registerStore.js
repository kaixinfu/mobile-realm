'use strict';

import {observable, computed, action} from 'mobx'
import _ from 'lodash'
import {Actions} from 'react-native-router-flux'
import realm from '../../servers/realm';
import {User} from '../domain';
import {genUUID} from '../../lib/ComFuncs';
import moment from 'moment';

class RegisterStore {
    @observable user = new User();

    @action
    init = () => {
        realm.write(() => {
            User.deleteUser();
        })
    }

    @action
    setUserNo = (text) => {
        this.user.user_no = text
    }

    @computed
    get getUserNo() {
        return this.user.user_no
    }

    @action
    setUserPwd = (text) => {
        this.user.user_pwd = text
    }

    @computed
    get getUserPwd() {
        return this.user.user_pwd
    }

    @action
    setUserName = (text) => {
        this.user.user_name = text
    }

    @computed
    get getUserName() {
        return this.user.user_name
    }

    @action
    setUserAge = (text) => {
        this.user.user_age = text
    }

    @computed
    get getUserAge() {
        return this.user.user_age
    }

    @action
    setUserPhone = (text) => {
        this.user.phone_number = text
    }

    @computed
    get getUserPhone() {
        return this.user.phone_number
    }

    @computed
    get checkUser() {
        const {user_no, user_pwd, user_name, user_age, phone_number} = this.user;
        const result = {
            flag: false,
            message: ''
        };
        if (_.isEmpty(user_no)) {
            result.flag = true;
            result.message = '用户账号为空，请填写!'
            return result
        }
        ;
        if (_.isEmpty(user_pwd)) {
            result.flag = true;
            result.message = '用户密码为空，请填写!'
            return result
        }
        ;
        if (_.isEmpty(user_name)) {
            result.flag = true;
            result.message = '用户名为空，请填写!'
            return result
        }
        ;
        if (_.isEmpty(user_age)) {
            result.flag = true;
            result.message = '用户年龄为空，请填写!'
            return result
        }
        ;
        if (_.isEmpty(phone_number)) {
            result.flag = true;
            result.message = '用户手机号码为空，请填写!'
            return result
        }
        ;
        return result
    }

    @action clear() {
        this.user.user_no = '';
        this.user.user_pwd = '';
        this.user.user_name = '';
        this.user.user_age = '';
        this.user.phone_number = '';
    }

    @computed get userNo() {
        return this.user.user_no
    }

    @action
    register = () => {
        const {user_no, user_pwd, user_name, user_age, phone_number} = this.user;
        const user = {
            serno: genUUID(),
            user_uuid: genUUID(),
            user_type: 'N',
            user_no: user_no,
            user_name: user_name,
            user_pwd: user_pwd,
            user_age: user_age,
            phone_number: phone_number,
            crt_date: moment().format("YYYY/MM/DD HH:mm:ss")
        };

        //持久化到本地数据库
        realm.write(() => {
            //删除已登录的用户,只保留最后一次的用户,避免在同一设备上存在多个不同用户后无法自动登录
            User.deleteUser();
            User.create(user)
        });
        Actions.login()
    }
}

export default new RegisterStore();