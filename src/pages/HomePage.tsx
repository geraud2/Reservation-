import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Ticket, Users, Star, Shield, LogOut, Smartphone, MessageCircle, Video, Gift, Navigation, Download, CreditCard, MessageSquare, Film, Share2, WifiOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import BeninMap from '../components/BeninMap';
import { Event } from '../types';

export default function HomePage() {
  const { user, logout, isAuthenticated } = useAuth();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleLogout = () => {
    logout();
  };

  // Événements avec les propriétés du cahier des charges
  const trendingEvents: Event[] = [
    {
      id: 1,
      title: "Concert Afrobeat Live",
      date: "15 DÉC 2024",
      city: "Cotonou",
      price: "15,000 FCFA",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
      // category: "🎵 Musique", // 'category' does not exist in type 'Event'
      lat: 6.3725,
      lng: 2.3583,
      venue: "Palais des Congrès",
      participants: "1.2K",
      type: "music",
      description: undefined,
      time: "20:00",
      isPremium: false,
      chatEnabled: false,
      artist: ''
    },
    {
      id: 2,
      title: "Tournoi de Football Local",
      date: "2024-12-20",
      venue: "Stade de l'Amitié",
      price: "5,000 FCFA",
      image: "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg?auto=compress&cs=tinysrgb&w=600",
      // category: "⚽ Sport", // 'category' does not exist in type 'Event'
      lat: 6.3600,
      lng: 2.3900, // Removed duplicate 'venue' property
      participants: "5K",
      type: "sport",
      description: "Grand tournoi de football inter-quartiers",
      time: "16:00",
      city: "Cotonou",
      isPremium: false,
      chatEnabled: false,
      artist: ''
    }
  ];

  // FONCTIONNALITÉS EXACTES DU CAHIER DES CHARGES
  const gbadouFeatures = [
    {
      icon: CreditCard,
      title: "Paiement CinetPay",
      description: "Intégration MTN, Moov, Visa, Mastercard. Paiements sécurisés et instantanés",
      badge: "💰 Paiement"
    },
    {
      icon: MapPin,
      title: "Géolocalisation",
      description: "Carte interactive avec section 'Près de moi'. Événements géolocalisés en temps réel",
      badge: "📍 Géolocalisation"
    },
    {
      icon: MessageSquare,
      title: "Chat Événement",
      description: "Salon de discussion dédié à chaque événement entre participants",
      badge: "💬 Chat"
    },
    {
      icon: Film,
      title: "AfterMovie",
      description: "Vidéo souvenir professionnelle offerte après chaque événement premium",
      badge: "🎬 AfterMovie"
    },
    {
      icon: Share2,
      title: "Programme Ambassadeur",
      description: "Parrainage avec gains en points ou cashback sur chaque réservation",
      badge: "🤝 Parrainage"
    },
    {
      icon: WifiOff,
      title: "Mode Hors-ligne",
      description: "Accès aux billets réservés sans connexion internet",
      badge: "📴 Hors-ligne"
    }
  ];

  // Paiements supportés
  const paymentMethods = [
    { name: "MTN Mobile Money", icon: "📱", color: "bg-yellow-500" },
    { name: "Moov Money", icon: "📲", color: "bg-orange-500" },
    { name: "Visa", icon: "💳", color: "bg-blue-500" },
    { name: "Mastercard", icon: "💳", color: "bg-red-500" },
    { name: "CinetPay", icon: "⚡", color: "bg-green-500" },
    { name: "Paiement Sécurisé", icon: "🔒", color: "bg-purple-500" }
  ];

  // Avantages Ambassadeur
  const ambassadorBenefits = [
    { benefit: "15% de cashback", description: "Sur chaque réservation parrainée" },
    { benefit: "Billets offerts", description: "Accès gratuit aux événements sélectionnés" },
    { benefit: "Statut VIP", description: "Avantages exclusifs et priorité" },
    { benefit: "Réseau étendu", description: "Communauté d'ambassadeurs actifs" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 pb-20">
      {/* Header avec auth */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-4">
        {isAuthenticated ? (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <span className="text-white text-sm font-medium bg-black/30 px-3 py-1 rounded-full">
              👋 {user?.fullName?.split(' ')[0] || 'Utilisateur'}
            </span>
            <button
              onClick={handleLogout}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              title="Déconnexion"
            >
              <LogOut className="w-4 h-4 text-white" />
            </button>
          </motion.div>
        ) : (
          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-violet-600 px-6 py-2 rounded-full font-bold text-sm shadow-lg hover:bg-gray-100 transition-colors"
            >
              Connexion
            </motion.button>
          </Link>
        )}
        <ThemeToggle />
      </div>

      {/* Hero Section avec focus sur les fonctionnalités clés */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Événement au Bénin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-violet-50 dark:to-gray-900" />
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2 mb-4"
            >
              <CreditCard className="w-4 h-4" />
              Paiement CinetPay • MTN • Moov • Visa
            </motion.div>
            
            <h1 className="text-6xl font-black text-white mb-4 tracking-tight">
              GBADOU
            </h1>
            <p className="text-2xl text-white font-semibold mb-8 max-w-2xl">
              La billetterie événementielle qui révolutionne le Bénin
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link to="/events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-violet-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  Explorer les événements
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link to="/download">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-4 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Télécharger l'App
                </motion.button>
              </Link>
            </div>

            {/* Badges des fonctionnalités principales */}
            <div className="flex flex-wrap justify-center gap-3">
              {gbadouFeatures.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                >
                  <feature.icon className="w-3 h-3" />
                  {feature.badge}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Paiement CinetPay */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
              💰 Paiement 100% Sécurisé
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Avec CinetPay, payez comme vous voulez
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 text-center shadow-lg border border-white/20 dark:border-gray-700/50"
              >
                <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center mx-auto mb-2 text-white text-xl`}>
                  {method.icon}
                </div>
                <span className="font-semibold text-gray-900 dark:text-white text-sm">
                  {method.name}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl p-6 text-white text-center">
            <p className="text-lg font-semibold">
              ⚡ Transactions instantanées • 🔒 Données cryptées • 💯 Garantie de remboursement
            </p>
          </div>
        </motion.section>

        {/* Section Géolocalisation */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white">
                📍 Géolocalisation Intelligente
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Découvrez les événements près de chez vous avec notre carte interactive
              </p>
            </div>
          </div>
          
          <BeninMap events={trendingEvents} selectedEvent={selectedEvent} onSelectEvent={setSelectedEvent} />
        </motion.section>

        {/* Section Chat Événement */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <MessageSquare className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-black mb-4">
              💬 Chat Événement
            </h2>
            <p className="text-lg opacity-90">
              Connectez-vous avec les autres participants avant, pendant et après l'événement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "👥", title: "Rencontrez", description: "Faites connaissance avant l'événement" },
              { icon: "💬", title: "Discutez", description: "Échangez sur l'événement en temps réel" },
              { icon: "📸", title: "Partagez", description: "Photos et expériences après l'événement" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section AfterMovie */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Film className="w-12 h-12 mx-auto mb-4 text-violet-600" />
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
              🎬 AfterMovie Inclus
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Revivez les meilleurs moments avec nos vidéos souvenirs professionnelles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Pour les événements premium
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span>Montage professionnel</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span>Photos haute qualité</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span>Livraison sous 48h</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span>Partage facile sur les réseaux</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <Film className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                <p className="text-gray-500 dark:text-gray-400">Aperçu AfterMovie</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section Programme Ambassadeur */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <Share2 className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-black mb-4">
              🤝 Programme Ambassadeur
            </h2>
            <p className="text-lg opacity-90">
              Parrainez et gagnez jusqu'à 15% de cashback sur chaque réservation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {ambassadorBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
              >
                <div className="text-2xl font-bold mb-2">{benefit.benefit}</div>
                <p className="text-white/80 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/ambassador">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-colors shadow-2xl"
              >
                Devenir Ambassadeur
              </motion.button>
            </Link>
          </div>
        </motion.section>

        {/* Section Mode Hors-ligne */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <WifiOff className="w-12 h-12 mx-auto mb-4 text-violet-600" />
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
              📴 Mode Hors-ligne
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Vos billets accessibles même sans connexion internet
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Fonctionnalités hors-ligne
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Accès aux billets réservés</li>
                  <li>• QR Codes de validation</li>
                  <li>• Informations événementielles</li>
                  <li>• Plans d'accès téléchargés</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-6 inline-block">
                  <WifiOff className="w-16 h-16 mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Mode hors-ligne activé</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Final */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden border border-white/20"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-4 tracking-tight">
              Prêt à révolutionner vos réservations ?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Rejoignez la communauté GBADOU et profitez de tous les avantages
            </p>
            <Link to={isAuthenticated ? "/events" : "/register"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-violet-600 px-8 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-colors shadow-2xl tracking-tight"
              >
                {isAuthenticated ? "Explorer les événements" : "Créer mon compte gratuit"}
              </motion.button>
            </Link>
            <p className="mt-4 text-sm opacity-80">
              🎟️ CinetPay • 💬 Chat • 🎬 AfterMovie • 🤝 Parrainage • 📴 Hors-ligne
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}