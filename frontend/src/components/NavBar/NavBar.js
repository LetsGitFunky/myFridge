// src/components/NavBar/NavBar.js

import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import { NavLink } from 'react-router-dom/';

function NavBar () {
    const loggedIn = useSelector(state => !!state.session.user);
    const dispatch = useDispatch();

    const logoutUser = e => {
        e.preventDefault();
        dispatch(logout());
    }

    const getLinks = () => {
        if (loggedIn) {
            return (
                <div className="links-nav">
                    <NavLink id="saved-navbutton" exact to={'/saved'}>Saved Recipes</NavLink>
                    <NavLink id="myfridge-navbutton" exact to={'/'}>myFridge</NavLink>
                    <button className="nav-buttons" onClick={logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="links-auth">
                    <NavLink exact to={'/signup'}>Signup</NavLink>
                    <NavLink exact to={'/login'}>Login</NavLink>
                </div>
            );
        }
    }

    return (
        <div className = "navbar">
            <h1>myFridge</h1>
            { getLinks() }
        </div>
    );
}

export default NavBar;