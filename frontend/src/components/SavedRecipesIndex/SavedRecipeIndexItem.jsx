import React from 'react';

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
        </div>
    );
};

export default SavedRecipeIndexItem;
