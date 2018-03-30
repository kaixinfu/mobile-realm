'use strict';

import uuid from 'uuid/v4'

const copyProperties = (targe, src) => {
    Object.keys(targe).forEach((key) => {
        let value = src[key];
        if (_.isUndefined(value)) {  // 不可加上isEmpty判断
            value = ''
        }
        targe[key] = value
    })
};

const genUUID = () => {
    let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
        "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
        "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z"]
    let longUUID = uuid().split('-').join('');
    let res = ''
    for (let i = 0; i < 8; i++) {
        let str = longUUID.substring(i * 4, i * 4 + 4);
        let x = parseInt(str, 16)
        res += (chars[x % 0x3E]);
    }
    return res
};

//汉字正则
const chineseCharacterPattern = /[\u4E00-\u9FA5\u3400-\u4DB5\u9FB4-\u9FBB\u2E81\u2E84\u2E88\u2E8B\u2E8C\u2E97\u2EA7\u2EAA\u2EAE\u2EB3\u2EB6\u2EB7\u2EBB\u2ECA\uF92C\uF979\uF995\uF9E7\uF9F1\uFA0C\uFA0D\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA18\uFA1F\uFA20\uFA21\uFA23\uFA24\uFA27\uFA28\uFA29]/g
const leadingChineseCharacterPattern = /^[\u4E00-\u9FA5\u3400-\u4DB5\u9FB4-\u9FBB\u2E81\u2E84\u2E88\u2E8B\u2E8C\u2E97\u2EA7\u2EAA\u2EAE\u2EB3\u2EB6\u2EB7\u2EBB\u2ECA\uF92C\uF979\uF995\uF9E7\uF9F1\uFA0C\uFA0D\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA18\uFA1F\uFA20\uFA21\uFA23\uFA24\uFA27\uFA28\uFA29]/g
//名字正则
const namePattern = /^(([\u4E00-\u9FA5\u3400-\u4DB5\u9FB4-\u9FBB\u2E81\u2E84\u2E88\u2E8B\u2E8C\u2E97\u2EA7\u2EAA\u2EAE\u2EB3\u2EB6\u2EB7\u2EBB\u2ECA\uF92C\uF979\uF995\uF9E7\uF9F1\uFA0C\uFA0D\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA18\uFA1F\uFA20\uFA21\uFA23\uFA24\uFA27\uFA28\uFA29])|([a-zA-Z])|([\u4E00-\u9FA5\u3400-\u4DB5\u9FB4-\u9FBB\u2E81\u2E84\u2E88\u2E8B\u2E8C\u2E97\u2EA7\u2EAA\u2EAE\u2EB3\u2EB6\u2EB7\u2EBB\u2ECA\uF92C\uF979\uF995\uF9E7\uF9F1\uFA0C\uFA0D\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA18\uFA1F\uFA20\uFA21\uFA23\uFA24\uFA27\uFA28\uFA29]·[\u4E00-\u9FA5\u3400-\u4DB5\u9FB4-\u9FBB\u2E81\u2E84\u2E88\u2E8B\u2E8C\u2E97\u2EA7\u2EAA\u2EAE\u2EB3\u2EB6\u2EB7\u2EBB\u2ECA\uF92C\uF979\uF995\uF9E7\uF9F1\uFA0C\uFA0D\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA18\uFA1F\uFA20\uFA21\uFA23\uFA24\uFA27\uFA28\uFA29])|([a-zA-Z]·[a-zA-Z])){1,64}$/g
//qq正则
const qqPattern = /^[1-9][0-9]{3,13}$/;
//微信号正则
const weicharPattern = /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;
//邮箱正则
const emailPattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
//手机号正则
const phonePattern = /^[1][3,4,5,7,8][0-9]{9}$/;

module.exports = {
    genUUID,
    copyProperties,
    chineseCharacterPattern,
    leadingChineseCharacterPattern,
    namePattern,
    qqPattern,
    weicharPattern,
    emailPattern,
    phonePattern
};
