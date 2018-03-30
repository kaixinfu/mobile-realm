/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ReactApp from './src/servers/react-native'

export default class App extends Component<Props> {
    render() {
        return (
            <ReactApp/>
        );
    }
}
