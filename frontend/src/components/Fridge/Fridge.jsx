import React  from "react";
import { useState, useEffect } from "react";
import { createIngredient, fetchIngredients, getIngredients } from "../../store/ingredients";
import { useDispatch, useSelector } from "react-redux";
import './Fridge.css'
// import { useParams } from 'react-router-dom';

export default function Fridge (userId) {
    const sessionUser = useSelector(state => state.session.user);
    // const userId = useSelector(state => state.session.user.id)
    // console.log(userId);
    // const usersIngredients = useSelector(fetchIngredients(userId));
    const [ingredients, setIngredients] = useState("")
    // const [userIngredients, setUserIngredients] = useState("")
    const dispatch = useDispatch();

    // useEffect(() => {
    //     setUserIngredients(dispatch(fetchIngredients(user.id)))
    // }, [dispatch])

    // useEffect(() => {
    //     const fetchUserIngredients = async () => {
    //         try {
    //             const response = await dispatch(fetchIngredients(userId.userId));
    //             const ingredientsData = await response.json();
    //             console.log('Response status:', response.status);
    //             setUserIngredients(ingredientsData);
    //         } catch (error) {
    //             // Handle any errors that occurred during the fetch
    //             console.error('Error fetching ingredients:', error);
    //         }
    //     };
    //     fetchUserIngredients();
    // }, [dispatch, userId]);


    const handleInputChange = (e) => {
        setIngredients(e.target.value);
    }

    const handleSubmit = async (event) => {
        // console.log(sessionUser)
        event.preventDefault();
        try {
            dispatch(createIngredient(sessionUser, ingredients));
        } catch (error) {
            console.error("Error saving ingredients:", error);
        }
    };

    return (
        <div className="fridge-wrapper">
            <div className="add-to-fridge-form-wrapper">
                <form className="add-to-fridge-form" onSubmit={handleSubmit}>
                    <label id="add-ingredients-fridge-label">Add ingredients:</label>
                    <input className="input-fridge-form"
                        type="text"
                        id="ingredients"
                        name="ingredients"
                        value={ingredients}
                        onChange={handleInputChange}
                    />
                    <button className="add-to-fridge-button" type="submit">Add to myFridge!</button>
                </form>
            </div>
        </div>
    )
}
