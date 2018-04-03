const LocalTbaleSchema = {
    name: 'LocalTable',
    primaryKey: 'table_no',
    properties: {
        serno: 'string',
        //表名称
        table_no: 'string',
        //版本号
        version: 'string',
        //创建日期
        crt_date: 'string',
        //修改日期
        mdf_date: 'string',
    }
}

export default LocalTbaleSchema