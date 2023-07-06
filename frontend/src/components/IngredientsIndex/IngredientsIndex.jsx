import React  from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients, getIngredients } from "../../store/ingredients";


export default function IngredientsIndex() {
    const sessionUser = useSelector(state => state.session.user);
    const [ingredients, setIngredients] = useState("")
    const dispatch = useDispatch();
    
    useEffect(() => {
        setIngredients(dispatch(fetchIngredients(sessionUser._id)))
    }, [dispatch])
    const ings = useSelector(state => state.ingredients)
    console.log(ings)
    
    return (
        <div className="recipe-index-wrapper">
            {/* {ingredients} */}
                {ings.map(ingredient => (
                <li className="step-item-recipt-left">{ingredient}</li>
                ))}
        </div>
    )
    

}