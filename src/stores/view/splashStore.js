'use strict';

import { observable, computed,action } from 'mobx'
import _ from 'lodash'
import {Actions} from 'react-native-router-flux'
import realm from '../../servers/realm';
import { User } from '../domain';
import {genUUID} from '../../lib/ComFuncs';

class SplashStore {

  @action
  checkLogin() {
      const localUser = realm.objects('User')[0];
      if (_.isEmpty(localUser)) {
          setTimeout(() => Actions.login(), 1000);
          return
      }
      if (localUser.user_no) {
          Actions.tab()
      }
  }
}

export default new SplashStore();