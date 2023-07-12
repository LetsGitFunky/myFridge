// Recipe Generator Form
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../../store/recipes";
// import { Redirect } from 'react-router-dom'; // for GeneratedRecipes
import "./RecipeGeneratorForm.css";
import { FaVolumeMute } from "react-icons/fa";
import song from "./audio/myFridge.wav";

const RecipeGeneratorForm = () => {
    // Store ingredients entered in the form
    const [ingredients, setIngredients] = useState("");
    const [audioPlaying, setAudioPlaying] = useState(false);
    const dispatch = useDispatch();
    let audio = new Audio(song);
    const audioRef = useRef(new Audio(song));

    // Updates the ingredients state variable as the user types in the input field
    const handleInputChange = (e) => {
        setIngredients(e.target.value);
    };

    // When form is submitted, it calls generateRecipe function with entered ingredients
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(fetchRecipes(ingredients)).catch((error) =>
                console.error("Error generating recipe:", error)
            );
            setAudioPlaying(true);
            audioRef.current.play();
        } catch (error) {
            console.error("Error generating recipe:", error);
        }
    };

    const handleStopAudio = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setAudioPlaying(false);
    };

    return (
        <div className="recgen-form-container">
            <h3 id="quick-form-title-text">Quick Recipe Generator</h3>
            <form onSubmit={handleSubmit}>
                <label id="list-ingredients-text">List ingredients:</label>
                <input
                    className="input-field"
                    type="text"
                    id="ingredients"
                    name="ingredients"
                    value={ingredients}
                    placeholder="eggs, chicken, potatoes, garlic..."
                    onChange={handleInputChange}
                />
                <button type="submit">Generate Recipes</button>
            </form>
            <br />
            {audioPlaying && (
                <button onClick={handleStopAudio}>
                    <FaVolumeMute />
                </button>
            )}
        </div>
    );
};

export default RecipeGeneratorForm;

// suedo code for button

// i want a button to only show up when generate recipe is clicked
//  the button will have the abilty to stop the music if clicked.
//  im thinking a use state of the button that will toggle the button to be visible or not and another use state to stop audio
// does this sound right

// react icons for speaker
