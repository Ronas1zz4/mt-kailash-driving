// src/pages/SuccessPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.successMessage}>Payment Successful!</h1>
      <p style={styles.description}>Thank you for your payment. Your transaction has been completed successfully.</p>
      <Link to="/" style={styles.homeLink}>Go to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  successMessage: {
    color: '#4CAF50',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1.2rem',
    margin: '20px 0',
  },
  homeLink: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default SuccessPage;
