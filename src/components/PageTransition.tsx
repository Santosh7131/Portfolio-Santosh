import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  isTransitioning: boolean;
  targetSection: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ 
  isTransitioning, 
  targetSection 
}) => {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <>
          {/* Main overlay with wipe effect - matches your star background */}
          <motion.div
            className="fixed inset-0 z-[100]"
            style={{
              background: 'radial-gradient(ellipse at bottom, #262626 0%, #000 100%)'
            }}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1] // Custom easing for smooth transition
            }}
          />
          
          {/* Section name display */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <motion.h2
              className="text-6xl md:text-8xl font-bold text-white tracking-wider"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {targetSection.toUpperCase()}
            </motion.h2>
          </motion.div>

          {/* Optional: Subtle star particles during transition */}
          <motion.div
            className="fixed inset-0 z-[99] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -50, -100]
                }}
                transition={{
                  duration: 1.2,
                  delay: Math.random() * 0.5,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};