import { motion } from 'framer-motion';
import { ArrowLeft, Bell, BellOff, Settings, Check, X, Calendar, Ticket, Gift, Users, Star, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Types pour TypeScript
interface Notification {
  id: number;
  type: 'event' | 'payment' | 'social' | 'system' | 'promo';
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: React.ComponentType<any>;
  color: string;
  action?: string;
}

export default function NotificationsPage() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'event',
      title: 'Rappel Événement',
      message: 'Concert Afrobeat Live commence dans 2 heures',
      time: 'Il y a 10 min',
      read: false,
      icon: Calendar,
      color: 'text-blue-500',
      action: 'Voir billet'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Paiement Confirmé',
      message: 'Votre réservation pour Tournoi Football a été confirmée',
      time: 'Il y a 1 heure',
      read: false,
      icon: Ticket,
      color: 'text-green-500',
      action: 'Voir détails'
    },
    {
      id: 3,
      type: 'social',
      title: 'Nouveau Message',
      message: 'Marie a commenté votre participation',
      time: 'Il y a 2 heures',
      read: true,
      icon: MessageCircle,
      color: 'text-purple-500',
      action: 'Répondre'
    },
    {
      id: 4,
      type: 'promo',
      title: 'Offre Spéciale',
      message: '20% de réduction sur tous les événements musique ce weekend',
      time: 'Il y a 5 heures',
      read: true,
      icon: Gift,
      color: 'text-amber-500',
      action: 'Découvrir'
    },
    {
      id: 5,
      type: 'system',
      title: 'Mise à Jour',
      message: 'Nouvelle version de GBADOU disponible',
      time: 'Il y a 1 jour',
      read: true,
      icon: Star,
      color: 'text-violet-500',
      action: 'Mettre à jour'
    },
    {
      id: 6,
      type: 'social',
      title: 'Invitation Groupe',
      message: 'Jean vous invite à rejoindre son groupe pour le concert',
      time: 'Il y a 2 jours',
      read: true,
      icon: Users,
      color: 'text-cyan-500',
      action: 'Accepter'
    }
  ]);

  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  // Marquer une notification comme lue
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  // Marquer toutes comme lues
  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  // Supprimer une notification
  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  // Filtrer les notifications
  const filteredNotifications = showUnreadOnly 
    ? notifications.filter(notif => !notif.read)
    : notifications;

  // Compter les notifications non lues
  const unreadCount = notifications.filter(notif => !notif.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" />
            </button>
            <h1 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight">
              Notifications
            </h1>
          </div>
          
          {unreadCount > 0 && (
            <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {unreadCount} non lue{unreadCount > 1 ? 's' : ''}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* En-tête avec actions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"
        >
          <div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
              Mes Alertes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Restez informé de vos événements et activités
            </p>
          </div>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowUnreadOnly(!showUnreadOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                showUnreadOnly
                  ? 'bg-violet-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <Bell className="w-4 h-4" />
              Non lues seulement
            </motion.button>

            {unreadCount > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={markAllAsRead}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                <Check className="w-4 h-4" />
                Tout marquer lu
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Liste des notifications */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          {filteredNotifications.length === 0 ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl border border-white/20 dark:border-gray-700/50"
            >
              <BellOff className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Aucune notification
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {showUnreadOnly 
                  ? "Vous n'avez pas de notifications non lues" 
                  : "Vous n'avez pas encore de notifications"
                }
              </p>
            </motion.div>
          ) : (
            filteredNotifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-4 border-2 transition-all ${
                  notification.read 
                    ? 'border-white/20 dark:border-gray-700/50' 
                    : 'border-violet-200 dark:border-violet-600/30 bg-violet-50/50 dark:bg-violet-900/10'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Icône de notification */}
                  <div className={`p-3 rounded-xl ${notification.color} bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700`}>
                    <notification.icon className="w-5 h-5" />
                  </div>

                  {/* Contenu */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className={`font-black text-lg tracking-tight ${
                          notification.read 
                            ? 'text-gray-700 dark:text-gray-300' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {notification.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                          {notification.message}
                        </p>
                      </div>
                      
                      {!notification.read && (
                        <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {notification.time}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        {notification.action && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              markAsRead(notification.id);
                              // Action selon le type de notification
                              if (notification.type === 'event') {
                                navigate('/profile');
                              } else if (notification.type === 'payment') {
                                navigate('/features/wallet');
                              }
                            }}
                            className="text-xs bg-violet-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-violet-700 transition-colors"
                          >
                            {notification.action}
                          </motion.button>
                        )}
                        
                        {!notification.read && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => markAsRead(notification.id)}
                            className="text-green-600 hover:text-green-700 transition-colors"
                            title="Marquer comme lu"
                          >
                            <Check className="w-4 h-4" />
                          </motion.button>
                        )}
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => deleteNotification(notification.id)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                          title="Supprimer"
                        >
                          <X className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Paramètres des notifications */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-black text-gray-900 dark:text-white text-lg tracking-tight flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Paramètres des notifications
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-violet-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-violet-700 transition-colors"
            >
              Sauvegarder
            </motion.button>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Rappels événements', description: 'Notifications avant vos événements', enabled: true },
              { label: 'Promotions', description: 'Offres spéciales et réductions', enabled: true },
              { label: 'Messages sociaux', description: 'Commentaires et invitations', enabled: true },
              { label: 'Paiements', description: 'Confirmations et reçus', enabled: true },
              { label: 'Nouvelles fonctionnalités', description: 'Mises à jour de l\'application', enabled: false }
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {setting.label}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {setting.description}
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={setting.enabled} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-600"></div>
                </label>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}