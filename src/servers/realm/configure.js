import Realm from 'realm';
import DeviceInfo from 'react-native-device-info'

import Schema from '../../stores/schema'

function configSchema() {
    const schema = new Schema();
    if (__DEV__ && Platform.OS === 'ios' && DeviceInfo.isEmulator()) {
        Realm.defaultPath = '/Users/Shared/realm-data/data.realm'
    }
    console.log('==tl Realm.defaultPath', Realm.defaultPath);
    var next = Realm.schemaVersion(Realm.defaultPath);
    if (next > 0) {
        while (next < schema.schemas.length) {
            const migratedSchema = schema.schemas[next++];
            const migratedRealm = new Realm(migratedSchema);
            migratedRealm.close();
        }
    }
    const getNewSchemas = schema.getNewSchemas();
    const realm = new Realm(getNewSchemas);
    realm.close();
}

module.exports = configSchema