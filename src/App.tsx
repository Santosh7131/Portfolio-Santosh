import Typewriter from 'typewriter-effect';
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars'
import { HyperText } from '@/registry/magicui/hyper-text'
import React from 'react';
import GooeyNav from './components/GooeyNav';

function App() {
  const morphTexts = [
    'Web Developer',
    'Tech Enthusiast',
    'Minecraft Nerd',
    'Techno Fan',
  ];

  // Navigation items for GooeyNav
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden flex flex-col" style={{ backgroundColor: 'var(--background)' }}>
      <StarsBackground className="fixed inset-0 w-screen h-screen" style={{ minWidth: '100vw', minHeight: '100vh' }} />
      
      {/* GooeyNav Navigation */}
      <div className="w-full flex justify-center pt-6 relative z-20">
        <div style={{ height: '60px', position: 'relative', width: '100%', maxWidth: '600px' }}>
          <GooeyNav
            items={navItems}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center relative z-10 flex-grow">
        <div
          className="text-8xl font-extrabold text-white"
          style={{
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          <HyperText
            className="text-8xl font-extrabold"
            duration={2100} // ~3x slower than before
            delay={0} // start immediately on load
            startOnView={false}
            animateOnHover={true}
          >
            SANTOSH KUMAAR
          </HyperText>
        </div>
        <div className="mt-4 w-full flex justify-center">
          <div className="typewriter-subtext text-white text-3xl text-center">
            <Typewriter
              options={{
                strings: morphTexts,
                autoStart: true,
                loop: true,
                // match the name typing cadence
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: 'typewriter-sub-wrapper',
                cursorClassName: 'typewriter-sub-cursor',
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
