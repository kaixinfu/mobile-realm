'use strict';

import {observable, computed, action} from 'mobx'
import _ from 'lodash'
import {Actions} from 'react-native-router-flux'
import realm from '../../servers/realm';
import {User} from '../domain';

class SplashStore {
    @observable user = {};

    @action
    init() {
        this.clear();
        const localUser = realm.objects('User')[0];
        console.log('SplashStore ==========> ', localUser)
        if (!_.isEmpty(localUser)) {
            this.user = {...localUser};
        }
    }

    @action
    checkLogin() {
        if (_.isEmpty(this.user) || _.isEmpty(this.user.user_no) || this.user.user_type !== 'Y') {
            setTimeout(() => Actions.login(), 300);
            return
        }
        if (this.user.user_no && this.user.user_type === 'Y') {
            Actions.tab();
        }
    }

    @action
    clear() {
        this.user = observable({});
    }
}

export default new SplashStore();