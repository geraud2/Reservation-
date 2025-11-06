import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Star, Users, MapPin, Calendar, Zap, TrendingUp, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function RecommendationsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('for-you');

  const recommendationCategories = [
    {
      id: 'for-you',
      name: 'Pour Vous',
      description: 'Basé sur vos préférences et historique',
      icon: '💫',
      color: 'from-violet-600 to-fuchsia-600'
    },
    {
      id: 'trending',
      name: 'Tendances',
      description: 'Événements populaires en ce moment',
      icon: '🔥',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'nearby',
      name: 'Proche de Vous',
      description: 'Découvertes locales autour de vous',
      icon: '📍',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Expériences exclusives et VIP',
      icon: '⭐',
      color: 'from-amber-600 to-yellow-500'
    }
  ];

  const userPreferences = {
    favoriteCategories: ['music', 'sport'],
    favoriteArtists: ['Artiste Afrobeat', 'DJ Local'],
    preferredPriceRange: '5-20k',
    location: 'Cotonou',
    activityLevel: 'high'
  };

  const personalizedRecommendations = [
    {
      id: 1,
      title: "Concert Afrobeat Exclusive",
      category: "music",
      match: 95,
      reason: "Basé sur votre amour pour la musique Afrobeat",
      date: "18 DÉC 2024",
      city: "Cotonou",
      venue: "Palais des Congrès",
      price: "12,000 FCFA",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      rating: 4.8,
      participants: "1.5K",
      isPremium: true,
      tags: ["Vos artistes préférés", "Prix dans votre budget", "Proche de vous"]
    },
    {
      id: 2,
      title: "Tournoi Basketball Pro",
      category: "sport",
      match: 88,
      reason: "Similarité avec vos événements sportifs précédents",
      date: "22 DÉC 2024",
      city: "Cotonou", 
      venue: "Stade Charles de Gaulle",
      price: "8,000 FCFA",
      image: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg",
      rating: 4.6,
      participants: "2.3K",
      isPremium: false,
      tags: ["Sport préféré", "Ambiance garantie", "Accessible"]
    }
  ];

  const trendingRecommendations = [
    {
      id: 3,
      title: "Festival des Lumières",
      category: "culture",
      trend: "🔥 Très populaire",
      trendStats: "+245% cette semaine",
      date: "20 DÉC 2024",
      city: "Ouidah",
      venue: "Route des Esclaves",
      price: "6,000 FCFA",
      image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
      rating: 4.9,
      participants: "8.7K",
      isPremium: false,
      tags: ["Tendance nationale", "Expérience unique", "Culturel"]
    },
    {
      id: 4,
      title: "Soirée Beach Party",
      category: "detente",
      trend: "📈 En croissance",
      trendStats: "+156% cette semaine", 
      date: "16 DÉC 2024",
      city: "Cotonou",
      venue: "Plage de Fidjrossè",
      price: "10,000 FCFA",
      image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
      rating: 4.7,
      participants: "3.2K",
      isPremium: true,
      tags: ["Ambiance festive", "Lieu populaire", "Soirée exclusive"]
    }
  ];

  const nearbyRecommendations = [
    {
      id: 5,
      title: "Jam Session Live",
      category: "music",
      distance: "0.8 km",
      duration: "15 min en voiture",
      date: "14 DÉC 2024",
      city: "Cotonou",
      venue: "Bar Le Plateau",
      price: "5,000 FCFA",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
      rating: 4.4,
      participants: "450",
      isPremium: false,
      tags: ["À proximité", "Ambiance intimiste", "Prix abordable"]
    },
    {
      id: 6,
      title: "Match Amical Football",
      category: "sport",
      distance: "1.2 km", 
      duration: "20 min à pied",
      date: "15 DÉC 2024",
      city: "Cotonou",
      venue: "Stade Municipal",
      price: "3,000 FCFA",
      image: "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg",
      rating: 4.3,
      participants: "1.8K",
      isPremium: false,
      tags: ["Stade proche", "Communauté locale", "Sport accessible"]
    }
  ];

  const premiumRecommendations = [
    {
      id: 7,
      title: "Dîner Gastronomique VIP",
      category: "resto",
      exclusivity: "🌟 Expérience unique",
      benefits: ["Rencontre chef", "Menu dégustation", "Vin accord"],
      date: "19 DÉC 2024",
      city: "Cotonou",
      venue: "Restaurant L'Escale",
      price: "25,000 FCFA",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      rating: 4.9,
      participants: "24",
      isPremium: true,
      tags: ["Cuisine raffinée", "Cadre exceptionnel", "Service VIP"]
    },
    {
      id: 8,
      title: "Concert Privé Rooftop",
      category: "music",
      exclusivity: "💎 Événement limité",
      benefits: ["Artiste exclusif", "Cocktails premium", "Vue panoramique"],
      date: "21 DÉC 2024",
      city: "Cotonou",
      venue: "Rooftop Skybar",
      price: "30,000 FCFA",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      rating: 5.0,
      participants: "50",
      isPremium: true,
      tags: ["Capacité limitée", "Artiste renommé", "Cadre exceptionnel"]
    }
  ];

  const getRecommendations = () => {
    switch (activeTab) {
      case 'for-you':
        return personalizedRecommendations;
      case 'trending':
        return trendingRecommendations;
      case 'nearby':
        return nearbyRecommendations;
      case 'premium':
        return premiumRecommendations;
      default:
        return personalizedRecommendations;
    }
  };

  const getCategoryInfo = (category: string) => {
    return recommendationCategories.find(cat => cat.id === activeTab);
  };

  const currentCategory = getCategoryInfo(activeTab);
  const currentRecommendations = getRecommendations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" />
          </button>
          <h1 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight">
            Recommandations
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-gray-900 dark:text-white tracking-tight">
            Découvertes Personnalisées
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Des suggestions intelligentes basées sur vos goûts et votre activité
          </p>
        </motion.div>

        {/* User Profile Summary */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg border border-white/20 dark:border-gray-700/50"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-black text-gray-900 dark:text-white text-lg mb-2 tracking-tight">
                Votre Profil de Découverte
              </h3>
              <div className="flex flex-wrap gap-2">
                {userPreferences.favoriteCategories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/20 dark:to-fuchsia-900/20 text-violet-700 dark:text-violet-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {category === 'music' ? '🎵 Musique' : '⚽ Sport'}
                  </span>
                ))}
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                  📍 {userPreferences.location}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-violet-600 dark:text-violet-400">
                12
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                événements aimés
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recommendation Tabs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {recommendationCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(category.id)}
                className={`p-4 rounded-2xl text-left transition-all border ${
                  activeTab === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg border-transparent`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-white/20 dark:border-gray-700/50 hover:shadow-md'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="font-semibold text-sm mb-1">{category.name}</div>
                <div className={`text-xs ${
                  activeTab === category.id ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {category.description}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Current Category Header */}
        {currentCategory && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${currentCategory.color} rounded-xl flex items-center justify-center text-white text-xl`}>
              {currentCategory.icon}
            </div>
            <div>
              <h3 className="font-black text-gray-900 dark:text-white text-xl tracking-tight">
                {currentCategory.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {currentCategory.description}
              </p>
            </div>
          </motion.div>
        )}

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentRecommendations.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-white/20 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image & Match Score */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Match Score for Personalized */}
                {'match' in event && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-white" />
                    {event.match}% match
                  </div>
                )}

                {/* Trend Indicator */}
                {'trend' in event && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {event.trend}
                  </div>
                )}

                {/* Distance for Nearby */}
                {'distance' in event && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {event.distance}
                  </div>
                )}

                {/* Premium Badge */}
                {event.isPremium && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    PREMIUM
                  </div>
                )}

                {/* Exclusivity for Premium */}
                {'exclusivity' in event && (
                  <div className="absolute bottom-3 left-3 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {event.exclusivity}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-black text-gray-900 dark:text-white text-lg tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-1">
                      {event.title}
                    </h3>
                    
                    {/* Reason/Match Info */}
                    {'reason' in event && (
                      <p className="text-green-600 dark:text-green-400 text-sm font-medium mb-2">
                        {event.reason}
                      </p>
                    )}

                    {/* Trend Stats */}
                    {'trendStats' in event && (
                      <p className="text-amber-600 dark:text-amber-400 text-sm font-medium mb-2">
                        <TrendingUp className="w-3 h-3 inline mr-1" />
                        {event.trendStats}
                      </p>
                    )}

                    {/* Duration for Nearby */}
                    {'duration' in event && (
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {event.duration}
                      </p>
                    )}

                    {/* Event Details */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
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
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {event.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats & Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span>{event.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{event.participants}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-black text-violet-600 dark:text-violet-400 text-lg">
                      {event.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate(`/event/${event.id}`)}
                      className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all"
                    >
                      Découvrir
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Recommendations */}
        {currentRecommendations.length === 0 && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
              Aucune recommandation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Continuez à explorer des événements pour améliorer vos suggestions
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/events')}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-3 rounded-full font-black hover:shadow-lg transition-all tracking-tight"
            >
              Explorer les événements
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}