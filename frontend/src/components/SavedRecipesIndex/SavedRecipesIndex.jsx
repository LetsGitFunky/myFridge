// Saved Recipes Index component - this page will show all of the current user's saved recipes
import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { fetchSavedRecipes } from "../../store/recipes";


import Fridge from "../Fridge/Fridge";

export default function SavedRecipesIndex() {
    const dispatch = useDispatch();


    const savedRecipes = useSelector((state) => state.recipes)

    useEffect(() => {
        dispatch(fetchSavedRecipes())
    }, [])
    



    return (
        <div>
            <h1>Hello from Saved Recipes Index</h1>
            <Fridge />
        </div>
    );
}
