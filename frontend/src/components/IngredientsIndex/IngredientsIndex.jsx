import React  from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../store/ingredients";
import { fetchRecipes } from "../../store/recipes"


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
        const value = target.name;

        if(target.checked){
            setSelectedIngredients(prevIngredients => [...prevIngredients, value])
        } else {
            setSelectedIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient !== value))
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Call fetchRecipes here with selectedIngredients as parameter
        dispatch(fetchRecipes(selectedIngredients));
    };

    return (
        <div className="recipe-index-wrapper">
            <h1>Ingredients in myFridge:</h1>
            <form onSubmit={handleSubmit}>
                {Array.isArray(ings) && ings.map((ingredient, i) => (
                    <div key={i}>
                        <input
                            name={ingredient}
                            type="checkbox"
                            onChange={handleInputChange}
                        />
                        <label>{ingredient}</label>
                    </div>
                ))}
                <button type="submit">Generate Recipes</button>
            </form>
        </div>
    )
}
