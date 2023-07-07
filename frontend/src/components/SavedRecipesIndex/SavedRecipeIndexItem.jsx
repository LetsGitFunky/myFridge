import React from 'react';

const SavedRecipeIndexItem = ({ recipe, onRecipeSelect }) => {
    return (
        <div onClick={() => onRecipeSelect(recipe)}>
            <h2>{recipe.name}</h2>
        </div>
    );
};

export default SavedRecipeIndexItem;
