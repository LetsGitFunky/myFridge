import StepItem from "./StepItem";
import './StepItem.css';

export default function RecipeMainShow({recipe}) {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.prevent.default()
    }
    return (
        <div className="recipe-main-show-wrapper">
            <ul className="recipe-main-steps">
            {recipe.instructions.map(step => (
                <li className="step-item-recipt-left"><StepItem step={step}/></li>
                ))}
                <button onClick={handleClick}>Save Recipe</button>
            </ul>
        </div>
    )
}
