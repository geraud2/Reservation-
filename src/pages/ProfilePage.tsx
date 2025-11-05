import { User, Ticket, Star, Gift, Settings, LogOut, Mail, Calendar, ChevronRight, MapPin, Crown, Zap, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import TicketCard from '../components/TicketCard';
import { useBookings } from '../contexts/BookingContext';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

// Dictionnaire multilingue
const translations = {
  fr: {
    title: "Mon Profil GBADOU",
    home: "Accueil",
    logout: "Déconnexion",
    memberSince: "Membre depuis",
    benin: "Bénin",
    tickets: "Billets",
    points: "Points GB",
    level: "Niveau",
    explorer: "Explorateur",
    activeBookings: "Réservations actives",
    loyaltyPoints: "Points fidélité",
    joinYear: "Année d'inscription",
    currentStatus: "Statut actuel",
    myBookings: "Mes Réservations GBADOU",
    noBookings: "Aucune réservation pour le moment",
    exploreEvents: "Explorer les Événements",
    nearby: "près de moi",
    quickActions: "Actions Rapides",
    newBooking: "Nouvelle réservation",
    findEvent: "Trouver un événement",
    becomeAmbassador: "Devenir ambassadeur",
    earnRewards: "Gagnez des récompenses",
    premiumBenefits: "Avantages Premium",
    exclusiveAccess: "Accès exclusifs",
    nearbyEvents: "Événements près de moi",
    discoverLocal: "Découvrir localement",
    myBadges: "Mes Badges GBADOU",
    settings: "Paramètres",
    accountSettings: "Paramètres du compte",
    ambassadorProgram: "Programme Ambassadeur",
    firstBooking: "Première réservation",
    beninExplorer: "Explorateur Bénin",
    ambassadorGB: "Ambassadeur GB",
    collector: "Collectionneur",
    earlyAdopter: "Early Adopter",
    socialKing: "Social King",
    language: "Langue",
    changeLanguage: "Changer la langue"
  },
  fon: {
    title: "Nu ƒe GBADOU",
    home: "Xójá",
    logout: "Yí du w'azɔ",
    memberSince: "Mɛ e jɛ mɛɖe",
    benin: "Benɛ",
    tickets: "Biyɛ",
    points: "Points GB",
    level: "Dodo",
    explorer: "Mɛɖexotɔ",
    activeBookings: "Gbɛta lɛe wɛ",
    loyaltyPoints: "Kpɔnɖewo",
    joinYear: "Ɔ ɖe e jɛ mɛɖe",
    currentStatus: "Dodo fifa",
    myBookings: "Nye Gbɛtawo GBADOU",
    noBookings: "Gbɛta ko mɛ ɖo fifa",
    exploreEvents: "Ɖo Xojlawu Ɖe Nu",
    nearby: "ɖo nɔtɛ",
    quickActions: "Wɛkɛ Wɔwɔ",
    newBooking: "Gbɛta Yɛyɛ Tɔn",
    findEvent: "Ɖo Xojla Dɔ D'ɛ",
    becomeAmbassador: "Yí Ambassador",
    earnRewards: "W'azɔ Kpɔn",
    premiumBenefits: "Premium Dɔwɔnu",
    exclusiveAccess: "Dɔwɔnu Sɔsɔ",
    nearbyEvents: "Xojlawu Ɖo Nɔtɛ",
    discoverLocal: "Ɖo Nu Ɖo Tokpɔnla",
    myBadges: "Nye Badgewo GBADOU",
    settings: "Sɔmi Nudobibi",
    accountSettings: "Asu Sɔmi",
    ambassadorProgram: "Ambassador Gbɛnɛkɛnɛ",
    firstBooking: "Gbɛta Kpɔn",
    beninExplorer: "Benɛ Mɛɖexotɔ",
    ambassadorGB: "Ambassador GB",
    collector: "Kpɔnɖeɖotɔ",
    earlyAdopter: "Mɛɖexotɔ Yɛɖɔtɔ",
    socialKing: "Hwɛnuxɔsu",
    language: "Gbe",
    changeLanguage: "Yí Gbe"
  },
  yor: {
    title: "Profaili Mi GBADOU",
    home: "Ile",
    logout: "Jade",
    memberSince: "Jọ́mọ̀ lati",
    benin: "Bẹ̀nẹ̀",
    tickets: "Tiketi",
    points: "Points GB",
    level: "Ipele",
    explorer: "Olùwàdi",
    activeBookings: "Iforukọsilẹ̀ ti nṣiṣẹ",
    loyaltyPoints: "Awọn aala igbẹkẹle",
    joinYear: "Ọdun ifọwọsi",
    currentStatus: "Ipo lọwọlọwọ",
    myBookings: "Awọn Iforukọsilẹ̀ Mi GBADOU",
    noBookings: "Ko si iforukọsilẹ̀ lọwọlọwọ",
    exploreEvents: "Ṣàwàdi Awọn Iṣẹlẹ",
    nearby: "nitosi",
    quickActions: "Awọn Iṣẹ Lẹsẹkẹsẹ",
    newBooking: "Iforukọsilẹ̀ Tuntun",
    findEvent: "Wa Iṣẹlẹ kan",
    becomeAmbassador: "Di Ambasadọ",
    earnRewards: "Jẹre ẹbun",
    premiumBenefits: "Awọn Anfaani Premium",
    exclusiveAccess: "Awọn iwọle pipa",
    nearbyEvents: "Awọn Iṣẹlẹ Nitosi",
    discoverLocal: "Ṣàwári agbegbe",
    myBadges: "Awọn Baji Mi GBADOU",
    settings: "Awọn Etọ",
    accountSettings: "Awọn Etọ Akanto",
    ambassadorProgram: "Etò Ambasadọ",
    firstBooking: "Iforukọsilẹ̀ Akọkọ",
    beninExplorer: "Olùwàdi Bẹ̀nẹ̀",
    ambassadorGB: "Ambasadọ GB",
    collector: "Akojọpọ",
    earlyAdopter: "Olùgba Ni Kete",
    socialKing: "Oba Awujọ",
    language: "Ede",
    changeLanguage: "Yi Edè Pada"
  }
};

export default function ProfilePage() {
  const { bookings } = useBookings();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState<'fr' | 'fon' | 'yor'>('fr');
  
  const t = translations[currentLanguage];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const switchLanguage = (lang: 'fr' | 'fon' | 'yor') => {
    setCurrentLanguage(lang);
  };

  // Stats utilisateur adaptées GBADOU
  const userStats = [
    { 
      label: t.tickets, 
      value: bookings.length, 
      icon: Ticket,
      description: t.activeBookings
    },
    { 
      label: t.points, 
      value: '1,240', 
      icon: Star,
      description: t.loyaltyPoints
    },
    { 
      label: t.memberSince, 
      value: '2024', 
      icon: Calendar,
      description: t.joinYear
    },
    { 
      label: t.level, 
      value: t.explorer, 
      icon: Crown,
      description: t.currentStatus
    }
  ];

  // Actions rapides GBADOU
  const quickActions = [
    { 
      icon: Ticket, 
      label: t.newBooking, 
      description: t.findEvent,
      color: 'from-violet-600 to-fuchsia-600',
      link: '/events'
    },
    { 
      icon: Gift, 
      label: t.becomeAmbassador, 
      description: t.earnRewards,
      color: 'from-amber-500 to-orange-500',
      link: '/ambassador'
    },
    { 
      icon: Crown, 
      label: t.premiumBenefits, 
      description: t.exclusiveAccess,
      color: 'from-blue-500 to-cyan-500',
      link: '/premium'
    },
    { 
      icon: MapPin, 
      label: t.nearbyEvents, 
      description: t.discoverLocal,
      color: 'from-green-500 to-emerald-500',
      link: '/events?filter=nearby'
    }
  ];

  // Badges GBADOU
  const userBadges = [
    { name: t.firstBooking, icon: '🎯', earned: true },
    { name: t.beninExplorer, icon: '🇧🇯', earned: true },
    { name: t.ambassadorGB, icon: '🌟', earned: false },
    { name: t.collector, icon: '📚', earned: bookings.length >= 3 },
    { name: t.earlyAdopter, icon: '🚀', earned: true },
    { name: t.socialKing, icon: '👑', earned: false }
  ];

  // Sélecteur de langue
  const languageOptions = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'fon', name: 'Fɔngbè', flag: '🇧🇯' },
    { code: 'yor', name: 'Yorùbá', flag: '🇳🇬' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            <span className="hidden sm:inline font-medium">{t.home}</span>
          </Link>
          
          <div className="flex items-center gap-3">
            {/* Sélecteur de langue */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/20 dark:to-fuchsia-900/20 text-violet-700 dark:text-violet-300 font-medium hover:from-violet-200 hover:to-fuchsia-200 transition-all">
                <Languages className="w-4 h-4" />
                <span className="hidden sm:inline">{t.language}</span>
                <span className="text-sm">{languageOptions.find(lang => lang.code === currentLanguage)?.flag}</span>
              </button>
              
              {/* Menu déroulant des langues */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                {languageOptions.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code as 'fr' | 'fon' | 'yor')}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:hover:from-gray-700/50 dark:hover:to-gray-800/50 transition-all ${
                      currentLanguage === lang.code 
                        ? 'bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/20 dark:to-fuchsia-900/20 text-violet-600 dark:text-violet-400' 
                        : 'text-gray-700 dark:text-gray-300'
                    } first:rounded-t-xl last:rounded-b-xl`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                    {currentLanguage === lang.code && (
                      <div className="w-2 h-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full ml-auto"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        {/* Carte Profil GBADOU */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 border border-white/20 dark:border-gray-700/50"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
            {/* Avatar et infos */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <User className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-1">
                  <Crown className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                  <h1 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                    {user?.fullName || t.explorer + ' GBADOU'}
                  </h1>
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    PRO
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{user?.email || 'utilisateur@gbadou.bj'}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{t.benin}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bouton déconnexion */}
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors w-full sm:w-auto order-first sm:order-last border border-red-200 dark:border-red-800"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">{t.logout}</span>
            </button>
          </div>

          {/* Stats GBADOU */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-gray-100 dark:border-gray-700">
            {userStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-3 sm:p-4 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl border border-white/20 dark:border-gray-600/50"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600 dark:text-violet-400 mx-auto mb-2" />
                <div className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Grid principale */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Colonne principale - Billets */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mes billets GBADOU */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 border border-white/20 dark:border-gray-700/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                <h2 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-3">
                  <Ticket className="w-5 h-5 text-violet-600" />
                  {t.myBookings}
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/20 dark:to-fuchsia-900/20 px-3 py-1 rounded-full w-fit font-semibold">
                  {bookings.length} {bookings.length > 1 ? t.tickets : t.tickets}
                </span>
              </div>

              {bookings.length === 0 ? (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ticket className="w-8 h-8 text-violet-600 dark:text-violet-400" />
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mb-2 font-medium">
                    {t.noBookings}
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mb-4">
                    {t.discoverLocal}
                  </p>
                  <Link to="/events">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-full font-black hover:shadow-lg transition-all tracking-tight"
                    >
                      {t.exploreEvents}
                    </motion.button>
                  </Link>
                </motion.div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {bookings.map((booking, index) => (
                    <motion.div
                      key={booking.id}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <TicketCard
                        id={booking.id}
                        eventTitle={booking.eventTitle}
                        eventDate={booking.eventDate}
                        eventVenue={booking.eventVenue}
                        category={booking.category}
                        userName={booking.userName}
                      
                        
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Badges GBADOU */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 border border-white/20 dark:border-gray-700/50"
            >
              <h2 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight flex items-center gap-3 mb-6">
                <Zap className="w-5 h-5 text-amber-500" />
                {t.myBadges}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {userBadges.map((badge, index) => (
                  <motion.div
                    key={badge.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-center p-3 rounded-xl border-2 ${
                      badge.earned
                        ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800'
                        : 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 grayscale'
                    }`}
                  >
                    <div className="text-2xl mb-2">{badge.icon}</div>
                    <div className={`text-xs font-semibold ${
                      badge.earned 
                        ? 'text-green-700 dark:text-green-300' 
                        : 'text-gray-400 dark:text-gray-500'
                    }`}>
                      {badge.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Colonne latérale - Actions */}
          <div className="space-y-6">
            {/* Actions rapides GBADOU */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 border border-white/20 dark:border-gray-700/50"
            >
              <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight mb-4">
                {t.quickActions}
              </h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.link}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-gray-700/50 dark:to-gray-800/50 hover:from-violet-100 hover:to-fuchsia-100 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all text-left border border-white/20 dark:border-gray-600/50 group"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center flex-shrink-0`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-black text-gray-900 dark:text-white text-sm tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {action.label}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {action.description}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                    </motion.button>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Paramètres GBADOU */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 border border-white/20 dark:border-gray-700/50"
            >
              <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight mb-4">
                {t.settings}
              </h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:hover:from-gray-700/50 dark:hover:to-gray-800/50 transition-all text-left group">
                  <Settings className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {t.accountSettings}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                </button>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:hover:from-gray-700/50 dark:hover:to-gray-800/50 transition-all text-left group">
                  <Crown className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-amber-500 transition-colors" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium group-hover:text-amber-500 transition-colors">
                    {t.premiumBenefits}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-amber-500 transition-colors" />
                </button>

                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:hover:from-gray-700/50 dark:hover:to-gray-800/50 transition-all text-left group">
                  <Gift className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-green-500 transition-colors" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium group-hover:text-green-500 transition-colors">
                    {t.ambassadorProgram}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-green-500 transition-colors" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}