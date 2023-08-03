import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './SignUp.css';

function SignUp() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleFullNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  const handleSignUp = (e) => {
    e.preventDefault();

    // Check if the confirm password matches the password
    if (confirmPassword !== password) {
      // Show an error or validation message
      console.log('Passwords do not match');
      return;
    }

    axios
      .post('http://localhost:8080/user/signup', { username, password, email })
      .then((response) => {
        // Handle the response
        console.log(response.data); // Assuming the response contains the token and user info
        // Redirect to the Login page
        navigate('/login'); 
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Full Name"
          value={ username }
          onChange={handleFullNameChange}
        /><br/><br/>
        <input
          type="email"
          placeholder="Email"
          value={ email }
          onChange={handleEmailChange}
        /><br/><br/>
        <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={ password }
            onChange={handlePasswordChange}
          />
          {showPassword ? (
            <FiEyeOff className="password-toggle" onClick={togglePasswordVisibility} />
          ) : (
            <FiEye className="password-toggle" onClick={togglePasswordVisibility} />
          )}
        </div><br/>
        <div className="password-input">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {showConfirmPassword ? (
            <FiEyeOff className="password-toggle" onClick={toggleConfirmPasswordVisibility} />
          ) : (
            <FiEye className="password-toggle" onClick={toggleConfirmPasswordVisibility} />
          )}
        </div><br/>
        <button className='signup-button ' type="submit">Sign Up</button>
        <p className='redirect'>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  ); 
}

export default SignUp;
