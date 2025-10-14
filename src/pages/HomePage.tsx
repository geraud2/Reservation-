import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Users, LogOut, Star, TrendingUp, Clock, MapPin, Ticket, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import { useAuth } from '../contexts/AuthContext';

export default function HomePage() {
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
  };

  // Événements tendance (mock data)
  const trendingEvents = [
    {
      id: 1,
      title: "Festival Electro Night",
      date: "15 DÉC",
      location: "Paris, FR",
      price: "45€",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Match PSG vs OM",
      date: "20 DÉC",
      location: "Parc des Princes",
      price: "75€",
      image: "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Concert Jazz Live",
      date: "18 DÉC",
      location: "New Morning",
      price: "35€",
      image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  // Fonctionnalités spéciales
  const features = [
    {
      icon: Zap,
      title: "Réservation Flash",
      description: "Chope les places avant tout le monde avec notre système prioritaire"
    },
    {
      icon: MapPin,
      title: "Places Assises Garanties",
      description: "Choisis ton emplacement sur la carte interactive"
    },
    {
      icon: Ticket,
      title: "Billets Digitaux Sécurisés",
      description: "QR codes uniques et protection anti-fraude"
    },
    {
      icon: Clock,
      title: "Rappels Intelligents",
      description: "Notifications avant l'événement et alertes météo"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Header avec auth */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-4">
        {isAuthenticated && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <span className="text-white text-sm font-medium bg-black/30 px-3 py-1 rounded-full">
              👋 {user?.fullName?.split(' ')[0] || 'User'}
            </span>
            <button
              onClick={handleLogout}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              title="Déconnexion"
            >
              <LogOut className="w-4 h-4 text-white" />
            </button>
          </motion.div>
        )}
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Concert"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-50 dark:to-gray-900" />
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2 mb-4"
            >
              <TrendingUp className="w-4 h-4" />
              +5000 réservations cette semaine
            </motion.div>
            
            <h1 className="text-6xl font-black text-white mb-4 tracking-tight">
              QuikNapp
            </h1>
            <p className="text-2xl text-white font-semibold mb-8">
              Choppe ta place en un clin d'œil
            </p>
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-violet-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-violet-700 transition-colors flex items-center gap-2 mx-auto"
              >
                Découvrir les événements
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Événements Tendance */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Événements Tendance 🔥
            </h2>
            <Link to="/events" className="text-violet-600 font-semibold hover:text-violet-700 flex items-center gap-2">
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {trendingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-violet-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    {event.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                    <MapPin className="w-4 h-4 ml-2" />
                    {event.location}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>
                  <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-violet-600 hover:text-white text-gray-900 dark:text-white py-2 rounded-lg font-semibold transition-colors">
                    Réserver maintenant
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Comment ça marche */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { number: '50K+', label: 'Utilisateurs Actifs', icon: Users },
            { number: '2K+', label: 'Événements', icon: Ticket },
            { number: '98%', label: 'Satisfaction', icon: Star },
            { number: '24/7', label: 'Support', icon: Shield },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <stat.icon className="w-8 h-8 text-violet-600 mx-auto mb-3" />
              <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.section>
       

{/* Section Devenir Ambassadeur */}
<motion.section
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  className="mb-16 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
>
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="relative z-10">
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
        <Star className="w-4 h-4" />
        Programme Ambassadeur
      </div>
      <h2 className="text-3xl font-bold mb-4">
        Deviens Ambassadeur QuikNapp
      </h2>
      <p className="text-lg opacity-90 max-w-2xl mx-auto">
        Recommande l'app à tes amis et gagne des récompenses exclusives
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {[
        {
          step: "1",
          title: "Parraine tes amis",
          description: "Partage ton code unique"
        },
        {
          step: "2", 
          title: "Ils réservent",
          description: "Tes amis utilisent ton code"
        },
        {
          step: "3",
          title: "Tu gagnes",
          description: "Crédits et avantages exclusifs"
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
        >
          <div className="w-12 h-12 bg-white text-violet-600 rounded-full flex items-center justify-center mx-auto mb-3 font-black text-lg">
            {item.step}
          </div>
          <h3 className="font-bold text-white mb-2">{item.title}</h3>
          <p className="text-white/80 text-sm">{item.description}</p>
        </motion.div>
      ))}
    </div>

    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10">
      <h3 className="font-bold text-center mb-4 text-lg">🎁 Récompenses</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          { amount: "5€", description: "Par ami parrainé" },
          { amount: "VIP", description: "Accès early" },
          { amount: "🎫", description: "Places offertes" },
          { amount: "⭐", description: "Statut premium" }
        ].map((reward, index) => (
          <div key={index} className="bg-white/20 rounded-lg p-3 border border-white/10">
            <div className="font-black text-white text-lg">{reward.amount}</div>
            <div className="text-white/80 text-xs">{reward.description}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="text-center">
      <Link to="/ambassador">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-violet-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl mr-4 mb-3"
        >
          Devenir Ambassadeur
        </motion.button>
      </Link>
      <Link to="/download">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
        >
          Télécharger l'app
        </motion.button>
      </Link>
    </div>
  </div>
</motion.section>
        {/* CTA Final */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à vivre l'expérience ?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Rejoins des milliers de passionnés qui réservent leurs événements en quelques clics
            </p>
            <Link to={isAuthenticated ? "/events" : "/register"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-violet-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl"
              >
                {isAuthenticated ? "Explorer les événements" : "Créer mon compte gratuit"}
              </motion.button>
            </Link>
            <p className="mt-4 text-sm opacity-80">
              🎟️ Aucune carte requise pour commencer
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}