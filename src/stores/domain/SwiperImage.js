import {observable} from 'mobx';
import realm from '../../servers/realm';
import Entity from './Entity'
import {copyProperties} from '../../lib/ComFuncs'

export default class SwiperImage extends Entity {
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