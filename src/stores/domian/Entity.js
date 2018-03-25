import {observable, action} from 'mobx';

import {genUUID} from '../../lib/ComFuncs';
import moment from 'moment'

/**
 * 实体基类
 */
export default class Entity {
  @observable serno = '';
  //创建日期
  @observable crt_date = ''; // 05.创建日期
  //修改日期
  @observable mdf_date = ''; // 06.修改日期
  //创建操作员
  @observable crt_user = ''; // 07.创建操作员
  //修改操作员
  @observable mdf_user = ''; // 08.修改

  constructor(){
    this.serno = genUUID()
    this.crt_date = moment().format("YYYY-MM-DD HH:mm:ss")
    this.mdf_date = moment().format("YYYY-MM-DD HH:mm:ss")
  }
}
