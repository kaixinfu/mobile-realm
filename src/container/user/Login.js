/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';
import {Container, InputGroup, Input, Icon, Item, Button} from 'native-base';
import { observer, inject } from 'mobx-react/native'

import HeadImage from '../../components/HeadImage'

type Props = {};
@inject("loginStore")
@observer
export default class Login extends Component<Props> {
    componentWillMount() {
        this.props.loginStore.init();
    }
    onUserNoChange = (text) => {
        this.props.loginStore.setUserNo(text);
    }
    onUserPwdChange = (text) => {
        this.props.loginStore.setUserPwd(text)
    }
    login = () => {
        const { checkUser, login } = this.props.loginStore
        if (checkUser.flag) {
            Alert.alert('提示', checkUser.message);
            return
        }
        login()
    }
    render() {
        const {getUserNo, getUserPwd} = this.props.loginStore
        return (
            <Container style={styles.container}>
                <View style={styles.imagesStyle}>
                    <HeadImage size={100} />
                </View>
                <View style={styles.inputGroupStyle}>
                    <Item>
                        <InputGroup>
                            <Icon name="ios-person" />
                            <Input placeholder="请输入账号" value={getUserNo} onChangeText={(text) => this.onUserNoChange(text)} maxLength={6} />
                        </InputGroup>
                    </Item>
                    <Item>
                        <InputGroup>
                            <Icon name="ios-unlock" />
                            <Input placeholder="请输入密码" value={getUserPwd} onChangeText={(text) => this.onUserPwdChange(text)} secureTextEntry maxLength={6} />
                        </InputGroup>
                    </Item>
                    <Button onPress={this.login} block info style={styles.loginStyle}>
                        <Text style={styles.textStyle}>登录</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    imagesStyle: {
        flex: 2,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
    },
    inputGroupStyle: {
        flex: 3,
    },
    textStyle: {
        fontSize: 18,
        color: 'white'
    },
    loginStyle: {
        marginTop: 20
    }
});
