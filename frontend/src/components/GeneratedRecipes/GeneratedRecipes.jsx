// Generated Recipes component - this component will show the results of the Chat GPT query to generate three recipes
import React from "react";
import { useSelector } from 'react-redux';

export default function GeneratedRecipes() {
    const recipes = useSelector(state => state.recipes.recipe);

    if (!recipes) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Generated Recipes</h1>
            {recipes.map((recipe, index) => (
                <div key={index}>
                    <h2>{recipe.name}</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Instructions:</h3>
                    <ol>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction.description}</li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
    );
}
