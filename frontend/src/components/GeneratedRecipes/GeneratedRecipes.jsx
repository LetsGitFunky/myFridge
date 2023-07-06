// Generated Recipes component - this component will show the results of the Chat GPT query to generate three recipes
import React, { useState } from "react";
import { useSelector } from 'react-redux';
// import RecipeShow from "../RecipeShow/RecipeShow"
import { Link } from 'react-router-dom';
import RecipeShow from "../RecipeShow/RecipeShow";


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
                        <button onClick={() => setActiveRecipe(recipe)}>
                            {recipe.name}
                        </button>
                        {activeRecipe === recipe && <RecipeShow recipe={recipe}/>}
                    </li>

                    {/* <label>{recipe.name} */}
                    {/* <Link to={`/recipes/${index}`}>{recipe.name}</Link> */}

                    {/* </label> */}

                    {/* <RecipeShow recipe={recipe}/> */}
                    {/* <h2>{recipe.name}</h2>
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
                    </ol> */}
                </div>
            ))}
        </div>
    );
}
