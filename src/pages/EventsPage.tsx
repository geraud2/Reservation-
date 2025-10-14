import { useState } from 'react';
import { Search, Filter, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import ThemeToggle from '../components/ThemeToggle';
import { useAuth } from '../contexts/AuthContext';
import eventsData from '../data/events.json';

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'concert' | 'match'>('all');
  const { user } = useAuth();

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || event.type === filterType;
    return matchesSearch && matchesType;
  });

  // Événements soon (prochainement)
  const upcomingEvents = eventsData
    .filter(event => new Date(event.date) > new Date())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Header Sticky */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Événements
              </h1>
              {user && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Bonjour, {user.fullName} 👋
                </p>
              )}
            </div>
            <ThemeToggle />
          </div>

          {/* Barre de recherche */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un événement, ville, salle..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-violet-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base"
            />
          </div>

          {/* Filtres */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { value: 'all', label: '🎭 Tous' },
              { value: 'concert', label: '🎵 Concerts' },
              { value: 'match', label: '⚽ Matchs' },
            ].map((filter) => (
              <motion.button
                key={filter.value}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterType(filter.value as any)}
                className={`px-3 sm:px-4 py-2 rounded-full font-semibold transition-colors whitespace-nowrap text-sm sm:text-base flex-shrink-0 ${
                  filterType === filter.value
                    ? 'bg-violet-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Section Événements Gratuits - RESPONSIVE */}
        {searchTerm === '' && filterType === 'all' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <div className="flex items-center gap-3">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  🎁 Événements Gratuits
                </h2>
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  FREEMIUM
                </span>
              </div>
              <Link 
                to="/events?filter=free" 
                className="text-violet-600 text-sm font-semibold hover:text-violet-700 flex items-center gap-1"
              >
                Voir tout <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold w-fit">
                    🚀 NOUVEAU
                  </div>
                  <div className="text-white/80 text-sm">
                    Profite sans dépenser un sou !
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black mb-2">
                  Soirées & Événements 100% Gratuits
                </h3>
                <p className="text-white/90 mb-4 text-sm sm:text-base">
                  Découvre une sélection d'événements exclusifs offerts par nos partenaires
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center mb-4 sm:mb-6">
                  {[
                    { icon: "🎵", label: "Concerts" },
                    { icon: "🎤", label: "Open Mics" },
                    { icon: "🎨", label: "Expos" },
                    { icon: "🎭", label: "Spectacles" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-white/10"
                    >
                      <div className="text-xl sm:text-2xl mb-1">{item.icon}</div>
                      <div className="text-xs font-semibold">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/events?filter=free" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white text-green-600 px-4 sm:px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
                    >
                      Voir les événements gratuits
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-4 sm:px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base"
                  >
                    Devenir Partenaire
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Section Événements Prochains */}
        {searchTerm === '' && filterType === 'all' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                🔥 Prochainement
              </h2>
              <Link 
                to="/events?filter=upcoming" 
                className="text-violet-600 text-sm font-semibold hover:text-violet-700 flex items-center gap-1"
              >
                Voir tout <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl p-4 text-white"
                >
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString('fr-FR', { 
                      day: 'numeric', 
                      month: 'short' 
                    })}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm opacity-90">
                    <MapPin className="w-3 h-3" />
                    <span className="line-clamp-1">{event.venue}</span>
                  </div>
                  <div className="text-xs mt-2 opacity-80">
                    À partir de {event.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Résultats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            {searchTerm || filterType !== 'all' ? 'Résultats' : 'Tous les événements'}
            <span className="text-gray-500 text-base sm:text-lg font-normal ml-2">
              ({filteredEvents.length})
            </span>
          </h2>
          
          {filteredEvents.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Trier par :</span>
              <select className="bg-transparent border-none focus:ring-0 text-sm">
                <option>Plus proche</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Date</option>
              </select>
            </div>
          )}
        </div>

        {/* Liste des événements */}
        {filteredEvents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 sm:py-16"
          >
            <Filter className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-500 dark:text-gray-400 mb-2">
              Aucun événement trouvé
            </h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4 text-sm sm:text-base">
              Essayez de modifier vos critères de recherche
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterType('all');
              }}
              className="bg-violet-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-violet-700 transition-colors text-sm sm:text-base"
            >
              Voir tous les événements
            </button>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            layout
          >
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                layout
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}