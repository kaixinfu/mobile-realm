'use strict';

const newsOptions = [
    {
        name: '娱乐',
        id: 0
    },
    {
        name: '体育',
        id: 1
    },
    {
        name: '军事',
        id: 2
    },
    {
        name: '社会',
        id: 3
    },
    {
        name: '科技',
        id: 4
    },
];

const findSelectIndex = (type) => {
    for (let option of newsOptions) {
        if (option.name === type) {
            return option.id;
            break
        }
    }
}

module.exports = {
    newsOptions,
    findSelectIndex
};
