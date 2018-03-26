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

    static findByPk(pk) {
        let loadedUser = realm.objectForPrimaryKey('User', pk);
        return observable({...loadedUser})
    }

    static findByUserNo(userNo) {
        let loadedUser = realm.objects('User').filtered('user_no = $0', userNo)[0];
        if(_.isEmpty(loadedUser)){
            return {}
        }
        return {...loadedUser}
    }

    static deleteAll(){
        let loadedUsers = realm.objects('User')
        realm.delete(loadedUsers)
    }

    static async initUserSession() {
        if(Env.isMobileAgent){
            return this._initLifeSession()
        }
        return this._initGroupSession()
    }

    static async _initLifeSession(){
        //1从数据库里查出User
        //2通过下载当前User的agent数据判断token是否有效
        let loadedUser = realm.objects('User')[0];
        if (_.isEmpty(loadedUser)) {
            //无用户信息直接返回
            return
        }
        if( _.isEmpty(loadedUser.session_token)){
            //无token信息直接返回
            return
        }
        //以下通过同步一张简单表数据来校验token是否有效
        let loadedAgent = realm.objectForPrimaryKey('Agent', loadedUser.user_no);
        let loadedSalesInfo = realm.objectForPrimaryKey('SalesInfo', loadedUser.user_no);
        global.setUserSession(loadedUser,loadedAgent,loadedSalesInfo)
        let response = await api.syncData.syncOneTable('ws_smis_t_agent', loadedUser.pk_uuid);
        if(_.isEmpty(response)){
            global.clear()
            return
        }
        let data = response.data;
        if (_.isEmpty(data)||'success' !== data.flag) {
            global.clear()
            return
        }
    }

    static async _initGroupSession(){

        //1从数据库里查出User
        //2通过下载当前User的agent数据判断token是否有效
        let loadedUser = realm.objects('User')[0];
        if (_.isEmpty(loadedUser)) {
            //无用户信息直接返回
            return
        }
        if( _.isEmpty(loadedUser.session_token)){
            //无token信息直接返回
            return
        }
    }


}