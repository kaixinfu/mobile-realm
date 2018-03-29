import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

type Props = {};
export default class Find extends Component<Props> {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>发现</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
    }
});
