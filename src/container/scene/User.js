'use strict';

import React, {Component} from 'react';
import {Scene} from 'react-native-router-flux';

import Login from '../user/Login';
import Register from '../user/Register'

const User = [
    <Scene key={'login'} component={Login} initial={false}/>,
    <Scene key={'register'} component={Register}/>
];

module.exports = User