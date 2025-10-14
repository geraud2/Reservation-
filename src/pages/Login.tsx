// pages/Login.tsx
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Login(): JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Appel à la fonction login du contexte
      await login(formData.email, formData.password);
      
      // Redirection vers la page d'accueil après connexion réussie
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      alert('Email ou mot de passe incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
            Connexion
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Rejoins la communauté KickReserve
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="ton@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Ton mot de passe"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors"
          >
            Se connecter
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600 dark:text-gray-400">
            Pas encore de compte ?{' '}
            <Link to="/register" className="text-violet-600 font-semibold hover:text-violet-700">
              Inscris-toi
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}