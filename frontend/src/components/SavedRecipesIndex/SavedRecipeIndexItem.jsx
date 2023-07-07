import React from 'react';

import { useDispatch } from "react-redux";
import { deleteSavedRecipe } from "../../store/savedRecipes";

const SavedRecipeIndexItem = ({ recipe, onRecipeSelect }) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteSavedRecipe(recipe._id));
        return []
    };

    return (
        <div onClick={() => onRecipeSelect(recipe)}>
            <h2>{recipe.name}</h2>
            <button onClick={handleSubmit}>Delete Recipe</button>
        </div>
    );
};

export default SavedRecipeIndexItem;
