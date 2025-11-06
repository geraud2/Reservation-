import { motion } from 'framer-motion';
import { ArrowLeft, Play, Download, Share, Heart, Clock, MapPin, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AfterMoviePage() {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const afterMovies = [
    {
      id: 1,
      eventTitle: "Concert Afrobeat Live",
      eventDate: "15 DÉC 2024",
      eventVenue: "Palais des Congrès, Cotonou",
      thumbnail: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      duration: "2:45",
      views: "12.4K",
      likes: 892,
      uploadDate: "Il y a 2 jours",
      premium: true
    },
    {
      id: 2,
      eventTitle: "Tournoi de Football Local",
      eventDate: "20 DÉC 2024", 
      eventVenue: "Stade de l'Amitié, Cotonou",
      thumbnail: "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg",
      duration: "4:12",
      views: "8.7K",
      likes: 456,
      uploadDate: "Il y a 1 semaine",
      premium: false
    },
    {
      id: 3,
      eventTitle: "Festival Culturel Ouidah",
      eventDate: "10 DÉC 2024",
      eventVenue: "Place du Marché, Ouidah",
      thumbnail: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
      duration: "3:28",
      views: "5.2K",
      likes: 234,
      uploadDate: "Il y a 3 semaines",
      premium: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" />
          </button>
          <h1 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight">
            AfterMovies
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 text-gray-900 dark:text-white tracking-tight">
            Revivez l'Émotion
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Des aftermovies exclusifs pour revivre les meilleurs moments de vos événements préférés
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {afterMovies.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-white/20 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.eventTitle}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Premium Badge */}
                {video.premium && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    PREMIUM
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedVideo(video.id)}
                    className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-full p-4 hover:bg-white/30 transition-all"
                  >
                    <Play className="w-8 h-8 fill-white" />
                  </motion.button>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-black text-gray-900 dark:text-white text-lg tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {video.eventTitle}
                  </h3>
                  {video.premium && (
                    <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  )}
                </div>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{video.eventDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="line-clamp-1">{video.eventVenue}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Play className="w-4 h-4" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{video.likes}</span>
                    </div>
                  </div>
                  <span>{video.uploadDate}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedVideo(video.id)}
                    className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-2 sm:py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Regarder
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Share className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Videos State */}
        {afterMovies.length === 0 && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
              Aucun AfterMovie disponible
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Vos aftermovies apparaîtront ici après chaque événement
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/events')}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-3 rounded-full font-black hover:shadow-lg transition-all tracking-tight"
            >
              Découvrir les événements
            </motion.button>
          </motion.div>
        )}

        {/* Video Player Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-4xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-black text-lg text-gray-900 dark:text-white">
                  {
                    afterMovies.find(v => v.id === selectedVideo)?.eventTitle
                  }
                </h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="aspect-video bg-black flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-70" />
                  <p>Lecteur vidéo AfterMovie</p>
                  <p className="text-sm opacity-60 mt-2">
                    {
                      afterMovies.find(v => v.id === selectedVideo)?.duration
                    } • {
                      afterMovies.find(v => v.id === selectedVideo)?.views
                    } vues
                  </p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    <Download className="w-4 h-4 inline mr-2" />
                    Télécharger
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Share className="w-4 h-4 inline mr-2" />
                    Partager
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}