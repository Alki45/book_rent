import React, { useState } from 'react';
import styles from '../Style';

const RegistrationOwner = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          full_name: formData.fullName,
          phone_number: formData.phoneNumber,
          address: formData.address,
          date_of_birth: formData.dateOfBirth,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('User registered successfully');
        window.location.href = '/login';
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred while registering the user');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPane}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Book_font_awesome.svg/1024px-Book_font_awesome.svg.png" 
          alt="Book Logo" 
          style={styles.logo} 
        />
      </div>
      <div style={styles.rightPane}>
        <h2>Book Rent</h2>
        <h3>Signup</h3>
        <form style={styles.form} onSubmit={handleSubmit}>
          <p>User name:</p><input 
            type="text" 
            name="username" 
            placeholder="Username" 
            style={styles.input} 
            value={formData.username}
            onChange={handleChange}
            required
          />
          <p>Email:</p><input 
            type="email" 
            name="email" 
            placeholder="Email address" 
            style={styles.input} 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <p>Password: </p><input 
            type="password" 
            name="password" 
            placeholder="Password" 
            style={styles.input} 
            value={formData.password}
            onChange={handleChange}
            required
          />
          <p>Confirm Password:</p><input 
            type="password" 
            name="confirmPassword" 
            placeholder="Confirm Password" 
            style={styles.input} 
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <p>Full Name:</p><input 
            type="text" 
            name="fullName" 
            placeholder="Full Name" 
            style={styles.input} 
            value={formData.fullName}
            onChange={handleChange}
          />
          <p>Phone Number: </p><input 
            type="text" 
            name="phoneNumber" 
            placeholder="Phone Number" 
            style={styles.input} 
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <p>Address: </p><input 
            type="text" 
            name="address" 
            placeholder="Address" 
            style={styles.input} 
            value={formData.address}
            onChange={handleChange}
          />
          <p>Date Of Birth:</p><input 
            type="date" 
            name="dateOfBirth" 
            placeholder="Date of Birth" 
            style={styles.input} 
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          <div style={styles.checkboxContainer}>
            <input type="checkbox" style={styles.checkbox} />
            <label>I accept the Terms and Conditions</label>
          </div>
          <button type="submit" style={styles.button}>SIGN UP</button>
          <a href="/login" style={styles.loginLink}>Already have an account? Login</a>
        </form>
      </div>
    </div>
  );
};

export default RegistrationOwner;
