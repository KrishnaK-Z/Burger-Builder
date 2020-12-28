import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './Burger.scss';
import BurgerProdSampleImg from '../../../assets/img/burger-product.jpg';

const Burger = (props) => {
    return (
        <div className="product-wrapper">
            <div className="product-img-wrapper flex-center-item">
                <div className="product-img-container">
                    <img src={BurgerProdSampleImg}/>
                </div>
            </div>
            <div className="product-detail">
                <h3 className="detail-title">
                    Grilled Veggie
                </h3>
                <p className="detail-content">
                    Vegetable special menu for vegetarians. Optionally, peppers, tomatoes, carrots and onions can be added.
                </p>
                <div className="prep-price">
                    <div className="prep">
                        <FontAwesomeIcon icon={faClock} />
                        <span>20 min.</span>
                    </div>
                    <div className="price">
                        $7.99
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Burger;