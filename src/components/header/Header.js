import React, { Component } from 'react';
import SearchBox from '../searchbox/SearchBox';
import Cart from '../cart/Cart';
import Brand from '../brand/Brand';
import ProductsInCard from '../cart/ProductsInCard';



export default class Header extends Component {
    render() {
        return (
            <div className="headerTableArea">
                <div className="brand">
                    <Brand />
                </div>
                <div className="search">
                    <SearchBox />
                </div>

                <div className='cartButton'>
                    <Cart />
                    <ProductsInCard/>
                </div>

            </div>

        )
    }
}
