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

module.exports = ({
    listData,
    defaultItem,
    title
}) => {
    return dynamicList({
        listData,
        defaultItem,
        render: ({
            appendItem, deleteItem, listData
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

                map(listData, (item) => {
                    return n('fieldset', [
                        n('input type="text"', mergeMap({
                            onkeyup: (e) => {
                                item.value = e.target.value;
                            }
                        }, item)),

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
                        },[
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
