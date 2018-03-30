import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Container, InputGroup, Input, Icon, Item, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';

type Props = {};
export default class Test extends Component<Props> {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={() => Actions.pop()}>
                    <Text>test</Text>
                </Button>
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
