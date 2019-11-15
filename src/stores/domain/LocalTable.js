import Base from './Base';
import {observable} from 'mobx';
import moment from 'moment';
import realm from '../../servers/realm';
import swiperImages from '../../../data/swiper-images.json';
import global from '../Global'
import _ from 'lodash'

export default class LocalTable extends Base {

    static create(localTable) {
        localTable.crt_date = moment().format("YYYY/MM/DD HH:mm:ss");
        realm.create('LocalTable', realm.cascadingCopy(localTable), true)
    }

    static update(localTable) {
        localTable.mdf_date = moment().format("YYYY/MM/DD HH:mm:ss");
        realm.create('LocalTable', localTable, true)
    }

    static findByName(localTableName) {
        realm.objectForPrimaryKey('LocalTable', localTableName)
    }

    static syncLocalTables() {
        const localTables = [{SwiperImage: swiperImages}];
        debugger;
        console.log('debugger...........')
        realm.write(() => {
            localTables.forEach(localTable => {
                const localTableName = Object.keys(localTable)[0];
                const localTableData = localTable[localTableName];
                this.createLocalTbale(localTableName, localTableData)
                console.log('localTable ====> ', localTable)
                realm.create()
            })
        })
    }

    static createLocalTbale(localTableName, localTbaledata) {
        //根据表名字从LocalTable查到表
        let findLocalTable = this.findByName(localTableName);
        //如果表存在并且表的version相同则不作任何操作
        if (!_.isEmpty(findLocalTable) && findLocalTable.version === localTbaledata.version) {
            return
        }
        //找到这张表先删掉
        const localTable = realm.objects(localTableName);
        realm.delete(localTable);
        localTbaledata.data.forEach(tabaleData => {
            realm.create(localTableName, {...tabaleData})
        });
        //新建这张表
        findLocalTable = new LocalTable();
        findLocalTable.table_no = localTableName;
        findLocalTable.version = localTbaledata.version;
        this.create(findLocalTable)
    }
}
