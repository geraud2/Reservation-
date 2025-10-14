import { Share2, MessageCircle, Facebook, Instagram, ArrowLeft } from 'lucide-react';
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
      color: 'bg-green-500',
      url: `https://wa.me/?text=${encodeURIComponent(shareMessage + ' ' + shareUrl)}`,
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'bg-gradient-to-br from-purple-600 to-pink-600',
      url: 'https://www.instagram.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Ambassadeurs
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Share2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Deviens ambassadeur QuikNapp
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Partage QuikNapp avec tes amis et fais-les profiter de la meilleure façon de réserver leurs places
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Pourquoi devenir ambassadeur?
          </h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-violet-600 text-xl">✓</span>
              <span>Aide tes amis à découvrir une meilleure façon de réserver</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-violet-600 text-xl">✓</span>
              <span>Obtiens des avantages exclusifs et des réductions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-violet-600 text-xl">✓</span>
              <span>Rejoins une communauté passionnée d'événements</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
            Partage QuikNapp
          </h3>
          <div className="space-y-3">
            {shareButtons.map((button, index) => (
              <motion.a
                key={index}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${button.color} text-white rounded-xl p-4 flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="flex items-center gap-3">
                  <button.icon className="w-6 h-6" />
                  <span className="font-semibold">Partager sur {button.name}</span>
                </div>
                <Share2 className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
