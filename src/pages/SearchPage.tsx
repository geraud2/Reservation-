import { motion } from 'framer-motion';
import { ArrowLeft, Search, Filter, MapPin, Calendar, Ticket, Users, Star, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    price: 'all',
    date: 'all',
    city: 'all',
    rating: 'all'
  });

  const categories = [
    { id: 'all', name: 'Toutes catégories', icon: '🎭' },
    { id: 'music', name: 'Musique', icon: '🎵' },
    { id: 'sport', name: 'Sport', icon: '⚽' },
    { id: 'culture', name: 'Culture', icon: '🎨' },
    { id: 'tourisme', name: 'Tourisme', icon: '🌅' },
    { id: 'detente', name: 'Détente', icon: '🏖️' },
    { id: 'resto', name: 'Resto & Lounge', icon: '🍽️' }
  ];

  const priceRanges = [
    { id: 'all', name: 'Tous prix' },
    { id: 'free', name: 'Gratuit' },
    { id: 'under5', name: 'Moins de 5,000 FCFA' },
    { id: '5-10', name: '5,000 - 10,000 FCFA' },
    { id: '10-20', name: '10,000 - 20,000 FCFA' },
    { id: 'over20', name: 'Plus de 20,000 FCFA' }
  ];

  const dates = [
    { id: 'all', name: 'Toutes dates' },
    { id: 'today', name: "Aujourd'hui" },
    { id: 'tomorrow', name: 'Demain' },
    { id: 'weekend', name: 'Ce weekend' },
    { id: 'nextWeek', name: 'Semaine prochaine' },
    { id: 'thisMonth', name: 'Ce mois' }
  ];

  const cities = [
    { id: 'all', name: 'Toutes villes' },
    { id: 'cotonou', name: 'Cotonou' },
    { id: 'portonovo', name: 'Porto-Novo' },
    { id: 'abomey', name: 'Abomey' },
    { id: 'parakou', name: 'Parakou' },
    { id: 'ouidah', name: 'Ouidah' },
    { id: 'natitingou', name: 'Natitingou' }
  ];

  const ratings = [
    { id: 'all', name: 'Toutes notes' },
    { id: '4.5', name: '4.5+ Excellent' },
    { id: '4.0', name: '4.0+ Très bon' },
    { id: '3.5', name: '3.5+ Bon' },
    { id: '3.0', name: '3.0+ Correct' }
  ];

  const recentSearches = [
    'Concert Afrobeat',
    'Football Cotonou',
    'Festival culturel',
    'Plage Fidjrossè',
    'Restaurant local'
  ];

  const popularSearches = [
    { term: 'Concert', count: '1.2K' },
    { term: 'Match football', count: '890' },
    { term: 'Festival', count: '756' },
    { term: 'Plage', count: '543' },
    { term: 'Restaurant', count: '432' },
    { term: 'Bar lounge', count: '321' }
  ];

  const searchResults = [
    {
      id: 1,
      title: "Concert Afrobeat Live",
      category: "music",
      date: "15 DÉC 2024",
      city: "Cotonou",
      venue: "Palais des Congrès",
      price: "15,000 FCFA",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      rating: 4.8,
      participants: "1.2K",
      isPremium: true
    },
    {
      id: 2,
      title: "Tournoi de Football Local",
      category: "sport", 
      date: "20 DÉC 2024",
      city: "Cotonou",
      venue: "Stade de l'Amitié",
      price: "5,000 FCFA",
      image: "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg",
      rating: 4.5,
      participants: "5K",
      isPremium: false
    },
    {
      id: 3,
      title: "Festival Culturel Ouidah",
      category: "culture",
      date: "22 DÉC 2024", 
      city: "Ouidah",
      venue: "Place du Marché",
      price: "8,000 FCFA",
      image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
      rating: 4.7,
      participants: "3.4K",
      isPremium: true
    }
  ];

  const clearFilters = () => {
    setFilters({
      category: 'all',
      price: 'all', 
      date: 'all',
      city: 'all',
      rating: 'all'
    });
  };

  const activeFiltersCount = Object.values(filters).filter(value => value !== 'all').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" />
            </button>
            <h1 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight">
              Recherche
            </h1>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un événement, un lieu, un artiste..."
              className="w-full pl-10 pr-20 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-violet-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilters(!showFilters)}
                className={`p-2 rounded-lg transition-all ${
                  activeFiltersCount > 0
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                <Filter className="w-4 h-4" />
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Filtres</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                >
                  Tout effacer
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Catégorie */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Catégorie
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-violet-600"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                {/* Prix */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Prix
                  </label>
                  <select
                    value={filters.price}
                    onChange={(e) => setFilters({...filters, price: e.target.value})}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-violet-600"
                  >
                    {priceRanges.map(price => (
                      <option key={price.id} value={price.id}>{price.name}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date
                  </label>
                  <select
                    value={filters.date}
                    onChange={(e) => setFilters({...filters, date: e.target.value})}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-violet-600"
                  >
                    {dates.map(date => (
                      <option key={date.id} value={date.id}>{date.name}</option>
                    ))}
                  </select>
                </div>

                {/* Ville */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ville
                  </label>
                  <select
                    value={filters.city}
                    onChange={(e) => setFilters({...filters, city: e.target.value})}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-violet-600"
                  >
                    {cities.map(city => (
                      <option key={city.id} value={city.id}>{city.name}</option>
                    ))}
                  </select>
                </div>

                {/* Note */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Note
                  </label>
                  <select
                    value={filters.rating}
                    onChange={(e) => setFilters({...filters, rating: e.target.value})}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-violet-600"
                  >
                    {ratings.map(rating => (
                      <option key={rating.id} value={rating.id}>{rating.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Recent Searches */}
        {!searchQuery && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-8"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Recherches récentes</h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSearchQuery(search)}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  {search}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Popular Searches */}
        {!searchQuery && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Tendances</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {popularSearches.map((search, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSearchQuery(search.term)}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 text-left hover:shadow-lg transition-all border border-white/20 dark:border-gray-700/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 dark:text-white">{search.term}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {search.count}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Search Results */}
        {searchQuery && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
                Résultats pour "{searchQuery}"
              </h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {searchResults.length} événements trouvés
              </span>
            </div>

            <div className="space-y-4">
              {searchResults.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-4 hover:shadow-lg transition-all border border-white/20 dark:border-gray-700/50"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-black text-gray-900 dark:text-white text-lg tracking-tight mb-1">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{event.city}</span>
                            </div>
                          </div>
                        </div>
                        {event.isPremium && (
                          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            PREMIUM
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-2">
                        <span>{event.venue}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                          <span>{event.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{event.participants}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-black text-violet-600 dark:text-violet-400 text-lg">
                          {event.price}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate(`/event/${event.id}`)}
                          className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all"
                        >
                          <Ticket className="w-4 h-4 inline mr-2" />
                          Réserver
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {searchResults.length === 0 && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                  Aucun résultat trouvé
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Essayez d'autres mots-clés ou modifiez les filtres
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearFilters}
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-3 rounded-full font-black hover:shadow-lg transition-all tracking-tight"
                >
                  Effacer les filtres
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}