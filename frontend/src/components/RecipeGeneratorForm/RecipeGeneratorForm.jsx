//Recipe Generator Form

import React from "react";
import { useState } from "react";
import { generateRecipe } from "../../../../backend/services/openaiService";

const RecipeGeneratorForm = () => {
    //store ingredients entered in the form
    const [ingredients, setIngredients] = useState("");

    // updates the ingredients state variable as the user types in the input field
    const handleInputChange = (e) => {
        setIngredients(e.target.value);
    }

    //when form is submitted, it calls generateRecipe function with entered ingredients
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const recipe = await generateRecipe(ingredients);
            // Do something with the generated recipe
            // console.log for now for testing
                console.log(recipe);
        } catch (error) {
            console.error('Error generating recipe:', error);
        }
    };

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

export default RecipeGeneratorForm