import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchBar from './common/SearchBar';
// Create an AuthContext to manage authentication state
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      setCurrentUser(null);
      localStorage.removeItem('user');
      navigate('/');
    }
  };

  const value = {
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default function NavBar({ searchTerm, onSearchChange }) {
  const { currentUser, logout } = useAuth();
  const isLoggedIn = !!currentUser;
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Navigate to user profile or show profile dropdown
  };

  return (
    <div className='nav'>
      <img 
        width="150px" 
        height="100px" 
        src= '/Logo.png' 
        alt="logo" 
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/')}
      />
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        placeholder="Search movies..."
      />
      <div className='link login-link'>
        {isLoggedIn ? (
          <div className="user-menu">
            <div className="user-profile" onClick={handleProfileClick}>
              <span className="username">{currentUser?.username}</span>
            </div>
            <div className="user-dropdown">
              <div className="dropdown-item" onClick={logout}>
                Logout
              </div>
            </div>
          </div>
        ) : (
          <NavLink to="/" className="login-btn">
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
}
