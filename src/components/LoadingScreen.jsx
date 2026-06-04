import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time for a premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark"
        >
          <div className="relative flex items-center justify-center">
            {/* Outer rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute w-32 h-32 rounded-full border-t-2 border-primary border-opacity-50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute w-24 h-24 rounded-full border-b-2 border-secondary border-opacity-50"
            />
            {/* Inner Logo/Text */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold text-white tracking-widest z-10"
            >
              AK
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-white/50 tracking-[0.2em] uppercase text-sm font-light"
          >
            Loading Experience
          </motion.div>
          
          {/* Progress bar line */}
          <motion.div 
             initial={{ width: 0 }}
             animate={{ width: 200 }}
             transition={{ duration: 2, ease: "easeInOut" }}
             className="h-[1px] bg-gradient-to-r from-primary to-secondary mt-4 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
