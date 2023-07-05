import jwtFetch from "./jwt";

// action constants
export const REQUEST_RECIPES = "recipes/REQUEST_RECIPES";
export const RECEIVE_RECIPES = "recipes/RECEIVE_RECIPES";
export const RECEIVE_RECIPE = "recipes/RECEIVE_RECIPE";

// action creators

const requestRecipes = () => {
    return {
        type: REQUEST_RECIPES,
    };
};

const receiveRecipes = (recipes) => {
    // debugger
    return {
        type: RECEIVE_RECIPES,
        recipes
    };
};

const receiveRecipe = (recipe) => {
    return {
        type: RECEIVE_RECIPE,
        recipe: recipe,
    };
};

//getRecipes and getRecipe selector helper functions
export const getRecipe = (recipeId) => (state) =>
    state.recipes ? state.recipes[recipeId] : null;

export const getRecipes = (state) =>
    state.recipes ? Object.values(state.recipes) : [];

export const getSavedRecipes = (state) => {
    return state.savedRecipes ? Object.keys(state.savedRecipes) : [];
};

// thunk action creators

export const fetchRecipes = (ingredients) => async (dispatch) => {
    // debugger
    dispatch(requestRecipes());
    try {
        const response = await jwtFetch("/api/recipes/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ingredients }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // debugger
        dispatch(receiveRecipes(data.recipe));
    } catch (err) {
        dispatch({ type: "FETCH_RECIPES_FAILURE", payload: err.message });
    }
};

//Recipe Reducer
export default function recipesReducer(state = { isFetching: false }, action) {
    let newState;
    // debugger
    switch (action.type) {
        case REQUEST_RECIPES:
            newState = { ...state };
            return { ...newState, isFetching: true };
        case RECEIVE_RECIPES:
            newState = { ...state };
            return { ...newState, isFetching: false, recipes: action.recipes };
        case RECEIVE_RECIPE:
            newState = { ...state };
            const recipeId = action.recipe.id;
            newState[recipeId] = action.recipe;
            return newState;
        default:
            return state;
    }
}
