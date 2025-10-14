import { Smartphone, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

export default function DownloadPage() {
  const navigate = useNavigate();
  const appUrl = 'https://quiknapp.com';

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
            Télécharger l'app
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
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Télécharge QuikNapp
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Emporte tous tes événements dans ta poche
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-6 shadow-lg text-center"
        >
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
            Scanne pour télécharger
          </h3>
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl inline-block">
            <QRCodeSVG value={appUrl} size={200} />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block bg-black text-white rounded-xl p-4 text-center font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Télécharger sur l'App Store
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block bg-green-600 text-white rounded-xl p-4 text-center font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Télécharger sur Google Play
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-violet-50 dark:bg-violet-900/20 rounded-2xl p-6"
        >
          <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
            Installation PWA
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Tu peux aussi ajouter QuikNapp à ton écran d'accueil directement depuis ton navigateur pour une expérience optimale
          </p>
        </motion.div>
      </div>
    </div>
  );
}
