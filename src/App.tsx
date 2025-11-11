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
import GbadouNowPage from './pages/GbadouNowPage';
import ChatPage from './pages/ChatPage';
import AfterMoviePage from './pages/AfterMoviePage';
import GroupBookingPage from './pages/GroupBookingPage';
import ExploreCityPage from './pages/ExploreCityPage';
import SearchPage from './pages/SearchPage';
import RecommendationsPage from './pages/RecommendationsPage';
import OfflinePage from './pages/OfflinePage';
import QRScannerPage from './pages/QRScannerPage';

// ✅ IMPORT DES NOUVELLES PAGES WEB
import AdminSplash from './pages/AdminSplash';
import PartnerSplash from './pages/PartnerSplash';
import AdminLogin from './pages/AdminLogin';
import PartnerLogin from './pages/PartnerLogin';
import AdminRegister from './pages/AdminRegister';
import PartnerRegister from './pages/PartnerRegister';
import PartnerPortal from './pages/PartnerPortal';
import AdminDashboard from './pages/AdminDashboard';

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

// ✅ FONCTION POUR LES ROUTES WEB (séparées de l'app mobile)
function WebRoute({ children }: ProtectedRouteProps) {
  // Pour les pages web, on peut avoir une logique d'auth différente
  // Pour l'instant, on laisse accessible sans auth pour le développement
  return children;
}

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Routes>
          {/* ==================== */}
          {/* ROUTES PUBLIQUES MOBILE */}
          {/* ==================== */}
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

          {/* ==================== */}
          {/* ROUTES WEB - ADMIN & PARTNER */}
          {/* ==================== */}
          {/* Splash Screens */}
          <Route path="/admin-splash" element={<AdminSplash />} />
          <Route path="/partner-splash" element={<PartnerSplash />} />
          
          {/* Authentication Web */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/partner-login" element={<PartnerLogin />} />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/partner-register" element={<PartnerRegister />} />
          
          {/* Applications Web Principales */}
          <Route path="/partner/*" element={
            <WebRoute>
              <PartnerPortal />
            </WebRoute>
          } />
          <Route path="/admin/*" element={
            <WebRoute>
              <AdminDashboard />
            </WebRoute>
          } />
          
          {/* ==================== */}
          {/* ROUTES PROTÉGÉES MOBILE */}
          {/* ==================== */}
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

          {/* ==================== */}
          {/* ROUTES FEATURES MOBILE */}
          {/* ==================== */}
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

          {/* ==================== */}
          {/* REDIRECTIONS */}
          {/* ==================== */}
          {/* Redirection vers l'app mobile par défaut */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        {/* ==================== */}
        {/* BOTTOM NAV - UNIQUEMENT POUR MOBILE */}
        {/* ==================== */}
        {isAuthenticated && 
         !window.location.hash.includes('/partner') && 
         !window.location.hash.includes('/admin') && 
         !window.location.hash.includes('/admin-') && 
         !window.location.hash.includes('/partner-') && 
         <BottomNav />}
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