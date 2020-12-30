import './IngredientControls.scss';
import Tomato from '../../../assets/img/Burger/tomato.png';
import Salad from '../../../assets/img/Burger/salad.png';
import Onion from '../../../assets/img/Burger/onion.png';
import Cucumber from '../../../assets/img/Burger/cucumber.png';
import Cheese from '../../../assets/img/Burger/cheese.png';
import Meat from '../../../assets/img/Burger/meat.png';
import IngredientControl from "./IngredientControl/IngredientControl";

const controls = [
    { label: "Salad", type: 'salad', fat: "21g", sat: "10g", sugar: "18g", salt: "1g", img: Salad },
    { label: "Onion", type: 'onion', fat: "21g", sat: "10g", sugar: "18g", salt: "1g", img: Onion },
    { label: "Meat", type: 'meat', fat: "21g", sat: "10g", sugar: "18g", salt: "1g", img: Meat },
    { label: "Cucumber", type: 'cucumber', fat: "21g", sat: "10g", sugar: "18g", salt: "1g", img: Cucumber },
    { label: "Tomato", type: 'tomato', fat: "21g", sat: "10g", sugar: "18g", salt: "1g", img: Tomato },
    { label: "Cheese", type: 'cheese', fat: "21g", sat: "10g", sugar: "18g", salt: "1g", img: Cheese }
];

const IngredientControls = (props) => {
    return (
        <div className="ingredients-controller-wrapper">
            {controls.map(control => {
                return <IngredientControl
                    removed={() => props.ingredientRemoved(control.type)}
                    added={() => props.ingredientsAdded(control.type)}
                    key={control.type}
                    details={control}/>;
            })}
        </div>
    );
};

export default IngredientControls;