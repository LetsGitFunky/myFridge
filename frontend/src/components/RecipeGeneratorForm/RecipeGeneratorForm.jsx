// Recipe Generator Form
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../../store/recipes";
// import { Redirect } from 'react-router-dom'; // for GeneratedRecipes
import './RecipeGeneratorForm.css'

const RecipeGeneratorForm = () => {
    // Store ingredients entered in the form
    const [ingredients, setIngredients] = useState("");
    const dispatch = useDispatch();

    // Updates the ingredients state variable as the user types in the input field
    const handleInputChange = (e) => {
        setIngredients(e.target.value);
    }

    // When form is submitted, it calls generateRecipe function with entered ingredients
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(fetchRecipes(ingredients))
            .catch((error) => console.error("Error generating recipe:", error));
        } catch (error) {
            console.error("Error generating recipe:", error);
        }
    };

    return (
        <div className="recgen-form-container">
            <h3 id="quick-form-title-text">Quick Recipe Generator</h3>
            <form onSubmit={handleSubmit}>
                <label id="list-ingredients-text">List ingredients:</label>
                <input className="input-field"
                    type="text"
                    id="ingredients"
                    name="ingredients"
                    value={ingredients}
                    placeholder="eggs, chicken, potatoes, garlic..."
                    onChange={handleInputChange}
                />
                <button type="submit">Generate Recipes</button>
            </form>
        </div>
    );
}

export default RecipeGeneratorForm;
