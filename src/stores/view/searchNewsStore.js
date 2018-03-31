'use strict';

import {observable, computed, action} from 'mobx';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import realm from '../../servers/realm';
import {User} from '../domain';
import {newsOptions, findSelectIndex} from '../../lib/NewsType'

class SearchNewsStore {

    @observable selectNews = [];
    @observable selectState = 0;

    @action
    init = () => {
        this.clear();
    }

    @action
    setSelectState = (text) => {
        const index = findSelectIndex(text);
        if (index !== this.selectState)
            this.selectState = index
    }

    @action
    clear = () => {
        newsOptions.forEach((option, index) => {
            if (option.id < 3) {
                this.selectNews[index] = option.name
            }
        });
        this.selectState = 0;
    }
}

export default new SearchNewsStore();