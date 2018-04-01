import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {SegmentedControl, WingBlank, WhiteSpace,Result} from 'antd-mobile';
import {Container, InputGroup, Input, Icon, Item, Button} from 'native-base';

type Props = {};
export default class Main extends Component<Props> {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <Result
                    img={<Image style={styles.imageStyle}
                                source={require('../../images/head.jpg')}/>}
                    title="26岁"
                    message={<View><Text>北京成为科技</Text></View>}
                />
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
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 25
    }
});
