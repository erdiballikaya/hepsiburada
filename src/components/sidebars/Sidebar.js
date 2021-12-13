import React, { Component } from 'react';
import Tags from '../sidebars/Tags'
import Order from '../sidebars/Order'
import Brands from '../sidebars/Brands'

export default class Sidebar extends Component {
    render() {
        return (

                <ul className="Sidebar">
                    <li>
                        <Tags />
                    </li>
                    <li>
                        <Order />
                    </li>
                    <li>
                        <Brands />
                    </li>
                </ul>
        )
    }
}
