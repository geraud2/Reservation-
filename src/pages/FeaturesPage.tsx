import { Users, Map, Ticket, Shield, Bell, ArrowLeft, Zap, Star, Video, MessageCircle, Gift, WifiOff, CreditCard, Smartphone, Share2, Film, Wallet, Heart, Search, Navigation, Camera, Users2, Crown, MessageSquare, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function FeaturesPage() {
  const navigate = useNavigate();

  // CATÉGORIES DE FONCTIONNALITÉS - AVEC BONNES ROUTES
  const featureCategories = [
    {
      title: "🎟️ Billetterie & Paiement",
      description: "Réservation sécurisée et gestion des billets",
      features: [
        {
          icon: Ticket,
          name: 'Réservation Instantanée',
          title: 'Billetterie 100% Mobile',
          description: 'Réserve en 30 secondes chrono',
          color: 'from-violet-600 to-fuchsia-600',
          path: '/events',
          details: ['Scan QR code', 'Paiement intégré', 'Confirmation immédiate']
        },
        {
          icon: Shield,
          name: 'Paiement CinetPay',
          title: 'Paiement Sécurisé',
          description: 'MTN, Moov, Visa, Mastercard',
          color: 'from-green-500 to-emerald-500',
          path: '/events',
          details: ['Tous opérateurs', 'Sécurité bancaire', 'Transactions instantanées']
        },
        {
          icon: Wallet,
          name: 'Portefeuille Gbadou',
          title: 'Gestion Financière',
          description: 'Points fidélité et cashback',
          color: 'from-amber-500 to-orange-500',
          path: '/features/wallet', // ✅ CORRIGÉ
          details: ['Points de fidélité', 'Historique paiements', 'Cashback rewards']
        },
        {
          icon: Gift,
          name: 'Offrir un Billet',
          title: 'Cadeaux entre Amis',
          description: 'Transfert de billets facile',
          color: 'from-pink-500 to-rose-500',
          path: '/features/gift-ticket', // ✅ CORRIGÉ
          details: ['Transfert sécurisé', 'Notification ami', 'Acceptation instantanée']
        }
      ]
    },
    {
      title: "💬 Social & Communauté",
      description: "Interagis avec la communauté Gbadou",
      features: [
        {
          icon: MessageSquare,
          name: 'Chat Événement',
          title: 'Communauté en Direct',
          description: 'Discute avec les participants',
          color: 'from-blue-500 to-cyan-500',
          path: '/features/chat', // ✅ CORRIGÉ
          details: ['Salons par événement', 'Partage photos', 'Rencontres']
        },
        {
          icon: Video,
          name: 'Gbadou Now',
          title: 'Fil d\'Actualité',
          description: 'Stories et lives en direct',
          color: 'from-purple-500 to-indigo-500',
          path: '/features/gbadou-now', // ✅ CORRIGÉ
          details: ['Stories éphémères', 'Lives événements', 'Photos partagées']
        },
        {
          icon: Film,
          name: 'AfterMovie',
          title: 'Souvenirs Premium',
          description: 'Vidéos souvenirs professionnelles',
          color: 'from-red-500 to-pink-500',
          path: '/features/aftermovie', // ✅ CORRIGÉ
          details: ['Montages pro', 'Livraison 48h', 'Partage réseaux']
        },
        {
          icon: Users2,
          name: 'Réservation Groupe',
          title: 'Sorties entre Amis',
          description: 'Organise tes sorties de groupe',
          color: 'from-teal-500 to-green-500',
          path: '/features/group-booking', // ✅ CORRIGÉ
          details: ['Création groupe', 'Paiement collectif', 'Places regroupées']
        }
      ]
    },
    {
      title: "🌍 Découverte & Local",
      description: "Explore les événements et lieux autour de toi",
      features: [
        {
          icon: Map,
          name: 'Géolocalisation',
          title: 'Carte Interactive',
          description: 'Événements près de chez toi',
          color: 'from-green-600 to-emerald-600',
          path: '/events',
          details: ['Carte du Bénin', 'Itinéraires', 'Alertes proximité']
        },
        {
          icon: Navigation,
          name: 'Explorer Ma Ville',
          title: 'Découverte Locale',
          description: 'Lieux recommandés autour',
          color: 'from-orange-500 to-amber-500',
          path: '/features/explore-city', // ✅ CORRIGÉ
          details: ['Hôtels & restaurants', 'Bars & plages', 'Sites touristiques']
        },
        {
          icon: Search,
          name: 'Recherche Avancée',
          title: 'Trouve Ton Événement',
          description: 'Filtres intelligents',
          color: 'from-gray-600 to-gray-700',
          path: '/features/search', // ✅ CORRIGÉ
          details: ['Par ville/date/prix', 'Catégories multiples', 'Suggestions']
        },
        {
          icon: Heart,
          name: 'Favoris & Recommandations',
          title: 'Contenu Personnalisé',
          description: 'Selon tes préférences',
          color: 'from-rose-500 to-red-500',
          path: '/features/recommendations', // ✅ CORRIGÉ
          details: ['Événements similaires', 'Historique', 'Suggestions smart']
        }
      ]
    },
    {
      title: "⚡ Fonctionnalités Avancées",
      description: "Optimise ton expérience Gbadou",
      features: [
        {
          icon: WifiOff,
          name: 'Mode Hors-Ligne',
          title: 'Accès Sans Internet',
          description: 'Billets toujours disponibles',
          color: 'from-gray-600 to-gray-800',
          path: '/features/offline', // ✅ CORRIGÉ
          details: ['Billets téléchargés', 'QR codes offline', 'Sync auto']
        },
        {
          icon: Bell,
          name: 'Notifications Intelligentes',
          title: 'Ne Rate Rien',
          description: 'Alertes personnalisées',
          color: 'from-yellow-500 to-amber-500',
          path: '/features/notifications', // ✅ CORRIGÉ
          details: ['Rappels événements', 'Alertes promo', 'Messages importants']
        },
        {
          icon: Crown,
          name: 'Programme Ambassadeur',
          title: 'Deviens Ambassadeur',
          description: 'Gagne des récompenses',
          color: 'from-amber-600 to-orange-600',
          path: '/features/ambassador',
          details: ['Commission 15%', 'Billets offerts', 'Statut VIP']
        },
        {
          icon: Camera,
          name: 'Scan QR Code',
          title: 'Validation Rapide',
          description: 'Entrée facilitée',
          color: 'from-blue-600 to-indigo-600',
          path: '/features/qr-scanner', // ✅ CORRIGÉ
          details: ['Scan instantané', 'Validation offline', 'Historique scans']
        }
      ]
    }
  ];

  const handleFeatureClick = (path: string) => {
    // Maintenant toutes les routes features existent !
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" />
          </button>
          <h1 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight">
            Centre des Fonctionnalités
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 text-gray-900 dark:text-white tracking-tight">
            Découvre GBADOU
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore toutes les fonctionnalités qui révolutionnent ta façon de vivre les événements au Bénin
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {featureCategories.map((category, categoryIndex) => (
            <motion.section
              key={category.title}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-lg border border-white/20 dark:border-gray-700/50 overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-gray-700/50 dark:to-gray-800/50 px-6 sm:px-8 py-4 border-b border-white/20 dark:border-gray-600">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-1">
                  {category.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.features.map((feature, featureIndex) => (
                    <motion.button
                      key={feature.name}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: (categoryIndex * 0.2) + (featureIndex * 0.1) }}
                      onClick={() => handleFeatureClick(feature.path)}
                      className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700/50 dark:to-gray-800/50 rounded-2xl p-6 text-left hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600/50 hover:border-violet-200 dark:hover:border-violet-600/30 group"
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/20 dark:to-fuchsia-900/20 px-2 py-1 rounded-full text-xs font-semibold text-violet-700 dark:text-violet-300">
                              {feature.name}
                            </div>
                          </div>
                          
                          <h4 className="font-black text-gray-900 dark:text-white text-lg mb-1 tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                            {feature.title}
                          </h4>
                          
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            {feature.description}
                          </p>

                          {/* Features List */}
                          <div className="space-y-1">
                            {feature.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs">
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex-shrink-0"></div>
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-gray-300 group-hover:text-violet-500 transition-colors flex-shrink-0">
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center text-white"
        >
          <h3 className="text-xl sm:text-2xl font-black mb-3 tracking-tight">
            Prêt à tout explorer ?
          </h3>
          <p className="text-white/90 mb-6 text-sm sm:text-base">
            Rejoins la communauté et découvre tous les avantages GBADOU
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-violet-600 px-6 sm:px-8 py-3 rounded-full font-black hover:bg-gray-100 transition-all tracking-tight"
              onClick={() => navigate('/events')}
            >
              Explorer les Événements
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-black hover:bg-white/10 transition-all tracking-tight"
              onClick={() => navigate('/profile')}
            >
              Voir Mon Profil
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 