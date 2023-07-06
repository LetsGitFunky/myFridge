// Recipe Generator Form
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../../store/recipes";
import { Redirect } from 'react-router-dom'; // for GeneratedRecipes

const RecipeGeneratorForm = () => {
    // Store ingredients entered in the form
    const [ingredients, setIngredients] = useState("");
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();

    // Updates the ingredients state variable as the user types in the input field
    const handleInputChange = (e) => {
        setIngredients(e.target.value);
    }

    // When form is submitted, it calls generateRecipe function with entered ingredients
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          // Generate recipe using openaiService
          // const recipes = await generateRecipe(ingredients);
          // Dispatch fetchRecipes action with generated recipe
            dispatch(fetchRecipes(ingredients))
            .then(() => setRedirect(true))
            .catch((error) => console.error("Error generating recipe:", error));
        } catch (error) {
            console.error("Error generating recipe:", error);
        }
    };

    // Redirect to the recipes page when the fetchRecipes promise is resolved
    if (redirect) {
        return <Redirect to="/recipes" />;
    }

    return (
        <div>
            <h2>Quick Recipe Generator</h2>
            <form onSubmit={handleSubmit}>
                <label>Ingredients:</label>
                <input
                    type="text"
                    id="ingredients"
                    name="ingredients"
                    value={ingredients}
                    onChange={handleInputChange}
                />
                <button type="submit">Generate Recipes</button>
            </form>
        </div>
    );
}

export default RecipeGeneratorForm;
