// src/components/MainPage/MainPage.js

import Fridge from "../Fridge/Fridge";
// import RecipeGeneratorForm from "../RecipeGeneratorForm/RecipeGeneratorForm";
import './MainPage.css'
import tanfridgecropped from './Images/tanfridgecropped.png'
import GeneratedRecipes from "../GeneratedRecipes/GeneratedRecipes";
// import IngredientsForm

function MainPage() {
    return (
        <div className='outer-container'>
        <div className="mainpage-container">
            <div className="fridge-img-container">
                <img src={tanfridgecropped} alt="Fridge" />
                <div className="overlay-div1">
                     {/* <IngredientsForm /> */}
                    <p>QUICK RECIPE GENERATOR FORM</p>
                </div>
                <div className="overlay-div2">
                    {/* <RecipeGeneratorForm /> */}
                    <p> ADD/REMOVE INGREDIENTS FORM</p>
                </div>
                </div>
            <div className='ingredients-container'>
            INGREDIENTS INDEX COMPONENT
            <br/>
            Select ingredients in the list
            <br/>
            Button to generate recipes
            </div>
            <div className='gen-recipes-container'>
                <GeneratedRecipes/>
            </div>
        </div>
        <footer>
        Copyright &copy; 2023 myFridge
        </footer>
        </div>
    );
}

export default MainPage;
