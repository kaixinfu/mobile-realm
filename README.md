## 致力于实现一款mobx管理数据+realm来存储用户信息的react-native App

## Contains

- [x] [mobx](https://mobx.js.org/)
- [x] [realm](https://realm.io)
- [x] [native-base](http://nativebase.io/docs/v0.4.6/components)
- [x] [antd-mobile](https://mobile.ant.design/components/)
- [x] [react-native](http://reactnative.cn/)
- [x] [react-native-router-flux](https://www.cnblogs.com/lemonzwt/p/8182345.html)

## Install

`git clone git@github.com:liukaixin01/mobile-realm.git`

`npm install`

## realm

- 1.跨平台,Realm 支持 iOS & OS X (Objective‑C & Swift) & Android。我们可以在这些平台上共享Realm数据库文件，并且上层逻辑可以不用任何改动的情况下实现移植。

- 2.高级,Ream支持加密，格式化查询，易于移植，支持JSON，流式api，数据变更通知等高级特性

- 3.可视化,Realm 还提供了一个轻量级的数据库查看工具Mac版Realm Browser方便查看数据,Mac app store下载即可

- 4.目前建议使用"realm": "2.2.15"以下的版本，最新版本有一点点bug


## mobx

- 1.Mobx是一个功能强大，上手非常容易的状态管理工具。就连redux的作者也曾经向大家推荐过它，在不少情况下你的确可以使用Mobx来替代掉redux


## Dev

> ios: `react-native run-ios`

> android: `react-native run-android`

## 项目目录结构
<pre>
.
├── README.md                    //项目相关简介
├── _tests_                      // 自动化测试文件
├── android                      // 项目android原生文件
├── ios                          // 项目ios原生文件
├── node_modules                 // 项目依赖
├── src                          // 项目生产目录
│   ├── components               // 项目通用组件
│   ├── container                // 组件容器
│   │    └── find                // 发现相关业务组件
│   │    └── home                // 首页相关业务组件
│   │    └── main                // 我的相关业务组件
│   │    └── scene               // 配置各个路由组件
│   │    └── user                // 用户登录、注册、注销等相关业务组件
│   │    └── Routes              // 用户登录、注册、注销等相关业务组件
│   ├── images                   // 存放图片文件
│   ├── lib                      // 公共类(校验、枚举、公用方法)
│   ├── servers                  // 本地所有状态
│   │    └── api                 // 调用接口文件
│   │    └── mobx                // 发现相关业务组件
│   │    └── react-native        // 首页相关业务组件
│   │    └── realm               // 我的相关业务组件
│   ├── stores                   // 各种页面
│   │    └── domain              // 操作各个表的方法
│   │    └── schema              // 定义各个表的结构
│   │    └── view                // 各组件数据状态
│   │    └── Global              // 全局状态
├── index.js                     // 注册项目的入口文件
├── package.json                 // 项目配置文件
</pre>