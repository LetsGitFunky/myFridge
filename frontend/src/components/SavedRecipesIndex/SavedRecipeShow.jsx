import React from 'react';

const SavedRecipeShow = ({ recipe }) => {
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
        </div>
    );
};

export default SavedRecipeShow;
