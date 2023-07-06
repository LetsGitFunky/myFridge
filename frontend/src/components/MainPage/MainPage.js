// src/components/MainPage/MainPage.js

import Fridge from "../Fridge/Fridge";
import RecipeGeneratorForm from "../RecipeGeneratorForm/RecipeGeneratorForm";
import './MainPage.css'
import tanfridgecropped from './Images/tanfridgecropped.png'
import { AiFillGithub } from 'react-icons/ai';
import GeneratedRecipes from "../GeneratedRecipes/GeneratedRecipes";


function MainPage() {
    return (
        <div className='outer-container'>
        <div className="mainpage-container">
            <div className="fridge-img-container">
                <img src={tanfridgecropped} alt="Fridge" />
                <div className="overlay-div1">
                    <RecipeGeneratorForm />
                </div>
                <div className="overlay-div2">
                     {/* <IngredientsForm /> */}
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
            <span className="footer-text">
                Copyright &copy; 2023 myFridge
            </span>
            <a href="https://github.com/LetsGitFunky/myFridge" className="icon-link">
                <AiFillGithub className="github-icon" />
            </a>
        </footer>
        </div>
    );
}

export default MainPage;
