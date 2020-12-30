import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary";
import './OrderSummaryIng.scss';

import Tomato from '../../../assets/img/Burger/tomato.png';
import Salad from '../../../assets/img/Burger/salad.png';
import Onion from '../../../assets/img/Burger/onion.png';
import Cucumber from '../../../assets/img/Burger/cucumber.png';
import Cheese from '../../../assets/img/Burger/cheese.png';
import Meat from '../../../assets/img/Burger/meat.png';

const ings = [
    { label: "Salad", type: 'salad', img: Salad, count: 3 },
    { label: "Onion", type: 'onion', img: Onion, count: 3 },
    { label: "Meat", type: 'meat', img: Meat, count: 3 },
    { label: "Cucumber", type: 'cucumber', img: Cucumber, count: 3 },
    { label: "Tomato", type: 'tomato', img: Tomato, count: 3 },
    { label: "Cheese", type: 'cheese', img: Cheese, count: 3 }
];

const OrderSummaryIng = (props) => {
    return (
        <Auxiliary>
            {ings.map( (ing) => {
                return (
                    <div className="order-summary-ing">
                        <div className="order-summary-img">
                            <img src={ing.img} alt="Ing Alt Image"/>
                        </div>
                        <div className="count">
                            <span>X</span><span>{ing.count}</span>
                        </div>
                    </div>
                )
            } )}
        </Auxiliary>
    );
};

export default OrderSummaryIng;