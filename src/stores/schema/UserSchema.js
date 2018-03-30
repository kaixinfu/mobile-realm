const UserSchema = {
    name: 'User',
    primaryKey: 'user_uuid',
    properties: {
        user_uuid: 'string',
        user_type: 'string',
        user_no: 'string',
        user_name: 'string',
        user_pwd: 'string',
        phone_number: 'string',

        serno: 'string',
        //创建日期
        crt_date: 'string',
    }
}

export default UserSchema