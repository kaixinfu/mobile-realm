'use strict';

import { observable, computed,action } from 'mobx'
import _ from 'lodash'
// import {Actions} from 'react-native-router-flux'
import realm from '../../servers/realm';
import { User } from '../domain';
import {genUUID} from '../../lib/ComFuncs';
import moment from 'moment';

class LoginStore {

  @observable user = new User();

  @action init(){
    console.log('User =====> init')
    let localUser = realm.objects('User')
    if(!_.isEmpty(localUser)) {
      this.user = {...localUser[0]};
      this.user_pwd = ''
    }
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
  @computed
  get checkUser() {
      const result = {
          flag: false,
          message: ''
      }
      if (_.isEmpty(this.user.user_no)) {
          result.flag = true;
          result.message = '用户账号为空，请填写!'
          return result
      }
      if (_.isEmpty(this.user.user_pwd)) {
          result.flag = true;
          result.message = '用户密码为空，请填写!'
          return result
      }
      return result
  }

  @action clear(){
    this.user.user_no = '';
    this.user.user_pwd = '';
  }

  @computed get userNo() {
      return this.user.user_no
  }

  @action
  login = () => {
      const user = {
          serno: genUUID(),
          user_uuid: 'du892j',
          user_type: 'common',
          user_no: this.user.user_no,
          user_name: '😊',
          user_pwd: this.user.user_pwd,
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