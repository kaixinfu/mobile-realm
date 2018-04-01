'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import {Icon, InputGroup, Item} from 'native-base';
import {inject, observer} from 'mobx-react/native'

@observer
export default class TabIcon extends Component {

    getIcon = (title) => {
        switch (title) {
            case '首页':
                return 'ios-home';
                break;
            case '发现':
                return 'ios-list-box';
                break;
            case '我的':
                return 'ios-contact';
                break;
        }
    }

    render() {
        const {focused, title} = this.props
        return (
            <View style={styles.container}>
                <Icon style={[styles.textStyle, focused && {color: 'red'}]} name={this.getIcon(title)}/>
                <Text style={[styles.textStyle, focused && {color: 'red'}]}>
                    {title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {},
    textStyle: {
        color: '#333'
    }
});
