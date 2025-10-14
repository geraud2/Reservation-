import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { BookingProvider } from './contexts/BookingContext';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import FeaturesPage from './pages/FeaturesPage';
import AmbassadorPage from './pages/AmbassadorPage';
import DownloadPage from './pages/DownloadPage';

function App() {
  return (
    <ThemeProvider>
      <BookingProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/event/:id" element={<EventDetailsPage />} />
              <Route path="/booking/:id" element={<BookingPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/ambassador" element={<AmbassadorPage />} />
              <Route path="/download" element={<DownloadPage />} />
            </Routes>
            <BottomNav />
          </div>
        </BrowserRouter>
      </BookingProvider>
    </ThemeProvider>
  );
}

export default App;
