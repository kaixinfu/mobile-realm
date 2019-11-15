import {observable} from 'mobx';
import realm from '../../servers/realm';
import Base from './Base'
import {copyProperties} from '../../lib/ComFuncs'

export default class SwiperImage extends Base {
    @observable id = '';
    // 图片地址
    @observable url = '';

    constructor() {
        super();
    }

    static create(SwiperImage) {
        realm.create('SwiperImage', realm.cascadingCopy(SwiperImage), true);
    }
}
