import StepItem from "./StepItem";
import './StepItem.css';

export default function RecipeMainShow({recipe}) {
    return (
        <div className="recipe-main-show-wrapper">
            <ul className="recipe-main-steps">
            {recipe.instructions.map(step => (
                <li className="step-item-recipt-left"><StepItem step={step}/></li>
                ))}
            </ul>
        </div>
    )
}
