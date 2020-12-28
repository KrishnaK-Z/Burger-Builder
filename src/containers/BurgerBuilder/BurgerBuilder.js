import React, {useState} from "react";
import Auxiliary from "../../hoc/Auxiliary";
import MyBurger from "../../components/MyBurger/MyBurger";

import './BurgerBuilder.scss';
import IngredientControls from "../../components/MyBurger/IngredientControls/IngredientControls";

const BurgerBuilder =(props) => {

    const [ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0,
        cucumber: 0,
        onion: 0,
        meat: 0,
        tomato: 0
    });

    const [totalPrice, setTotalPrice] = useState(4);

    const INGREDIENTS_PRICE = {
        salad: 2,
        cheese: 3,
        cucumber: 1,
        onion: 0.4,
        meat: 2.7,
        tomato: 0.3
    }

    const INGREDIENTS_LIMIT = {
        salad: 2,
        cheese: 2,
        cucumber: 1,
        onion: 2,
        meat: 1,
        tomato: 2
    }

    let addIngredient = (type) => {
        setIngredients(currentState => {
            if (INGREDIENTS_LIMIT[type] == currentState[type] ) {
                return currentState;
            }

            let newState = {
                ...currentState
            }
            setTotalPrice(currentPrice => (currentPrice + INGREDIENTS_PRICE[type]));
            newState[type] = currentState[type] + 1;
            return newState;
        });
    };

    let removeIngredient = (type) => {
        setIngredients(currentState => {
            if (currentState[type] <= 0) return currentState;
            let newState = {
                ...currentState
            }
            newState[type] = currentState[type] - 1;

            setTotalPrice(currentPrice => (currentPrice - INGREDIENTS_PRICE[type]));

            return newState;
        });
    };

    return (
        <div className="custom-burger-container">
            <div className="burger-build-wrapper">
                <MyBurger ingredients={ingredients}/>
                <div className="flex-wrapper">
                    <div className="total-price">
                        <strong>Total Price:</strong> {totalPrice.toFixed()}
                        <div className="order-btn-wrapper">
                            <button className="order-btn flex-center-item">
                                <svg version="1.1" id="Capa_1" x="0px" y="0px"
                                     viewBox="0 0 446.853 446.853">
                                    <g>
                                        <path d="M444.274,93.36c-2.558-3.666-6.674-5.932-11.145-6.123L155.942,75.289c-7.953-0.348-14.599,5.792-14.939,13.708
                                    c-0.338,7.913,5.792,14.599,13.707,14.939l258.421,11.14L362.32,273.61H136.205L95.354,51.179
                                    c-0.898-4.875-4.245-8.942-8.861-10.753L19.586,14.141c-7.374-2.887-15.695,0.735-18.591,8.1c-2.891,7.369,0.73,15.695,8.1,18.591
                                    l59.491,23.371l41.572,226.335c1.253,6.804,7.183,11.746,14.104,11.746h6.896l-15.747,43.74c-1.318,3.664-0.775,7.733,1.468,10.916
                                    c2.24,3.184,5.883,5.078,9.772,5.078h11.045c-6.844,7.617-11.045,17.646-11.045,28.675c0,23.718,19.299,43.012,43.012,43.012
                                    s43.012-19.294,43.012-43.012c0-11.028-4.201-21.058-11.044-28.675h93.777c-6.847,7.617-11.047,17.646-11.047,28.675
                                    c0,23.718,19.294,43.012,43.012,43.012c23.719,0,43.012-19.294,43.012-43.012c0-11.028-4.2-21.058-11.042-28.675h13.432
                                    c6.6,0,11.948-5.349,11.948-11.947c0-6.6-5.349-11.948-11.948-11.948H143.651l12.902-35.843h216.221
                                    c6.235,0,11.752-4.028,13.651-9.96l59.739-186.387C447.536,101.679,446.832,97.028,444.274,93.36z M169.664,409.814
                                    c-10.543,0-19.117-8.573-19.117-19.116s8.574-19.117,19.117-19.117s19.116,8.574,19.116,19.117S180.207,409.814,169.664,409.814z
                                    M327.373,409.814c-10.543,0-19.116-8.573-19.116-19.116s8.573-19.117,19.116-19.117s19.116,8.574,19.116,19.117
                                    S337.916,409.814,327.373,409.814z"/>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="burger-controller-wrapper">
                <IngredientControls
                    ingredientsAdded={addIngredient}
                    ingredientRemoved={removeIngredient}/>
            </div>
        </div>
    )
};

export default BurgerBuilder;