import BaseApi from './BaseApi';

export default class SearchNewsApi extends BaseApi {
    constructor(){
        super()
    };
    async fetchNews(url) {
        const res = await this.axios.get('?count=5&&category=' + url);
        return res
    };
}