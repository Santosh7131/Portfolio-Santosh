import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { useState } from 'react';
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb, 
  SiGit, 
  SiDocker, 
  SiCplusplus,
  SiExpress,
  SiFastapi,
  SiPandas,
  SiScikitlearn,
  SiPostgresql,
  SiVercel
} from 'react-icons/si';
import { FaJava, FaDatabase, FaMicrosoft } from 'react-icons/fa';

// Skill Icons Components with hover support
const ReactIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-blue-500/40 border-blue-500/60 shadow-lg shadow-blue-500/50' : ''
    }`}
  >
    <SiReact className="text-2xl text-cyan-400" />
  </div>
);

const TypeScriptIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-600/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-blue-600/40 border-blue-600/60 shadow-lg shadow-blue-600/50' : ''
    }`}
  >
    <SiTypescript className="text-2xl text-blue-400" />
  </div>
);

const JavaScriptIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-yellow-500/40 border-yellow-500/60 shadow-lg shadow-yellow-500/50' : ''
    }`}
  >
    <SiJavascript className="text-2xl text-yellow-400" />
  </div>
);

const NodeIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-green-500/40 border-green-500/60 shadow-lg shadow-green-500/50' : ''
    }`}
  >
    <SiNodedotjs className="text-2xl text-green-500" />
  </div>
);

const PythonIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-400/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-blue-400/40 border-blue-400/60 shadow-lg shadow-blue-400/50' : ''
    }`}
  >
    <SiPython className="text-2xl text-blue-400" />
  </div>
);

const MongoDBIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-green-600/20 backdrop-blur-sm border border-green-600/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-green-600/40 border-green-600/60 shadow-lg shadow-green-600/50' : ''
    }`}
  >
    <SiMongodb className="text-2xl text-green-500" />
  </div>
);

const GitIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-orange-500/40 border-orange-500/60 shadow-lg shadow-orange-500/50' : ''
    }`}
  >
    <SiGit className="text-2xl text-orange-500" />
  </div>
);

const DockerIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-400/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-blue-400/40 border-blue-400/60 shadow-lg shadow-blue-400/50' : ''
    }`}
  >
    <SiDocker className="text-2xl text-blue-400" />
  </div>
);

const JavaIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-red-500/40 border-red-500/60 shadow-lg shadow-red-500/50' : ''
    }`}
  >
    <FaJava className="text-2xl text-red-500" />
  </div>
);

const CppIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-600/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-blue-600/40 border-blue-600/60 shadow-lg shadow-blue-600/50' : ''
    }`}
  >
    <SiCplusplus className="text-2xl text-blue-400" />
  </div>
);

const SQLIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-orange-400/20 backdrop-blur-sm border border-orange-400/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-orange-400/40 border-orange-400/60 shadow-lg shadow-orange-400/50' : ''
    }`}
  >
    <FaDatabase className="text-2xl text-orange-400" />
  </div>
);

const ExpressIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-gray-400/20 backdrop-blur-sm border border-gray-400/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-gray-400/40 border-gray-400/60 shadow-lg shadow-gray-400/50' : ''
    }`}
  >
    <SiExpress className="text-2xl text-white" />
  </div>
);

const FastAPIIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-teal-500/40 border-teal-500/60 shadow-lg shadow-teal-500/50' : ''
    }`}
  >
    <SiFastapi className="text-2xl text-teal-400" />
  </div>
);

const PandasIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-purple-500/40 border-purple-500/60 shadow-lg shadow-purple-500/50' : ''
    }`}
  >
    <SiPandas className="text-2xl text-purple-400" />
  </div>
);

const ScikitIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-orange-500/40 border-orange-500/60 shadow-lg shadow-orange-500/50' : ''
    }`}
  >
    <SiScikitlearn className="text-2xl text-orange-400" />
  </div>
);

const AzureIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-blue-500/40 border-blue-500/60 shadow-lg shadow-blue-500/50' : ''
    }`}
  >
    <FaMicrosoft className="text-2xl text-blue-400" />
  </div>
);

const GroqIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-purple-600/20 backdrop-blur-sm border border-purple-600/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-purple-600/40 border-purple-600/60 shadow-lg shadow-purple-600/50' : ''
    }`}
  >
    <span className="text-lg font-bold text-purple-300">Groq</span>
  </div>
);

const PostgreSQLIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-400/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-blue-400/40 border-blue-400/60 shadow-lg shadow-blue-400/50' : ''
    }`}
  >
    <SiPostgresql className="text-2xl text-blue-400" />
  </div>
);

const VercelIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`flex items-center justify-center w-full h-full rounded-full bg-black/40 backdrop-blur-sm border border-white/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-black/60 border-white/60 shadow-lg shadow-white/50' : ''
    }`}
  >
    <SiVercel className="text-2xl text-white" />
  </div>
);

// Skill descriptions for Bento Grid
const skillCategories = [
  {
    Icon: SiReact,
    name: "Frontend Development",
    description: "Building modern, responsive user interfaces with React, TypeScript, and JavaScript.",
    href: "#",
    cta: "View Projects",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute -right-20 -top-20 opacity-60">
        <SiReact className="h-40 w-40 text-cyan-400" />
      </div>
    ),
  },
  {
    Icon: SiNodedotjs,
    name: "Backend Development",
    description: "Creating robust server-side applications with Node.js, Express, and FastAPI.",
    href: "#",
    cta: "View Projects",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute -right-10 -top-10 opacity-60">
        <SiNodedotjs className="h-32 w-32 text-green-500" />
      </div>
    ),
  },
  {
    Icon: SiMongodb,
    name: "Databases",
    description: "Working with MongoDB, PostgreSQL, and SQL for efficient data management.",
    href: "#",
    cta: "View Projects",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute -right-10 -top-10 opacity-60">
        <SiMongodb className="h-32 w-32 text-green-500" />
      </div>
    ),
  },
  {
    Icon: SiPython,
    name: "Data Science & ML",
    description: "Analyzing data and building ML models with Python, Pandas, and Scikit-learn.",
    href: "#",
    cta: "View Projects",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute -right-20 -top-20 opacity-60">
        <SiPython className="h-40 w-40 text-blue-400" />
      </div>
    ),
  },
  {
    Icon: SiDocker,
    name: "DevOps & Cloud",
    description: "Deploying and managing applications with Docker, Azure, and Vercel.",
    href: "#",
    cta: "View Projects",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute -right-20 -top-20 opacity-60">
        <SiDocker className="h-40 w-40 text-blue-400" />
      </div>
    ),
  },
  {
    Icon: SiGit,
    name: "Version Control",
    description: "Managing code with Git for collaborative development and version tracking.",
    href: "#",
    cta: "View Projects",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute -right-10 -top-10 opacity-60">
        <SiGit className="h-32 w-32 text-orange-500" />
      </div>
    ),
  },
];

export const SkillsPage = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-[95vw]">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h1>
        
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left: Large Bento Card with Orbiting Circles (40% width) */}
          <div className="lg:w-[40%] w-full">
            <div className="relative flex h-[700px] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
              
              {/* Outer orbit - Languages (Clockwise) */}
              <OrbitingCircles iconSize={50} radius={200} duration={30} orbitColor="#3a3a3a" paused={hoveredIcon !== null}>
                <ReactIcon isHovered={hoveredIcon === 'react'} onHover={() => setHoveredIcon('react')} onLeave={() => setHoveredIcon(null)} />
                <TypeScriptIcon isHovered={hoveredIcon === 'typescript'} onHover={() => setHoveredIcon('typescript')} onLeave={() => setHoveredIcon(null)} />
                <JavaScriptIcon isHovered={hoveredIcon === 'javascript'} onHover={() => setHoveredIcon('javascript')} onLeave={() => setHoveredIcon(null)} />
                <PythonIcon isHovered={hoveredIcon === 'python'} onHover={() => setHoveredIcon('python')} onLeave={() => setHoveredIcon(null)} />
                <JavaIcon isHovered={hoveredIcon === 'java'} onHover={() => setHoveredIcon('java')} onLeave={() => setHoveredIcon(null)} />
                <CppIcon isHovered={hoveredIcon === 'cpp'} onHover={() => setHoveredIcon('cpp')} onLeave={() => setHoveredIcon(null)} />
              </OrbitingCircles>

              {/* Middle orbit - Frameworks & DBs (Counter-clockwise) */}
              <OrbitingCircles iconSize={45} radius={130} duration={25} reverse={true} orbitColor="#3a3a3a" paused={hoveredIcon !== null}>
                <NodeIcon isHovered={hoveredIcon === 'node'} onHover={() => setHoveredIcon('node')} onLeave={() => setHoveredIcon(null)} />
                <ExpressIcon isHovered={hoveredIcon === 'express'} onHover={() => setHoveredIcon('express')} onLeave={() => setHoveredIcon(null)} />
                <FastAPIIcon isHovered={hoveredIcon === 'fastapi'} onHover={() => setHoveredIcon('fastapi')} onLeave={() => setHoveredIcon(null)} />
                <MongoDBIcon isHovered={hoveredIcon === 'mongodb'} onHover={() => setHoveredIcon('mongodb')} onLeave={() => setHoveredIcon(null)} />
                <PostgreSQLIcon isHovered={hoveredIcon === 'postgresql'} onHover={() => setHoveredIcon('postgresql')} onLeave={() => setHoveredIcon(null)} />
                <SQLIcon isHovered={hoveredIcon === 'sql'} onHover={() => setHoveredIcon('sql')} onLeave={() => setHoveredIcon(null)} />
              </OrbitingCircles>

              {/* Inner orbit - Tools (Clockwise) */}
              <OrbitingCircles iconSize={40} radius={70} duration={20} orbitColor="#3a3a3a" paused={hoveredIcon !== null}>
                <GitIcon isHovered={hoveredIcon === 'git'} onHover={() => setHoveredIcon('git')} onLeave={() => setHoveredIcon(null)} />
                <DockerIcon isHovered={hoveredIcon === 'docker'} onHover={() => setHoveredIcon('docker')} onLeave={() => setHoveredIcon(null)} />
                <AzureIcon isHovered={hoveredIcon === 'azure'} onHover={() => setHoveredIcon('azure')} onLeave={() => setHoveredIcon(null)} />
                <GroqIcon isHovered={hoveredIcon === 'groq'} onHover={() => setHoveredIcon('groq')} onLeave={() => setHoveredIcon(null)} />
                <PandasIcon isHovered={hoveredIcon === 'pandas'} onHover={() => setHoveredIcon('pandas')} onLeave={() => setHoveredIcon(null)} />
                <ScikitIcon isHovered={hoveredIcon === 'scikit'} onHover={() => setHoveredIcon('scikit')} onLeave={() => setHoveredIcon(null)} />
                <VercelIcon isHovered={hoveredIcon === 'vercel'} onHover={() => setHoveredIcon('vercel')} onLeave={() => setHoveredIcon(null)} />
              </OrbitingCircles>
            </div>
          </div>

          {/* Right: Content Area (60% width) */}
          <div className="lg:w-[60%] w-full flex flex-col gap-6">
            
            {/* Top: Buttons Section (20% height) */}
            <div className="h-[140px] rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm p-6">
              <div className="grid grid-cols-3 gap-3 h-full">
                <button className="rounded-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-colors text-white font-medium">
                  Button 1
                </button>
                <button className="rounded-lg bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500/30 transition-colors text-white font-medium">
                  Button 2
                </button>
                <button className="rounded-lg bg-green-500/20 border border-green-500/30 hover:bg-green-500/30 transition-colors text-white font-medium">
                  Button 3
                </button>
                <button className="rounded-lg bg-orange-500/20 border border-orange-500/30 hover:bg-orange-500/30 transition-colors text-white font-medium">
                  Button 4
                </button>
                <button className="rounded-lg bg-pink-500/20 border border-pink-500/30 hover:bg-pink-500/30 transition-colors text-white font-medium">
                  Button 5
                </button>
                <button className="rounded-lg bg-teal-500/20 border border-teal-500/30 hover:bg-teal-500/30 transition-colors text-white font-medium">
                  Button 6
                </button>
              </div>
            </div>

            {/* Bottom: Description Box */}
            <div className="flex-1 min-h-[540px] rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Description
              </h2>
              {/* Empty content area for now */}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
