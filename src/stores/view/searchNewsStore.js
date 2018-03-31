'use strict';

import {observable, computed, action} from 'mobx';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import realm from '../../servers/realm';
import {User} from '../domain';
import api from '../../servers/api';
import {newsOptions, findSelectIndex, findSelectUrl} from '../../lib/NewsType'

class SearchNewsStore {
    //分段器选项
    @observable selectNews = [];
    //分段器被选中索引
    @observable selectState = 0;
    //被选中索引的数据
    @observable newsInfo = [];

    @action
    init = () => {
        this.clear();
        this.fetchNews(this.selectState)
    }

    @action
    async fetchNews(id) {
        const url = findSelectUrl(id).url;
        let res = await api.searchNewsApi.fetchNews(url);
        if ("success" === res.message) {
            res.data.forEach((item, key) => {
                this.newsInfo[key] = item
            })
        }
        console.log('SearchNewsStore res ===========> ', res)
    }

    @action
    setSelectState = (text) => {
        const index = findSelectIndex(text).id;
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
        this.newsInfo = observable([])
    }
}

export default new SearchNewsStore();