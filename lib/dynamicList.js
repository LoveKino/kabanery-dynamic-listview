'use strict';

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
 *  render dom by value
 */
module.exports = view(({
    value,
    defaultItem = '', render, onchange = id,
}, {
    update
}) => {
    let appendItem = () => {
        let item = defaultItem;
        if (isFunction(defaultItem)) {
            item = defaultItem();
        } else {
            item = JSON.parse(JSON.stringify(defaultItem));
        }
        value.push(item);
        onchange({
            value, type: 'append', item
        });
        // update view
        update();
    };

    let deleteItem = (item, index) => {
        if (index !== -1) {
            value.splice(index, 1);
            // update view
            onchange({
                item, index, type: 'delete', value
            });
            update();
        }
    };

    return render({
        value,
        appendItem,
        deleteItem
    });
});

const id = v => v;
