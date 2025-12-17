import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

export function Loader({ onLoadingComplete }: LoaderProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Animate counter from 0 to 100
    const duration = 2000; // 2 seconds
    const steps = 100;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCount(currentStep);
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 200);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { 
          duration: 0.6, 
          ease: [0.77, 0, 0.175, 1]
        }
      }}
    >
      <div className="text-center relative z-20">
        {/* Counter */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main counter number */}
          <div className="text-[120px] md:text-[180px] font-bold leading-none">
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              {count}
            </span>
            <span className="text-gray-600">%</span>
          </div>
          
          {/* Loading text */}
          <motion.p
            className="text-sm md:text-base text-gray-500 tracking-[0.3em] uppercase mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Loading
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 md:w-80 mx-auto mt-8">
            <div className="h-[2px] bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-white to-gray-400"
                initial={{ width: '0%' }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
