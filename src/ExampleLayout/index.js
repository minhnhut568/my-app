//Go rcc tao component duoi dang class ES7
//Go rfc tao component duoi dang class ES7

import React, { Component } from 'react'
import Header from "./Header";
import Carousel from "./Carousel";
import ProductList from './ProductList';


export default class ExampleLayout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Carousel></Carousel>
                <ProductList>
                    
                </ProductList>
            </div>
        )
    }
}
