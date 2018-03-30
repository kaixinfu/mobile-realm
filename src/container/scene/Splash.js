'use strict';

import React, {Component} from 'react';
import {Scene} from 'react-native-router-flux';

import Splash from '../splash';

const Home = [
    <Scene key={'splash'} component={Splash} initial={false}/>
]

module.exports = Home