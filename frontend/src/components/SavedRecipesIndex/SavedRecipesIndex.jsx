import React, { useEffect } from "react";
// import {  useDispatch, useSelector } from "react-redux";
import { fetchSavedRecipes } from "../../store/savedRecipes";


import Fridge from "../Fridge/Fridge";
import { useDispatch, useSelector } from "react-redux";


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