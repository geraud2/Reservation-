import { Calendar, MapPin, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';

interface TicketCardProps {
  id: string;
  eventTitle: string;
  eventDate: string;
  eventVenue: string;
  category: string;
  userName: string;
}

export default function TicketCard({ id, eventTitle, eventDate, eventVenue, category, userName }: TicketCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl p-6 shadow-xl text-white"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-2">{eventTitle}</h3>
          <div className="space-y-1 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(eventDate).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{eventVenue}</span>
            </div>
            <div className="flex items-center gap-2">
              <Ticket className="w-4 h-4" />
              <span>{category}</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-2 rounded-lg">
          <QRCodeSVG value={id} size={80} />
        </div>
      </div>
      <div className="border-t border-white/20 pt-3 mt-3">
        <p className="text-sm opacity-75">Réservé au nom de</p>
        <p className="font-semibold">{userName}</p>
      </div>
    </motion.div>
  );
}
