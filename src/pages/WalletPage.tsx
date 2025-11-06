import { motion } from 'framer-motion';
import { ArrowLeft, Wallet, Coins, Gift, History, TrendingUp, CreditCard, Star, Download, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WalletPage() {
  const navigate = useNavigate();

  // Données du portefeuille
  const walletData = {
    balance: 1240,
    cashbackAvailable: 3500,
    points: 2450,
    level: 'Explorateur',
    progress: 65
  };

  // Historique des transactions
  const transactions = [
    {
      id: 1,
      type: 'cashback',
      amount: 500,
      description: 'Cashback réservation Concert Afrobeat',
      date: '2024-12-15',
      icon: TrendingUp,
      color: 'text-green-500'
    },
    {
      id: 2,
      type: 'purchase',
      amount: -15000,
      description: 'Réservation - Concert Afrobeat',
      date: '2024-12-14',
      icon: CreditCard,
      color: 'text-red-500'
    },
    {
      id: 3,
      type: 'points',
      amount: 100,
      description: 'Points parrainage - Marie K.',
      date: '2024-12-13',
      icon: Gift,
      color: 'text-blue-500'
    },
    {
      id: 4,
      type: 'cashback',
      amount: 3000,
      description: 'Cashback programme ambassadeur',
      date: '2024-12-10',
      icon: TrendingUp,
      color: 'text-green-500'
    }
  ];

  // Avantages selon le niveau
  const levelBenefits = [
    { benefit: 'Cashback 5%', description: 'Sur toutes vos réservations' },
    { benefit: 'Billets offerts', description: '1 billet gratuit tous les 10' },
    { benefit: 'Support prioritaire', description: 'Service client dédié' },
    { benefit: 'Accès early-bird', description: 'Réservation 24h avant' }
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
            Mon Portefeuille GBADOU
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Carte Solde Principal */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white mb-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold opacity-90">Solde Total</h2>
              <p className="text-3xl sm:text-4xl font-black tracking-tight">
                {walletData.balance.toLocaleString()} Points
              </p>
            </div>
            <div className="bg-white/20 p-3 rounded-2xl">
              <Wallet className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/20 rounded-xl p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-1">
                <Coins className="w-4 h-4" />
                <span className="text-sm font-medium">Cashback</span>
              </div>
              <p className="text-lg font-black">{walletData.cashbackAvailable.toLocaleString()} FCFA</p>
            </div>
            <div className="bg-white/20 rounded-xl p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Niveau</span>
              </div>
              <p className="text-lg font-black">{walletData.level}</p>
            </div>
          </div>
        </motion.div>

        {/* Barre de Progression Niveau */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 dark:border-gray-700/50 mb-6"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-gray-900 dark:text-white">Progression vers Expert</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{walletData.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${walletData.progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Plus que {2500 - walletData.points} points pour atteindre le niveau Expert
          </p>
        </motion.div>

        {/* Actions Rapides */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 dark:border-gray-700/50 mb-6"
        >
          <h3 className="font-black text-gray-900 dark:text-white text-lg mb-4 tracking-tight">
            Actions Rapides
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Gift, label: 'Utiliser Points', color: 'from-violet-500 to-fuchsia-500' },
              { icon: Share2, label: 'Parrainer', color: 'from-green-500 to-emerald-500' },
              { icon: Download, label: 'Exporter', color: 'from-blue-500 to-cyan-500' },
              { icon: History, label: 'Historique', color: 'from-amber-500 to-orange-500' }
            ].map((action, index) => (
              <motion.button
                key={action.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${action.color} text-white p-3 sm:p-4 rounded-xl text-center hover:shadow-lg transition-all`}
              >
                <action.icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2" />
                <span className="text-xs font-semibold">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Avantages du Niveau */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 dark:border-gray-700/50 mb-6"
        >
          <h3 className="font-black text-gray-900 dark:text-white text-lg mb-4 tracking-tight">
            🎁 Avantages {walletData.level}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {levelBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.benefit}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-gray-700/50 dark:to-gray-800/50 p-3 sm:p-4 rounded-xl border border-violet-100 dark:border-violet-900/20"
              >
                <div className="font-semibold text-violet-700 dark:text-violet-300 text-sm mb-1">
                  {benefit.benefit}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs">
                  {benefit.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Historique des Transactions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 dark:border-gray-700/50"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-black text-gray-900 dark:text-white text-lg tracking-tight">
              📊 Historique des Transactions
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {transactions.length} opérations
            </span>
          </div>

          <div className="space-y-3">
            {transactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className={`p-2 rounded-lg ${transaction.color} bg-white dark:bg-gray-800`}>
                  <transaction.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    {transaction.description}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    {new Date(transaction.date).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <div className={`font-semibold text-sm ${
                  transaction.amount > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString()} 
                  {transaction.type === 'cashback' || transaction.type === 'purchase' ? ' FCFA' : ' pts'}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}