import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  const switchToSignUp = () => {
    setShowLogin(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="container">
      <div className={`form-container ${showLogin ? 'login' : 'signup'}`}>
        <h2>{showLogin ? <i className="fas fa-key"></i> : <i className="fas fa-user"></i>} {showLogin ? 'Sign In' : 'New Account'}</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input placeholder='email' name="email" type="text" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input placeholder='password' name="password" type="password" />
          </div>
          {!showLogin && (
            <div className="form-group">
              
            </div>
          )}
          <button className="Loginbut" type="submit">{showLogin ? 'Sign In' : 'Create'}</button>
        </form>
        <p className={`link-${showLogin ? 'login' : 'signUp'}`}>
          {showLogin ? "Don't have an account yet?" : "Already have an account?"}
          <span className="switchText" onClick={showLogin ? switchToSignUp : switchToLogin}>
            {showLogin ? ' Sign up!' : ' Sign in!'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
