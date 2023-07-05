// src/App.js

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';

import MainPage from './components/MainPage/MainPage';
import LoginForm from './components/SessionForms/LoginForm';
import SignupForm from './components/SessionForms/SignupForm';
import RecipeShow from './components/RecipeShow/RecipeShow';
import GeneratedRecipes from './components/GeneratedRecipes/GeneratedRecipes';
import SavedRecipesIndex from './components/SavedRecipesIndex/SavedRecipesIndex';
import { getCurrentUser } from './store/session';
import RecipeGeneratorForm from './components/RecipeGeneratorForm/RecipeGeneratorForm';
import GenRecHome from './components/GeneratedRecipes/GenRecHome';





function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  return loaded && (
    <>
      <NavBar />
      <RecipeGeneratorForm/>
      {/* <GenRecHome/> */}
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <AuthRoute exact path="/signup" component={SignupForm} />

        <ProtectedRoute exact path="/recipes" component={GenRecHome} />
        <ProtectedRoute exact path="/recipes/:recipeId" component={RecipeShow} />
        <ProtectedRoute exact path="/saved" component={SavedRecipesIndex} />
      </Switch>
    </>
  );
}

export default App;
