'use strict';

import {observable, computed, action} from 'mobx';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import api from '../../servers/api';
import {newsOptions, findSelectIndex, findSelectUrl} from '../../lib/NewsType'

class SearchNewsStore {
    //分段器选项
    @observable selectNews = [];
    //分段器被选中索引
    @observable selectState = 0;
    //左边列表的数据
    @observable leftNewsInfo = [];
    //中间列表的数据
    @observable middleNewsInfo = [];
    //右边列表的数据
    @observable rightNewsInfo = [];
    //是否正在加载
    @observable refreshing = false;

    @action
    init = (type) => {
        this.clear();
        this.fetchNews(type)
    }

    @action
    async fetchNews(type) {
        const url = findSelectUrl(this.selectState).url;
        if ('init' === type && !_.isEmpty(this.newsInfo)) return;
        let res = await api.searchNewsApi.fetchNews(url);
        if ("success" === res.message) {
            if ('init' === type) {
                res.data.forEach((item, key) => {
                    this.newsInfo[key] = JSON.parse(item.content);
                })
            } else if ('top' === type) {
                this.refreshing = false;
                this.newsInfo.unshift(...res.data.map(item => JSON.parse(item.content)));
            } else if ('end' === type) {
                this.newsInfo.push(...res.data.map(item => JSON.parse(item.content)));
            }
        }
    }

    @computed
    get newsInfo() {
        if (this.selectState === 0) {
            return this.leftNewsInfo
        }
        if (this.selectState === 1) {
            return this.middleNewsInfo
        }
        if (this.selectState === 2) {
            return this.rightNewsInfo
        }
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
        this.leftNewsInfo = observable([]);
        this.middleNewsInfo = observable([]);
        this.rightNewsInfo = observable([])
    }
}

export default new SearchNewsStore();