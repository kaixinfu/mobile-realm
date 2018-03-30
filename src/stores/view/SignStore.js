'use strict';

import { observable, computed,action } from 'mobx'
import _ from 'lodash'
// import {Actions} from 'react-native-router-flux'
import realm from '../../servers/realm';
import { User } from '../domain';
import {genUUID} from '../../lib/ComFuncs';
import moment from 'moment';

class SignStore {

  @observable user = new User();

  @action init(){
    let loadedUsers = realm.objects('User')
    if(!_.isEmpty(loadedUsers)&&loadedUsers[0].remember_me==='Y'){
      this.user = {...loadedUsers[0]}
      this.user.user_pwd = ''
    }
  }

  @action reset(){
    this.user.user_no = '';
    this.user.user_pwd = '';
  }

  @computed get userNo() {
      return this.user.user_no
  }

  @action async login() {

      const user = {
          pk_uuid: 'du892j',
          user_no: 'admin',
          user_name: '123',
          user_pwd: '123',
          phone_number: '137217223456',
      }

      //持久化到本地数据库
      realm.write(()=>{
          //删除已登录的用户,只保留最后一次的用户,避免在同一设备上存在多个不同用户后无法自动登录
          User.deleteAll()
          User.create(user)
      })
  }
}

export let signStore = new SignStore();