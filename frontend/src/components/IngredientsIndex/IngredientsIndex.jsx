import React  from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients, deleteIngredient } from "../../store/ingredients";
import { fetchRecipes } from "../../store/recipes"
import './IngredientsIndex.css'


export default function IngredientsIndex() {
    const sessionUser = useSelector(state => state.session.user);
    // const [ingredients, setIngredients] = useState("")
    const dispatch = useDispatch();
    const ings = useSelector(state => state.ingredients) || [];
    const [selectedIngredients, setSelectedIngredients] = useState([]);


    useEffect(() => {
        dispatch(fetchIngredients(sessionUser._id));
    }, [dispatch, sessionUser._id, ings.length]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.name;  // this is now the ingredient's _id

        if(target.checked){
            setSelectedIngredients(prevIngredients => [...prevIngredients, value])
        } else {
            setSelectedIngredients(prevIngredients => prevIngredients.filter(ingredientId => ingredientId !== value))
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Call fetchRecipes here with selectedIngredients as parameter
        dispatch(fetchRecipes(selectedIngredients));
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        // Call deleteIngredient here with each selected ingredient's _id as parameter
        selectedIngredients.forEach(ingredientId => {
            dispatch(deleteIngredient(ingredientId));
        });
    }

    return (
        <div className="recipe-index-wrapper">
            <h1 id='ingredients-title'>Ingredients in myFridge:</h1>
            <form onSubmit={handleSubmit}>
            {Array.isArray(ings) && ings.map((ingredient, i) => (
                    <div key={i}>
                        <input
                            name={ingredient._id}  // use _id as the name
                            type="checkbox"
                            onChange={handleInputChange}
                        />
                        <label>{ingredient.name}</label>
                    </div>
                ))}
                <button id="generate-recipes-button" type="submit">Generate Recipes</button>
                <button id="delete-ingredients-button" onClick={handleDelete}>Remove from Fridge</button>
            </form>
        </div>
    )
}
