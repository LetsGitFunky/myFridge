import jwtFetch from './jwt';

// action constants
export const RECEIVE_INGREDIENTS = "ingredients/RECEIVE_INGREDIENTS";
export const RECEIVE_INGREDIENT = "ingredients/RECEIVE_INGREDIENT";

// action creators
const receiveIngredients = (ingredients) => {
    return {
        type: RECEIVE_INGREDIENTS,
        ingredients: ingredients
    }
}

const receiveIngredient = (ingredient) => {
    return {
        type: RECEIVE_INGREDIENT,
        ingredient: ingredient
    }
}

//getingredients and getingredient selector helper functions
export const getIngredient = (ingredientId) => (state) => (
    state.ingredients ? state.ingredients[ingredientId] : null
)

export const getIngredients = (state) => (
    state.ingredients ? Object.values(state.ingredients) : []
)


// thunk action creators

export const fetchingredients = ingredients => async dispatch => {
    try {
        const response = await jwtFetch('/api/ingredients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ingredients })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const ingredients = await response.json();
        dispatch(receiveIngredients(ingredients));
    } catch (err) {
        dispatch({ type: 'FETCH_ingredients_FAILURE', payload: err.message });
    }
};


//ingredient Reducer
export default function ingredientsReducer(state = {}, action) {
    let newState;

    switch (action.type) {
        case RECEIVE_INGREDIENTS:
            return action.ingredients;
        case RECEIVE_INGREDIENT:
            newState = {...state};
            const ingredientId = action.ingredient.id;
            newState[ingredientId] = action.ingredient;
            return newState;
        default:
            return state;
    }
}
