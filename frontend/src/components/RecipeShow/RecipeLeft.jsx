import LeftStepItem from "./LeftStepItem";

export default function RecipeLeft({recipe}) {
    return (
        <div className="recipe-left-wrapper">
            <h1 className="steps-header-recipe-left">Steps</h1>
            <ul className="step-list-recipe-left">
                {recipe.instructions.map(step => (
                <li className="step-item-recipt-left"><LeftStepItem step={step}/></li>
                ))}
            </ul>
        </div>
    )
}