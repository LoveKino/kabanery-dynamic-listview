'use strict';

let InputList = require('../../lib/inputList');

let {
    n
} = require('kabanery');

document.body.appendChild(InputList({
    value: [{
        value: '123'
    }],
    title: 'test',
    onchange: (data) => {
        console.log(JSON.stringify(data)); // eslint-disable-line
    }
}));

document.body.appendChild(n('br'));

document.body.appendChild(InputList({
    value: [{
        value: [{
            value: '1234567'
        }]
    }],
    title: 'test',
    onchange: (data) => {
        console.log(JSON.stringify(data)); // eslint-disable-line
    },
    defaultItem: {
        value: [{
            value: '10'
        }]
    },

    itemRender: InputList
}));
