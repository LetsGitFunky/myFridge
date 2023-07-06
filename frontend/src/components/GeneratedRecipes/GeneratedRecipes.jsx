// Generated Recipes component - this component will show the results of the Chat GPT query to generate three recipes
import React, { useState } from "react";
import { useSelector } from 'react-redux';
// import RecipeShow from "../RecipeShow/RecipeShow"
import { Link } from 'react-router-dom';
import RecipeMainShow from "../RecipeShow/RecipeShow";


export default function GeneratedRecipes() {
    const [activeRecipe, setActiveRecipe] = useState(null);
    const recipes = useSelector(state => state.recipes.recipe);

    if (!recipes) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Generated Recipes</h1>
            {recipes.map((recipe, index) => (
                <div key={`recipe-${index}`}>
                    <li>
                        <button onClick={() => setActiveRecipe(activeRecipe === recipe ? null : recipe)}>
                            {recipe.name}
                        </button>
                    </li>
                </div>
            ))}
            {activeRecipe && <RecipeMainShow recipe={activeRecipe}/>}
        </div>
    );
}
