'use strict';

let {
    InputList
} = require('../../../..');

let {
    mount
} = require('kabanery');

let assert = require('assert');

const TITLE = 'my_specifix bla bal';

const PLACE_HOLDER = 'ok !! !! !!';

let changed = false;

mount(InputList({
    value: ['123'],
    title: TITLE,
    onchange: (v) => {
        changed = true;
        assert.deepEqual(v, ['123', '']);
    },
    itemOptions: {
        placeholder: PLACE_HOLDER
    }
}), document.body);

document.querySelector('span[style]').click();

assert.equal(document.body.querySelectorAll('input').length, 2);
assert.equal(document.body.querySelectorAll('input')[1].placeholder, PLACE_HOLDER);

assert(changed);
