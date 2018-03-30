import {observable, action} from 'mobx';

import {genUUID} from '../../lib/ComFuncs';
import moment from 'moment'

/**
 * 实体基类
 */
export default class Entity {
  @observable serno = '';
  //创建日期
  @observable crt_date = '';
  //修改日期
  @observable mdf_date = '';
  //创建人
  @observable crt_user = '';
  //修改人
  @observable mdf_user = '';

  constructor(){
    this.serno = genUUID()
    this.crt_date = moment().format("YYYY-MM-DD HH:mm:ss")
    this.mdf_date = moment().format("YYYY-MM-DD HH:mm:ss")
  }
}
