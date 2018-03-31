import BaseApi from './BaseApi';

export default class SearchNewsApi extends BaseApi {
    constructor(){
        super()
    };
    async fetchNews(url) {
        const res = await this.axios.get('?category=' + url);
        console.log('SearchNewsApi', res)
        return res
    };
}