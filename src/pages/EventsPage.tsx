import { useState } from 'react';
import { Search, Filter, MapPin, Calendar, ChevronRight, Crown, Sparkles, Video, MessageCircle, CreditCard, WifiOff, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import ThemeToggle from '../components/ThemeToggle';
import { useAuth } from '../contexts/AuthContext';
import eventsData from '../data/events.json';

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'music' | 'sport' | 'culture' | 'food' | 'relax'>('all');
  const { user } = useAuth();

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || event.type === filterType;
    return matchesSearch && matchesType;
  });

  // Événements prochains
  const upcomingEvents = eventsData
    .filter(event => new Date(event.date) > new Date())
    .slice(0, 3);

  // Événements premium avec AfterMovie
  const premiumEvents = eventsData
    .filter(event => event.isPremium)
    .slice(0, 4);

  // Événements avec chat activé
  const chatEvents = eventsData.filter(
    (event) => 'chatEnabled' in event && event.chatEnabled
  )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 pb-20">
      {/* Header Sticky */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                Événements GBADOU
              </h1>
              {user && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Bonjour, <span className="font-semibold text-violet-600 dark:text-violet-400">{user.fullName}</span> 👋
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
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white/70 dark:bg-gray-800/70 border border-white/50 dark:border-gray-700/50 focus:ring-2 focus:ring-violet-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base backdrop-blur-sm"
            />
          </div>

          {/* Filtres */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { value: 'all', label: '🎭 Tous' },
              { value: 'music', label: '🎵 Musique' },
              { value: 'sport', label: '⚽ Sport' },
              { value: 'culture', label: '🎨 Culture' },
              { value: 'food', label: '🍔 Resto & Lounge' },
              { value: 'relax', label: '🏖️ Détente' },
            ].map((filter) => (
              <motion.button
                key={filter.value}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterType(filter.value as any)}
                className={`px-3 sm:px-4 py-2 rounded-full font-semibold transition-all whitespace-nowrap text-sm sm:text-base flex-shrink-0 backdrop-blur-sm border ${
                  filterType === filter.value
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg border-transparent'
                    : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-700/50 border-white/30 dark:border-gray-600/30'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Section Paiement CinetPay */}
        {searchTerm === '' && filterType === 'all' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8"
          >
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden border border-white/20 shadow-2xl">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold w-fit flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    PAIEMENT CINETPAY
                  </div>
                  <div className="text-white/80 text-sm">
                    MTN • Moov • Visa • Mastercard
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black mb-2 tracking-tight">
                  Paiement Sécurisé Instantané
                </h3>
                <p className="text-white/90 mb-4 text-sm sm:text-base">
                  Réservez en 2 clics avec votre moyen de paiement préféré
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center mb-4 sm:mb-6">
                  {[
                    { icon: "📱", label: "MTN Money" },
                    { icon: "📲", label: "Moov Money" },
                    { icon: "💳", label: "Visa" },
                    { icon: "💳", label: "Mastercard" }
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
              </div>
            </div>
          </motion.section>
        )}

        {/* Section Événements Premium avec AfterMovie */}
        {searchTerm === '' && filterType === 'all' && premiumEvents.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <div className="flex items-center gap-3">
                <h2 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight">
                  <Crown className="w-5 h-5 text-yellow-500 inline mr-2" />
                  Événements Premium
                </h2>
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  AFTERMOVIE INCLUS
                </span>
              </div>
              <Link 
                to="/events?filter=premium" 
                className="text-violet-600 dark:text-violet-400 text-sm font-semibold hover:text-violet-700 dark:hover:text-violet-300 flex items-center gap-1"
              >
                Voir tout <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden border border-white/20 shadow-2xl">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold w-fit flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    EXPÉRIENCE COMPLÈTE
                  </div>
                  <div className="text-white/80 text-sm">
                    Vidéo souvenir offerte après chaque événement !
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black mb-2 tracking-tight">
                  Vivez l'Expérience GBADOU Premium
                </h3>
                <p className="text-white/90 mb-4 text-sm sm:text-base">
                  Billet + AfterMovie professionnel inclus • Accès VIP • Photos exclusives
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center mb-4 sm:mb-6">
                  {[
                    { icon: "🎬", label: "AfterMovie" },
                    { icon: "⭐", label: "Accès VIP" },
                    { icon: "📸", label: "Photos Pro" },
                    { icon: "🎁", label: "Goodies" }
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
                  <Link to="/events?filter=premium" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white text-violet-600 px-4 sm:px-6 py-3 rounded-full font-black hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base tracking-tight"
                    >
                      DÉCOUVRIR LE PREMIUM
                    </motion.button>
                  </Link>
                  <Link to="/aftermovies">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white px-4 sm:px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base"
                    >
                      Voir les AfterMovies
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Section Chat Événement */}
        {searchTerm === '' && filterType === 'all' && chatEvents.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden border border-white/20 shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold w-fit flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    CHAT ÉVÉNEMENT
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-black mb-2 tracking-tight">
                      Discutez avec les Participants
                    </h3>
                    <p className="text-white/90 mb-4 text-sm sm:text-base">
                      Échangez avant, pendant et après l'événement avec la communauté
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="font-bold">💬</span>
                        <span>Salons dédiés</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold">👥</span>
                        <span>Réseautage</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold">📸</span>
                        <span>Partage de photos</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/events?filter=chat">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-blue-600 px-6 py-3 rounded-full font-black hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"
                    >
                      REJOINDRE LES CHATS
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Section Programme de Parrainage */}
        {searchTerm === '' && filterType === 'all' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8"
          >
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden border border-white/20 shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold w-fit flex items-center gap-2">
                    <Gift className="w-4 h-4" />
                    PROGRAMME AMBASSADEUR
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-black mb-2 tracking-tight">
                      Deviens Ambassadeur GBADOU
                    </h3>
                    <p className="text-white/90 mb-4 text-sm sm:text-base">
                      Parraine tes amis et gagne jusqu'à 15% de cashback sur chaque réservation
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="font-bold">🎫</span>
                        <span>Billets offerts</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold">💰</span>
                        <span>15% cashback</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold">⭐</span>
                        <span>Avantages VIP</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/ambassador">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-amber-600 px-6 py-3 rounded-full font-black hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"
                    >
                      DEVENIR AMBASSADEUR
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Section Mode Hors-ligne */}
        {searchTerm === '' && filterType === 'all' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8"
          >
            <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden border border-white/20 shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold w-fit flex items-center gap-2">
                    <WifiOff className="w-4 h-4" />
                    MODE HORS-LIGNE
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-black mb-2 tracking-tight">
                      Accès aux Billets Sans Internet
                    </h3>
                    <p className="text-white/90 mb-4 text-sm sm:text-base">
                      Vos billets restent accessibles même sans connexion
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="font-bold">📱</span>
                        <span>QR Codes hors-ligne</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold">🎫</span>
                        <span>Billets téléchargés</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold">🔒</span>
                        <span>Sécurisé</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <WifiOff className="w-12 h-12 mx-auto mb-2 text-white/60" />
                    <p className="text-white/80 text-sm">Activé automatiquement</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Section Événements Prochains */}
        {searchTerm === '' && filterType === 'all' && upcomingEvents.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <h2 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight">
                🔥 Prochainement
              </h2>
              <Link 
                to="/events?filter=upcoming" 
                className="text-violet-600 dark:text-violet-400 text-sm font-semibold hover:text-violet-700 dark:hover:text-violet-300 flex items-center gap-1"
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
                  className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl p-4 text-white border border-white/10 shadow-lg"
                >
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString('fr-FR', { 
                      day: 'numeric', 
                      month: 'short' 
                    })}
                  </div>
                  <h3 className="font-black text-base sm:text-lg mb-1 line-clamp-2 tracking-tight">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm opacity-90">
                    <MapPin className="w-3 h-3" />
                    <span className="line-clamp-1">{event.venue}, {event.city}</span>
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
          <h2 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight">
            {searchTerm || filterType !== 'all' ? 'Résultats' : 'Tous les événements'}
            <span className="text-gray-500 text-base sm:text-lg font-normal ml-2">
              ({filteredEvents.length})
            </span>
          </h2>
          
          {filteredEvents.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-3 py-2 border border-white/30 dark:border-gray-600/30">
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
            className="text-center py-12 sm:py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-600/30"
          >
            <Filter className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-500 dark:text-gray-400 mb-2">
              Aucun événement trouvé
            </h3>
            <p className="text-gray-400 dark:text-gray-500 mb-4 text-sm sm:text-base">
              Essayez de modifier vos critères de recherche
            </p>
            <motion.button
              onClick={() => {
                setSearchTerm('');
                setFilterType('all');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-full font-black hover:shadow-lg transition-all tracking-tight"
            >
              VOIR TOUS LES ÉVÉNEMENTS
            </motion.button>
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