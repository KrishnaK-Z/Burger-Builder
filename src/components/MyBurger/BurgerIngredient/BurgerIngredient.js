import React from 'react';
import PropTypes from 'prop-types';

import TopBun from '../../../assets/img/Burger/top-bun.png';
import BottomBun from '../../../assets/img/Burger/boottom-bun.png';
import Tomato from '../../../assets/img/Burger/tomato.png';
import Salad from '../../../assets/img/Burger/salad.png';
import Onion from '../../../assets/img/Burger/onion.png';
import Cucumber from '../../../assets/img/Burger/cucumber.png';
import Cheese from '../../../assets/img/Burger/cheese.png';
import Meat from '../../../assets/img/Burger/meat.png';

import './BurgerIngredient.scss';

const BurgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-top'):
            ingredient = <div className="ingredients bread-top" data-name={props.type}>
                <img src={TopBun} />
            </div>;
            break;
        case ('bread-bottom'):
            ingredient = <div className="ingredients bread-bottom" data-name={props.type}>
                <img src={BottomBun} />
            </div>;
            break;
        case ('tomato'):
            ingredient = <div className="ingredients tomato" data-name={props.type}>
                <img src={Tomato} />
            </div>;
            break;
        case ('cucumber'):
            ingredient = <div className="ingredients cucumber" data-name={props.type}>
                <img src={Cucumber} />
            </div>;
            break;
        case ('onion'):
            ingredient = <div className="ingredients onion" data-name={props.type}>
                <img src={Onion} />
            </div>;
            break;
        case ('cheese'):
            ingredient = <div className="ingredients cheese" data-name={props.type}>
                <img src={Cheese} />
            </div>;
            break;
        case ('meat'):
            ingredient = <div className="ingredients meat" data-name={props.type}>
                <img src={Meat} />
            </div>;
            break;
        case ('salad'):
            ingredient = <div className="ingredients salad" data-name={props.type}>
                <img src={Salad} />
            </div>;
            break;
        default: ingredient =null;
    }
    return ingredient;
}

BurgerIngredient.prototype = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;