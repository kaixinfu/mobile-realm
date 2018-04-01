import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

type Props = {};
export default class Main extends Component<Props> {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.proImage}
                       source={require('../../images/head.jpg')}/>
                <Image style={styles.proImage}
                       source={require('../../images/1.png')}/>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                />
                <Image style={styles.proImage} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    proImage: {
        width: 40,
        height: 40
    }
});
