import { motion } from 'framer-motion';
import { ArrowLeft, Camera, Video, Image, Heart, MessageCircle, Share, MoreHorizontal, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function GbadouNowPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('for-you');

  const stories = [
    { id: 1, user: 'Concert Afrobeat', image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg', seen: false },
    { id: 2, user: 'Tournoi Football', image: 'https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg', seen: true },
    { id: 3, user: 'Festival Culturel', image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg', seen: false },
  ];

  const posts = [
    {
      id: 1,
      user: { name: 'Marie K.', avatar: '👩', verified: true },
      content: 'Incroyable ambiance au Concert Afrobeat ! 🎵',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
      likes: 234,
      comments: 45,
      time: '2h',
      type: 'image'
    },
    {
      id: 2,
      user: { name: 'Stade Cotonou', avatar: '🏟️', verified: true },
      content: 'Finale du tournoi en direct 🔥',
      video: 'https://example.com/video.mp4',
      likes: 1567,
      comments: 289,
      time: '5h',
      type: 'video',
      live: true
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="p-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-black">Gbadou Now</h1>
          <button className="p-2">
            <Camera className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-800">
          {['for-you', 'live', 'nearby'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-semibold ${
                activeTab === tab 
                  ? 'text-violet-600 border-b-2 border-violet-600' 
                  : 'text-gray-500'
              }`}
            >
              {tab === 'for-you' && 'Pour toi'}
              {tab === 'live' && 'En direct'}
              {tab === 'nearby' && 'Proche'}
            </button>
          ))}
        </div>
      </div>

      {/* Stories */}
      <div className="border-b border-gray-200 dark:border-gray-800 px-4 py-4">
        <div className="flex gap-4 overflow-x-auto">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full border-2 ${
                story.seen ? 'border-gray-300' : 'border-violet-500'
              } p-0.5`}>
                <img
                  src={story.image}
                  alt={story.user}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="text-xs mt-1">{story.user}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-2xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-gray-200 dark:border-gray-800">
            {/* Header du post */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white text-lg">
                  {post.user.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">{post.user.name}</span>
                    {post.user.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <span className="text-gray-500 text-sm">{post.time}</span>
                </div>
              </div>
              <button>
                <MoreHorizontal className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Contenu */}
            <div className="px-4 pb-3">
              <p className="text-sm mb-3">{post.content}</p>
              
              {post.type === 'image' && (
                <div className="rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={post.image}
                    alt="Post content"
                    className="w-full h-auto max-h-96 object-cover"
                  />
                </div>
              )}

              {post.type === 'video' && (
                <div className="relative rounded-2xl overflow-hidden bg-black">
                  <div className="w-full h-96 bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="w-16 h-16 mx-auto mb-2 opacity-70" />
                      <span>Vidéo en lecture</span>
                    </div>
                  </div>
                  {post.live && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      EN DIRECT
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between px-4 pb-4">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button>
                  <Share className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}