import { BarChart, Bell, DollarSign, Settings, Ticket, Users, TrendingUp, Calendar, Download, Filter, Search, Eye, Edit, Trash2, Mail, Phone, MapPin, Clock, Star, DownloadCloud, Upload, Shield, LogOut, Menu, X, Home, PieChart, MessageCircle, Wallet, Gift, Video, Users as UsersIcon, QrCode, WifiOff, Map } from "lucide-react";
import { useState, useEffect } from "react";

// Tableau de Bord Admin Responsive et Complet
export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Détection du mode système et responsive
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    
    const checkMobile = () => {
      setSidebarOpen(window.innerWidth >= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Données enrichies
  const stats = [
    { label: 'Utilisateurs total', value: '12,458', change: '+12%', icon: Users, color: 'from-blue-500 to-cyan-500', trend: 'up' },
    { label: 'Événements actifs', value: '156', change: '+5%', icon: Ticket, color: 'from-green-500 to-emerald-500', trend: 'up' },
    { label: 'Billets vendus', value: '8,742', change: '+23%', icon: DollarSign, color: 'from-amber-500 to-orange-500', trend: 'up' },
    { label: 'Revenus totaux', value: '25.8M FCFA', change: '+18%', icon: BarChart, color: 'from-violet-600 to-fuchsia-600', trend: 'up' },
    { label: 'Taux de conversion', value: '8.2%', change: '+3%', icon: TrendingUp, color: 'from-purple-500 to-pink-500', trend: 'up' },
    { label: 'Satisfaction', value: '4.8/5', change: '+0.2', icon: Star, color: 'from-red-500 to-rose-500', trend: 'up' }
  ];

  const navigationItems = [
    { id: 'overview', label: 'Aperçu', icon: Home, badge: null },
    { id: 'users', label: 'Utilisateurs', icon: Users, badge: '12K' },
    { id: 'events', label: 'Événements', icon: Ticket, badge: '156' },
    { id: 'partners', label: 'Partenaires', icon: UsersIcon, badge: '89' },
    { id: 'payments', label: 'Paiements', icon: DollarSign, badge: '✓' },
    { id: 'analytics', label: 'Analytique', icon: PieChart, badge: null },
    { id: 'affiliation', label: 'Affiliation', icon: Gift, badge: '24' },
    { id: 'reports', label: 'Rapports', icon: Download, badge: null },
    { id: 'settings', label: 'Paramètres', icon: Settings, badge: null }
  ];

  const recentActivities = [
    { id: 1, type: 'user', message: 'Nouvel utilisateur inscrit', user: 'Koffi Mensah', time: '2 min', icon: Users, color: 'text-blue-500' },
    { id: 2, type: 'event', message: 'Événement créé', user: 'Concert Afro', time: '5 min', icon: Ticket, color: 'text-green-500' },
    { id: 3, type: 'payment', message: 'Paiement reçu', user: '15,000 FCFA', time: '10 min', icon: DollarSign, color: 'text-amber-500' },
    { id: 4, type: 'support', message: 'Ticket support', user: 'Problème billet', time: '15 min', icon: MessageCircle, color: 'text-purple-500' }
  ];

  const quickStats = [
    { label: 'Events Today', value: '8', change: '+2' },
    { label: 'Pending Tickets', value: '12', change: '-3' },
    { label: 'New Users', value: '34', change: '+8' },
    { label: 'Revenue Today', value: '450K', change: '+120K' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header Mobile */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              {sidebarOpen ? (
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 w-8 h-8 rounded-lg"></div>
              <span className="font-black text-gray-900 dark:text-white">GBADOU Admin</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 
        transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header Sidebar */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 w-8 h-8 rounded-lg"></div>
              <span className="ml-3 text-xl font-black text-gray-900 dark:text-white">
                GBADOU Admin
              </span>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  if (window.innerWidth < 1024) {
                    setSidebarOpen(false);
                  }
                }}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <div className="flex items-center">
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    activeSection === item.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700">
            <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                Admin GBADOU
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                Super Admin
              </p>
            </div>
          </div>
          <button className="flex items-center w-full mt-2 px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Déconnexion</span>
          </button>
        </div>
      </div>

      {/* Overlay pour mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64 pt-16 lg:pt-0">
        {/* Desktop Header */}
        <header className="hidden lg:block bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="px-8 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-black text-gray-900 dark:text-white capitalize">
                {activeSection}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Bienvenue, Administrateur • Dernière connexion: Aujourd'hui, 14:30
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
              </div>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors relative">
                <Bell className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-8">
          {/* Stats Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6 mb-6 lg:mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-4 lg:p-6 shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium truncate">
                      {stat.label}
                    </p>
                    <p className="text-xl lg:text-2xl font-black text-gray-900 dark:text-white mt-1 truncate">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 ml-3`}>
                    <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center mt-3 lg:mt-4">
                  <span className={`text-sm font-medium flex items-center ${
                    stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                    vs mois dernier
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Column - Charts & Activities */}
            <div className="xl:col-span-2 space-y-6 lg:space-y-8">
              {/* Revenue Chart */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 lg:p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <h3 className="text-lg font-black text-gray-900 dark:text-white">
                    Performance des Revenus
                  </h3>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-lg">Mois</button>
                    <button className="px-3 py-1 text-xs bg-violet-600 text-white rounded-lg">Année</button>
                  </div>
                </div>
                <div className="h-48 lg:h-64 flex items-end justify-between gap-1 lg:gap-2">
                  {[65, 80, 60, 90, 75, 85, 95, 70, 88, 92, 78, 85].map((height, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center group">
                      <div
                        className="w-full bg-gradient-to-t from-violet-600 to-fuchsia-600 rounded-t-lg transition-all duration-300 hover:opacity-80 cursor-pointer"
                        style={{ height: `${height}%`, minHeight: '20px' }}
                      />
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 hidden lg:block">
                        {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activities */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 lg:p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-4 lg:mb-6">
                  Activités Récentes
                </h3>
                <div className="space-y-3 lg:space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gray-200 dark:bg-gray-600 flex items-center justify-center flex-shrink-0`}>
                        <activity.icon className={`w-4 h-4 lg:w-5 lg:h-5 ${activity.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {activity.message}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {activity.user} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Quick Stats & Actions */}
            <div className="space-y-6 lg:space-y-8">
              {/* Quick Stats */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 lg:p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-4">
                  Aujourd'hui
                </h3>
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  {quickStats.map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <p className="text-2xl font-black text-gray-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {stat.label}
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl p-4 lg:p-6 text-white">
                <h3 className="text-lg font-black mb-4">Actions Rapides</h3>
                <div className="grid grid-cols-2 gap-2 lg:gap-3">
                  <button className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors flex flex-col items-center">
                    <Users className="w-5 h-5 lg:w-6 lg:h-6 mb-2" />
                    <span className="text-xs font-medium text-center">Nouvel Utilisateur</span>
                  </button>
                  <button className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors flex flex-col items-center">
                    <Ticket className="w-5 h-5 lg:w-6 lg:h-6 mb-2" />
                    <span className="text-xs font-medium text-center">Créer Événement</span>
                  </button>
                  <button className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors flex flex-col items-center">
                    <DownloadCloud className="w-5 h-5 lg:w-6 lg:h-6 mb-2" />
                    <span className="text-xs font-medium text-center">Exporter</span>
                  </button>
                  <button className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors flex flex-col items-center">
                    <Settings className="w-5 h-5 lg:w-6 lg:h-6 mb-2" />
                    <span className="text-xs font-medium text-center">Paramètres</span>
                  </button>
                </div>
              </div>

              {/* System Status */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 lg:p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-4">
                  Statut Système
                </h3>
                <div className="space-y-3">
                  {[
                    { service: 'API Principale', status: 'online', color: 'bg-green-500' },
                    { service: 'Base de données', status: 'online', color: 'bg-green-500' },
                    { service: 'Paiements', status: 'online', color: 'bg-green-500' },
                    { service: 'Notifications', status: 'warning', color: 'bg-amber-500' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.service}</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}