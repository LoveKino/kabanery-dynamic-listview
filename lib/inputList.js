'use strict';

let dynamicList = require('./dynamicList');

let {
    map, mergeMap
} = require('bolzano');

let {
    n
} = require('kabanery');

let plus = require('css-shapes-object/lib/plus');

let line = require('css-shapes-object/lib/line');

let Input = ({
    value = '', onchange, type = 'text', style, placeholder = ''
}) => {
    return n(`input type="${type}" placeholder="${placeholder}"`, {
        value,
        style,
        oninput: (e) => {
            onchange && onchange(e.target.value);
        }
    });
};

module.exports = ({
    value,
    defaultItem,
    title,
    itemOptions = {}, onchange = id, itemRender = Input
}) => {
    return dynamicList({
        // append or delete items happend
        onchange: () => onchange(value),

        value,

        defaultItem,

        render: ({
            appendItem, deleteItem, value
        }) => {
            return n('div', {
                style: {
                    display: 'inline-block'
                }
            }, [
                n('span', [
                    n('span', title), n('span', {
                        style: {
                            cursor: 'pointer',
                            paddingLeft: 15,
                            fontWeight: 'bold'
                        },
                        onclick: appendItem
                    }, n('div', {
                        style: {
                            display: 'inline-block'
                        }
                    }, plus({
                        width: 10,
                        height: 10,
                        bold: 3,
                        color: 'black'
                    })))
                ]),

                map(value, (item, index) => {
                    return n('fieldset', [
                        itemRender(mergeMap(
                            itemOptions, {
                                value: item,
                                onchange: (v) => {
                                    value[index] = v;
                                    onchange(value);
                                }
                            }
                        )),

                        n('span', {
                            style: {
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            },
                            onclick: () => deleteItem(item, index)
                        }, n('div', {
                            style: {
                                display: 'inline-block',
                                marginLeft: 5
                            }
                        }, [
                            line({
                                length: 10,
                                bold: 3,
                                color: 'black',
                                direction: 'horizontal'
                            })
                        ]))
                    ]);
                })
            ]);
        }
    });
};

const id = v => v;
