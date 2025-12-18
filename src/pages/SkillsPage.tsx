import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { Button } from '@/components/animate-ui/components/buttons/button';
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
  SiVercel,
  SiC,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGreensock,
  SiFlask,
  SiHuggingface,
  SiNumpy,
  SiGithub,
  SiRender,
  SiRailway,
  SiAutocad,
  SiCanva,
  SiFigma,
  SiPostman
} from 'react-icons/si';
import { FaJava, FaDatabase, FaMicrosoft } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { TbMathFunction } from 'react-icons/tb';

// Skill Icons Components with hover support
const ReactIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-600/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-400/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-green-600/20 backdrop-blur-sm border border-green-600/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-400/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-600/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-orange-400/20 backdrop-blur-sm border border-orange-400/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-gray-400/20 backdrop-blur-sm border border-gray-400/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-blue-500/40 border-blue-500/60 shadow-lg shadow-blue-500/50' : ''
    }`}
  >
    <img src="/azure-icon.png" alt="Azure" className="w-6 h-6 object-contain" />
  </div>
);

const GroqIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-purple-600/20 backdrop-blur-sm border border-purple-600/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-purple-600/40 border-purple-600/60 shadow-lg shadow-purple-600/50' : ''
    }`}
  >
    <img src="/groq-icon.png" alt="Groq" className="w-6 h-6 object-contain" />
  </div>
);

const PostgreSQLIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-blue-400/20 backdrop-blur-sm border border-blue-400/30 transition-all duration-300 cursor-pointer ${
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
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-black/40 backdrop-blur-sm border border-white/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-black/60 border-white/60 shadow-lg shadow-white/50' : ''
    }`}
  >
    <SiVercel className="text-2xl text-white" />
  </div>
);

// NEW ICONS
const CIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-blue-500/40 border-blue-500/60 shadow-lg shadow-blue-500/50' : ''
    }`}
  >
    <SiC className="text-2xl text-blue-400" />
  </div>
);

const MySQLIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-600/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-blue-600/40 border-blue-600/60 shadow-lg shadow-blue-600/50' : ''
    }`}
  >
    <img src="/mysql-icon.png" alt="MySQL" className="w-6 h-6 object-contain" />
  </div>
);

const HTMLIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-orange-500/40 border-orange-500/60 shadow-lg shadow-orange-500/50' : ''
    }`}
  >
    <SiHtml5 className="text-2xl text-orange-500" />
  </div>
);

const CSSIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-blue-500/40 border-blue-500/60 shadow-lg shadow-blue-500/50' : ''
    }`}
  >
    <SiCss3 className="text-2xl text-blue-400" />
  </div>
);

const NextJSIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-black/40 backdrop-blur-sm border border-white/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-black/60 border-white/60 shadow-lg shadow-white/50' : ''
    }`}
  >
    <SiNextdotjs className="text-2xl text-white" />
  </div>
);

const TailwindIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-cyan-500/40 border-cyan-500/60 shadow-lg shadow-cyan-500/50' : ''
    }`}
  >
    <SiTailwindcss className="text-2xl text-cyan-400" />
  </div>
);

const FramerIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-pink-500/40 border-pink-500/60 shadow-lg shadow-pink-500/50' : ''
    }`}
  >
    <SiFramer className="text-2xl text-pink-400" />
  </div>
);

const GSAPIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-green-500/40 border-green-500/60 shadow-lg shadow-green-500/50' : ''
    }`}
  >
    <img src="/gsap-icon.jpg" alt="GSAP" className="w-6 h-6 object-contain" />
  </div>
);

const FlaskIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-gray-400/20 backdrop-blur-sm border border-gray-400/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-gray-400/40 border-gray-400/60 shadow-lg shadow-gray-400/50' : ''
    }`}
  >
    <SiFlask className="text-2xl text-white" />
  </div>
);

const HuggingFaceIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-yellow-500/40 border-yellow-500/60 shadow-lg shadow-yellow-500/50' : ''
    }`}
  >
    <img src="/huggingface-icon.png" alt="Hugging Face" className="w-6 h-6 object-contain" />
  </div>
);

const NumpyIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-blue-500/40 border-blue-500/60 shadow-lg shadow-blue-500/50' : ''
    }`}
  >
    <SiNumpy className="text-2xl text-blue-400" />
  </div>
);

const MatplotlibIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-indigo-500/40 border-indigo-500/60 shadow-lg shadow-indigo-500/50' : ''
    }`}
  >
    <TbMathFunction className="text-2xl text-indigo-400" />
  </div>
);

const GithubIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-gray-500/20 backdrop-blur-sm border border-gray-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-gray-500/40 border-gray-500/60 shadow-lg shadow-gray-500/50' : ''
    }`}
  >
    <SiGithub className="text-2xl text-white" />
  </div>
);

const RenderIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-purple-500/40 border-purple-500/60 shadow-lg shadow-purple-500/50' : ''
    }`}
  >
    <SiRender className="text-2xl text-purple-400" />
  </div>
);

const RailwayIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-black/40 backdrop-blur-sm border border-white/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-black/60 border-white/60 shadow-lg shadow-white/50' : ''
    }`}
  >
    <SiRailway className="text-2xl text-white" />
  </div>
);

const CICDIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-green-500/40 border-green-500/60 shadow-lg shadow-green-500/50' : ''
    }`}
  >
    <span className="text-sm font-bold text-green-400">CI/CD</span>
  </div>
);

const VSCodeIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-blue-500/40 border-blue-500/60 shadow-lg shadow-blue-500/50' : ''
    }`}
  >
    <img src="/vscode-icon.png" alt="VS Code" className="w-6 h-6 object-contain" />
  </div>
);

const AutoCADIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-red-500/40 border-red-500/60 shadow-lg shadow-red-500/50' : ''
    }`}
  >
    <SiAutocad className="text-2xl text-red-400" />
  </div>
);

const CanvaIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-cyan-500/40 border-cyan-500/60 shadow-lg shadow-cyan-500/50' : ''
    }`}
  >
    <SiCanva className="text-2xl text-cyan-400" />
  </div>
);

const FigmaIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-pink-500/40 border-pink-500/60 shadow-lg shadow-pink-500/50' : ''
    }`}
  >
    <SiFigma className="text-2xl text-pink-400" />
  </div>
);

const PostmanIcon = ({ isHovered, onHover, onLeave }: { isHovered: boolean; onHover: () => void; onLeave: () => void }) => (
  <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`cursor-target flex items-center justify-center w-full h-full rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 transition-all duration-300 cursor-pointer ${
      isHovered ? 'scale-125 bg-orange-500/40 border-orange-500/60 shadow-lg shadow-orange-500/50' : ''
    }`}
  >
    <SiPostman className="text-2xl text-orange-400" />
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

// Technology descriptions
const technologyDescriptions: Record<string, { name: string; description: string; category: string; useCases: string[] }> = {
  react: {
    name: "React",
    description: "A JavaScript library for building user interfaces with a component-based architecture.",
    category: "Frontend Framework",
    useCases: ["Single Page Applications", "Interactive UIs", "Reusable Components", "State Management"]
  },
  typescript: {
    name: "TypeScript",
    description: "A strongly typed superset of JavaScript that adds static typing for better code quality.",
    category: "Programming Language",
    useCases: ["Type Safety", "Better IDE Support", "Large Scale Applications", "Team Collaboration"]
  },
  javascript: {
    name: "JavaScript",
    description: "The core programming language of the web, enabling dynamic and interactive content.",
    category: "Programming Language",
    useCases: ["Web Development", "Frontend Logic", "API Integration", "DOM Manipulation"]
  },
  python: {
    name: "Python",
    description: "A versatile high-level language known for readability and extensive library support.",
    category: "Programming Language",
    useCases: ["Data Science", "Machine Learning", "Backend Development", "Automation Scripts"]
  },
  java: {
    name: "Java",
    description: "A robust, object-oriented language used for enterprise applications and Android development.",
    category: "Programming Language",
    useCases: ["Enterprise Applications", "Android Development", "Backend Services", "Desktop Applications"]
  },
  cpp: {
    name: "C++",
    description: "A powerful language offering high performance and low-level memory manipulation.",
    category: "Programming Language",
    useCases: ["System Programming", "Game Development", "Performance Critical Apps", "Embedded Systems"]
  },
  node: {
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 engine for building scalable network applications.",
    category: "Backend Runtime",
    useCases: ["REST APIs", "Real-time Applications", "Microservices", "Server-side JavaScript"]
  },
  express: {
    name: "Express.js",
    description: "A minimal and flexible Node.js web application framework for building APIs and web apps.",
    category: "Backend Framework",
    useCases: ["RESTful APIs", "Web Servers", "Middleware Integration", "Routing"]
  },
  fastapi: {
    name: "FastAPI",
    description: "A modern, fast Python web framework for building APIs with automatic documentation.",
    category: "Backend Framework",
    useCases: ["High Performance APIs", "Async Operations", "Data Validation", "Auto Documentation"]
  },
  mongodb: {
    name: "MongoDB",
    description: "A NoSQL document database offering flexibility and scalability for modern applications.",
    category: "Database",
    useCases: ["Document Storage", "Flexible Schema", "Scalable Applications", "JSON-like Data"]
  },
  postgresql: {
    name: "PostgreSQL",
    description: "A powerful, open-source relational database with advanced features and SQL compliance.",
    category: "Database",
    useCases: ["Complex Queries", "ACID Compliance", "Data Integrity", "Structured Data"]
  },
  sql: {
    name: "SQL",
    description: "Structured Query Language for managing and manipulating relational databases.",
    category: "Query Language",
    useCases: ["Data Querying", "Database Management", "Data Analysis", "Reporting"]
  },
  git: {
    name: "Git",
    description: "A distributed version control system for tracking code changes and collaboration.",
    category: "Version Control",
    useCases: ["Source Control", "Branching & Merging", "Code History", "Team Collaboration"]
  },
  docker: {
    name: "Docker",
    description: "A platform for containerizing applications to ensure consistency across environments.",
    category: "DevOps Tool",
    useCases: ["Containerization", "Microservices", "CI/CD Pipelines", "Environment Consistency"]
  },
  azure: {
    name: "Microsoft Azure",
    description: "Microsoft's cloud computing platform offering a wide range of services and solutions.",
    category: "Cloud Platform",
    useCases: ["Cloud Services", "OCR Processing", "Scalable Infrastructure", "AI Services"]
  },
  groq: {
    name: "Groq API",
    description: "High-performance AI inference API for fast language model processing.",
    category: "AI Service",
    useCases: ["LLM Inference", "Fast AI Processing", "Natural Language", "AI Integration"]
  },
  pandas: {
    name: "Pandas",
    description: "A powerful Python library for data manipulation and analysis with DataFrames.",
    category: "Data Library",
    useCases: ["Data Analysis", "Data Cleaning", "CSV Processing", "Statistical Analysis"]
  },
  scikit: {
    name: "Scikit-learn",
    description: "A comprehensive machine learning library for Python with simple and efficient tools.",
    category: "ML Library",
    useCases: ["Machine Learning", "Classification", "Regression", "Model Training"]
  },
  vercel: {
    name: "Vercel",
    description: "A cloud platform for deploying and hosting modern web applications with zero configuration.",
    category: "Deployment Platform",
    useCases: ["Frontend Hosting", "Serverless Functions", "Edge Network", "CI/CD Integration"]
  },
  c: {
    name: "C",
    description: "A powerful general-purpose language foundational to modern computing and system programming.",
    category: "Programming Language",
    useCases: ["System Programming", "Operating Systems", "Embedded Systems", "Performance Critical Code"]
  },
  mysql: {
    name: "MySQL",
    description: "An open-source relational database management system widely used for web applications.",
    category: "Database",
    useCases: ["Web Applications", "Data Storage", "Relational Data", "ACID Transactions"]
  },
  html: {
    name: "HTML5",
    description: "The standard markup language for creating web pages and web applications.",
    category: "Markup Language",
    useCases: ["Web Structure", "Semantic Markup", "Content Organization", "Web Standards"]
  },
  css: {
    name: "CSS3",
    description: "Style sheet language used for describing the presentation of web documents.",
    category: "Style Sheet",
    useCases: ["Web Styling", "Responsive Design", "Animations", "Layout Management"]
  },
  nextjs: {
    name: "Next.js",
    description: "A React framework for building full-stack web applications with server-side rendering.",
    category: "Frontend Framework",
    useCases: ["SSR Applications", "Static Sites", "Full-stack Apps", "SEO Optimization"]
  },
  tailwind: {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building custom user interfaces.",
    category: "CSS Framework",
    useCases: ["Rapid Prototyping", "Utility Classes", "Responsive Design", "Custom Designs"]
  },
  framer: {
    name: "Framer Motion",
    description: "A production-ready motion library for React with simple yet powerful animations.",
    category: "Animation Library",
    useCases: ["Page Transitions", "UI Animations", "Gesture Interactions", "Complex Animations"]
  },
  gsap: {
    name: "GSAP",
    description: "A professional-grade JavaScript animation library for creating high-performance animations.",
    category: "Animation Library",
    useCases: ["Complex Animations", "Timeline Control", "SVG Animation", "Performance Critical"]
  },
  flask: {
    name: "Flask",
    description: "A lightweight WSGI web application framework for Python with minimal setup.",
    category: "Backend Framework",
    useCases: ["Microservices", "REST APIs", "Small Applications", "Prototyping"]
  },
  huggingface: {
    name: "Hugging Face",
    description: "A platform and library for state-of-the-art natural language processing and machine learning.",
    category: "AI/ML Platform",
    useCases: ["NLP Models", "Transformers", "Model Hub", "Text Generation"]
  },
  numpy: {
    name: "NumPy",
    description: "The fundamental package for scientific computing with Python, providing array operations.",
    category: "Data Library",
    useCases: ["Numerical Computing", "Array Operations", "Scientific Computing", "Linear Algebra"]
  },
  matplotlib: {
    name: "Matplotlib",
    description: "A comprehensive library for creating static, animated, and interactive visualizations in Python.",
    category: "Visualization Library",
    useCases: ["Data Visualization", "Plotting", "Charts & Graphs", "Scientific Figures"]
  },
  github: {
    name: "GitHub",
    description: "A web-based platform for version control and collaboration using Git.",
    category: "Development Platform",
    useCases: ["Code Hosting", "Collaboration", "CI/CD", "Open Source"]
  },
  render: {
    name: "Render",
    description: "A unified cloud platform to build and run all your apps and websites with free SSL and CDN.",
    category: "Cloud Platform",
    useCases: ["Web Hosting", "Backend Deployment", "Static Sites", "Database Hosting"]
  },
  railway: {
    name: "Railway",
    description: "A deployment platform where you can provision infrastructure and deploy instantly.",
    category: "Deployment Platform",
    useCases: ["Instant Deployment", "Database Hosting", "Backend Services", "Environment Variables"]
  },
  cicd: {
    name: "CI/CD",
    description: "Continuous Integration and Continuous Deployment practices for automated software delivery.",
    category: "DevOps Practice",
    useCases: ["Automated Testing", "Deployment Automation", "Quality Assurance", "Release Management"]
  },
  vscode: {
    name: "VS Code",
    description: "A lightweight but powerful source code editor with extensive extension support.",
    category: "IDE/Editor",
    useCases: ["Code Editing", "Debugging", "Extensions", "Git Integration"]
  },
  autocad: {
    name: "AutoCAD",
    description: "A commercial computer-aided design and drafting software application.",
    category: "Design Tool",
    useCases: ["2D Drafting", "3D Modeling", "Engineering Design", "Architecture"]
  },
  canva: {
    name: "Canva",
    description: "A graphic design platform for creating social media graphics, presentations, and visual content.",
    category: "Design Tool",
    useCases: ["Graphic Design", "Social Media", "Presentations", "Marketing Materials"]
  },
  figma: {
    name: "Figma",
    description: "A collaborative interface design tool for creating user interfaces and prototypes.",
    category: "Design Tool",
    useCases: ["UI Design", "Prototyping", "Collaboration", "Design Systems"]
  },
  postman: {
    name: "Postman",
    description: "An API platform for building, testing, and documenting APIs efficiently.",
    category: "API Tool",
    useCases: ["API Testing", "Request Building", "Documentation", "API Development"]
  },
};

// Category mapping based on skills-organization.txt
const categoryMapping = {
  languages: ['javascript', 'typescript', 'python', 'java', 'cpp', 'c', 'mysql'],
  frontend: ['html', 'css', 'react', 'nextjs', 'tailwind', 'framer', 'gsap'],
  backend: ['node', 'express', 'fastapi', 'flask'],
  aiml: ['huggingface', 'scikit'],
  dataprocessing: ['pandas', 'numpy', 'matplotlib'],
  databases: ['mongodb', 'postgresql', 'sql'],
  clouddevops: ['docker', 'azure', 'vercel', 'git', 'github', 'render', 'railway', 'cicd'],
  tools: ['vscode', 'autocad', 'canva', 'figma', 'postman']
};

type CategoryKey = keyof typeof categoryMapping;

export const SkillsPage = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null);

  // Check if an icon is highlighted based on selected category
  const isIconHighlighted = (iconKey: string) => {
    if (!selectedCategory) return true; // Show all if no category selected
    return categoryMapping[selectedCategory].includes(iconKey);
  };

  // Get icon opacity/scale based on highlight status
  const getIconWrapperStyle = (iconKey: string) => {
    if (!selectedCategory) return 'opacity-100'; // Full opacity when no filter
    const isHighlighted = categoryMapping[selectedCategory].includes(iconKey);
    return isHighlighted 
      ? 'opacity-100 ring-2 ring-blue-400/50' 
      : 'opacity-20';
  };

  // Get all icons in the selected category for description display
  const getSelectedCategoryIcons = () => {
    if (!selectedCategory) return [];
    return categoryMapping[selectedCategory]
      .filter(key => technologyDescriptions[key as keyof typeof technologyDescriptions])
      .map(key => ({
        key,
        ...technologyDescriptions[key as keyof typeof technologyDescriptions]
      }));
  };

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
          
          {/* Left: Large Bento Card with Orbiting Circles (45% width) */}
          <div className="lg:w-[45%] w-full">
            <div className="relative flex h-[700px] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
              
              {/* Outer orbit - Languages (Clockwise) */}
              {/* Orbit 1 - Outermost (Clockwise) - 12 icons */}
              <OrbitingCircles iconSize={46} radius={320} duration={40} delay={0} orbitColor="#3a3a3a" paused={hoveredIcon !== null}>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('react')}`}>
                  <ReactIcon isHovered={hoveredIcon === 'react'} onHover={() => setHoveredIcon('react')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('typescript')}`}>
                  <TypeScriptIcon isHovered={hoveredIcon === 'typescript'} onHover={() => setHoveredIcon('typescript')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('javascript')}`}>
                  <JavaScriptIcon isHovered={hoveredIcon === 'javascript'} onHover={() => setHoveredIcon('javascript')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('python')}`}>
                  <PythonIcon isHovered={hoveredIcon === 'python'} onHover={() => setHoveredIcon('python')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('java')}`}>
                  <JavaIcon isHovered={hoveredIcon === 'java'} onHover={() => setHoveredIcon('java')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('cpp')}`}>
                  <CppIcon isHovered={hoveredIcon === 'cpp'} onHover={() => setHoveredIcon('cpp')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('c')}`}>
                  <CIcon isHovered={hoveredIcon === 'c'} onHover={() => setHoveredIcon('c')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('html')}`}>
                  <HTMLIcon isHovered={hoveredIcon === 'html'} onHover={() => setHoveredIcon('html')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('css')}`}>
                  <CSSIcon isHovered={hoveredIcon === 'css'} onHover={() => setHoveredIcon('css')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('nextjs')}`}>
                  <NextJSIcon isHovered={hoveredIcon === 'nextjs'} onHover={() => setHoveredIcon('nextjs')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('tailwind')}`}>
                  <TailwindIcon isHovered={hoveredIcon === 'tailwind'} onHover={() => setHoveredIcon('tailwind')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('framer')}`}>
                  <FramerIcon isHovered={hoveredIcon === 'framer'} onHover={() => setHoveredIcon('framer')} onLeave={() => setHoveredIcon(null)} />
                </div>
              </OrbitingCircles>

              {/* Orbit 2 (Counter-clockwise) - 10 icons */}
              <OrbitingCircles iconSize={44} radius={256} duration={36} delay={0} reverse={true} orbitColor="#3a3a3a" paused={hoveredIcon !== null}>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('gsap')}`}>
                  <GSAPIcon isHovered={hoveredIcon === 'gsap'} onHover={() => setHoveredIcon('gsap')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('node')}`}>
                  <NodeIcon isHovered={hoveredIcon === 'node'} onHover={() => setHoveredIcon('node')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('express')}`}>
                  <ExpressIcon isHovered={hoveredIcon === 'express'} onHover={() => setHoveredIcon('express')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('flask')}`}>
                  <FlaskIcon isHovered={hoveredIcon === 'flask'} onHover={() => setHoveredIcon('flask')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('fastapi')}`}>
                  <FastAPIIcon isHovered={hoveredIcon === 'fastapi'} onHover={() => setHoveredIcon('fastapi')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('mongodb')}`}>
                  <MongoDBIcon isHovered={hoveredIcon === 'mongodb'} onHover={() => setHoveredIcon('mongodb')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('postgresql')}`}>
                  <PostgreSQLIcon isHovered={hoveredIcon === 'postgresql'} onHover={() => setHoveredIcon('postgresql')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('sql')}`}>
                  <SQLIcon isHovered={hoveredIcon === 'sql'} onHover={() => setHoveredIcon('sql')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('mysql')}`}>
                  <MySQLIcon isHovered={hoveredIcon === 'mysql'} onHover={() => setHoveredIcon('mysql')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('huggingface')}`}>
                  <HuggingFaceIcon isHovered={hoveredIcon === 'huggingface'} onHover={() => setHoveredIcon('huggingface')} onLeave={() => setHoveredIcon(null)} />
                </div>
              </OrbitingCircles>

              {/* Orbit 3 (Clockwise) - 8 icons */}
              <OrbitingCircles iconSize={42} radius={192} duration={32} delay={0} orbitColor="#3a3a3a" paused={hoveredIcon !== null}>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('numpy')}`}>
                  <NumpyIcon isHovered={hoveredIcon === 'numpy'} onHover={() => setHoveredIcon('numpy')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('matplotlib')}`}>
                  <MatplotlibIcon isHovered={hoveredIcon === 'matplotlib'} onHover={() => setHoveredIcon('matplotlib')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('pandas')}`}>
                  <PandasIcon isHovered={hoveredIcon === 'pandas'} onHover={() => setHoveredIcon('pandas')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('scikit')}`}>
                  <ScikitIcon isHovered={hoveredIcon === 'scikit'} onHover={() => setHoveredIcon('scikit')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('git')}`}>
                  <GitIcon isHovered={hoveredIcon === 'git'} onHover={() => setHoveredIcon('git')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('github')}`}>
                  <GithubIcon isHovered={hoveredIcon === 'github'} onHover={() => setHoveredIcon('github')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('docker')}`}>
                  <DockerIcon isHovered={hoveredIcon === 'docker'} onHover={() => setHoveredIcon('docker')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('azure')}`}>
                  <AzureIcon isHovered={hoveredIcon === 'azure'} onHover={() => setHoveredIcon('azure')} onLeave={() => setHoveredIcon(null)} />
                </div>
              </OrbitingCircles>

              {/* Orbit 4 (Counter-clockwise) - 6 icons */}
              <OrbitingCircles iconSize={40} radius={128} duration={28} reverse={true} orbitColor="#3a3a3a" paused={hoveredIcon !== null}>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('vercel')}`}>
                  <VercelIcon isHovered={hoveredIcon === 'vercel'} onHover={() => setHoveredIcon('vercel')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('render')}`}>
                  <RenderIcon isHovered={hoveredIcon === 'render'} onHover={() => setHoveredIcon('render')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('railway')}`}>
                  <RailwayIcon isHovered={hoveredIcon === 'railway'} onHover={() => setHoveredIcon('railway')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('cicd')}`}>
                  <CICDIcon isHovered={hoveredIcon === 'cicd'} onHover={() => setHoveredIcon('cicd')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('groq')}`}>
                  <GroqIcon isHovered={hoveredIcon === 'groq'} onHover={() => setHoveredIcon('groq')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('vscode')}`}>
                  <VSCodeIcon isHovered={hoveredIcon === 'vscode'} onHover={() => setHoveredIcon('vscode')} onLeave={() => setHoveredIcon(null)} />
                </div>
              </OrbitingCircles>

              {/* Orbit 5 - Innermost (Clockwise) - 4 icons */}
              <OrbitingCircles iconSize={38} radius={64} duration={24} orbitColor="#3a3a3a" paused={hoveredIcon !== null}>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('autocad')}`}>
                  <AutoCADIcon isHovered={hoveredIcon === 'autocad'} onHover={() => setHoveredIcon('autocad')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('canva')}`}>
                  <CanvaIcon isHovered={hoveredIcon === 'canva'} onHover={() => setHoveredIcon('canva')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('figma')}`}>
                  <FigmaIcon isHovered={hoveredIcon === 'figma'} onHover={() => setHoveredIcon('figma')} onLeave={() => setHoveredIcon(null)} />
                </div>
                <div className={`w-full h-full rounded-full transition-all duration-300 ${getIconWrapperStyle('postman')}`}>
                  <PostmanIcon isHovered={hoveredIcon === 'postman'} onHover={() => setHoveredIcon('postman')} onLeave={() => setHoveredIcon(null)} />
                </div>
              </OrbitingCircles>
            </div>
          </div>

          {/* Right: Content Area (55% width) */}
          <div className="lg:w-[55%] w-full flex flex-col gap-6">
            
            {/* Top: Buttons Section (20% height) */}
            <div className="h-[140px] rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm p-6">
              <div className="grid grid-cols-4 gap-3 h-full">
                <Button 
                  variant="default" 
                  className={`h-full ${selectedCategory === 'languages' ? 'ring-2 ring-blue-500 bg-blue-500/20' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === 'languages' ? null : 'languages')}
                >
                  Languages
                </Button>
                <Button 
                  variant="default" 
                  className={`h-full ${selectedCategory === 'frontend' ? 'ring-2 ring-cyan-500 bg-cyan-500/20' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === 'frontend' ? null : 'frontend')}
                >
                  Frontend
                </Button>
                <Button 
                  variant="default" 
                  className={`h-full ${selectedCategory === 'backend' ? 'ring-2 ring-green-500 bg-green-500/20' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === 'backend' ? null : 'backend')}
                >
                  Backend
                </Button>
                <Button 
                  variant="default" 
                  className={`h-full ${selectedCategory === 'aiml' ? 'ring-2 ring-purple-500 bg-purple-500/20' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === 'aiml' ? null : 'aiml')}
                >
                  AI/ML
                </Button>
                <Button 
                  variant="default" 
                  className={`h-full ${selectedCategory === 'dataprocessing' ? 'ring-2 ring-indigo-500 bg-indigo-500/20' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === 'dataprocessing' ? null : 'dataprocessing')}
                >
                  Data Processing
                </Button>
                <Button 
                  variant="default" 
                  className={`h-full ${selectedCategory === 'databases' ? 'ring-2 ring-emerald-500 bg-emerald-500/20' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === 'databases' ? null : 'databases')}
                >
                  Databases
                </Button>
                <Button 
                  variant="default" 
                  className={`h-full ${selectedCategory === 'clouddevops' ? 'ring-2 ring-sky-500 bg-sky-500/20' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === 'clouddevops' ? null : 'clouddevops')}
                >
                  Cloud & DevOps
                </Button>
                <Button 
                  variant="default" 
                  className={`h-full ${selectedCategory === 'tools' ? 'ring-2 ring-orange-500 bg-orange-500/20' : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === 'tools' ? null : 'tools')}
                >
                  Tools
                </Button>
              </div>
            </div>

            {/* Bottom: Description Box */}
            <div className="flex-1 min-h-[540px] rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm p-8 overflow-y-auto">
              {selectedCategory ? (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace(/([A-Z])/g, ' $1')}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {getSelectedCategoryIcons().length} technologies
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {getSelectedCategoryIcons().map((tech) => (
                      <div key={tech.key} className="border-l-4 border-blue-500/50 pl-4 space-y-2">
                        <h3 className="text-xl font-semibold text-white">
                          {tech.name}
                        </h3>
                        <p className="text-sm text-gray-400">{tech.category}</p>
                        <p className="text-gray-300 leading-relaxed">
                          {tech.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {tech.useCases.map((useCase, idx) => (
                            <span 
                              key={idx}
                              className="text-xs text-gray-300 bg-white/5 rounded-lg px-3 py-1 border border-gray-700/50"
                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : hoveredIcon ? (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {technologyDescriptions[hoveredIcon].name}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {technologyDescriptions[hoveredIcon].category}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {technologyDescriptions[hoveredIcon].description}
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Use Cases
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {technologyDescriptions[hoveredIcon].useCases.map((useCase, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 text-gray-300 bg-white/5 rounded-lg px-4 py-2 border border-gray-700/50"
                        >
                          <span className="text-blue-400">•</span>
                          <span>{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <p className="text-gray-500 text-lg">
                      Select a category above or hover over any technology icon
                    </p>
                    <p className="text-gray-600 text-sm">
                      Click a button to filter technologies by category
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
