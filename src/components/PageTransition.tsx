import { motion } from 'framer-motion';

interface PageTransitionProps {
  isTransitioning: boolean;
  targetPage?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ isTransitioning, targetPage = '' }) => {
  // Capitalize page name for display
  const pageDisplayName = targetPage.charAt(0).toUpperCase() + targetPage.slice(1);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isTransitioning ? 1 : 0,
      }}
      transition={{
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{ pointerEvents: isTransitioning ? 'auto' : 'none' }}
    >
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black z-10" />

      {/* Page name only */}
      <div className="text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isTransitioning ? 1 : 0,
            scale: isTransitioning ? 1 : 0.8
          }}
          transition={{ 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1],
            delay: isTransitioning ? 0.1 : 0
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide">
            <span 
              className="inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
              }}
            >
              {pageDisplayName}
            </span>
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};
