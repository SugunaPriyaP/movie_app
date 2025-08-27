import React from 'react';
import { auth, provider } from '../OAuth/firebase.js';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './NavBar';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = {
          uid: result.user.uid,
          username: result.user.displayName || 'User',
          email: result.user.email,
          photoURL: result.user.photoURL
        };
        
        // Save user data to context and localStorage
        login(user);
        
        // Navigate to the main page
        navigate('/MovieDetails');
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
        alert('Failed to sign in. Please try again.');
      });
  };

  return (
    <div className='login' style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Welcome to Netflix</h1>
      <button 
        onClick={signInWithGoogle} 
        style={{
          padding: '12px 24px',
          fontSize: '1.2rem',
          backgroundColor: '#e50914',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          ':hover': {
            backgroundColor: '#f40612'
          }
        }}
      >
        Sign In with Google
      </button>
    </div>
  );
}

export default Login;