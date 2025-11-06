import { motion } from 'framer-motion';
import { ArrowLeft, Search, Send, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ChatPage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Concert Afrobeat Live',
      lastMessage: 'À tout à l\'heure !',
      time: '12:30',
      unread: 2,
      type: 'event'
    },
    {
      id: 2,
      name: 'Marie K.',
      lastMessage: 'Merci pour le billet !',
      time: 'Hier',
      unread: 0,
      type: 'user'
    }
  ];

  const messages = [
    { id: 1, text: 'Salut tout le monde !', sender: 'user', time: '12:00' },
    { id: 2, text: 'Qui vient au concert ?', sender: 'user', time: '12:01' },
    { id: 3, text: 'Moi je serai là !', sender: 'other', time: '12:05' },
    { id: 4, text: 'Super, à tout à l\'heure !', sender: 'user', time: '12:30' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="p-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-black">Messages</h1>
          <button className="p-2">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une conversation..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-0 focus:ring-2 focus:ring-violet-600"
            />
          </div>
        </div>
      </div>

      {/* Conversations List */}
      <div className="max-w-2xl mx-auto">
        {conversations.map((conv) => (
          <div key={conv.id} className="border-b border-gray-200 dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white">
                {conv.type === 'event' ? '🎵' : '👤'}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{conv.name}</h3>
                  <span className="text-sm text-gray-500">{conv.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
              </div>
              {conv.unread > 0 && (
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                  {conv.unread}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Interface */}
      <div className="fixed inset-0 bg-white dark:bg-gray-900 z-20 flex flex-col">
        {/* Chat Header */}
        <div className="border-b border-gray-200 dark:border-gray-800 p-4">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white">
              🎵
            </div>
            <div>
              <h2 className="font-semibold">Concert Afrobeat Live</h2>
              <p className="text-sm text-gray-500">24 participants</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                msg.sender === 'user' 
                  ? 'bg-violet-500 text-white rounded-br-none' 
                  : 'bg-gray-200 dark:bg-gray-700 rounded-bl-none'
              }`}>
                <p className="text-sm">{msg.text}</p>
                <span className="text-xs opacity-70 block text-right">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tapez votre message..."
              className="flex-1 px-4 py-3 rounded-full bg-gray-100 dark:bg-gray-800 border-0 focus:ring-2 focus:ring-violet-600"
            />
            <button className="w-12 h-12 bg-violet-500 text-white rounded-full flex items-center justify-center">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}