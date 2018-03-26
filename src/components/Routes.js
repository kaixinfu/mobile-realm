/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { observer, inject } from 'mobx-react/native'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
@inject("loginStore")
@observer
export default class App extends Component<Props> {
    constructor() {
        super();
        this.login = this.login.bind(this);
    }
    login() {
        // this.props.loginStore.init()
        console.log('this.props.loginStore.user_name ====> ', this.props.loginStore.user_id)
        this.props.loginStore.login()
    }
    render() {
        console.log(this.login())
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
