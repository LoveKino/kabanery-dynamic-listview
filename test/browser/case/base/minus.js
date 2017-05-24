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

let count = 0;

mount(InputList({
    value: ['123'],
    title: TITLE,
    onchange: (v) => {
        if (count === 0) {
            assert.deepEqual(v, ['123', '']);
            count++;
        } else if (count === 1) {
            assert.deepEqual(v, ['']);
            count++;
        }
    },
    itemOptions: {
        placeholder: PLACE_HOLDER
    }
}), document.body);

document.querySelectorAll('span[style]')[0].click();
assert.equal(document.querySelectorAll('input').length, 2);

document.querySelectorAll('span[style]')[1].click();

assert.equal(document.querySelectorAll('input').length, 1);

assert(count, 2);
