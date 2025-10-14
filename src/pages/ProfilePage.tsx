import { User, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from '../components/ThemeToggle';
import TicketCard from '../components/TicketCard';
import { useBookings } from '../contexts/BookingContext';

export default function ProfilePage() {
  const { bookings } = useBookings();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 pt-8 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end mb-4">
            <ThemeToggle />
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center text-white"
          >
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12" />
            </div>
            <h1 className="text-2xl font-bold mb-1">Mon Profil</h1>
            <p className="opacity-90">Utilisateur QuikNapp</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <Ticket className="w-5 h-5 text-violet-600" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Mes billets
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {bookings.length} {bookings.length > 1 ? 'réservations' : 'réservation'}
          </p>
        </motion.div>

        {bookings.length === 0 ? (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center py-16"
          >
            <Ticket className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              Aucun billet pour le moment
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Réserve ton premier événement pour le voir ici
            </p>
          </motion.div>
        ) : (
          <div className="space-y-4">
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
      </div>
    </div>
  );
}
