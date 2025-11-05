import { Users, Map, Ticket, Shield, Bell, ArrowLeft, Zap, Star, Video, MessageCircle, Gift, WifiOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function FeaturesPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Ticket,
      name: 'Réservation Instantanée',
      title: 'Billetterie 100% Mobile',
      description: 'Réserve tes places en 30 secondes chrono pour tous les événements au Bénin',
      color: 'from-violet-600 to-fuchsia-600',
      details: [
        'Scan QR code en 1 clic',
        'Paiement mobile Money intégré',
        'Confirmation immédiate',
        'Support tous opérateurs (MTN, Moov)'
      ]
    },
    {
      icon: Shield,
      name: 'Paiement CinetPay',
      title: 'Paiement Sécurisé',
      description: 'Paiement 100% sécurisé via CinetPay avec tous les moyens locaux',
      color: 'from-green-500 to-emerald-500',
      details: [
        'MTN Mobile Money',
        'Moov Money', 
        'Cartes Visa/Mastercard',
        'Sécurité bancaire certifiée'
      ]
    },
    {
      icon: Map,
      name: 'Géolocalisation',
      title: 'Carte Interactive Bénin',
      description: 'Trouve les événements près de chez toi avec notre carte interactive',
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Carte SVG du Bénin',
        'Événements par ville',
        'Itinéraires optimisés',
        'Alertes proximité'
      ]
    },
    {
      icon: MessageCircle,
      name: 'Chat Événement',
      title: 'Communauté en Direct',
      description: 'Discute avec les autres participants avant, pendant et après l\'événement',
      color: 'from-amber-500 to-orange-500',
      details: [
        'Salons par événement',
        'Partage photos/vidéos',
        'Rencontres participants',
        'Animations modérateurs'
      ]
    },
    {
      icon: Video,
      name: 'AfterMovie',
      title: 'Souvenirs Premium',
      description: 'Revis l\'événement avec nos aftermovies exclusifs et contenus bonus',
      color: 'from-pink-500 to-rose-500',
      details: [
        'Montages professionnels',
        'Photos haute qualité',
        'Interviews artistes',
        'Contenus inédits'
      ]
    },
    {
      icon: Gift,
      name: 'Parrainage',
      title: 'Deviens Ambassadeur',
      description: 'Parraine tes amis et gagne des récompenses exclusives sur chaque réservation',
      color: 'from-purple-500 to-indigo-500',
      details: [
        'Code parrainage personnel',
        'Commission sur chaque vente',
        'Badges exclusifs',
        'Accès événements VIP'
      ]
    },
    {
      icon: WifiOff,
      name: 'Mode Hors-Ligne',
      title: 'Accès Sans Internet',
      description: 'Tes billets accessibles même sans connexion Internet',
      color: 'from-gray-600 to-gray-800',
      details: [
        'Billets téléchargés localement',
        'QR code fonctionnel offline',
        'Notifications cachetées',
        'Synchronisation automatique'
      ]
    },
    {
      icon: Users,
      name: 'Réservation Groupe',
      title: 'Sorties entre Amis',
      description: 'Organise tes sorties de groupe facilement avec le système de réservation groupe',
      color: 'from-teal-500 to-green-500',
      details: [
        'Création groupe instantanée',
        'Paiement collectif ou individuel',
        'Places regroupées',
        'Gestionnaire de groupe'
      ]
    }
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
            Fonctionnalités GBADOU
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
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
            GBADOU, ta billetterie 100% Béninoise
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvre toutes les fonctionnalités conçues spécialement pour révolutionner ta façon de vivre les événements au Bénin
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-white/20 dark:border-gray-700/50"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon & Header */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/20 dark:to-fuchsia-900/20 px-3 py-1 rounded-full text-sm font-semibold text-violet-700 dark:text-violet-300 mb-2">
                          <Star className="w-3 h-3 fill-violet-500 text-violet-500" />
                          {feature.name}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm sm:text-base">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature-specific CTA */}
              <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-gray-700/50 dark:to-gray-800/50 px-6 sm:px-8 py-4 border-t border-white/20 dark:border-gray-600">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Prêt à utiliser {feature.name} ?
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${feature.color} text-white px-6 py-2 rounded-full font-black text-sm hover:shadow-lg transition-all tracking-tight`}
                    onClick={() => navigate('/events')}
                  >
                    Essayer {feature.name.split(' ')[0]}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-12 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center text-white"
        >
          <h3 className="text-xl sm:text-2xl font-black mb-3 tracking-tight">
            Prêt à vivre l'expérience GBADOU ?
          </h3>
          <p className="text-white/90 mb-6 text-sm sm:text-base">
            Rejoins la communauté qui révolutionne la billetterie événementielle au Bénin
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-violet-600 px-6 sm:px-8 py-3 rounded-full font-black hover:bg-gray-100 transition-all tracking-tight"
              onClick={() => navigate('/events')}
            >
              Voir les Événements
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-black hover:bg-white/10 transition-all tracking-tight"
              onClick={() => navigate('/download')}
            >
              Télécharger l'App
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}