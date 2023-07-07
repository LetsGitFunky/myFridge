import React from 'react';
import './SavedRecipeIndexItem.css'

const SavedRecipeIndexItem = ({ recipe, onRecipeSelect }) => {
    return (
        <div className="saved-recipe-index-item" onClick={() => onRecipeSelect(recipe)}>
            <h2>{recipe.name}</h2>
        </div>
    );
};

export default SavedRecipeIndexItem;
