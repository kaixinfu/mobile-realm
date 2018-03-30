import React, {Component} from 'react';
import {Dimensions, AsyncStorage, PixelRatio, Platform, Alert} from 'react-native';
import {observable, computed} from 'mobx';

let {height, width} = Dimensions.get('window');

class Global {
    // 系统是iOS
    @observable iOS = (Platform.OS === 'ios');
    // 系统是安卓
    @observable Android = (Platform.OS === 'android');
    // 获取屏幕宽度
    @observable SCREEN_WIDTH = width;
    // 获取屏幕高度
    @observable SCREEN_HEIGHT = height;
    // 获取屏幕分辨率
    @observable PixelRatio = PixelRatio.get();
    // 最小线宽
    @observable pixel = 1 / PixelRatio;
    // 弹出框
    @observable Alert = Alert;

    clear() {

    }
}

export default new Global();