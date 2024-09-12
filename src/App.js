/*// src/App.js
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="app-container">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {isLogin ? (
        <LoginForm onLogin={() => setIsLogin(true)} />
      ) : (
        <SignupForm />
      )}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default App;*/


/*import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route 
            path="/" 
            element={
              isLogin ? <LoginSection setIsLogin={setIsLogin} /> : <SignupSection setIsLogin={setIsLogin} />
            } 
          />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

const LoginSection = ({ setIsLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logic to handle login success
    navigate('/home'); // Redirect to the home page
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
      <center><button onClick={() => setIsLogin(false)}>
        Need an account? Sign Up
      </button></center>
    </div>
  );
};

const SignupSection = ({ setIsLogin }) => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Logic to handle signup success
    navigate('/home'); // Redirect to the home page
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <SignupForm onSignup={handleSignup} />
      <center><button onClick={() => setIsLogin(true)}>
        Already have an account? Login
      </button></center>
    </div>
  );
};

const HomePage = () => {
  return <h2>Welcome to the Home Page!</h2>;
};

export default App;*/


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Removed useNavigate import
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route 
            path="/" 
            element={
              isLogin ? <LoginSection setIsLogin={setIsLogin} /> : <SignupSection setIsLogin={setIsLogin} />
            } 
          />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

const LoginSection = ({ setIsLogin }) => {
  const handleLogin = () => {
    // Logic to handle login success
    window.location.href = 'https://sudeep-m-shetty-portfolio.netlify.app/'; // Redirect to the external URL
  };

  return (
    <div>
      <h1>Summary Sage🦉</h1>
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
      <center><button onClick={() => setIsLogin(false)}>
        Need an account? Sign Up
      </button></center>
    </div>
  );
};

const SignupSection = ({ setIsLogin }) => {
  const handleSignup = () => {
    // Logic to handle signup success
    window.location.href = 'https://sudeep-m-shetty-portfolio.netlify.app/'; // Redirect to the external URL
  };

  return (
    <div>
      <h1>Summary Sage🦉</h1>
      <h2>Sign Up</h2>
      <SignupForm onSignup={handleSignup} />
      <center><button onClick={() => setIsLogin(true)}>
        Already have an account? Login
      </button></center>
    </div>
  );
};

const HomePage = () => {
  return <h2>Welcome to the Home Page!</h2>;
};

export default App;