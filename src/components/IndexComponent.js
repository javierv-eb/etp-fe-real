import React, {PureComponent} from 'react';
import NavList from 'eventbrite_design_system/navList/NavList';
import {ROUTER_LINK} from 'eventbrite_design_system/navListItem/constants';

const NAV_LIST_ITEMS = [
    {
        type: ROUTER_LINK,
        path: '/stepper-1',
        content: 'State Stepper',
        iconType: 'arrow-right',
    },
    {
        type: ROUTER_LINK,
        path: '/stepper',
        content: 'Redux stepper',
        iconType: 'arrow-right',
    },
    {
        type: ROUTER_LINK,
        path: '/list',
        content: 'List with qa',
        iconType: 'arrow-right',
    },
    {
        type: ROUTER_LINK,
        path: '/list-2',
        content: 'List without qa',
        iconType: 'arrow-right',
    },
];


export default class IndexComponent extends PureComponent {
    render() {
        return (
            <NavList items={NAV_LIST_ITEMS} />
        );
    }
}
