import { OrbitingCircles } from '@/components/ui/orbiting-circles';
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

export const SkillsPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h1>
        
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>

        {/* Orbiting Circles Visualization */}
        <div className="relative flex h-[700px] w-full items-center justify-center overflow-hidden">
          
          {/* Outer orbit - Languages (Clockwise) */}
          <OrbitingCircles iconSize={50} radius={250} duration={30} orbitColor="#3a3a3a">
            <ReactIcon />
            <TypeScriptIcon />
            <JavaScriptIcon />
            <PythonIcon />
            <JavaIcon />
            <CppIcon />
          </OrbitingCircles>

          {/* Middle orbit - Frameworks & DBs (Counter-clockwise) */}
          <OrbitingCircles iconSize={45} radius={160} duration={25} reverse={true} orbitColor="#3a3a3a">
            <NodeIcon />
            <ExpressIcon />
            <FastAPIIcon />
            <MongoDBIcon />
            <PostgreSQLIcon />
            <SQLIcon />
          </OrbitingCircles>

          {/* Inner orbit - Tools (Clockwise) */}
          <OrbitingCircles iconSize={40} radius={80} duration={20} orbitColor="#3a3a3a">
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
    </div>
  );
};
