import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarsBackground } from './components/animate-ui/components/backgrounds/stars';
import { PortfolioNavbar } from './components/PortfolioNavbar';
import { PageTransition } from './components/PageTransition';
import { Loader } from './components/Loader';
import TargetCursor from './components/TargetCursor';
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
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<keyof typeof pages>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPage, setTargetPage] = useState<keyof typeof pages>('home');
  
  const handlePageChange = useCallback(async (page: keyof typeof pages) => {
    if (page === currentPage || isTransitioning) return;
    
    setTargetPage(page);
    setIsTransitioning(true);
    
    await new Promise(resolve => setTimeout(resolve, 600));
    
    setCurrentPage(page);
    window.scrollTo(0, 0);
    
    await new Promise(resolve => setTimeout(resolve, 200));
    
    setIsTransitioning(false);
  }, [currentPage, isTransitioning]);

  const CurrentPageComponent = pages[currentPage];

  useEffect(() => {
    setPageChangeHandler(handlePageChange);
  }, [handlePageChange]);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      <AnimatePresence>
        {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <PageTransition isTransitioning={isTransitioning} targetPage={targetPage} />

      <PortfolioNavbar 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isTransitioning={isTransitioning}
      />

      <div className="relative z-10">
        <CurrentPageComponent key={currentPage} />
      </div>
    </div>
  );
}

export default App;
