import React  from "react";
import { useState, useEffect } from "react";
import { createIngredient, fetchIngredients, getIngredients } from "../../store/ingredients";
import { useDispatch, useSelector } from "react-redux";
import './Fridge.css'
// import { useParams } from 'react-router-dom';

export default function Fridge (userId) {
    const sessionUser = useSelector(state => state.session.user);
    const [ingredients, setIngredients] = useState("")
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setIngredients(e.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(createIngredient(sessionUser, ingredients));
        } catch (error) {
            console.error("Error saving ingredients:", error);
        }
    };

    return (
        <div className="fridge-wrapper">
            <div className="add-to-fridge-form-wrapper">
                <form className="add-to-fridge-form" onSubmit={handleSubmit}>
                    <label id="add-ingredients-fridge-label">Add ingredient:</label>
                    <input className="input-fridge-form"
                        type="text"
                        id="ingredients"
                        name="ingredients"
                        value={ingredients}
                        onChange={handleInputChange}
                    />
                    <button className="add-to-fridge-button" type="submit">Add to myFridge!</button>
                </form>
            </div>
        </div>
    )
}
