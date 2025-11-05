// App.jsx
import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { BookingProvider } from './contexts/BookingContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import BottomNav from './components/BottomNav';
import SplashScreen from './components/SplashScreen';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import FeaturesPage from './pages/FeaturesPage';
import AmbassadorPage from './pages/AmbassadorPage';
import DownloadPage from './pages/DownloadPage';
import Login from './pages/Login';
import Register from './pages/Register';

// CORRECTION : Ajout de l'import pour children
import React from 'react';

// CORRECTION : Définition correcte du type children
interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

interface PublicRouteProps {
  children: React.ReactNode;
}

function PublicRoute({ children }: PublicRouteProps) {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? children : <Navigate to="/" replace />;
}

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Réduit à 3s pour meilleure UX

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Routes>
          {/* Routes publiques */}
          <Route path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
          <Route path="/register" element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          } />
          
          {/* Routes protégées */}
          <Route path="/" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
          <Route path="/events" element={
            <ProtectedRoute>
              <EventsPage />
            </ProtectedRoute>
          } />
          <Route path="/event/:id" element={
            <ProtectedRoute>
              <EventDetailsPage />
            </ProtectedRoute>
          } />
          <Route path="/booking/:id" element={
            <ProtectedRoute>
              <BookingPage />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/features" element={
            <ProtectedRoute>
              <FeaturesPage />
            </ProtectedRoute>
          } />
          <Route path="/ambassador" element={
            <ProtectedRoute>
              <AmbassadorPage />
            </ProtectedRoute>
          } />
          <Route path="/download" element={
            <ProtectedRoute>
              <DownloadPage />
            </ProtectedRoute>
          } />

          {/* Redirection par défaut */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        {/* CORRECTION : BottomNav seulement si authentifié */}
        {isAuthenticated && <BottomNav />}
      </div>
    </HashRouter>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BookingProvider>
          <AppContent />
        </BookingProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;