import React, { useState } from 'react';
import api from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await api.post('/api/signup', {
        registration: {
          email,
          password,
          password_confirmation: passwordConfirmation
        }
      });

      console.log('Usuário criado com sucesso!:', response.data);
      setSuccessMessage('Cadastro realizado com sucesso! Redirecionando para a tela de login.');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Erro ao fazer cadastro:', error);
      setError('Erro ao fazer cadastro. Verifique os dados e tente novamente.');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <div className="signup-form-container">
      <h2>Cadastro</h2>
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
      <input
        type="password"
        placeholder="Confirme a Senha"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <button onClick={handleSignUp}>Explore Westeros agora!</button>
      <button onClick={handleLoginRedirect}>Voltar para Login</button>
    </div>
  );
}

export default SignUpForm;
