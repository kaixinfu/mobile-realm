import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Container, InputGroup, Input, Icon, Item, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {inject, observer} from 'mobx-react/native';

type Props = {};
@inject("splashStore")
@observer
export default class Splash extends Component<Props> {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.splashStore.init();
        this.props.splashStore.checkLogin();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>hello</Text>
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
    }
});
