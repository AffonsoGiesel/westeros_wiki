import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import HomePage from './components/HomePage';
import './global.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignUpSuccess = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUpForm onSignUpSuccess={handleSignUpSuccess} />} />
        <Route path="/home" element={isAuthenticated ? <HomePage /> : <LoginForm setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;
