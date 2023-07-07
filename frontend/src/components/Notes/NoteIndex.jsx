import { useSelector } from "react-redux";
import * as noteActions from '../../store/notes'

export default function NoteIndex({recipe}) {
    const recipeId = recipe._id
    const allNotes = useSelector(noteActions.getPostComments(recipeId))

    return (
        <div className="note-item">
            {allNotes.map((note) => 
            <li>{note}</li>
            )}
        </div>
    );
};