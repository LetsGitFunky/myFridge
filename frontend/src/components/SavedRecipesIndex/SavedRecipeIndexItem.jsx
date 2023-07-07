import React from 'react';
import './SavedRecipeIndexItem.css'

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
        <div className="saved-recipe-index-item" onClick={() => onRecipeSelect(recipe)}>
            <h2>{recipe.name}</h2>
            <button id="delete-rec-button" onClick={handleSubmit}>Delete Recipe</button>
        </div>
    );
};

export default SavedRecipeIndexItem;
