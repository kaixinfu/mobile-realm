'use strict';

import {observable, computed, action} from 'mobx';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import realm from '../../servers/realm';
import {User} from '../domain';

class LoginStore {

    @observable user = {};
    @observable user_no = '';
    @observable user_pwd = '';

    @action init() {
        this.clear();
        const localUser = realm.objects('User')[0];
        if (!_.isEmpty(localUser)) {
            this.user = {...localUser};
            this.user_no = this.user.user_no;
            this.user_pwd = this.user.user_pwd
            // this.user_pwd = ''
        }
    }

    @action
    setUserNo = (text) => {
        this.user_no = text
    }

    @computed
    get getUserNo() {
        return this.user_no
    }

    @action
    setUserPwd = (text) => {
        this.user_pwd = text
    }

    @computed
    get getUserPwd() {
        return this.user_pwd
    }

    checkUser = () => {
        const result = {
            flag: false,
            message: ''
        };
        if (_.isEmpty(this.user_no)) {
            result.flag = true;
            result.message = '用户账号为空，请填写!'
            return result
        }
        ;
        if (_.isEmpty(this.user_pwd)) {
            result.flag = true;
            result.message = '用户密码为空，请填写!'
            return result
        }
        ;
        if (_.isEmpty(this.user) || this.user.user_no !== this.user_no) {
            result.flag = true;
            result.message = '用户不存在，请先注册!';
            return result
        }
        ;
        if (this.user.user_pwd !== this.user_pwd) {
            result.flag = true;
            result.message = '用户密码不正确，请核对密码是否正确!'
            this.user_pwd = '';
            return result
        }
        ;
        return result
    }

    @action
    clear() {
        this.user_no = '';
        this.user_pwd = '';
    }

    @action
    login = () => {
        this.user.user_type = 'Y';
        const user = this.user;
        realm.write(() => {
            User.update(user)
        });
        Actions.tab()
    }
}

export default new LoginStore();