import RightStepItem from "./RightStepItem";

export default function RecipeMainShow({recipe}) {
    return (
        <div className="recipe-main-show-wrapper">
            <ul className="recipe-main-steps">
            {recipe.instructions.map(step => (
                <li className="step-item-recipt-left"><RightStepItem step={step}/></li>
                ))}
            </ul>
        </div>
    )
}