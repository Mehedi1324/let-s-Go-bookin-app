import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(
        'https://letsgo-booking-app.onrender.com/api/auth/login',
        credentials
      );
      console.log(res.data._doc);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data._doc });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAIL', payload: err.response.data });
    }
  };
  return (
    <div>
      <div>
        <input
          id="username"
          onChange={handleChange}
          type="text"
          placeholder="username"
        />
        <input
          id="password"
          onChange={handleChange}
          type="password"
          placeholder="password"
        />
        <button disabled={loading} onClick={handleClick}>
          Login
        </button>
        {error && <span className="mr-5 text-black">{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
