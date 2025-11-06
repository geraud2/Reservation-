import { motion } from 'framer-motion';
import { ArrowLeft, Users, UserPlus, Share2, CreditCard, CheckCircle, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function GroupBookingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [groupMembers, setGroupMembers] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<'individual' | 'collective'>('individual');

  const events = [
    {
      id: 1,
      title: "Concert Afrobeat Live",
      date: "15 DÉC 2024",
      venue: "Palais des Congrès, Cotonou",
      price: "15,000 FCFA",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      availableSpots: 8
    },
    {
      id: 2,
      title: "Tournoi de Football Local",
      date: "20 DÉC 2024",
      venue: "Stade de l'Amitié, Cotonou",
      price: "5,000 FCFA",
      image: "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg",
      availableSpots: 15
    }
  ];

  const friends = [
    { id: 1, name: "Marie Kossi", phone: "+229 12 34 56 78", avatar: "👩", selected: false },
    { id: 2, name: "Jean Akpakpa", phone: "+229 98 76 54 32", avatar: "👨", selected: false },
    { id: 3, name: "Alice Sèmè", phone: "+229 55 44 33 22", avatar: "👩", selected: false },
    { id: 4, name: "David Ouidah", phone: "+229 11 22 33 44", avatar: "👨", selected: false }
  ];

  const addMember = (phone: string) => {
    if (phone && !groupMembers.includes(phone)) {
      setGroupMembers([...groupMembers, phone]);
    }
  };

  const removeMember = (phone: string) => {
    setGroupMembers(groupMembers.filter(m => m !== phone));
  };

  const toggleFriend = (friend: any) => {
    const updatedFriends = friends.map(f => 
      f.id === friend.id ? { ...f, selected: !f.selected } : f
    );
    if (friend.selected) {
      removeMember(friend.phone);
    } else {
      addMember(friend.phone);
    }
  };

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
            Réservation de Groupe
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
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= stepNumber 
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white' 
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 4 && (
                <div className={`w-8 h-1 mx-2 ${
                  step > stepNumber 
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Étape 1: Sélection Événement */}
        {step === 1 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                Choisis l'événement
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Sélectionne un événement pour ta sortie de groupe
              </p>
            </div>

            <div className="grid gap-4">
              {events.map((event) => (
                <motion.button
                  key={event.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedEvent(event);
                    setStep(2);
                  }}
                  className="w-full bg-white dark:bg-gray-800 rounded-2xl p-4 text-left hover:shadow-lg transition-all border border-white/20 dark:border-gray-700/50"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-black text-gray-900 dark:text-white text-lg mb-1 tracking-tight">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <span>{event.date}</span>
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="font-semibold text-violet-600 dark:text-violet-400">
                          {event.price}
                        </span>
                        <span className="text-sm text-gray-500">
                          {event.availableSpots} places disponibles
                        </span>
                      </div>
                    </div>
                    <div className="text-violet-600 dark:text-violet-400">
                      <Users className="w-6 h-6" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Étape 2: Inviter des Amis */}
        {step === 2 && selectedEvent && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                Invite tes amis
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Ajoute les membres de ton groupe ({groupMembers.length + 1}/8)
              </p>
            </div>

            {/* Membres actuels */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-white/20 dark:border-gray-700/50">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Membres du groupe
              </h3>
              <div className="flex flex-wrap gap-2">
                {/* Vous */}
                <div className="flex items-center gap-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/20 dark:to-fuchsia-900/20 px-3 py-2 rounded-full">
                  <div className="w-6 h-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center text-white text-xs">
                    👑
                  </div>
                  <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Vous</span>
                </div>

                {/* Amis ajoutés */}
                {groupMembers.map((phone, index) => {
                  const friend = friends.find(f => f.phone === phone);
                  return friend ? (
                    <div key={phone} className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-full">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs">
                        {friend.avatar}
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{friend.name}</span>
                      <button
                        onClick={() => removeMember(phone)}
                        className="text-red-500 hover:text-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            {/* Liste d'amis */}
            <div className="space-y-3">
              {friends.map((friend) => (
                <motion.button
                  key={friend.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleFriend(friend)}
                  className={`w-full p-4 rounded-2xl text-left transition-all border ${
                    friend.selected
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800'
                      : 'bg-white dark:bg-gray-800 border-white/20 dark:border-gray-700/50 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-lg">
                      {friend.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                        {friend.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {friend.phone}
                      </p>
                    </div>
                    {friend.selected && (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Retour
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(3)}
                className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Continuer ({groupMembers.length + 1} personnes)
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Étape 3: Paiement */}
        {step === 3 && selectedEvent && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                Mode de paiement
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Choisis comment payer pour le groupe
              </p>
            </div>

            {/* Options de paiement */}
            <div className="grid gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPaymentMethod('collective')}
                className={`p-6 rounded-2xl text-left transition-all border ${
                  paymentMethod === 'collective'
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800'
                    : 'bg-white dark:bg-gray-800 border-white/20 dark:border-gray-700/50 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                      Paiement collectif
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Vous payez pour tout le groupe
                    </p>
                    <p className="font-semibold text-green-600 dark:text-green-400 mt-2">
                      Total: {(parseInt(selectedEvent.price.replace(/\D/g, '')) * (groupMembers.length + 1)).toLocaleString()} FCFA
                    </p>
                  </div>
                  {paymentMethod === 'collective' && (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  )}
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPaymentMethod('individual')}
                className={`p-6 rounded-2xl text-left transition-all border ${
                  paymentMethod === 'individual'
                    ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800'
                    : 'bg-white dark:bg-gray-800 border-white/20 dark:border-gray-700/50 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                      Paiement individuel
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Chacun paie sa place
                    </p>
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mt-2">
                      Votre part: {selectedEvent.price}
                    </p>
                  </div>
                  {paymentMethod === 'individual' && (
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                  )}
                </div>
              </motion.button>
            </div>

            {/* Récapitulatif */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Récapitulatif
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Événement</span>
                  <span className="font-semibold">{selectedEvent.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Nombre de personnes</span>
                  <span className="font-semibold">{groupMembers.length + 1}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Prix unitaire</span>
                  <span className="font-semibold">{selectedEvent.price}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-violet-600 dark:text-violet-400">
                      {paymentMethod === 'collective' 
                        ? `${(parseInt(selectedEvent.price.replace(/\D/g, '')) * (groupMembers.length + 1)).toLocaleString()} FCFA`
                        : `${selectedEvent.price} (votre part)`
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(2)}
                className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Retour
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(4)}
                className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Confirmer la réservation
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Étape 4: Confirmation */}
        {step === 4 && selectedEvent && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center space-y-6"
          >
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
              Groupe créé ! 🎉
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Votre réservation de groupe pour <span className="font-semibold">{selectedEvent.title}</span> a été confirmée
            </p>

            {/* Récapitulatif */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="text-left flex-1">
                  <h3 className="font-black text-gray-900 dark:text-white text-lg mb-1 tracking-tight">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {selectedEvent.date} • {selectedEvent.venue}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Membres</span>
                  <span className="font-semibold">{groupMembers.length + 1} personnes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Paiement</span>
                  <span className="font-semibold">
                    {paymentMethod === 'collective' ? 'Collectif' : 'Individuel'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Statut</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">Confirmé</span>
                </div>
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
                Voir mes billets
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}