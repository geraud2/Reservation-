import { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Mail, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { useBookings } from '../contexts/BookingContext';
import eventsData from '../data/events.json';
import Modal from '../components/Modal';

export default function BookingPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addBooking } = useBookings();

  const event = eventsData.find((e) => e.id === Number(id));
  const category = location.state?.category;

  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!event || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-500 dark:text-gray-400">Erreur de réservation</p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBookingId = Math.random().toString(36).substr(2, 9).toUpperCase();

    addBooking({
      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.date,
      eventVenue: event.venue,
      category: category.name,
      price: category.price,
      userName: formData.userName,
      userEmail: formData.userEmail,
    });

    setBookingId(newBookingId);
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Réservation
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-lg">
          <h2 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
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
          <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">
              {category.name}
            </span>
            <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">
              {category.price}€
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-violet-600 text-gray-900 dark:text-white"
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
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-violet-600 text-gray-900 dark:text-white"
                placeholder="jean.dupont@email.com"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-4 rounded-full font-bold text-lg shadow-lg"
          >
            Confirmer la réservation
          </motion.button>
        </form>
      </div>

      <Modal isOpen={showSuccess} onClose={handleCloseSuccess}>
        <div className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            Réservation confirmée!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ton billet a été envoyé par email
          </p>
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl mb-6">
            <QRCodeSVG value={bookingId} size={200} className="mx-auto" />
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
              Code: {bookingId}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCloseSuccess}
            className="w-full bg-violet-600 text-white py-3 rounded-full font-bold"
          >
            Voir mes billets
          </motion.button>
        </div>
      </Modal>
    </div>
  );
}
