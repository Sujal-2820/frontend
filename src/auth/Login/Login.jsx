import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './Login.css';

function Login() {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/user/login', { username, password })
      .then((response) => {
        // Handle the response
        console.log(response.data); 
        const { user, token } = response.data;
        const username = user.username;
        localStorage.setItem('authToken', token);

        // Redirect to the dashboard page
        navigate('/dashboard', { state: { username } });
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Full Name"
          value={ username }
          onChange={handleNameChange}
          required
        /><br/><br/>
        <div className="password-input">
          <span>  </span>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          /><span> </span>
          {showPassword ? (
            <FiEyeOff className="password-toggle" onClick={togglePasswordVisibility} />
          ) : (
            <FiEye className="password-toggle" onClick={togglePasswordVisibility} />
          )}
        </div><br/>
        <button type="submit">Login</button>
        <p className='redirect'>
          Not having an account? <Link to="/signup">SignUp</Link>
        </p>
      </form>
    </div>
  );
}
 
export default Login;
