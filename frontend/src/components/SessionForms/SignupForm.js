import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SignupForm.css';
import { signup, clearSessionErrors } from '../../store/session';
import bluefridge from './Images/bluefridge.jpg'

function SignupForm () {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const errors = useSelector(state => state.errors.session);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
        dispatch(clearSessionErrors());
        };
    }, [dispatch]);

    const update = field => {
        let setState;

    switch (field) {
        case 'email':
            setState = setEmail;
            break;
        case 'username':
            setState = setUsername;
            break;
        case 'password':
            setState = setPassword;
            break;
        case 'password2':
            setState = setPassword2;
            break;
        default:
            throw Error('Unknown field in Signup Form');
    }

    return e => setState(e.currentTarget.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const user = {
            email,
            username,
            password
        };

        dispatch(signup(user)); 
    }

    return (
        <div className='form-container'>
            <form className="session-form" onSubmit={handleSubmit}>
                <div className='chef-img-container'>
                        <img src="https://png.pngtree.com/png-clipart/20230218/original/pngtree-cartoon-chef-with-a-confident-pose-png-image_8958326.png"/>
                </div>
                <h2 id="signup-title-text">Sign up for myFridge </h2>
                <p>Your quick and easy recipe generator!</p>
                <div className="errors">{errors?.email}</div>
                <label id="signup-email">
                    <span>Email</span>
                    <br/>
                    <input type="text"
                        value={email}
                        onChange={update('email')}
                        placeholder="Email"
                    />
                </label>
                <br/>
                <div className="errors">{errors?.username}</div>
                <label id="chef-name">
                    <span>Chef Name</span>
                    <br/>
                    <input type="text"
                        value={username}
                        onChange={update('username')}
                        placeholder="Your name"
                    />
                </label>
                <div className="errors">{errors?.password}</div>
                <label>
                    <span>Password</span>
                    <br/>
                    <input type="password"
                        value={password}
                        onChange={update('password')}
                        placeholder="Password"
                    />
                </label>
                <div className="errors">
                    {password !== password2 && 'Confirm Password field must match'}
                </div>
                <label>
                    <span>Confirm Password</span>
                    <br/>
                    <input type="password"
                        value={password2}
                        onChange={update('password2')}
                        placeholder="Confirm Password"
                    />
                </label>
                <br/>
                <input
                    type="submit"
                    value="Sign Up"
                    disabled={!email || !username || !password || password !== password2}
                />
            </form>
            <div className='signup-fridge-img-container'>
                <img src={bluefridge} />
            </div>
        </div>
    );
}

export default SignupForm;