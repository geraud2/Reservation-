import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Share, Heart, Users, Video, MessageCircle, CreditCard, WifiOff, Crown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Event } from '../types';
import { useState } from 'react';
import eventsData from '../data/events.json';

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const event = eventsData.find((e) => e.id === Number(id)) as Event | undefined;

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 px-4">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
            Événement non trouvé
          </p>
          <button
            onClick={() => navigate('/events')}
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Retour aux événements
          </button>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    navigate(`/booking/${event.id}`, {
      state: { 
        event,
        selectedPrice: event.price,
        selectedType: 'standard'
      },
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.title,
          text: String(event.description) || '',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Partage annulé');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papier !');
    }
  };

  // Fonctionnalités GBADOU disponibles pour cet événement
  const gbadouFeatures = [
    { 
      icon: CreditCard, 
      label: 'Paiement CinetPay', 
      available: true,
      description: 'MTN • Moov • Visa • Mastercard'
    },
    { 
      icon: MessageCircle, 
      label: 'Chat Événement', 
      available: event.chatEnabled ?? false,
      description: 'Discutez avec les participants'
    },
    { 
      icon: Video, 
      label: 'AfterMovie', 
      available: event.isPremium || false,
      description: 'Vidéo souvenir incluse'
    },
    { 
      icon: WifiOff, 
      label: 'Hors-ligne', 
      available: true,
      description: 'Billet accessible sans internet'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 pb-32">
      {/* Hero Image */}
      <div className="relative h-60 sm:h-80 overflow-hidden">
        <img
          src={event.image}
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

        {/* Badge Premium */}
        {event.isPremium && (
          <div className="absolute bottom-4 left-4">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
              <Crown className="w-4 h-4" />
              PREMIUM - AFTERMOVIE INCLUS
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-16 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 border border-white/20 dark:border-gray-700/50"
        >
          {/* Event Header */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-block bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300 px-3 py-1 rounded-full text-sm font-semibold">
                {event.type}
              </span>
              {event.isPremium && (
                <span className="inline-block bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Premium
                </span>
              )}
              {event.chatEnabled && (
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  Chat Activé
                </span>
              )}
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-black mb-3 text-gray-900 dark:text-white leading-tight tracking-tight">
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

            {event.participants && (
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Users className="w-5 h-5 text-violet-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">{event.participants} participants</span>
              </div>
            )}
          </div>

          {/* Fonctionnalités GBADOU */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">
              🚀 Fonctionnalités GBADOU
            </h2>
            
            <div className="grid grid-cols-2 gap-3">
              {gbadouFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-3 rounded-xl border-2 text-center transition-all ${
                    feature.available
                      ? 'border-violet-600 bg-violet-50 dark:bg-violet-900/20'
                      : 'border-gray-200 dark:border-gray-700 opacity-50'
                  }`}
                >
                  <feature.icon className={`w-6 h-6 mx-auto mb-2 ${
                    feature.available ? 'text-violet-600' : 'text-gray-400'
                  }`} />
                  <div>
                    <p className={`font-semibold text-sm ${
                      feature.available ? 'text-gray-900 dark:text-white' : 'text-gray-400'
                    }`}>
                      {feature.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section AfterMovie pour les événements premium */}
          {event.isPremium && (
            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl p-4 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Video className="w-6 h-6" />
                <h3 className="font-black text-lg">AfterMovie Inclus</h3>
              </div>
              <p className="text-white/90 text-sm mb-3">
                Profitez d'une vidéo souvenir professionnelle offerte après l'événement
              </p>
              <ul className="text-white/80 text-sm space-y-1">
                <li>• 🎬 Montage professionnel</li>
                <li>• 📸 Photos haute qualité</li>
                <li>• 🚀 Disponible sous 48h</li>
                <li>• 💫 Moments mémorables</li>
              </ul>
            </div>
          )}

          {/* Section Chat pour les événements avec chat */}
          {(event.chatEnabled ?? false) && (
            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-4 text-white">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-6 h-6" />
                <h3 className="font-black text-lg">Chat Événement Activé</h3>
              </div>
              <p className="text-white/90 text-sm mb-3">
                Rejoignez la conversation avec les autres participants
              </p>
              <ul className="text-white/80 text-sm space-y-1">
                <li>• 💬 Échangez avant l'événement</li>
                <li>• 👥 Faites des rencontres</li>
                <li>• 📸 Partagez vos photos</li>
                <li>• 🎯 Coordonnez-vous</li>
              </ul>
              <button className="mt-3 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors w-full">
                Rejoindre le Chat
              </button>
            </div>
          )}

          {/* Prix et Réservation */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">
              💰 Tarifs
            </h2>
            
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl p-6 text-white text-center">
              <div className="text-3xl font-black mb-2 tracking-tight">
                {event.price}
              </div>
              <p className="text-white/80 text-sm">
                Prix par personne • Paiement sécurisé CinetPay
              </p>
            </div>
          </div>

          {/* Informations importantes */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-4 mb-6 sm:mb-8">
            <h3 className="font-black text-gray-900 dark:text-white mb-3 tracking-tight">
              💡 Informations importantes
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-violet-600 mt-0.5">•</span>
                <span>Présentez votre billet QR code à l'entrée</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-600 mt-0.5">•</span>
                <span>Arrivez 30 minutes avant le début</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-600 mt-0.5">•</span>
                <span>Billet accessible hors ligne dans l'app GBADOU</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-600 mt-0.5">•</span>
                <span>Échange et remboursement sous conditions</span>
              </li>
            </ul>
          </div>

          {/* Bouton de réservation */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBooking}
            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-4 rounded-full font-black text-lg shadow-lg hover:shadow-xl transition-all tracking-tight"
          >
            RÉSERVER MA PLACE - {event.price}
          </motion.button>

          {/* Informations de paiement */}
          <div className="mt-4 text-center">
            <div className="flex justify-center items-center gap-4 mb-2">
              {['📱', '📲', '💳', '💳'].map((icon, index) => (
                <span key={index} className="text-lg">{icon}</span>
              ))}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              ✅ Paiement 100% sécurisé CinetPay • MTN • Moov • Visa • Mastercard
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
