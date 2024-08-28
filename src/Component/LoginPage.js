import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../download.jpeg';
import styles from '../Style';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      if (response.data.success) {
        console.log('Login successful:', response.data);
        window.location.href = '/bookrent';
      } else {
        setError('Invalid login credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPane}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.rightPane}>
        <h2>Login</h2>
        <form style={styles.form} onSubmit={handleLogin}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            style={styles.input} 
            required
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={styles.input} 
            required
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>LOGIN</button>
          <a href="/register" style={styles.signupLink}>Don't have an account? Sign Up</a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
