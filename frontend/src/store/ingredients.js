import jwtFetch from './jwt';

// action constants
export const RECEIVE_INGREDIENTS = "ingredients/RECEIVE_INGREDIENTS";
export const RECEIVE_INGREDIENT = "ingredients/RECEIVE_INGREDIENT";
export const REMOVE_INGREDIENT = 'ingredients/REMOVE_INGREDIENT';

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

const removeIngredient = ingredientId => ({
    type: REMOVE_INGREDIENT,
    ingredientId
});

//getingredients and getingredient selector helper functions
export const getIngredient = (ingredientId) => (state) => (
    state.ingredients ? state.ingredients[ingredientId] : null
)

export const getIngredients = (state) => (
    state.ingredients ? Object.values(state.ingredients) : []
)


// thunk action creators

export const fetchIngredients = ingredients => async dispatch => {
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

export const deleteIngredient = ingredientId => async (dispatch) => {
    const response = await jwtFetch (`/api/ingredients/${ingredientId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeIngredient(ingredientId));
    }
};


//ingredient Reducer
export default function ingredientsReducer(state = {}, action) {
    let nextState;

    switch (action.type) {
        case RECEIVE_INGREDIENTS:
            return action.ingredients;
        case RECEIVE_INGREDIENT:
            nextState = {...state};
            const ingredientId = action.ingredient.id;
            nextState[ingredientId] = action.ingredient;
            return nextState;
        case REMOVE_INGREDIENT:
            delete nextState[action.ingredientId];
            return nextState;
        default:
            return state;
    }
}
