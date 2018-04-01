import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Container, InputGroup, Input, Icon, Item, Button} from 'native-base';
import {observer, inject} from 'mobx-react/native';
import {Actions} from 'react-native-router-flux';

type Props = {};
// @inject("routerActions")
@observer
export default class Home extends Component<Props> {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<Button onPress={() => Actions.test()}>*/}
                    <Text>home</Text>
                {/*</Button>*/}
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
