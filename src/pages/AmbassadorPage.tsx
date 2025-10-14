import { Share2, MessageCircle, Facebook, Instagram, ArrowLeft, Gift, Users, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function AmbassadorPage() {
  const navigate = useNavigate();

  const shareUrl = 'https://quiknapp.com';
  const shareMessage = 'Découvre QuikNapp, l\'app pour réserver tes places de concerts et matchs en un clin d\'œil!';

  const shareButtons = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-500 hover:bg-green-600',
      url: `https://wa.me/?text=${encodeURIComponent(shareMessage + ' ' + shareUrl)}`,
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
      url: 'https://www.instagram.com',
    },
  ];

  const rewards = [
    { icon: Gift, title: '5€ de crédit', description: 'Par ami inscrit' },
    { icon: Star, title: 'Accès VIP', description: 'Événements exclusifs' },
    { icon: Award, title: 'Badges', description: 'Récompenses uniques' },
    { icon: Users, title: 'Statut Premium', description: 'Avantages permanents' }
  ];

  const steps = [
    { number: '1', title: 'Inscris-toi', description: 'Rejoins le programme ambassadeur' },
    { number: '2', title: 'Partage', description: 'Envoie ton lien à tes amis' },
    { number: '3', title: 'Gagne', description: 'Reçois tes récompenses' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" />
          </button>
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            Programme Ambassadeur
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Share2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Deviens Ambassadeur
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4">
            Partage QuikNapp et gagne des récompenses exclusives
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm">
            <Star className="w-4 h-4 fill-amber-500" />
            <span>Programme de parrainage</span>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-6 sm:mb-8"
        >
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-violet-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-sm sm:text-base">
                {step.number}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1">
                {step.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {step.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Rewards Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-4 mb-6 sm:mb-8"
        >
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <reward.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 mx-auto mb-2" />
              <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-1">
                {reward.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                {reward.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-lg"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Avantages du programme
          </h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-lg flex-shrink-0">✓</span>
              <span className="text-sm sm:text-base">Aide tes amis à découvrir une meilleure façon de réserver</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-lg flex-shrink-0">✓</span>
              <span className="text-sm sm:text-base">Obtiens des avantages exclusifs et des réductions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-lg flex-shrink-0">✓</span>
              <span className="text-sm sm:text-base">Rejoins une communauté passionnée d'événements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-lg flex-shrink-0">✓</span>
              <span className="text-sm sm:text-base">Accumule des points et débloque des niveaux</span>
            </li>
          </ul>
        </motion.div>

        {/* Share Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
            Partage QuikNapp
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {shareButtons.map((button, index) => (
              <motion.a
                key={index}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${button.color} text-white rounded-xl p-4 flex items-center justify-between shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="flex items-center gap-3">
                  <button.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold text-sm sm:text-base">Partager sur {button.name}</span>
                </div>
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl p-6 text-white text-center"
        >
          <h3 className="font-bold mb-2 text-lg">🎉 Déjà 500+ ambassadeurs</h3>
          <p className="text-white/80 text-sm">
            Rejoins notre communauté grandissante et commence à gagner dès aujourd'hui !
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400">
            ❓ Des questions ? Contacte-nous à <span className="text-violet-600">ambassadeurs@quiknapp.com</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}