import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    navbar: {
      backgroundColor: '#1e2a3a',
      color: '#fff',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    navLinks: {
      display: 'flex',
      gap: '1rem',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1rem',
    },
    hero: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#f0f0f0',
    },
    heroTitle: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      color: '#333',
    },
    heroText: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      color: '#555',
      textAlign: 'center',
      maxWidth: '600px',
    },
    heroButton: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    footer: {
      backgroundColor: '#1e2a3a',
      color: '#fff',
      padding: '1rem',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.navbar}>
        <div>Book Rent</div>
        <nav style={styles.navLinks}>
          <Link to="/login" style={styles.navLink}>Login</Link>
          <Link to="/register" style={styles.navLink}>Register</Link>
          <Link to="/books" style={styles.navLink}>Books</Link>
        </nav>
      </header>

      <main style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to Book Rent</h1>
        <p style={styles.heroText}>
          Discover a wide range of books available for rent. Join our community today and start renting books easily and affordably!
        </p>
        <Link to="/register" style={styles.heroButton}>Get Started</Link>
      </main>

      <footer style={styles.footer}>
        <p>© 2024 Book Rent. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
