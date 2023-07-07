import csrfFetch from "./csrf";

export const RECEIVE_NOTES = 'notes/RECEIVE_NOTES'
export const RECEIVE_NOTE = 'notes/RECEIVE_NOTE'
export const REMOVE_NOTE = 'notes/REMOVE_NOTE'

const receiveNote = note => ({
    type: RECEIVE_NOTE,
    note
});

const receiveNotes= notes => ({
        type: RECEIVE_NOTES,
        notes
});


const removeNote = noteId => ({
    type: REMOVE_NOTE,
    noteId
});

export const getNote = noteId => state => {
    return state.notes ? state.notes[noteId] : null;
}

export const getNotes = state => {
    return state.notes ? Object.values(state.notes) : []
}

export const getRecipeNotes = recipeId => state => {
    
    return Object.values(state.notes).filter((note) => note.recipeId === recipeId)
}

export const fetchNotes = () => async(dispatch) => {
    const response = await csrfFetch(`/api/notes`)
    if (response.ok){
        const data = await response.json()
        dispatch(receiveNotes(data))
    }
}

export const createNote = note => async (dispatch) => {
    
    const response = await csrfFetch(`/api/notes`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveNotes(data));
    }
}

export const updateNote = note => async (dispatch) => {
    const response = await csrfFetch(`/api/notes/${note.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveNote(data));
    }
}

export const deleteNote = noteId => async (dispatch) => {
    const response = await csrfFetch (`/api/notes/${noteId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeNote(noteId));
    }
};


const notesReducer = (state={}, action) => {
    Object.freeze(state)

    const nextState = Object.assign({}, state)

    switch(action.type){
        case RECEIVE_NOTES:
            return {...action.notes}
        case RECEIVE_NOTE:
            return {...state, [action.note.id]: action.note };
        case REMOVE_NOTE:
            delete nextState.notes[action.noteId]
            return nextState;
        default:
            return nextState;
    }
}

export default notesReducer;