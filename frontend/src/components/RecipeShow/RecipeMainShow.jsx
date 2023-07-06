import RightStepItem from "./RightStepItem";
import 
import { createRecipe } from "../../store/recipes";

export default function RecipeMainShow({recipe}) {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.prevent.default()
    }
    return (
        <div className="recipe-main-show-wrapper">
            <ul className="recipe-main-steps">
            {recipe.instructions.map(step => (
                <li className="step-item-recipt-left"><RightStepItem step={step}/></li>
                ))}
                <button onClick={handleClick}>Save Recipe</button>
            </ul>
        </div>
    )
}