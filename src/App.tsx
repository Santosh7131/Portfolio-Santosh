import Typewriter from 'typewriter-effect';
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars'

function App() {
  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden bg-black flex">
      <StarsBackground className="fixed inset-0 w-screen h-screen" style={{ minWidth: '100vw', minHeight: '100vh' }} />
      <div className="w-full flex flex-col items-center justify-center relative z-10">
        <div 
          className="text-6xl font-semibold"
          style={{ 
            color: 'white', 
            fontSize: '4rem', 
            fontWeight: 'bold',
            textAlign: 'center',
            zIndex: 10
          }}
        >
          <Typewriter
            options={{
              strings: ['SANTOSH KUMAAR'],
              autoStart: true,
              loop: true,
              wrapperClassName: 'typewriter-wrapper',
              cursorClassName: 'typewriter-cursor'
            }}
          />
        </div>
        <p className="text-xl text-white mt-4" style={{ color: 'white', fontSize: '1.5rem' }}>Cool Tagline Goes Here</p>
      </div>
    </main>
  );
}

export default App;
