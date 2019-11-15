const PartySchema = {
    name: 'Person',
    primaryKey: 'person_uuid',
    properties: {
        person_uuid: 'string',
        person_type: 'string',
        name: 'string',
        sex: 'string',
        birthdate: 'string',

        serno: 'string',
        //创建日期
        crt_date: 'string',

        //地址信息列表
        // personAddresses: {type: 'list', objectType: 'PersonAddress', optional: false},
    }
}

export default PartySchema
