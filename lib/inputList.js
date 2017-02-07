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
    value = '', onchange, type, style, placehoder = ''
}) => {
    return n(`input type="${type}" placehoder="${placehoder}"`, {
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
    onchange = id, itemRender = Input
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

                map(value, (item) => {
                    return n('fieldset', [
                        itemRender(mergeMap(item, {
                            onchange: (v) => {
                                item.value = v;
                                onchange(value);
                            }
                        })),

                        n('span', {
                            style: {
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            },
                            onclick: () => deleteItem(item)
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
