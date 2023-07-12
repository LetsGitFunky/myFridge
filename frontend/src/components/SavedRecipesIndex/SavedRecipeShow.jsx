import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSavedRecipeNote } from '../../store/savedRecipes';
import './SavedRecipeShow.css';

const SavedRecipeShow = ({ recipe }) => {
    const [note, setNote] = useState(recipe.note);
    const dispatch = useDispatch();

    useEffect(() => {
        setNote(recipe.note);
    }, [recipe]);

    // console.log(note)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSavedRecipeNote(recipe._id, note));
    };

    return (
        <div className='saved-recipe-show'>
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
                    <li key={index}>{instruction.step}. {instruction.description}</li>
                ))}
            </ol>
            <h3>Note</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
                <button type="submit">Save Note</button>
            </form>
        </div>
    );
};

export default SavedRecipeShow;
