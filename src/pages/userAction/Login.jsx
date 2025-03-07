import 'react';
import './Login.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../state_management/reducers/CurrentUserSlice.jsx";
import { readData } from "../../dataService/dataService.jsx";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = readData(username);
        if (data && data.noteCards) {
            const user = data.noteCards.find((user) => user.username === username && user.password === password);
            if (user) {
                dispatch(login(user));
                navigate('/');
            } else {
                setError('Invalid username or password');
            }
        } else if (data === null || data === undefined) {
            setError('User not found');
        } else {
            setError('Error reading data');
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-label">Username:
                <input
                    className="login-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label className="login-label">Password:
                <input
                    className="login-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button className="login-button" type="submit">Login</button>
            {error && <p className="login-error">{error}</p>}
            <p className="login-register">
                Don&#39;t have an account? <Link to="/register" className="login-link">Register</Link>
            </p>
        </form>
    );
};

export default Login;
