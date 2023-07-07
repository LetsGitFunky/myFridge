import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { fetchSavedRecipes } from "../../store/savedRecipes";

import Fridge from "../Fridge/Fridge";

export default function SavedRecipesIndex() {
    const dispatch = useDispatch();

    const savedRecipes = useSelector((state) => state.savedRecipes)

    useEffect(() => {
        dispatch(fetchSavedRecipes())
    }, [dispatch])

    return (
        <div>
            <h1>Hello from Saved Recipes Index</h1>
            <Fridge />
        </div>
    );
}
