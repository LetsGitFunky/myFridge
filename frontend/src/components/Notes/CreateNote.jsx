import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as noteActions from "../../store/notes"


const CreateNote = ({ recipe }) => {
    const dispatch = useDispatch();
    const [newNote, setNewNote] = useState('');
    const userId = useSelector(state => state.session.user._id)
    const recipeId = recipe._id

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const userNote = {
            body: newNote,
            userId: userId,
            recipeId: recipeId
        } 
        dispatch(noteActions.createNote(userNote))
        setNewNote('')
    }

    return (
    <>
        <div className="new-note-container">
            <div className="note-form-container">
                <form onSubmit={handleSubmit} className="note-form">
                    <div className="note-user-photo-container">
                        <textarea
                            placeholder='Add a note...'
                            className='create-note-text'
                            type='textarea'
                            value={newNote}
                            onInput={(e) => {
                                setNewNote(e.target.value)
                            }}
                            required
                        ></textarea>
                        <button className="create-new-note-button">Leave Note</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    
    )
}   

export default CreateNote;