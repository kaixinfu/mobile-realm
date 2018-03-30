/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';
import {Container, InputGroup, Input, Icon, Item, Button} from 'native-base';
import {observer, inject} from 'mobx-react/native'

import HeadImage from '../../components/HeadImage'

type Props = {};
@inject("registerStore")
@observer
export default class Register extends Component<Props> {

    componentDidMount() {
        this.props.registerStore.init()
    }

    onUserNoChange = (text) => {
        this.props.registerStore.setUserNo(text);
    }
    onUserPwdChange = (text) => {
        this.props.registerStore.setUserPwd(text)
    }
    onUserNameChange = (text) => {
        this.props.registerStore.setUserName(text);
    }
    onUserAgeChange = (text) => {
        this.props.registerStore.setUserAge(text)
    }
    onUserPhoneChange = (text) => {
        this.props.registerStore.setUserPhone(text)
    }
    register = () => {
        const {checkUser, register} = this.props.registerStore;
        if (checkUser.flag) {
            Alert.alert('提示', checkUser.message);
            return
        }
        ;
        register()
    }

    render() {
        const {getUserNo, getUserPwd, getUserName, getUserAge, getUserPhone} = this.props.registerStore
        return (
            <Container style={styles.container}>
                <View style={styles.imagesStyle}>
                    <HeadImage size={100}/>
                </View>
                <View style={styles.inputGroupStyle}>
                    <Item>
                        <InputGroup>
                            <Icon name="ios-person"/>
                            <Input placeholder="请输入账号" value={getUserNo}
                                   onChangeText={(text) => this.onUserNoChange(text)} maxLength={6}/>
                        </InputGroup>
                    </Item>
                    <Item>
                        <InputGroup>
                            <Icon name="ios-unlock"/>
                            <Input placeholder="请输入密码" value={getUserPwd}
                                   onChangeText={(text) => this.onUserPwdChange(text)} secureTextEntry maxLength={6}/>
                        </InputGroup>
                    </Item>
                    <Item>
                        <InputGroup>
                            <Icon name="md-person-add"/>
                            <Input placeholder="请输入姓名" value={getUserName}
                                   onChangeText={(text) => this.onUserNameChange(text)} maxLength={6}/>
                        </InputGroup>
                    </Item>
                    <Item>
                        <InputGroup>
                            <Icon name="ios-mail-open-outline"/>
                            <Input placeholder="请输入年龄" value={getUserAge}
                                   onChangeText={(text) => this.onUserAgeChange(text)} maxLength={3}/>
                        </InputGroup>
                    </Item>
                    <Item>
                        <InputGroup>
                            <Icon name="ios-phone-portrait"/>
                            <Input placeholder="请输入手机号码" value={getUserPhone}
                                   onChangeText={(text) => this.onUserPhoneChange(text)} maxLength={11}/>
                        </InputGroup>
                    </Item>
                    <Button onPress={this.register} block info style={styles.loginStyle}>
                        <Text style={styles.textStyle}>注册</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    imagesStyle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
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
