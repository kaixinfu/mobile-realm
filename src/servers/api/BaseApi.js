import axios from 'axios';
import {Toast} from 'antd-mobile';
import _ from 'lodash';

const baseUrl = 'http://is.snssdk.com/api/news/feed/v51/'

export default class BaseApi {
    constructor() {
        this.axios = axios.create({
            baseURL: baseUrl,
            timeout: 1000 * 60,
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'multipart/form-data',
                'Content-Type': 'application/json',
            },

        });
        this.axios.interceptors.request.use((res) => {
            console.log('request ==================> ', res)
            Toast.loading('加载中...', 0)
            return res
        }, (err) => {
            console.log(err)
        });
        this.axios.interceptors.response.use((res) => {
            console.log('response ===================> ', res)
            setTimeout(() => {
                Toast.hide();
            }, 150);
            return res.data;
        }, (err) => {
            // return Promise.reject(error);
            console.log('response err ================> ', err)
        });
    };

    /**
     * 发送GET请求
     * @param url 请求路径
     * @param timeout 超时时间（秒）
     * @param data 请求数据
     * @param success 成功回调
     * @param fail 失败回调
     * @param baseUrl 请求链接
     * @returns true: 请求成功/false: 请求失败
     */
    async get(url, data, successFunc, failFunc) {
        if (_.isEmpty(url)) {
            throw '请求地址不能为空';
        }
        // if (_.isEmpty(data)) {
        //     throw '请求参数不能为空';
        // }
        try {
            console.log('get ============> begin ')
            const res = await this.axios.get(url);
            console.log('get ============> end', res)
            successFunc ? successFunc() : () => {
            };
            return res.data
        } catch (err) {
            console.log(err)
            failFunc ? failFunc() : () => {
            }
        }
    }
}

// export default new BaseApi();