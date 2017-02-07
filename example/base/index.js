'use strict';

let InputList = require('../../lib/inputList');

let {
    n
} = require('kabanery');

let {
    mergeMap
} = require('bolzano');

document.body.appendChild(InputList({
    value: ['123'],
    title: 'test',
    onchange: (data) => {
        console.log(JSON.stringify(data)); // eslint-disable-line
    },
    itemOptions: {
        placeholder: 'test'
    }
}));

document.body.appendChild(n('br'));

document.body.appendChild(InputList({
    value: [
        [
            '1234567'
        ]
    ],
    title: 'test',
    onchange: (data) => {
        console.log(JSON.stringify(data)); // eslint-disable-line
    },
    defaultItem: [''],
    itemRender: (opts = {}) => InputList(mergeMap(opts, {
        itemOptions: {
            placeholder: 'haha!'
        }
    }))
}));
