'use strict';

import React, {Component} from 'react';
import {Scene} from 'react-native-router-flux';

import Test from '../home/Test';

const Home = [
    <Scene key={'test'} component={Test} initial={false}/>
]

module.exports = Home