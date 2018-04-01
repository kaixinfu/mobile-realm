import React, {Component} from 'react';
import {
    Scene,
    Actions,
    ActionConst,
    Stack,
    Tabs,
} from 'react-native-router-flux';
import {Container, InputGroup, Input, Icon, Item, Button} from 'native-base';

import Home from '../home';
import Find from '../find';
import Main from '../main';

import TabIcon from '../../components/TabBarIcon'

const TabBar = (
    <Tabs
        key={'tab'}//唯一标识
        wrap={true}//自动使用自己的导航栏包装每个场景（如果不是另一个容器）
        activeBackgroundColor={'#f0f8ff'}//指定焦点的选项卡的选中背景颜色。
        inactiveBackgroundColor={'white'}//指定非焦点的选项卡的未选中背景颜色。
        activeTintColor={'#4ECBFC'}//指定标签栏图标的选中色调颜色。
        inactiveTintColor={'#999999'}//指定标签栏图标的未选中色调颜色。
        labelStyle={{
            height: 40,
            fontSize: 15,
        }}//设置tabbar上文字的样式。
        lazy={true}//在选项卡处于活动状态之前，不会渲染选项卡场景(推荐设置成true)
        tabBarPosition={'bottom'}//指定标签栏位置。iOS上默认为bottom，安卓上是top。
        tabStyle={{
            justifyContent: 'center',
            alignItems: 'center',
        }}//单个选项卡的样式
        // swipeEnabled={false}//是否可以滑动选项卡
        headerMode='screen'// 页面切换方式
        showLabel={false}//是否显示标签栏名字
        showIcon={true}//是否显示图标
        initial={false}
    >
        <Scene
            title={'首页'}//要显示在导航栏中心的文本
            key={'home'}//将用于标识页面，例如Actions.name(params)。必须是独一无二的
            component={Home}//要显示的组件，定义嵌套时不需要Scene
            hideNavBar//隐藏导航栏
            initial//设置为true后，会默认显示该页面
            icon={TabIcon}
        />
        <Scene
            title={'发现'}
            key={'find'}
            component={Find}
            hideNavBar
            icon={TabIcon}
        />
        <Scene
            title={'我的'}
            key={'main'}
            component={Main}
            hideNavBar
            icon={TabIcon}
        />
    </Tabs>
);

module.exports = TabBar
