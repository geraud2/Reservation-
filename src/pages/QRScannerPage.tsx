import { motion } from 'framer-motion';
import { ArrowLeft, Camera, CheckCircle, XCircle, Scan, History, Flashlight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

export default function QRScannerPage() {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [flashOn, setFlashOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scanHistory = [
    {
      id: 1,
      ticketCode: "GB-123456",
      eventTitle: "Concert Afrobeat Live",
      scanTime: "14 DÉC 2024 20:15",
      status: "valid",
      userName: "Marie Kossi"
    },
    {
      id: 2,
      ticketCode: "GB-789012", 
      eventTitle: "Tournoi Football",
      scanTime: "12 DÉC 2024 16:30",
      status: "used",
      userName: "Jean Akpakpa"
    },
    {
      id: 3,
      ticketCode: "GB-345678",
      eventTitle: "Festival Culturel",
      scanTime: "10 DÉC 2024 19:45",
      status: "invalid",
      userName: "Alice Sèmè"
    }
  ];

  const startScanning = () => {
    setScanning(true);
    setScanResult(null);
    // Simulation du démarrage du scanner
    setTimeout(() => {
      const randomResult = Math.random() > 0.3 ? 'valid' : 'invalid';
      setScanResult({
        status: randomResult,
        ticketCode: `GB-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
        eventTitle: "Concert Afrobeat Live",
        userName: "Utilisateur Test",
        scanTime: new Date().toLocaleString('fr-FR')
      });
      setScanning(false);
    }, 2000);
  };

  const stopScanning = () => {
    setScanning(false);
    setScanResult(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'valid': return 'text-green-600 dark:text-green-400';
      case 'used': return 'text-amber-600 dark:text-amber-400';
      case 'invalid': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'valid': return <CheckCircle className="w-5 h-5" />;
      case 'used': return <XCircle className="w-5 h-5" />;
      case 'invalid': return <XCircle className="w-5 h-5" />;
      default: return <XCircle className="w-5 h-5" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'valid': return 'VALIDE';
      case 'used': return 'DÉJÀ UTILISÉ';
      case 'invalid': return 'INVALIDE';
      default: return 'INCONNU';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg sm:text-xl font-black tracking-tight">
            Scan QR Code
          </h1>
          <button
            onClick={() => setFlashOn(!flashOn)}
            className={`p-2 rounded-full transition-colors ${
              flashOn ? 'bg-yellow-500 text-gray-900' : 'bg-gray-800 text-white'
            }`}
          >
            <Flashlight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Scanner Area */}
        <div className="relative bg-black">
          {/* Camera Preview */}
          <div className="aspect-square bg-gray-800 flex items-center justify-center relative overflow-hidden">
            {scanning ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full flex items-center justify-center"
              >
                {/* Scanner Animation */}
                <div className="absolute inset-0 border-2 border-green-500 rounded-lg">
                  <motion.div
                    animate={{ y: ['0%', '100%', '0%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-full h-1 bg-green-500"
                  />
                </div>
                
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Scan className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-green-400 font-semibold">Scan en cours...</p>
                  <p className="text-gray-400 text-sm mt-2">Positionnez le QR code dans le cadre</p>
                </div>
              </motion.div>
            ) : scanResult ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center p-8"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  scanResult.status === 'valid' 
                    ? 'bg-green-500' 
                    : 'bg-red-500'
                }`}>
                  {scanResult.status === 'valid' ? (
                    <CheckCircle className="w-10 h-10 text-white" />
                  ) : (
                    <XCircle className="w-10 h-10 text-white" />
                  )}
                </div>
                <h3 className={`text-2xl font-black mb-2 ${
                  scanResult.status === 'valid' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {getStatusText(scanResult.status)}
                </h3>
                <p className="text-gray-300 mb-4">{scanResult.ticketCode}</p>
                <div className="bg-gray-800 rounded-xl p-4 text-left">
                  <p className="font-semibold">{scanResult.eventTitle}</p>
                  <p className="text-sm text-gray-400">{scanResult.userName}</p>
                  <p className="text-xs text-gray-500">{scanResult.scanTime}</p>
                </div>
              </motion.div>
            ) : (
              <div className="text-center p-8">
                <Camera className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Prêt à scanner</p>
                <p className="text-gray-500 text-sm mt-2">Appuyez sur le bouton pour commencer</p>
              </div>
            )}
          </div>

          {/* Scanner Frame */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Corner borders */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-green-500"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-green-500"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500"></div>
          </div>
        </div>

        {/* Controls */}
        <div className="p-6 bg-gray-800">
          {!scanning && !scanResult && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startScanning}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-2xl font-black text-lg hover:shadow-lg transition-all tracking-tight flex items-center justify-center gap-3"
            >
              <Scan className="w-6 h-6" />
              COMMENCER LE SCAN
            </motion.button>
          )}

          {(scanning || scanResult) && (
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={stopScanning}
                className="flex-1 bg-gray-700 text-white py-4 rounded-2xl font-semibold hover:bg-gray-600 transition-colors"
              >
                {scanResult ? 'Nouveau Scan' : 'Arrêter'}
              </motion.button>
              {scanResult && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/features')}
                  className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all"
                >
                  Retour
                </motion.button>
              )}
            </div>
          )}
        </div>

        {/* Scan History */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-black text-white text-xl tracking-tight flex items-center gap-2">
              <History className="w-5 h-5" />
              Historique des Scans
            </h3>
            <span className="text-sm text-gray-400">
              {scanHistory.length} scan(s)
            </span>
          </div>

          <div className="space-y-3">
            {scanHistory.map((scan, index) => (
              <motion.div
                key={scan.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-4 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center gap-1 ${getStatusColor(scan.status)}`}>
                      {getStatusIcon(scan.status)}
                      <span className="font-semibold text-sm">
                        {getStatusText(scan.status)}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">{scan.ticketCode}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{scan.scanTime}</span>
                </div>
                
                <div className="text-sm">
                  <p className="font-semibold text-white">{scan.eventTitle}</p>
                  <p className="text-gray-400">{scan.userName}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No History */}
          {scanHistory.length === 0 && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <History className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Aucun scan récent
              </h3>
              <p className="text-gray-400">
                L'historique de vos scans apparaîtra ici
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}