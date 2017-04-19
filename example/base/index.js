'use strict';

let InputList = require('../../lib/inputList');

let {
    n, mount
} = require('kabanery');

let {
    mergeMap
} = require('bolzano');

mount(InputList({
    value: ['123'],
    title: 'test',
    onchange: (data) => {
        console.log(JSON.stringify(data)); // eslint-disable-line
    },
    itemOptions: {
        placeholder: 'test'
    }
}), document.body);

mount(n('br'), document.body);

mount(InputList({
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
}), document.body);
