import { useState } from "react";
import { fetchIngredients, getIngredients } from "../../store/ingredients";
import { useDispatch, useSelector } from "react-redux";

export default function Fridge () {
    const sessionIngredients = useSelector(getIngredients);

    const [ingredients, setIngredients] = useState("")
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setIngredients(e.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(fetchIngredients(ingredients));
        } catch (error) {
            console.error("Error saving ingredients:", error);
        }
    };

    return (
        <div className="fridge-wrapper">
            <div className="add-to-fridge-form-wrapper">
                <form className="add-to-fridge-form" onSubmit={handleSubmit}>
                <label className="add-ingredients-fridge-label">Ingredients:</label>
                <input
                    type="text"
                    id="ingredients"
                    name="ingredients"
                    value={ingredients}
                    onChange={handleInputChange}
                />
                <button className="add-to-fridge-button" type="submit">Add to myFridge!</button>
            </form>
                <div className="ingredients-list-wrapper">
                    <ul className="fridge-ingredients-list">
                        {sessionIngredients.map(ing => {
                            <li>{ing}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}