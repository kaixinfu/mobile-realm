'use strict';

import { observable, computed,action } from 'mobx'
import _ from 'lodash'
// import {Actions} from 'react-native-router-flux'
import realm from '../../servers/realm';
import { User } from '../domian';
import {genUUID} from '../../lib/ComFuncs';
import moment from 'moment';

class LoginStore {

  @observable user = new User();
  @observable user_id = '1'

  @action init(){
    console.log('init')
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

  @action login() {

      const user = {
          serno: genUUID(),
          pk_uuid: 'du892j',
          user_no: 'admin',
          user_name: 'kaixin',
          user_pwd: '123',
          phone_number: '137217223456',
          crt_date: moment().format("YYYY/MM/DD HH:mm:ss")
      }

      //持久化到本地数据库
      realm.write(()=>{
          //删除已登录的用户,只保留最后一次的用户,避免在同一设备上存在多个不同用户后无法自动登录
          User.deleteAll()
          User.create(user)
      })
  }
}

export default new LoginStore();