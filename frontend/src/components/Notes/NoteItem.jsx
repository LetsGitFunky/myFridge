import { useSelector } from "react-redux";
import * as noteActions from '../../store/notes'

export default function NoteItem({recipe}) {
    const recipeId = recipe._id
    const note = useSelector(noteActions.getRecipeNotes(recipeId))

    return (
        <div className="note-item">
            <span className="note-body">{note.body}</span>
        </div>
    );
};