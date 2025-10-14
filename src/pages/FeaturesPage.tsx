import { Users, Map, Tag, Shield, Bell, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import ThemeToggle from '../components/ThemeToggle';

export default function FeaturesPage() {
  const features = [
    {
      icon: Users,
      title: 'KickSquad',
      description: 'Réserve avec tes amis en quelques clics et profitez ensemble de l\'événement',
      color: 'bg-violet-600',
    },
    {
      icon: Map,
      title: 'KickMap',
      description: 'Visualise le plan de la salle et choisis précisément ta place',
      color: 'bg-blue-600',
    },
    {
      icon: Tag,
      title: 'KickDeal',
      description: 'Profite de promotions exclusives et de réductions sur tes événements préférés',
      color: 'bg-orange-600',
    },
    {
      icon: Shield,
      title: 'KickVault',
      description: 'Stocke tous tes billets en toute sécurité dans ton coffre-fort numérique',
      color: 'bg-green-600',
    },
    {
      icon: Bell,
      title: 'KickAlert',
      description: 'Reçois des notifications pour ne rater aucun événement important',
      color: 'bg-fuchsia-600',
    },
    {
      icon: Zap,
      title: 'QuikSleep',
      description: 'Bientôt disponible : réserve un hébergement proche de ton événement',
      color: 'bg-yellow-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Fonctionnalités
            </h1>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Tout ce dont tu as besoin
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Découvre toutes les fonctionnalités qui rendent QuikNapp unique
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">
            Et ce n'est que le début
          </h2>
          <p className="text-lg opacity-90">
            Nous travaillons sans cesse pour t'offrir la meilleure expérience possible
          </p>
        </motion.div>
      </div>
    </div>
  );
}
