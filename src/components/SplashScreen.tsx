// components/SplashScreen.jsx
import { motion } from 'framer-motion';
import { MapPin, Ticket, Sparkles, PartyPopper, PartyPopperIcon } from 'lucide-react';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center text-white"
      >
        {/* Logo élégant avec animation subtile */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto border border-white/20 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <PartyPopperIcon className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>
          
          {/* Effet de lumière subtil */}
          <motion.div
            animate={{ 
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -top-1 -right-1"
          >
            <Sparkles className="w-5 h-5 text-yellow-200" />
          </motion.div>
        </motion.div>

        {/* Titre avec animation élégante */}
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          className="text-5xl font-bold mb-4 tracking-tight"
          style={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 700
          }}
        >
          GBADOU
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl text-white/90 mb-6 font-light tracking-wide"
        >
          Vos événements, notre passion
        </motion.p>

        {/* Localisation discrète */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-2 text-white/70 mb-8"
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Bénin</span>
        </motion.div>

        {/* Barre de chargement épurée */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ delay: 1.1, duration: 2 }}
          className="h-0.5 bg-white/30 rounded-full mx-auto overflow-hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ delay: 1.1, duration: 2, ease: "easeInOut" }}
            className="h-full bg-white rounded-full"
          />
        </motion.div>

        {/* Message subtil */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-white/50 text-xs mt-4"
        >
          Préparation de votre expérience...
        </motion.p>
      </motion.div>
    </div>
  );
}