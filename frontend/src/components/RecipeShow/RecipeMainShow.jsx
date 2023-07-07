import React from "react";
import StepItem from "./StepItem";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe } from "../../store/savedRecipes";

import "./StepItem.css";

export default function RecipeMainShow({ recipe }) {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.session.user);

    const handleClick = (e) => {
        e.preventDefault();

        // console.log(currentUser)

        const savedRecipe = {
            user: currentUser._id,

            ...recipe,
        };
        // debugger;
        // think i need to add user to this object
        dispatch(createRecipe(savedRecipe));
    };

    
    return (
        <div className="recipe-main-show-wrapper">
            <ul className="recipe-main-steps">
                {recipe.instructions.map((step) => (
                    <li className="step-item-recipt-left">
                        <StepItem step={step} />
                    </li>
                ))}
                <button onClick={handleClick}>Save Recipe</button>
            </ul>
        </div>
    );
}
