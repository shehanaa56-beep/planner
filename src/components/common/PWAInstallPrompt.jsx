import { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Listen for install prompt (Android Chrome)
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show after 3 seconds
      setTimeout(() => setShowBanner(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Detect iOS (no beforeinstallprompt event)
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isInStandaloneMode = window.navigator.standalone;
    if (isIOS && !isInStandaloneMode) {
      setTimeout(() => setShowBanner(true), 3000);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    }
    setShowBanner(false);
  };

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

  if (!showBanner || isInstalled) return null;

  return (
    <div className="fixed bottom-20 left-3 right-3 z-50 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border border-pink-100 p-4 flex items-start gap-3">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-2xl">♥</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-800 text-sm">Install FitLife App</p>
          {isIOS ? (
            <p className="text-xs text-gray-500 mt-0.5">
              Tap <strong>Share</strong> → <strong>"Add to Home Screen"</strong> to install
            </p>
          ) : (
            <p className="text-xs text-gray-500 mt-0.5">
              Install for offline access & faster loading
            </p>
          )}

          {/* Buttons */}
          {!isIOS && (
            <div className="flex gap-2 mt-2">
              <button
                onClick={handleInstall}
                className="flex items-center gap-1.5 bg-pink-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-pink-600 transition-colors"
              >
                <Download size={12} />
                Install App
              </button>
              <button
                onClick={() => setShowBanner(false)}
                className="text-xs text-gray-400 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Not now
              </button>
            </div>
          )}
        </div>

        {/* Close */}
        <button
          onClick={() => setShowBanner(false)}
          className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
        >
          <X size={16} />
        </button>
      </div>

      {/* iOS instruction arrow */}
      {isIOS && (
        <div className="text-center mt-2">
          <span className="text-xs text-gray-400 bg-white px-2 py-1 rounded-full shadow">
            👆 Tap the Share button below
          </span>
        </div>
      )}
    </div>
  );
}
