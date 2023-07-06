// Recipe Show component - This will display the steps / instructions for how to prepare a specific recipe
import RecipeLeft from "./RecipeLeft"
import RecipeMainShow from "./RecipeMainShow"
import { useSelector } from 'react-redux';

export default function RecipeShow({recipe}) {
    const sessionUser = useSelector(state => state.session.user)

    return (
        <div className="recipe-show-wrapper">
            <div className="recipe-left-container">
                {/* <RecipeLeft recipe={recipe}/> */}
            </div>
            <div className="recipe-main-show-container">
                <h1>Lets Get Cooking Chef {sessionUser.username}!</h1>
                <RecipeMainShow recipe={recipe}/>
            </div>
        </div>
    )
}
