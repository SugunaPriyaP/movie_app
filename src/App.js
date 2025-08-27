import './App.css';
import MovieDetails from './Components/MovieDetails';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Components/NavBar';

// Protected Route component
function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" replace />;
}

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route 
        path="/MovieDetails" 
        element={
          <ProtectedRoute>
            <MovieDetails />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;