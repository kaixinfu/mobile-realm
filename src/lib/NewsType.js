'use strict';

const newsOptions = [
    {
        name: '娱乐',
        url: 'news_entertainment',
        id: 0
    },
    {
        name: '体育',
        url: 'news_sport',
        id: 1
    },
    {
        name: '军事',
        url: 'news_military',
        id: 2
    },
    {
        name: '社会',
        url: 'news_society',
        id: 3
    },
    {
        name: '科技',
        url: 'news_tech',
        id: 4
    },
];

const findSelectIndex = (type) => {
    for (let option of newsOptions) {
        if (option.name === type) {
            return option;
            break
        }
    }
}
const findSelectUrl = (id) => {
    for (let option of newsOptions) {
        if (option.id === id) {
            return option;
            break
        }
    }
}

module.exports = {
    newsOptions,
    findSelectIndex,
    findSelectUrl
};
