'use strict';
import React, { Component } from 'react';
import {
    Platform,
} from 'react-native';
import Realm from 'realm';
// import DeviceInfo from 'react-native-device-info'

import _ from 'lodash';

import * as storeSchema from '../../stores/schema';

const schema = _.values(storeSchema.default)

const schemas = [
    {schema: schema, schemaVersion: 1, migration: (oldRealm, newRealm) => {
            // only apply this change if upgrading to schemaVersion 1
            if (oldRealm.schemaVersion < 1) {
                let oldObjects = oldRealm.objects('Patry');
                let newObjects = newRealm.objects('Patry');

                // loop through all objects and set the name property in the new schema
                for (let i = 0; i < oldObjects.length; i++) {
                    newObjects[i].feature = oldObjects[i].feature.toString()
                }
            }
        }},
]

function configSchema() {
    console.log('configSchema ======> ')
// && DeviceInfo.isEmulator()
    if (__DEV__ && Platform.OS === 'ios') {
        Realm.defaultPath = '/Users/Shared/data/data.realm'
    }
    console.log('==tl Realm.defaultPath', Realm.defaultPath);
    var next = Realm.schemaVersion(Realm.defaultPath);
    if (next > 0) {
        while (next < schemas.length) {
            const migratedSchema = schemas[next++];
            const migratedRealm = new Realm(migratedSchema);
            migratedRealm.close();
        }
    }
    const getNewSchemas = schemas[schemas.length - 1];
    const realm = new Realm(getNewSchemas);
    // realm.close();
}

module.exports = configSchema