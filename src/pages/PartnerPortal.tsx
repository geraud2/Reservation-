import { BarChart, Users, Ticket, DollarSign, Upload, Settings, Bell, Search, Calendar, MapPin, Clock, Tag, Eye, Edit, Trash2, Download, Filter, Plus, TrendingUp, Star, MessageCircle, Shield, LogOut, Menu, X } from "lucide-react";
import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";

export default function PartnerPortal() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    setSidebarOpen(window.innerWidth >= 1024);
  }, []);

  const stats = [
    { label: 'Vues totales', value: '24.5K', change: '+18%', icon: Eye, color: 'from-blue-500 to-cyan-500' },
    { label: 'Billets vendus', value: '1,248', change: '+32%', icon: Ticket, color: 'from-green-500 to-emerald-500' },
    { label: 'Revenus', value: '8.7M FCFA', change: '+25%', icon: DollarSign, color: 'from-amber-500 to-orange-500' },
    { label: 'Taux de conversion', value: '5.1%', change: '+2.3%', icon: TrendingUp, color: 'from-violet-600 to-fuchsia-600' }
  ];

  const recentEvents = [
    { id: 1, name: 'Concert Afrobeat', date: '15 Déc 2024', tickets: 245, revenue: '1.2M FCFA', status: 'actif' },
    { id: 2, name: 'Festival Culturel', date: '20 Déc 2024', tickets: 189, revenue: '950K FCFA', status: 'actif' },
    { id: 3, name: 'Conférence Tech', date: '10 Déc 2024', tickets: 156, revenue: '780K FCFA', status: 'terminé' }
  ];

  const navigationItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: BarChart },
    { id: 'events', label: 'Événements', icon: Ticket, badge: '3' },
    { id: 'audience', label: 'Audience', icon: Users },
    { id: 'earnings', label: 'Revenus', icon: DollarSign },
    { id: 'analytics', label: 'Analytique', icon: BarChart },
    { id: 'settings', label: 'Paramètres', icon: Settings }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 w-8 h-8 rounded-lg"></div>
              <span className="font-black text-gray-900 dark:text-white">GBADOU Partners</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 relative">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 
        transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 w-8 h-8 rounded-lg"></div>
              <span className="ml-3 text-xl font-black text-gray-900 dark:text-white">
                GBADOU Partners
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

        <nav className="flex-1 py-6">
          <div className="px-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 1024) setSidebarOpen(false);
                }}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                  activeTab === item.id
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
                    activeTab === item.id
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

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                Partenaire Pro
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                Niveau Gold
              </p>
            </div>
          </div>
          <button className="flex items-center w-full px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Déconnexion</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64 pt-16 lg:pt-0">
        {/* Desktop Header */}
        <header className="hidden lg:block bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-black text-gray-900 dark:text-white capitalize">
                {activeTab}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Bienvenue dans votre espace partenaire
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
                  2
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
          {/* Stats Overview */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
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
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium flex items-center">
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
          )}

          {/* Content */}
          <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && <DashboardContent recentEvents={recentEvents} />}
            {activeTab === 'events' && <EventManagement />}
            {activeTab === 'audience' && <AudienceAnalytics />}
            {activeTab === 'earnings' && <EarningsDashboard />}
            {activeTab === 'analytics' && <AnalyticsContent />}
            {activeTab === 'settings' && <PartnerSettings />}
          </div>
        </main>
      </div>
    </div>
  );
}

// Composants pour chaque section
interface DashboardContentProps {
  recentEvents: {
    id: Key | null | undefined;
    name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
    date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
    revenue: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
    tickets: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
  }[];
}
const DashboardContent = ({ recentEvents }: DashboardContentProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-black text-gray-900 dark:text-white">Événements Récents</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors">
          <Plus className="w-4 h-4" />
          Nouvel événement
        </button>
      </div>
      <div className="space-y-4">
        {recentEvents.map((event) => (
          <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center">
                <Ticket className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{event.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900 dark:text-white">{event.revenue}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{event.tickets} billets</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
      <h3 className="text-lg font-black text-gray-900 dark:text-white mb-6">Performance</h3>
      <div className="h-64 flex items-end justify-between gap-2">
        {[65, 80, 60, 90, 75, 85, 95].map((height, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-gradient-to-t from-violet-600 to-fuchsia-600 rounded-t-lg transition-all hover:opacity-80"
              style={{ height: `${height}%` }}
            />
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {['L', 'M', 'M', 'J', 'V', 'S', 'D'][index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const EventManagement = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-black text-gray-900 dark:text-white">Gestion des Événements</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Créez et gérez vos événements</p>
      </div>
      <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-black hover:shadow-lg transition-all">
        <Plus className="w-5 h-5" />
        Nouvel événement
      </button>
    </div>
    <EventCreationForm />
  </div>
);

const AudienceAnalytics = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
    <h3 className="text-lg font-black text-gray-900 dark:text-white mb-6">Analytique Audience</h3>
    <div className="text-center py-12">
      <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-500 dark:text-gray-400">Analytique audience en développement</p>
    </div>
  </div>
);

const EarningsDashboard = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
    <h3 className="text-lg font-black text-gray-900 dark:text-white mb-6">Revenus et Paiements</h3>
    <div className="text-center py-12">
      <DollarSign className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-500 dark:text-gray-400">Tableau de bord des revenus en développement</p>
    </div>
  </div>
);

const AnalyticsContent = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
    <h3 className="text-lg font-black text-gray-900 dark:text-white mb-6">Analytique Avancée</h3>
    <div className="text-center py-12">
      <BarChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-500 dark:text-gray-400">Analytique avancée en développement</p>
    </div>
  </div>
);

const PartnerSettings = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
    <h3 className="text-lg font-black text-gray-900 dark:text-white mb-6">Paramètres du Compte</h3>
    <div className="text-center py-12">
      <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-500 dark:text-gray-400">Paramètres en développement</p>
    </div>
  </div>
);

// Composant Création d'Événement (amélioré)
const EventCreationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    price: '',
    type: 'free',
    category: '',
    image: null,
    capacity: '',
    tags: []
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-white/20 dark:border-gray-700/50">
      <h3 className="text-lg font-black mb-6 text-gray-900 dark:text-white">
        Créer un nouvel événement
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Titre de l'événement *
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
            placeholder="Nom de votre événement"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Type d'événement *
          </label>
          <select className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all">
            <option value="concert">Concert</option>
            <option value="conference">Conférence</option>
            <option value="festival">Festival</option>
            <option value="sport">Sport</option>
            <option value="art">Art & Culture</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Date et heure *
          </label>
          <div className="flex gap-3">
            <input 
              type="date" 
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all" 
            />
            <input 
              type="time" 
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all" 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Lieu *
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
            placeholder="Adresse complète"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Prix *
          </label>
          <div className="flex gap-3">
            <select className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all">
              <option value="free">Gratuit</option>
              <option value="paid">Payant</option>
            </select>
            <input
              type="number"
              placeholder="Prix (FCFA)"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Capacité maximale
          </label>
          <input
            type="number"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
            placeholder="Nombre de places"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description *
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
            placeholder="Décrivez votre événement en détail..."
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Image de couverture *
          </label>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-8 text-center hover:border-violet-500 dark:hover:border-violet-400 transition-colors cursor-pointer">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Glissez-déposez votre image ou <span className="text-violet-600 dark:text-violet-400 font-medium">parcourir</span>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              PNG, JPG, WEBP jusqu'à 10MB
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-8">
        <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          Enregistrer brouillon
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-black hover:shadow-lg transition-all">
          Publier l'événement
        </button>
      </div>
    </div>
  );
};