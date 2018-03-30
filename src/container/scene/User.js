'use strict';

import React, { Component } from 'react';
import { Scene } from 'react-native-router-flux';

import Login from '../user/Login'
import Test from '../home/Test'

const User = [
    <Scene key={'login'} component={Login} initial={false} />,
    <Scene key={'test1'} component={Test} />
];

module.exports = User