'use strict';

let InputList = require('../../lib/inputList');

document.body.appendChild(InputList({
    listData: [],
    title: 'test',
    onchange: (data) => {
        console.log(JSON.stringify(data));
    }
}));
