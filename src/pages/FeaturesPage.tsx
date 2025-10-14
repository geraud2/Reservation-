import { Users, Map, Ticket, Shield, Bell, ArrowLeft, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function FeaturesPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      name: 'KickSquad',
      title: 'Réservation de groupe',
      description: 'Réserve avec tes amis en quelques clics et profitez ensemble de l\'événement',
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Création de groupe en 2 clics',
        'Invitation par lien ou QR code',
        'Paiement groupé ou individuel',
        'Places côte à côte garanties'
      ]
    },
    {
      icon: Map,
      name: 'KickMap',
      title: 'Placement intelligent',
      description: 'Visualise le plan de la salle et choisis précisément ta place',
      color: 'from-green-500 to-emerald-500',
      details: [
        'Plans 2D/3D interactifs',
        'Avis sur les meilleures places',
        'Zoom et rotation 360°',
        'Calcul du meilleur rapport qualité/prix'
      ]
    },
    {
      icon: Ticket,
      name: 'KickDeal',
      title: 'Offres exclusives',
      description: 'Profite de promotions exclusives et de réductions sur tes événements préférés',
      color: 'from-amber-500 to-orange-500',
      details: [
        'Alertes promo en temps réel',
        'Offres early-bird',
        'Réductions groupe',
        'Cashback sur chaque réservation'
      ]
    },
    {
      icon: Shield,
      name: 'KickVault',
      title: 'Coffre-fort numérique',
      description: 'Stocke tous tes billets en toute sécurité dans ton coffre-fort numérique',
      color: 'from-violet-500 to-purple-500',
      details: [
        'Stockage cloud sécurisé',
        'Accès hors-ligne',
        'Sauvegarde automatique',
        'Partage sécurisé des billets'
      ]
    },
    {
      icon: Bell,
      name: 'KickAlert',
      title: 'Notifications intelligentes',
      description: 'Reçois des notifications pour ne rater aucun événement important',
      color: 'from-pink-500 to-rose-500',
      details: [
        'Alertes artistes favoris',
        'Rappels avant l\'événement',
        'Infos trafic en direct',
        'Météo et recommandations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" />
          </button>
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            Fonctionnalités
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
            QuikNapp, bien plus qu'une app de réservation
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvre toutes les fonctionnalités qui rendent ton expérience unique et mémorable
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-6 sm:space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
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
                        <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          {feature.name}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm sm:text-base">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature-specific CTA */}
              <div className="bg-gray-50 dark:bg-gray-700/50 px-6 sm:px-8 py-4 border-t border-gray-100 dark:border-gray-600">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Prêt à essayer {feature.name} ?
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${feature.color} text-white px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-shadow w-full sm:w-auto`}
                    onClick={() => navigate('/events')}
                  >
                    Découvrir {feature.name}
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
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Prêt à vivre l'expérience QuikNapp ?
          </h3>
          <p className="text-white/90 mb-6 text-sm sm:text-base">
            Rejoins des milliers d'utilisateurs qui révolutionnent leur façon de réserver des événements
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-violet-600 px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              onClick={() => navigate('/events')}
            >
              Explorer les événements
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              onClick={() => navigate('/download')}
            >
              Télécharger l'app
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}