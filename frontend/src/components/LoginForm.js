import React, { useState } from 'react';
import api from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post('/api/login', {
        email,
        password
      });

      const token = response.data.token;
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
      navigate('/home');
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
      setErrorMessage('Senha incorreta ou usuário não cadastrado.');
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h1>Bem-vindo à Wiki de Westeros!</h1>
      <div className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignUpRedirect}>Cadastro de Novo Usuário</button>
      </div>
    </div>
  );
}

export default LoginForm;
