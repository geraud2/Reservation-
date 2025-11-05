import { motion } from 'framer-motion';
import { Event } from '../types';
import { Calendar, Users, MapPin, Star } from 'lucide-react';

interface City {
  name: string;
  lat: number;
  lng: number;
}

const BeninMap = ({ events, selectedEvent, onSelectEvent }: { events: Event[], selectedEvent: Event | null, onSelectEvent: (event: Event | null) => void }) => {
  const mapWidth = 300;
  const mapHeight = 500;

  // Coordonnées géographiques réelles du Bénin
  const minLng = 0.7746; // Ouest
  const maxLng = 3.8517; // Est
  const minLat = 6.2250; // Sud
  const maxLat = 12.4183; // Nord

  const project = (lat: number, lng: number) => {
    const x = ((lng - minLng) / (maxLng - minLng)) * mapWidth * 0.8 + mapWidth * 0.1;
    const y = mapHeight - (((lat - minLat) / (maxLat - minLat)) * mapHeight * 0.8 + mapHeight * 0.1);
    return { x, y };
  };

  const cities: City[] = [
    { name: 'Cotonou', lat: 6.3654, lng: 2.4183 },
    { name: 'Porto-Novo', lat: 6.4965, lng: 2.6036 },
    { name: 'Parakou', lat: 9.3372, lng: 2.6303 },
    { name: 'Ouidah', lat: 6.3639, lng: 2.0850 },
    { name: 'Abomey', lat: 7.1829, lng: 1.9918 },
  ];

  return (
    <div className="relative w-full h-[550px] bg-gradient-to-br from-violet-900/30 via-purple-900/20 to-fuchsia-900/30 dark:from-gray-900 dark:to-gray-800 rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm flex justify-center items-center p-6">
      
      {/* Fond décoratif avec motifs */}
      <div className="absolute inset-0">
        {/* Grille subtile */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Points lumineux en arrière-plan */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Formes géométriques décoratives */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-violet-600/5 to-fuchsia-600/5 rounded-full blur-2xl" />
      </div>

      <svg 
        viewBox={`0 0 ${mapWidth} ${mapHeight}`} 
        className="w-full h-full relative z-10"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradients pour les points */}
          <linearGradient id="cityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#7c3aed', stopOpacity: 1}} />
          </linearGradient>
          
          <linearGradient id="eventGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#db2777', stopOpacity: 1}} />
          </linearGradient>

          <linearGradient id="selectedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 1}} />
          </linearGradient>

          {/* Effet de glow */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Carte du Bénin stylisée en arrière-plan */}
        <motion.path
          d="M80,350 Q120,300 160,330 Q200,360 180,400 Q150,450 120,420 Q90,390 80,350 Z"
          fill="url(#beninGradient)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="opacity-10"
        />

        {/* Points des villes */}
        <g className="cities-layer">
          {cities.map((city, i) => {
            const { x, y } = project(city.lat, city.lng);
            return (
              <motion.g 
                key={city.name} 
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
              >
                {/* Effet de glow */}
                <circle 
                  cx={x} 
                  cy={y} 
                  r="8" 
                  fill="url(#cityGradient)"
                  opacity="0.4"
                  style={{ filter: 'url(#glow)' }}
                />
                
                {/* Point de la ville */}
                <circle 
                  cx={x} 
                  cy={y} 
                  r="5" 
                  fill="url(#cityGradient)"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="shadow-lg"
                />
                
                {/* Icône de localisation */}
                <text 
                  x={x} 
                  y={y + 1.5} 
                  textAnchor="middle"
                  className="text-[8px] fill-white pointer-events-none font-bold"
                >
                  📍
                </text>
                
                {/* Nom de la ville */}
                <text 
                  x={x} 
                  y={y - 15} 
                  textAnchor="middle"
                  className="text-[11px] font-bold fill-white stroke-violet-900 stroke-[0.8] pointer-events-none"
                  style={{ paintOrder: 'stroke fill' }}
                >
                  {city.name}
                </text>
              </motion.g>
            );
          })}
        </g>

        {/* Points des événements */}
        <g className="events-layer">
          {events.map((event, i) => {
            const { x, y } = project(event.lat, event.lng);
            const isSelected = selectedEvent?.id === event.id;

            return (
              <motion.g
                key={event.id}
                className="cursor-pointer event-point"
                onClick={() => onSelectEvent(isSelected ? null : event)}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.3 }}
              >
                {/* Effet de sélection */}
                {isSelected && (
                  <motion.circle 
                    cx={x} 
                    cy={y} 
                    r="16" 
                    fill="url(#selectedGradient)" 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="animate-pulse"
                    style={{ filter: 'url(#glow)' }}
                  />
                )}
                
                {/* Glow de l'événement */}
                <circle 
                  cx={x} 
                  cy={y} 
                  r="10" 
                  fill={isSelected ? "url(#selectedGradient)" : "url(#eventGradient)"}
                  opacity="0.5"
                  style={{ filter: 'url(#glow)' }}
                />
                
                {/* Point événement */}
                <circle 
                  cx={x} 
                  cy={y} 
                  r="6" 
                  fill={isSelected ? "url(#selectedGradient)" : "url(#eventGradient)"}
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="shadow-lg"
                />
                
                {/* Icône ticket ou étoile */}
                <text 
                  x={x} 
                  y={y + 2} 
                  textAnchor="middle" 
                  className="text-[9px] fill-white pointer-events-none font-bold"
                >
                  {isSelected ? '⭐' : '🎫'}
                </text>

                {/* Nom de l'événement (seulement si sélectionné) */}
                {isSelected && (
                  <motion.text 
                    x={x} 
                    y={y - 28} 
                    textAnchor="middle"
                    className="text-[10px] font-bold fill-white bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1 rounded-full pointer-events-none"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {event.title.split(' ').slice(0, 3).join(' ')}
                  </motion.text>
                )}
              </motion.g>
            );
          })}
        </g>

        {/* Lignes de connexion animées */}
        <g className="connections-layer opacity-40">
          {events.map((event, i) => {
            const { x, y } = project(event.lat, event.lng);
            const city = cities.find(c => 
              Math.abs(c.lat - event.lat) < 0.5 && Math.abs(c.lng - event.lng) < 0.5
            );
            
            if (city) {
              const cityPos = project(city.lat, city.lng);
              return (
                <motion.line 
                  key={`connection-${event.id}`}
                  x1={cityPos.x} 
                  y1={cityPos.y} 
                  x2={x} 
                  y2={y} 
                  stroke="url(#eventGradient)" 
                  strokeWidth="1.5"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.2 + i * 0.05, duration: 1 }}
                />
              );
            }
            return null;
          })}
        </g>
      </svg>

      {/* Légende stylisée */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-6 left-6 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl"
      >
        <h3 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
          <Star size={16} className="text-yellow-300" />
          Légende
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full shadow-lg"></div>
            <span className="text-xs text-white font-medium">Villes</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full shadow-lg"></div>
            <span className="text-xs text-white font-medium">Événements</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full shadow-lg"></div>
            <span className="text-xs text-white font-medium">Sélectionné</span>
          </div>
        </div>
      </motion.div>

      {/* Carte événement */}
      {selectedEvent && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-80 bg-gradient-to-br from-violet-600 to-fuchsia-600 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-white/20"
        >
          <div className="flex flex-col gap-4">
            <motion.img 
              src={selectedEvent.image} 
              alt={selectedEvent.title}
              className="w-full h-32 rounded-xl object-cover border-2 border-white/30 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            />
            
            <div>
              <h3 className="font-black text-white text-lg tracking-tight">
                {selectedEvent.title}
              </h3>
              <p className="text-xl font-bold text-yellow-300 mt-2">{selectedEvent.price}</p>
              
              <div className="flex items-center gap-4 mt-3 text-white/90">
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1">
                  <Calendar size={14} className="text-white" />
                  <span className="font-semibold text-sm">{selectedEvent.date}</span>
                </div>
                {selectedEvent.participants && (
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1">
                    <Users size={14} className="text-white" />
                    <span className="font-semibold text-sm">{selectedEvent.participants}</span>
                  </div>
                )}
              </div>
            </div>

            <motion.button
              onClick={() => onSelectEvent(null)}
              className="w-full bg-white text-violet-600 py-3 rounded-xl font-black tracking-tight hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              RÉSERVER MAINTENANT
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Titre de la carte */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 left-6 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/20"
      >
        <h2 className="text-sm font-black text-white tracking-tight">
          📍 CARTE INTERACTIVE GBADOU
        </h2>
      </motion.div>
    </div>
  );
};

export default BeninMap;