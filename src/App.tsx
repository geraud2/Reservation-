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

// NOUVELLES PAGES FEATURES
import WalletPage from './pages/WalletPage';
import GiftTicketPage from './pages/GiftTicketPage';
import NotificationsPage from './pages/NotificationsPage';
import GbadouNowPage from './pages/GbadouNowPage'; // Corrected import path
import ChatPage from './pages/ChatPage';
import AfterMoviePage from './pages/AfterMoviePage';
import GroupBookingPage from './pages/GroupBookingPage';
import ExploreCityPage from './pages/ExploreCityPage';
import SearchPage from './pages/SearchPage';
import RecommendationsPage from './pages/RecommendationsPage';
import OfflinePage from './pages/OfflinePage';
import QRScannerPage from './pages/QRScannerPage';

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
          
          {/* Routes protégées principales */}
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

          {/* NOUVELLES ROUTES FEATURES */}
          <Route path="/features/wallet" element={
            <ProtectedRoute>
              <WalletPage />
            </ProtectedRoute>
          } />
          <Route path="/features/gift-ticket" element={
            <ProtectedRoute>
              <GiftTicketPage />
            </ProtectedRoute>
          } />
          <Route path="/features/notifications" element={
            <ProtectedRoute>
              <NotificationsPage />
            </ProtectedRoute>
          } />
          <Route path="/features/gbadou-now" element={
            <ProtectedRoute>
              <GbadouNowPage />
            </ProtectedRoute>
          } />
          <Route path="/features/chat" element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          } />
          <Route path="/features/aftermovie" element={
            <ProtectedRoute>
              <AfterMoviePage />
            </ProtectedRoute>
          } />
          <Route path="/features/group-booking" element={
            <ProtectedRoute>
              <GroupBookingPage />
            </ProtectedRoute>
          } />
          <Route path="/features/explore-city" element={
            <ProtectedRoute>
              <ExploreCityPage />
            </ProtectedRoute>
          } />
          <Route path="/features/search" element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          } />
          <Route path="/features/recommendations" element={
            <ProtectedRoute>
              <RecommendationsPage />
            </ProtectedRoute>
          } />
          <Route path="/features/offline" element={
            <ProtectedRoute>
              <OfflinePage />
            </ProtectedRoute>
          } />
          <Route path="/features/qr-scanner" element={
            <ProtectedRoute>
              <QRScannerPage />
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