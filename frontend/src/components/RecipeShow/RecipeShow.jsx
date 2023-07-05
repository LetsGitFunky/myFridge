// Recipe Show component - This will display the steps / instructions for how to prepare a specific recipe
import RecipeLeft from "./RecipeLeft"
import RecipeMainShow from "./RecipeMainShow"

export default function RecipeShow({recipe}) {

    return (
        <div className="recipe-show-wrapper">
            <div className="recipe-left-container">
                <RecipeLeft recipe={recipe}/>
            </div>
            <div className="recipe-main-show-container">
                <RecipeMainShow recipe={recipe}/>
            </div>
        </div>
    )
}