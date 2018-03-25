const UserSchema = {
    name: 'User',
    primaryKey: 'pk_uuid',
    properties: {
        pk_uuid:'string',
        user_no:'string',
        user_name:'string',
        user_pwd:'string',
        phone_number:'string',

        serno: 'string',
        //创建日期
        crt_date: 'string',
    }
}

export default UserSchema