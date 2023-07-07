// Generated Recipes component - this component will show the results of the Chat GPT query to generate three recipes
import React, { useState } from "react";
import { useSelector } from 'react-redux';
// import RecipeShow from "../RecipeShow/RecipeShow"
import { Link } from 'react-router-dom';
import RecipeMainShow from "../RecipeShow/RecipeShow";
import './GeneratedRecipes.css'


export default function GeneratedRecipes() {
    const [activeRecipe, setActiveRecipe] = useState(null);
    const recipes = useSelector(state => state.recipes.recipe);


    if (!recipes) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="genrec-index-container">
            <h1 id="genrec-title">Generated Recipes</h1>
            {recipes.map((recipe, index) => (
                <div key={`recipe-${index}`}>
                    <ul className="genrec-ul">
                        <button onClick={() => setActiveRecipe(activeRecipe === recipe ? null : recipe)}>
                            {recipe.name}
                        </button>
                    </ul>
                </div>
            ))}
            {activeRecipe && <RecipeMainShow recipe={activeRecipe}/>}
        </div>
    );
}
