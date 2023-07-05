// Generated Recipes component - this component will show the results of the Chat GPT query to generate three recipes

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../store/recipes";
import "./GeneratedRecipes.css";

function GeneratedRecipes() {
    const { isFetching, recipesObj } = useSelector((state) => state.recipes);
    const [recipes, setRecipes] = useState([]);

    //when Obj changes, update array
    useEffect(() => {
        console.log(recipesObj)
        if (recipesObj) {
            setRecipes(Object.values(recipesObj));
            console.log(recipes)
        }
    }, [recipesObj]);

    useEffect(() => {
        if (!isFetching && recipes) {
            console.log(recipes);
        }
    }, [isFetching, recipes]);

    if (isFetching) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="generated-recipes-container">
                {recipes &&
                    recipes.map((recipe) => (
                        <div >
                            <h2>{recipe.name}</h2>
                            <p>{recipe.ingredients.first}</p>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default GeneratedRecipes;

