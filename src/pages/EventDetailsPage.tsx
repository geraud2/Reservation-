import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import eventsData from '../data/events.json';

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const event = eventsData.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-500 dark:text-gray-400">Événement non trouvé</p>
      </div>
    );
  }

  const handleBooking = () => {
    navigate(`/booking/${event.id}`, {
      state: { category: event.categories[selectedCategory] },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-32">
      <div className="relative h-80 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-50 dark:to-gray-900" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8"
        >
          <div className="mb-6">
            <div className="inline-block bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300 px-3 py-1 rounded-full text-sm font-semibold mb-3">
              {event.type === 'concert' ? '🎵 Concert' : '⚽ Match'}
            </div>
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              {event.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {event.description}
            </p>
          </div>

          <div className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-violet-600" />
              <span className="font-medium">
                {new Date(event.date).toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-violet-600" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-violet-600" />
              <span>{event.venue}, {event.city}</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Choisis ta catégorie
            </h2>
            <div className="space-y-3">
              {event.categories.map((category, index) => (
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
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {category.name}
                    </span>
                    <span className="text-xl font-bold text-violet-600 dark:text-violet-400">
                      {category.price}€
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBooking}
            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Réserver ma place
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
