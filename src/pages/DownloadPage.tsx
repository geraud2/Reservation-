import { Smartphone, ArrowLeft, Download, QrCode, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

export default function DownloadPage() {
  const navigate = useNavigate();
  const appUrl = 'https://quiknapp.com/download';

  const features = [
    { icon: "⚡", title: "Rapide", description: "Chargement instantané" },
    { icon: "🔔", title: "Notifications", description: "Alertes en temps réel" },
    { icon: "📱", title: "Hors-ligne", description: "Accès sans connexion" },
    { icon: "🎫", title: "Billets", description: "Gestion simplifiée" }
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
            Télécharger l'app
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
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Télécharge QuikNapp
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4">
            Emporte tous tes événements dans ta poche
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
            <span>4.9/5 • 10K+ téléchargements</span>
          </div>
        </motion.div>

        {/* QR Code Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-lg text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <QrCode className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              Scanne pour télécharger
            </h3>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 p-4 sm:p-6 rounded-xl inline-block mb-4">
            <QRCodeSVG 
              value={appUrl} 
              size={window.innerWidth < 640 ? 160 : 200}
              level="M"
              includeMargin
            />
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Scanne ce QR code avec ton appareil photo
          </p>
        </motion.div>

        {/* App Stores Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-3 sm:space-y-4 mb-6 sm:mb-8"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block bg-black text-white rounded-xl p-4 text-center font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-3"
          >
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-xs">A</span>
            </div>
            <span>Télécharger sur l'App Store</span>
          </motion.a>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block bg-green-600 text-white rounded-xl p-4 text-center font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-3"
          >
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.189 20.193l2.716 2.715C18.595 26.372 22 24.096 22 19.94v-8.864c0-4.297-3.356-6.456-5.232-7.114L13.798 4.6v17.407z"/>
              </svg>
            </div>
            <span>Télécharger sur Google Play</span>
          </motion.a>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-4 mb-6 sm:mb-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm"
            >
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                {feature.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* PWA Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-violet-50 dark:bg-violet-900/20 rounded-2xl p-4 sm:p-6 border border-violet-100 dark:border-violet-800"
        >
          <div className="flex items-start gap-3">
            <Download className="w-5 h-5 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white text-sm sm:text-base">
                Installation PWA (Recommandé)
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Ajoute QuikNapp à ton écran d'accueil directement depuis ton navigateur pour une expérience native optimale, notifications push et accès hors-ligne.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mobile Instructions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400">
            📱 Disponible sur iOS 12+ et Android 8+
          </p>
        </motion.div>
      </div>
    </div>
  );
}