import 'react'
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../state_management/reducers/CurrentUserSlice.jsx";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    navigate('/');
    //todo Call api to login
  }
  return (
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
        <p>
          Dont have an account? <Link to="/register">Register</Link>
        </p>
      </form>
  );
};

export default Login;