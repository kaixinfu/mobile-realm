import Realm from 'realm';

import Schema from '../../stores/schema';

const schema = new Schema();
const realm = Realm(schema.getNewSchemas());

export default realm
