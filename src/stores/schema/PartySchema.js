const PatySchema = {
    name: 'Party',
    primaryKey: 'party_uuid',
    properties: {
        policy_uuid: 'string',
        party_uuid: 'string',
        party_type: 'string',
        name: 'string',
        sex: 'string',
        birthdate: 'string',

        serno: 'string',
        //创建日期
        crt_date: 'string',

        //地址信息列表
        // partyAddresses: {type: 'list', objectType: 'PartyAddress', optional: false},
    }
}

// export default PatySchema
module.exports = {
    schema: [PatySchema],
    schemaVersion: 1,
    migration: () => {}
};