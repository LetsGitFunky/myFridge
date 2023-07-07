
import jwtFetch from "./jwt";

export const RECIEVE_SAVED_RECIPES = "savedrecipes/RECIEVE_SAVED_RECIPES";
export const RECIEVE_SAVED_RECIPE = "savedrecipes/RECIEVE_SAVED_RECIPE";
export const REMOVE_SAVED_RECIPE = "savedrecipes/REMOVE_SAVED_RECIPE";

// all saved recipes
export const recieveSavedRecipes = (savedRecipes) => {
    return {
        type: RECIEVE_SAVED_RECIPES,
        savedRecipes
    };
};

// one saved recipe
export const recieveSavedRecipe = (recipe) => {
    return {
        type: recieveSavedRecipe,
        recipe: recipe,
    };
};

// TODO: there is no savedrecipe id 
export const removeSavedRecipe = (savedRecipeId) => {
    return {
        type: REMOVE_SAVED_RECIPE,
        savedRecipeId,
    };
};

// THUNKS

// GET request for saved recipe index
export const fetchSavedRecipes = () => async (dispatch) => {
    // debugger
    const res = await jwtFetch(`/api/savedRecipes`);

    if (res.ok) {
        // debugger;
        const savedRecipes = await res.json();
        dispatch(recieveSavedRecipes(savedRecipes));
    }
};

// POST to saved recipes
export const createRecipe = (Recipe) => async (dispatch) => {
    // debugger;
    const res = await jwtFetch(`/api/savedRecipes/`, {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Recipe),
    });

    if (res.ok) {
        // TODO: recipe is undefined  need to unest it
        const recipe = await res.json();
        // debugger;
        dispatch(recieveSavedRecipe(recipe));
    }
};


 // TODO:  adjust this as needed once the data flow is figured out aka the object
export const deleteSavedRecipe = (savedRecipeId) => async (dispatch) => {
    const res = await jwtFetch(`/api/savedRecipe/${savedRecipeId}`, {
        method: "DELETE",
    });

    if (res.ok) {
        dispatch(removeSavedRecipe(savedRecipeId));
    }
};

// SAVED RECIPE REDUCER
const savedRecipeReducer = (state = {}, action) => {
    Object.freeze(state);
    let newstate;

    switch (action.type) {
        case RECIEVE_SAVED_RECIPES:
            return action.savedRecipes;
        case RECIEVE_SAVED_RECIPE:
        // newstate = {...state}
        // return {...
            return state;
        case REMOVE_SAVED_RECIPE:
            // TODO: check state or comment out
            newstate = { ...state };
            delete newstate[action.savedRecipeId];
            return newstate;
        default:
            return state;
    }
};

export default savedRecipeReducer;
