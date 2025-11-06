import { motion } from 'framer-motion';
import { ArrowLeft, Gift, Search, User, Send, Ticket, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Types pour TypeScript
interface Ticket {
  id: number;
  eventTitle: string;
  eventDate: string;
  eventVenue: string;
  price: string;
  image: string;
  type: string;
}

interface Friend {
  id: number;
  name: string;
  phone: string;
  avatar: string;
}

export default function GiftTicketPage() {
  const navigate = useNavigate();
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [step, setStep] = useState(1); // 1: Sélection billet, 2: Sélection ami, 3: Confirmation

  // Billets disponibles pour offrir - CORRIGÉ
  const availableTickets: Ticket[] = [
    {
      id: 1,
      eventTitle: "Concert Afrobeat Live",
      eventDate: "15 DÉC 2024",
      eventVenue: "Palais des Congrès, Cotonou",
      price: "15,000 FCFA",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      type: "music"
    },
    {
      id: 2,
      eventTitle: "Tournoi de Football Local",
      eventDate: "20 DÉC 2024",
      eventVenue: "Stade de l'Amitié, Cotonou",
      price: "5,000 FCFA",
      image: "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg",
      type: "sport"
    }
  ];

  // Liste d'amis - CORRIGÉ
  const friends: Friend[] = [
    { id: 1, name: "Marie Kossi", phone: "+229 12 34 56 78", avatar: "👩" },
    { id: 2, name: "Jean Akpakpa", phone: "+229 98 76 54 32", avatar: "👨" },
    { id: 3, name: "Alice Sèmè", phone: "+229 55 44 33 22", avatar: "👩" },
    { id: 4, name: "David Ouidah", phone: "+229 11 22 33 44", avatar: "👨" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" />
          </button>
          <h1 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight">
            Offrir un Billet
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Étapes */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-center mb-8"
        >
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= stepNumber 
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white' 
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`w-12 h-1 mx-2 ${
                  step > stepNumber 
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Étape 1: Sélection du billet */}
        {step === 1 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <Gift className="w-12 h-12 mx-auto mb-4 text-violet-600" />
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                Choisis le billet à offrir
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Sélectionne un billet parmi tes réservations
              </p>
            </div>

            <div className="space-y-4">
              {availableTickets.map((ticket) => (
                <motion.button
                  key={ticket.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedTicket(ticket);
                    setStep(2);
                  }}
                  className="w-full bg-white dark:bg-gray-800 rounded-2xl p-4 text-left hover:shadow-lg transition-all border border-white/20 dark:border-gray-700/50"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={ticket.image}
                      alt={ticket.eventTitle}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-black text-gray-900 dark:text-white text-lg mb-1 tracking-tight">
                        {ticket.eventTitle}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{ticket.eventDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{ticket.eventVenue}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-violet-600 dark:text-violet-400 text-lg">
                        {ticket.price}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Billet disponible
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Étape 2: Sélection de l'ami */}
        {step === 2 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <User className="w-12 h-12 mx-auto mb-4 text-violet-600" />
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                À qui offres-tu ce billet ?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Choisis un ami dans ta liste de contacts
              </p>
            </div>

            {/* Barre de recherche */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un contact..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-violet-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            {/* Liste d'amis */}
            <div className="space-y-3">
              {friends.map((friend) => (
                <motion.button
                  key={friend.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedFriend(friend);
                    setStep(3);
                  }}
                  className="w-full bg-white dark:bg-gray-800 rounded-2xl p-4 text-left hover:shadow-lg transition-all border border-white/20 dark:border-gray-700/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white text-xl">
                      {friend.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-gray-900 dark:text-white text-lg mb-1 tracking-tight">
                        {friend.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {friend.phone}
                      </p>
                    </div>
                    <div className="text-violet-600 dark:text-violet-400">
                      <Send className="w-5 h-5" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Étape 3: Confirmation */}
        {step === 3 && selectedTicket && selectedFriend && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center space-y-6"
          >
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Gift className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
              Cadeau envoyé ! 🎁
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <span className="font-semibold text-gray-900 dark:text-white">{selectedFriend.name}</span> a reçu ton billet pour <span className="font-semibold">{selectedTicket.eventTitle}</span>
            </p>

            {/* Récapitulatif */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={selectedTicket.image}
                  alt={selectedTicket.eventTitle}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="text-left flex-1">
                  <h3 className="font-black text-gray-900 dark:text-white text-lg mb-1 tracking-tight">
                    {selectedTicket.eventTitle}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {selectedTicket.eventDate} • {selectedTicket.eventVenue}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Destinataire</span>
                <span className="font-semibold text-gray-900 dark:text-white">{selectedFriend.name}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/features')}
                className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Retour aux fonctionnalités
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/events')}
                className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Explorer d'autres événements
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}