import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Star, Clock, Phone, ExternalLink, Heart, Navigation, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ExploreCityPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'Tout', icon: '🏙️', count: 24 },
    { id: 'hotels', name: 'Hôtels', icon: '🏨', count: 8 },
    { id: 'restaurants', name: 'Restaurants', icon: '🍽️', count: 12 },
    { id: 'bars', name: 'Bars', icon: '🍹', count: 6 },
    { id: 'beaches', name: 'Plages', icon: '🏖️', count: 4 },
    { id: 'attractions', name: 'Attractions', icon: '🎡', count: 10 }
  ];

  const places = [
    {
      id: 1,
      name: "Hôtel du Lac",
      category: "hotels",
      type: "Hôtel 4 étoiles",
      rating: 4.5,
      reviews: 128,
      price: "$$$",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      address: "Rue des Cocotiers, Cotonou",
      distance: "1.2 km",
      openingHours: "24h/24",
      phone: "+229 21 30 45 67",
      description: "Hôtel de luxe avec vue sur la lagune, piscine et spa.",
      amenities: ["🏊 Piscine", "🍽️ Restaurant", "🚗 Parking", "📶 WiFi"]
    },
    {
      id: 2,
      name: "Maquis Tante Marie",
      category: "restaurants",
      type: "Cuisine béninoise",
      rating: 4.8,
      reviews: 245,
      price: "$$",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      address: "Avenue Clozel, Cotonou",
      distance: "0.8 km",
      openingHours: "11h-23h",
      phone: "+229 21 31 58 42",
      description: "Restaurant traditionnel avec spécialités locales authentiques.",
      amenities: ["🍛 Plats locaux", "🌴 Terrasse", "💳 Carte", "🚗 Parking"]
    },
    {
      id: 3,
      name: "Plage de Fidjrossè",
      category: "beaches",
      type: "Plage publique",
      rating: 4.3,
      reviews: 89,
      price: "$",
      image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
      address: "Fidjrossè, Cotonou",
      distance: "3.5 km",
      openingHours: "6h-20h",
      phone: null,
      description: "Magnifique plage de sable fin, idéale pour le coucher de soleil.",
      amenities: ["🏖️ Sable fin", "🌅 Coucher soleil", "🛶 Sports nautiques", "🍹 Bar plage"]
    },
    {
      id: 4,
      name: "Bar La Terrasse",
      category: "bars",
      type: "Bar lounge",
      rating: 4.6,
      reviews: 167,
      price: "$$",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      address: "Haie Vive, Cotonou",
      distance: "2.1 km",
      openingHours: "16h-2h",
      phone: "+229 21 34 78 91",
      description: "Bar branché avec cocktails créatifs et ambiance musicale.",
      amenities: ["🍸 Cocktails", "🎵 Musique live", "🌃 Terrasse", "📶 WiFi"]
    },
    {
      id: 5,
      name: "Musée Honmé",
      category: "attractions",
      type: "Musée historique",
      rating: 4.7,
      reviews: 203,
      price: "$$",
      image: "https://images.pexels.com/photos/2253818/pexels-photo-2253818.jpeg",
      address: "Porto-Novo",
      distance: "32 km",
      openingHours: "9h-17h",
      phone: "+229 20 21 45 67",
      description: "Ancien palais royal transformé en musée d'histoire et d'art.",
      amenities: ["🏛️ Historique", "🎨 Art", "📚 Visites guidées", "🛍️ Boutique"]
    },
    {
      id: 6,
      name: "Marché Dantokpa",
      category: "attractions",
      type: "Marché traditionnel",
      rating: 4.2,
      reviews: 312,
      price: "$",
      image: "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg",
      address: "Dantokpa, Cotonou",
      distance: "1.8 km",
      openingHours: "6h-19h",
      phone: null,
      description: "Le plus grand marché d'Afrique de l'Ouest, expérience authentique.",
      amenities: ["🛍️ Artisanat", "🍎 Produits locaux", "💰 Négociation", "🎭 Culturel"]
    }
  ];

  const filteredPlaces = selectedCategory === 'all' 
    ? places 
    : places.filter(place => place.category === selectedCategory);

  const toggleFavorite = (placeId: number) => {
    setFavorites(prev => 
      prev.includes(placeId) 
        ? prev.filter(id => id !== placeId)
        : [...prev, placeId]
    );
  };

  const openWhatsApp = (phone: string) => {
    if (phone) {
      window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blank');
    }
  };

  const openMaps = (address: string) => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, '_blank');
  };

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
          <div className="flex-1">
            <h1 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tight">
              Explorer Cotonou
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Découvrez les meilleurs endroits autour de vous
            </p>
          </div>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-gray-900 dark:text-white tracking-tight">
            Votre Ville, Vos Adventures
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hôtels, restaurants, bars et attractions recommandés par la communauté GBADOU
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-white/20 dark:border-gray-700/50 hover:shadow-md'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-semibold">{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-white/20 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Favorite Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleFavorite(place.id)}
                  className="absolute top-3 right-3 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      favorites.includes(place.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-400'
                    }`} 
                  />
                </motion.button>

                {/* Distance Badge */}
                <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {place.distance}
                </div>

                {/* Price */}
                <div className="absolute bottom-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                  {place.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-black text-gray-900 dark:text-white text-lg tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {place.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {place.type}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {place.rating}
                    </span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    ({place.reviews} avis)
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="line-clamp-1">{place.address}</span>
                </div>

                {/* Opening Hours */}
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{place.openingHours}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {place.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {place.amenities.slice(0, 3).map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                    >
                      {amenity}
                    </span>
                  ))}
                  {place.amenities.length > 3 && (
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                      +{place.amenities.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openMaps(place.address)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 sm:py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Y aller
                  </motion.button>
                  
                  {place.phone && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openWhatsApp(place.phone!)}
                      className="px-4 bg-green-500 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-colors flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4" />
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredPlaces.length === 0 && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
              Aucun lieu trouvé
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Essayez de changer la catégorie ou les filtres
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('all')}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-3 rounded-full font-black hover:shadow-lg transition-all tracking-tight"
            >
              Voir tous les lieux
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}