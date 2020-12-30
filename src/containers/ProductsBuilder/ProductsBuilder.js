import React from 'react';
import './ProductsBuilder.scss';
import Burger from "../../components/MyBurger/Burger/Burger";

const ProductsBuilder = (props) => {
    return (
        <div className="products-grid-container hide-scroll">
            <Burger/>
            <Burger/>
            <Burger/>
            <Burger/>
            <Burger/>
            <Burger/>
            <Burger/>
            <Burger/>
        </div>
    )
};

export default ProductsBuilder;