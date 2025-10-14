import { User, Ticket, Star, Gift, Settings, LogOut, Mail, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import TicketCard from '../components/TicketCard';
import { useBookings } from '../contexts/BookingContext';
import { useAuth } from '../contexts/AuthContext';

export default function ProfilePage() {
  const { bookings } = useBookings();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Stats utilisateur
  const userStats = [
    { label: 'Événements', value: bookings.length, icon: Ticket },
    { label: 'Points', value: '1,240', icon: Star },
    { label: 'Membre depuis', value: '2024', icon: Calendar },
    { label: 'Niveau', value: 'Explorateur', icon: User }
  ];

  // Actions rapides
  const quickActions = [
    { 
      icon: Ticket, 
      label: 'Nouvelle réservation', 
      description: 'Réserver un événement',
      color: 'violet',
      link: '/events'
    },
    { 
      icon: Gift, 
      label: 'Devenir ambassadeur', 
      description: 'Gagnez des récompenses',
      color: 'amber',
      link: '/ambassador'
    },
    { 
      icon: Star, 
      label: 'Avantages membres', 
      description: 'Vos avantages exclusifs',
      color: 'blue',
      link: '/benefits'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Header Mobile First */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Burger menu pour mobile + Logo */}
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                <span className="hidden sm:inline">Accueil</span>
              </Link>
            </div>
            
            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        {/* Carte Profil - Responsive */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 border border-gray-100 dark:border-gray-700"
        >
          {/* Layout responsive pour la section profil */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
            {/* Avatar et infos */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                <User className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {user?.fullName || 'Utilisateur'}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{user?.email}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Membre depuis 2024</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bouton déconnexion */}
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors w-full sm:w-auto order-first sm:order-last"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">Déconnexion</span>
            </button>
          </div>

          {/* Stats - Grid responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-gray-100 dark:border-gray-700">
            {userStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600 mx-auto mb-2" />
                <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Grid principale responsive */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Colonne principale - Billets */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mes billets */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                  <Ticket className="w-5 h-5 text-violet-600" />
                  Mes réservations
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full w-fit">
                  {bookings.length} {bookings.length > 1 ? 'billets' : 'billet'}
                </span>
              </div>

              {bookings.length === 0 ? (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-center py-8"
                >
                  <Ticket className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 mb-2 sm:mb-4">
                    Aucune réservation pour le moment
                  </p>
                  <Link to="/events">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-violet-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors text-sm sm:text-base"
                    >
                      Explorer les événements
                    </motion.button>
                  </Link>
                </motion.div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {bookings.map((booking, index) => (
                    <motion.div
                      key={booking.id}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <TicketCard
                        id={booking.id}
                        eventTitle={booking.eventTitle}
                        eventDate={booking.eventDate}
                        eventVenue={booking.eventVenue}
                        category={booking.category}
                        userName={booking.userName}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Colonne latérale - Actions */}
          <div className="space-y-6">
            {/* Actions rapides */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Actions rapides
              </h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.link}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className={`w-full flex items-center gap-3 p-3 sm:p-4 rounded-xl hover:bg-${action.color}-50 dark:hover:bg-${action.color}-900/20 transition-colors text-left border border-transparent hover:border-${action.color}-200 dark:hover:border-${action.color}-800
                        ${action.color === 'violet' ? 'bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300' : ''}
                        ${action.color === 'amber' ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300' : ''}
                        ${action.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' : ''}
                      `}
                    >
                      <action.icon className="w-5 h-5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm sm:text-base truncate">
                          {action.label}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {action.description}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </motion.button>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Paramètres */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Paramètres
              </h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left">
                  <Settings className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Paramètres du compte</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
                </button>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left">
                  <Star className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Avantages membres</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}