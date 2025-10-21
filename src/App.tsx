import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarsBackground } from './components/animate-ui/components/backgrounds/stars';
import { ModernNav } from './components/ModernNav';
import { HomePage, setPageChangeHandler } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';

const pages = {
  home: HomePage,
  about: AboutPage,
  skills: SkillsPage,
  projects: ProjectsPage
} as const;

function App() {
  const [currentPage, setCurrentPage] = useState<keyof typeof pages>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextPage, setNextPage] = useState<keyof typeof pages | null>(null);
  
  const handlePageChange = useCallback(async (page: keyof typeof pages) => {
    if (page === currentPage || isTransitioning) return;
    
    setIsTransitioning(true);
    setNextPage(page);
    
    // Wait for nav to slide up
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Change page
    setCurrentPage(page);
    
    // Wait a bit then bring nav back
    await new Promise(resolve => setTimeout(resolve, 100));
    
    setIsTransitioning(false);
    setNextPage(null);
  }, [currentPage, isTransitioning]);

  const CurrentPageComponent = pages[currentPage];

  // Register the page change handler so it can be used from HomePage
  useEffect(() => {
    setPageChangeHandler(handlePageChange);
  }, [handlePageChange]);
  
  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Fixed background with stars */}
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        {/* Subtle gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Modern Transparent Navigation */}
      <ModernNav 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isTransitioning={isTransitioning}
      />

      {/* Page Content with smooth transitions */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: isTransitioning ? 0.3 : 0 }}
          >
            <CurrentPageComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;