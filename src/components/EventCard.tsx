import { Calendar, MapPin, Euro } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  venue: string;
  city: string;
  image: string;
  price: string;
  type: string;
}

export default function EventCard({ id, title, date, venue, city, image, price, type }: EventCardProps) {
  return (
    <Link to={`/event/${id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="relative h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute top-3 right-3 bg-violet-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
            {type === 'music' ? '🎵 Musique' : '⚽ Sport'}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{title}</h3>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-violet-600" />
              <span>{new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-violet-600" />
              <span>{venue}, {city}</span>
            </div>
            <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-semibold">
              <Euro className="w-4 h-4" />
              <span>À partir de {price}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
