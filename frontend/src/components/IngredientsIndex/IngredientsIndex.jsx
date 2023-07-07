import React  from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients, getIngredients } from "../../store/ingredients";


export default function IngredientsIndex() {
    const sessionUser = useSelector(state => state.session.user);
    // const [ingredients, setIngredients] = useState("")
    const dispatch = useDispatch();
    const ings = useSelector(state => state.ingredients) || [];

    useEffect(() => {
        dispatch(fetchIngredients(sessionUser._id));
    }, [dispatch, sessionUser._id, ings.length]);

    // console.log(ings)
    // debugger
        return (
        <div className="recipe-index-wrapper">
                {Array.isArray(ings) && ings.map(ingredient => (
                <li className="ingredient-item">{ingredient}</li>
                ))}
        </div>
    )



}
