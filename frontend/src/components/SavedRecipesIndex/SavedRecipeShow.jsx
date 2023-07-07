import React from "react";
import { useDispatch } from "react-redux";
import { deleteSavedRecipe } from "../../store/savedRecipes";

const SavedRecipeShow = ({ recipe }) => {
    const dispatch = useDispatch();

    // TODO: this needs to get refacoted so it would delete the recipe show when it gets deleted
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(deleteSavedRecipe(recipe._id));
    //     return [];
    // };

    return (
        <div>
            <h2>{recipe.name}</h2>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions</h3>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction.description}</li>
                ))}
            </ol>
            {/* <button onClick={handleSubmit}>Delete Recipe</button> */}
        </div>
    );
};

export default SavedRecipeShow;
