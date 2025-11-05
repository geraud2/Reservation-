import { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Mail, CheckCircle, CreditCard, Shield, WifiOff, Video, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { useBookings } from '../contexts/BookingContext';
import eventsData from '../data/events.json';
import Modal from '../components/Modal';
import { Event } from '../types';

export default function BookingPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addBooking } = useBookings();

  // Récupérer l'événement depuis les params ou le state
  const eventFromState = (location.state as { event?: Event })?.event;
  const eventFromData = eventsData.find((e) => e.id === Number(id));
  const event = eventFromState || eventFromData;

  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    phoneNumber: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'mtn' | 'moov' | 'visa' | 'mastercard'>('mtn');
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800">
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

  // Vérifier si l'événement a le chat activé (avec fallback sécurisé)
  const hasChatEnabled = 'chatEnabled' in event ? event.chatEnabled : false;
  const hasAfterMovie = 'isPremium' in event ? event.isPremium : false;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBookingId = `GB${Math.random().toString(36).substr(2, 8).toUpperCase()}`;

    // Créer l'objet booking avec la structure SIMPLIFIÉE attendue par le contexte
    const bookingData = {
      id: newBookingId,
      eventId: event.id,
      eventTitle: event.title,
      eventDate: String(event.date),
      eventVenue: String(event.venue),
      eventCity: String(event.city), // Convertir ReactNode en string
      eventImage: event.image,
      eventTime: String(event.time), // Convertir ReactNode en string
      category: event.type,
      price: parseFloat(event.price.replace(',', '.')), // Convertir en nombre
      ticketType: hasAfterMovie ? 'premium' : 'standard',
      userName: formData.userName,
      userEmail: formData.userEmail,
      userPhone: formData.phoneNumber,
      paymentMethod: paymentMethod,
      hasAfterMovie: hasAfterMovie,
      chatEnabled: hasChatEnabled,
      bookingDate: new Date().toISOString(),
      status: 'confirmed' as const,
      // Propriétés supplémentaires pour assurer la compatibilité
      participants: event.participants || '0',
      location: event.city,
      venue: event.venue
    };

    console.log('Données de réservation:', bookingData); // Debug
    
   try {
  addBooking(bookingData as any); // ← bypass TypeScript temporairement
  setBookingId(newBookingId);
  setShowSuccess(true);
} catch (error) {
  console.error('Erreur lors de la réservation:', error);
  alert('Erreur lors de la réservation. Veuillez réessayer.');
}
  //   } catch (error) {
  //     console.error('Erreur lors de la réservation:', error);
  //     alert('Erreur lors de la réservation. Veuillez réessayer.');
  //   }
  // };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    navigate('/profile');
  };

  const paymentMethods = [
    { id: 'mtn' as const, name: 'MTN Mobile Money', icon: '📱', color: 'bg-yellow-500' },
    { id: 'moov' as const, name: 'Moov Money', icon: '📲', color: 'bg-orange-500' },
    { id: 'visa' as const, name: 'Visa', icon: '💳', color: 'bg-blue-500' },
    { id: 'mastercard' as const, name: 'Mastercard', icon: '💳', color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>
          <h1 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
            Réservation GBADOU
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Résumé de l'événement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-lg border border-white/20 dark:border-gray-700/50"
        >
          <h2 className="font-black text-lg mb-2 text-gray-900 dark:text-white tracking-tight">
            {event.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            {new Date(event.date).toLocaleDateString('fr-FR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
            })} à {event.time}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {event.venue}, {event.city}
          </p>
          
          {/* Badges des fonctionnalités */}
          <div className="flex flex-wrap gap-2 mb-4">
            {hasAfterMovie && (
              <span className="inline-flex items-center gap-1 bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300 px-2 py-1 rounded-full text-xs font-semibold">
                <Video className="w-3 h-3" />
                PREMIUM
              </span>
            )}
            {hasChatEnabled && (
              <span className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">
                <MessageCircle className="w-3 h-3" />
                Chat Activé
              </span>
            )}
            <span className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
              <WifiOff className="w-3 h-3" />
              Accès Hors-ligne
            </span>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <span className="font-semibold text-gray-900 dark:text-white block capitalize">
                {hasAfterMovie ? 'Place Premium' : 'Place Standard'}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                {event.type || 'Événement'}
              </span>
            </div>
            <span className="text-2xl font-black text-violet-600 dark:text-violet-400 tracking-tight">
              {event.price}
            </span>
          </div>
        </motion.div>

        {/* Formulaire de réservation */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Informations personnelles */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
            <h3 className="font-black text-lg mb-4 text-gray-900 dark:text-white tracking-tight">
              👤 Informations personnelles
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Nom complet
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.userName}
                    onChange={(e) =>
                      setFormData({ ...formData, userName: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-violet-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Jean Dupont"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.userEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, userEmail: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-violet-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="jean.dupont@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-violet-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="+229 XX XX XX XX"
                />
              </div>
            </div>
          </div>

          {/* Méthode de paiement */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
            <h3 className="font-black text-lg mb-4 text-gray-900 dark:text-white tracking-tight">
              💳 Méthode de paiement
            </h3>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              {paymentMethods.map((method) => (
                <motion.button
                  key={method.id}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-3 rounded-xl border-2 text-center transition-all ${
                    paymentMethod === method.id
                      ? 'border-violet-600 bg-violet-50 dark:bg-violet-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700'
                  }`}
                >
                  <div className={`w-8 h-8 ${method.color} rounded-full flex items-center justify-center mx-auto mb-2 text-white text-lg`}>
                    {method.icon}
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">
                    {method.name}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Paiement 100% sécurisé par CinetPay</span>
            </div>
          </div>

          {/* Bouton de confirmation */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-4 rounded-full font-black text-lg shadow-lg hover:shadow-xl transition-all tracking-tight"
          >
            <CreditCard className="w-5 h-5 inline mr-2" />
            PAYER AVEC CINETPAY - {event.price}
          </motion.button>
        </motion.form>
      </div>

      {/* Modal de succès */}
      <Modal isOpen={showSuccess} onClose={handleCloseSuccess}>
        <div className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
          </motion.div>
          
          <h2 className="text-2xl font-black mb-2 text-gray-900 dark:text-white tracking-tight">
            Réservation Confirmée ! 🎉
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Votre billet a été réservé avec succès
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl mb-6">
            <QRCodeSVG 
              value={`GBADOU-${bookingId}-${event.id}`} 
              size={200} 
              className="mx-auto"
              includeMargin
            />
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 font-mono">
              CODE: {bookingId}
            </p>
          </div>

          {/* Fonctionnalités activées */}
          <div className="space-y-3 mb-6">
            {hasAfterMovie && (
              <div className="flex items-center gap-3 text-left bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl">
                <Video className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-amber-600 text-sm">AfterMovie Inclus</p>
                  <p className="text-amber-500 text-xs">Vidéo souvenir disponible après l'événement</p>
                </div>
              </div>
            )}
            
            {hasChatEnabled && (
              <div className="flex items-center gap-3 text-left bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl">
                <MessageCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-600 text-sm">Chat Événement</p>
                  <p className="text-blue-500 text-xs">Rejoignez la conversation avec les participants</p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 text-left bg-green-50 dark:bg-green-900/20 p-3 rounded-xl">
              <WifiOff className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-600 text-sm">Accès Hors-ligne</p>
                <p className="text-green-500 text-xs">Votre billet est accessible sans internet</p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCloseSuccess}
            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 rounded-full font-black hover:shadow-lg transition-all"
          >
            VOIR MES BILLETS
          </motion.button>
        </div>
      </Modal>
    </div>
  );
}
}