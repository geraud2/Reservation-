import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Share, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import eventsData from '../data/events.json';

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const event = eventsData.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
            Événement non trouvé
          </p>
          <button
            onClick={() => navigate('/events')}
            className="bg-violet-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-700 transition-colors"
          >
            Retour aux événements
          </button>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    // Vérification de sécurité
    if (event.categories && event.categories[selectedCategory]) {
      navigate(`/booking/${event.id}`, {
        state: { category: event.categories[selectedCategory] },
      });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papier !');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-32">
      {/* Hero Image */}
      <div className="relative h-60 sm:h-80 overflow-hidden">
        <img
          src={event.image || '/placeholder-event.jpg'}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        
        {/* Navigation */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              <Heart 
                className={`w-5 h-5 sm:w-6 sm:h-6 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} 
              />
            </button>
            
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              <Share className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-16 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8"
        >
          {/* Event Header */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <div className="inline-block bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300 px-3 py-1 rounded-full text-sm font-semibold">
                {event.type === 'concert' ? '🎵 Concert' : '⚽ Match'}
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">
              {event.title}
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Event Details */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Calendar className="w-5 h-5 text-violet-600 flex-shrink-0" />
              <span className="font-medium text-sm sm:text-base">
                {new Date(event.date).toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Clock className="w-5 h-5 text-violet-600 flex-shrink-0" />
              <span className="text-sm sm:text-base">{event.time}</span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <MapPin className="w-5 h-5 text-violet-600 flex-shrink-0" />
              <span className="text-sm sm:text-base">{event.venue}, {event.city}</span>
            </div>
          </div>

          {/* Categories Selection */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Choisis ta catégorie
            </h2>
            
            <div className="space-y-3">
              {event.categories && event.categories.map((category, index) => (
                <motion.button
                  key={index}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(index)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    selectedCategory === index
                      ? 'border-violet-600 bg-violet-50 dark:bg-violet-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <div className="flex-1">
                      <span className="font-semibold text-gray-900 dark:text-white text-base">
                        {category.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-end">
                      <span className="text-lg sm:text-xl font-bold text-violet-600 dark:text-violet-400">
                        {category.price}€
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6 sm:mb-8">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              💡 Informations importantes
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Présentez votre billet QR code à l'entrée</li>
              <li>• Arrivez 30 minutes avant le début</li>
              <li>• Échange et remboursement sous conditions</li>
            </ul>
          </div>

          {/* Booking Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBooking}
            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
            disabled={!event.categories || event.categories.length === 0}
          >
            {event.categories && event.categories[selectedCategory] 
              ? `Réserver ma place - ${event.categories[selectedCategory].price}€`
              : 'Réserver ma place'
            }
          </motion.button>

          {/* Mobile Safety Note */}
          <div className="mt-4 text-center sm:hidden">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              ✅ Paiement 100% sécurisé
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}