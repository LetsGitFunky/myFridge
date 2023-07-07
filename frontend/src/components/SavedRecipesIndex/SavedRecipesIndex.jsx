// import React, { useEffect } from "react";
// import {  useDispatch, useSelector } from "react-redux";
// import { fetchSavedRecipes } from "../../store/savedRecipes";

// // import Fridge from "../Fridge/Fridge";

// export default function SavedRecipesIndex() {
//     const dispatch = useDispatch();

//     const savedRecipes = useSelector((state) => state.savedRecipes)

//     useEffect(() => {
//         dispatch(fetchSavedRecipes())
//     }, [])

//     return (
//         <div>
//             <h1>Hello from Saved Recipes Index</h1>
//             {/* <Fridge /> */}
//             {Object.values(savedRecipes).map((recipe, index) => (
//                 <div key={{index}}>
//                     <h2>{recipe.name}</h2>
//                     <h3>Ingredients</h3>
//                     <ul>
//                         {recipe.ingredients.map((ingredient, index) => (
//                             <li key={index}>{ingredient}</li>
//                         ))}
//                     </ul>
//                     <h3>Instructions</h3>
//                     <ol>
//                         {recipe.instructions.map((instruction, index) => (
//                             <li key={index}>{instruction.description}</li>
//                         ))}
//                     </ol>
//                 </div>
//             ))}
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { fetchSavedRecipes } from "../../store/savedRecipes";
import SavedRecipeIndexItem from './SavedRecipeIndexItem';
import SavedRecipeShow from './SavedRecipeShow';
import './SavedRecipesIndex.css';  // You'll want to create a CSS file for this component

export default function SavedRecipesIndex() {
    const dispatch = useDispatch();
    const savedRecipes = useSelector((state) => state.savedRecipes);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(() => {
        dispatch(fetchSavedRecipes());
    }, [dispatch]);

    const handleRecipeSelect = (recipe) => {
        setSelectedRecipe(recipe);
    };

    return (
        <div className="saved-recipes-container">
            <div className="recipe-index">
                <h1 id= "my-saved-recipes-text" >My Saved Recipes</h1>
                {Object.values(savedRecipes).map((recipe, index) => (
                    <SavedRecipeIndexItem key={`recipe-${index}`} recipe={recipe} onRecipeSelect={handleRecipeSelect} />
                ))}
            </div>
            <div className="recipe-show">
                {selectedRecipe && <SavedRecipeShow recipe={selectedRecipe} />}
            </div>
        </div>
    );
}
