import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
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

// Skill Icons Components
const ReactIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30">
    <SiReact className="text-2xl text-cyan-400" />
  </div>
);

const TypeScriptIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-600/30">
    <SiTypescript className="text-2xl text-blue-400" />
  </div>
);

const JavaScriptIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30">
    <SiJavascript className="text-2xl text-yellow-400" />
  </div>
);

const NodeIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30">
    <SiNodedotjs className="text-2xl text-green-500" />
  </div>
);

const PythonIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-400/30">
    <SiPython className="text-2xl text-blue-400" />
  </div>
);

const MongoDBIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-green-600/20 backdrop-blur-sm border border-green-600/30">
    <SiMongodb className="text-2xl text-green-500" />
  </div>
);

const GitIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30">
    <SiGit className="text-2xl text-orange-500" />
  </div>
);

const DockerIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-400/30">
    <SiDocker className="text-2xl text-blue-400" />
  </div>
);

const JavaIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30">
    <FaJava className="text-2xl text-red-500" />
  </div>
);

const CppIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-600/30">
    <SiCplusplus className="text-2xl text-blue-400" />
  </div>
);

const SQLIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-orange-400/20 backdrop-blur-sm border border-orange-400/30">
    <FaDatabase className="text-2xl text-orange-400" />
  </div>
);

const ExpressIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-gray-400/20 backdrop-blur-sm border border-gray-400/30">
    <SiExpress className="text-2xl text-white" />
  </div>
);

const FastAPIIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-teal-500/20 backdrop-blur-sm border border-teal-500/30">
    <SiFastapi className="text-2xl text-teal-400" />
  </div>
);

const PandasIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30">
    <SiPandas className="text-2xl text-purple-400" />
  </div>
);

const ScikitIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30">
    <SiScikitlearn className="text-2xl text-orange-400" />
  </div>
);

const AzureIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30">
    <FaMicrosoft className="text-2xl text-blue-400" />
  </div>
);

const GroqIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-purple-600/20 backdrop-blur-sm border border-purple-600/30">
    <span className="text-lg font-bold text-purple-300">Groq</span>
  </div>
);

const PostgreSQLIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-400/30">
    <SiPostgresql className="text-2xl text-blue-400" />
  </div>
);

const VercelIcon = () => (
  <div className="flex items-center justify-center w-full h-full rounded-full bg-black/40 backdrop-blur-sm border border-white/30">
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
              <OrbitingCircles iconSize={50} radius={200} duration={30} orbitColor="#3a3a3a">
                <ReactIcon />
                <TypeScriptIcon />
                <JavaScriptIcon />
                <PythonIcon />
                <JavaIcon />
                <CppIcon />
              </OrbitingCircles>

              {/* Middle orbit - Frameworks & DBs (Counter-clockwise) */}
              <OrbitingCircles iconSize={45} radius={130} duration={25} reverse={true} orbitColor="#3a3a3a">
                <NodeIcon />
                <ExpressIcon />
                <FastAPIIcon />
                <MongoDBIcon />
                <PostgreSQLIcon />
                <SQLIcon />
              </OrbitingCircles>

              {/* Inner orbit - Tools (Clockwise) */}
              <OrbitingCircles iconSize={40} radius={70} duration={20} orbitColor="#3a3a3a">
                <GitIcon />
                <DockerIcon />
                <AzureIcon />
                <GroqIcon />
                <PandasIcon />
                <ScikitIcon />
                <VercelIcon />
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
