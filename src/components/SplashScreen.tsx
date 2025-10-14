// components/SplashScreen.jsx
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Zap className="w-20 h-20 mx-auto mb-4" />
        </motion.div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-black mb-2"
        >
          KickReserve
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg opacity-90"
        >
          Choppe ta place en un clin d'œil
        </motion.p>
      </motion.div>
    </div>
  );
}