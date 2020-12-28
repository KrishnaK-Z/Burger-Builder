import './IngredientControl.scss';

const IngredientControl = (props) => {

    const {
        label,
        type,
        fat,
        sat,
        sugar,
        salt,
        img
    } = props.details;

    return (
        <div className="ing-control-wrapper">
            <div className="image-wrapper">
                <img src={img}/>
            </div>
            <div className="content-wrapper">
                <div className="control-detail">
                    <h3>{label}</h3>
                    <div className="button-wrapper">
                        <button className="less" onClick={props.removed}>-</button>
                        <button className="more" onClick={props.added}>+</button>
                    </div>
                </div>
                <div className="details">
                    <div className="detail">
                        <strong>Fat:</strong> {fat}
                    </div>
                    <div className="detail">
                        <strong>Saturates:</strong> {sat}
                    </div>
                    <div className="detail">
                        <strong>Sugars:</strong> {sugar}
                    </div>
                    <div className="detail">
                        <strong>Salt:</strong> {salt}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IngredientControl;