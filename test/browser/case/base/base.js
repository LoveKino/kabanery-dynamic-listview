'use strict';

let {
    InputList
} = require('../../../..');

let {
    mount
} = require('kabanery');

let assert = require('assert');

const TITLE = 'my_specifix bla bal';

mount(InputList({
    value: ['123'],
    title: TITLE,
    onchange: (data) => {
        console.log(JSON.stringify(data)); // eslint-disable-line
    },
    itemOptions: {
        placeholder: 'test'
    }
}), document.body);

assert(document.body.textContent.trim().indexOf(TITLE) !== -1);
assert(document.querySelectorAll('input').length === 1);
assert(document.querySelector('input').value, '123');
