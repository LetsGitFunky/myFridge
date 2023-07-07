// Saved Recipes Index component - this page will show all of the current user's saved recipes
import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { fetchSavedRecipes } from "../../store/recipes";


import Fridge from "../Fridge/Fridge";
import { useDispatch, useSelector } from "react-redux";


export default function SavedRecipesIndex() {
    const user = useSelector(state => state.session.user);
    console.log(user._id)
    return (
    
        <>
        <h1>Hello from Saved Recipes Index</h1>
        <Fridge userId={user._id}/>
        </>
    )
}
