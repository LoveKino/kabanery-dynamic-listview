'use strict';

let {
    findIndex, mergeMap
} = require('bolzano');

let {
    view
} = require('kabanery');

let {
    isFunction
} = require('basetype');

/**
 * dynamic list,
 *   (1) add item
 *   (2) delete item
 *   (3) show list
 *   (4) maintain list data
 *
 * @param render function
 *  render dom by listData
 */
module.exports = view(({
    listData,
    defaultItem,
    render,
    onchangeList = id,
}, {
    update
}) => {
    let appendItem = () => {
        let value = defaultItem;
        if (isFunction(defaultItem)) {
            value = defaultItem();
        } else {
            value = mergeMap(defaultItem);
        }
        listData.push(value);
        onchangeList(value, 'append', listData);
        // update view
        update();
    };

    let deleteItem = (item) => {
        let index = findIndex(listData, item);
        if (index !== -1) {
            listData.splice(index, 1);
            // update view
            onchangeList(item, index, 'delete', listData);
            update();
        }
    };

    return render({
        listData,
        appendItem,
        deleteItem
    });
});

const id = v => v;
