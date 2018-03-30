/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

type Props = {};
export default class HeadImage extends Component<Props> {

    render() {
        const {
            url,
            size
        } = this.props
        const _size = size ? size : 80;
        return (
            <View style={styles.container}>
                {
                    !!!url ?
                        <Image
                            style={{width: _size, height: _size, borderRadius: _size / 2}}
                            source={require('../images/head.jpg')}/> :
                        <Image
                            style={{width: _size, height: _size, borderRadius: _size / 2}}
                            source={{uri: url}}/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width: 80,
        height: 80
    }
});
