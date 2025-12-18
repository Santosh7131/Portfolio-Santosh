import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { RippleButton, RippleButtonRipples } from '@/components/animate-ui/components/buttons/ripple';
import SpotlightCard from '@/components/SpotlightCard';
var projects = [
    {
        id: 1,
        title: "SRM Lift Optimization",
        description: "Zone-based greedy algorithm optimizing lift allocation for three lifts based on destination floors and capacities. Ensures efficient queue management and constant travel time through intelligent floor grouping and load balancing.",
        technologies: ["React", "Node.js", "MongoDB", "Algorithm Design"],
        category: "Algorithm & System Design",
        image: "🏗️",
        color: "#3B82F6",
        rgbaColor: "59, 130, 246",
        features: [
            "Zone-based floor allocation",
            "Real-time queue management",
            "Energy-efficient routing",
            "Load balancing algorithms"
        ],
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "Sentiment Analysis Tool",
        description: "Advanced sentiment analysis implementation using DAA concepts including hash tables for fast word counting, quicksort for ranking, and weighted scoring algorithms for accurate sentiment calculation.",
        technologies: ["TypeScript", "React", "Algorithms", "Data Structures"],
        category: "Data Analysis & AI",
        image: "📊",
        color: "#10B981",
        rgbaColor: "16, 185, 129",
        features: [
            "Hash table optimization",
            "Quicksort ranking system",
            "Weighted sentiment scoring",
            "Real-time text processing"
        ],
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        title: "Random DSA Problems",
        description: "Comprehensive collection of Design and Analysis of Algorithms (DAA) solutions featuring classic and challenging algorithmic problems to strengthen problem-solving skills and algorithmic thinking.",
        technologies: ["C", "Algorithms", "DAA", "Problem Solving"],
        category: "Algorithm Practice",
        image: "🧮",
        color: "#8B5CF6",
        rgbaColor: "139, 92, 246",
        features: [
            "Classic algorithm implementations",
            "Complexity analysis",
            "Optimization techniques",
            "Problem-solving patterns"
        ],
        github: "https://github.com/Santosh7131/DAA-C",
        demo: "#"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "Modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, glassmorphism design, and optimized performance for showcasing projects and skills.",
        technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
        category: "Web Development",
        image: "🌐",
        color: "#F59E0B",
        rgbaColor: "245, 158, 11",
        features: [
            "Responsive design",
            "Smooth animations",
            "Glassmorphism UI",
            "Performance optimized"
        ],
        github: "#",
        demo: "#"
    }
];
export var ProjectsPage = function () {
    return (_jsx("div", { className: "min-h-screen pt-28 pb-20 px-4", children: _jsxs("div", { className: "container mx-auto max-w-7xl", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-center mb-6", children: _jsx("span", { className: "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent", children: "Featured Projects" }) }), _jsx("p", { className: "text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto", children: "A showcase of my technical projects, from algorithm optimization to full-stack applications. Each project represents a unique challenge and learning experience." }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: projects.map(function (project, index) { return (_jsx(SpotlightCard, { spotlightColor: "rgba(".concat(project.rgbaColor, ", 0.25)"), children: _jsxs(motion.div, { className: "cursor-target group relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 hover:border-opacity-50 transition-all duration-500", style: {
                                borderColor: "rgba(".concat(project.rgbaColor, ", 0.125)")
                            }, initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 + index * 0.1 }, whileHover: {
                                y: -10,
                                scale: 1.02,
                                borderColor: "rgba(".concat(project.rgbaColor, ", 0.25)")
                            }, children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-12 h-12 rounded-xl flex items-center justify-center text-xl", style: { backgroundColor: "rgba(".concat(project.rgbaColor, ", 0.125)") }, children: _jsx("span", { children: project.image }) }), _jsx("div", { children: _jsx("span", { className: "text-xs font-mono px-2 py-1 rounded-full", style: {
                                                            backgroundColor: "rgba(".concat(project.rgbaColor, ", 0.125)"),
                                                            color: project.color
                                                        }, children: project.category }) })] }), _jsxs("span", { className: "text-xs font-mono px-2 py-1 rounded-full", style: {
                                                backgroundColor: "rgba(".concat(project.rgbaColor, ", 0.06)"),
                                                color: project.color
                                            }, children: ["0", project.id] })] }), _jsx("h3", { className: "text-xl md:text-2xl font-bold mb-3 group-hover:transition-colors duration-300", style: { color: 'white' }, children: project.title }), _jsx("p", { className: "text-gray-300 mb-4 leading-relaxed text-sm", children: project.description }), _jsxs("div", { className: "mb-4", children: [_jsx("h4", { className: "text-white font-semibold mb-2 text-sm", children: "Key Features:" }), _jsx("div", { className: "grid grid-cols-2 gap-1", children: project.features.map(function (feature, featureIndex) { return (_jsxs("div", { className: "flex items-center gap-2 text-gray-400 text-xs", children: [_jsx("div", { className: "w-1 h-1 rounded-full", style: { backgroundColor: project.color } }), feature] }, featureIndex)); }) })] }), _jsx("div", { className: "flex flex-wrap gap-1 mb-6", children: project.technologies.map(function (tech, techIndex) { return (_jsx("span", { className: "px-2 py-1 text-xs rounded-full border", style: {
                                            backgroundColor: "rgba(".concat(project.rgbaColor, ", 0.06)"),
                                            color: project.color,
                                            borderColor: "rgba(".concat(project.rgbaColor, ", 0.19)")
                                        }, children: tech }, techIndex)); }) }), _jsxs("div", { className: "flex gap-3", children: [_jsxs(RippleButton, { onClick: function () {
                                                setTimeout(function () {
                                                    window.open(project.github, '_blank');
                                                }, 100);
                                            }, size: "lg", className: "cursor-target bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 font-semibold rounded-xl px-8", style: {
                                                '--ripple-button-ripple-color': 'rgba(255, 255, 255, 0.6)',
                                            }, children: ["\uD83D\uDCBB View Code", _jsx(RippleButtonRipples, {})] }), _jsxs(RippleButton, { onClick: function () {
                                                setTimeout(function () {
                                                    window.open(project.demo, '_blank');
                                                }, 100);
                                            }, size: "lg", className: "cursor-target bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 font-semibold rounded-xl px-8", style: {
                                                '--ripple-button-ripple-color': 'rgba(255, 255, 255, 0.6)',
                                            }, children: ["\uD83D\uDE80 Live Demo", _jsx(RippleButtonRipples, {})] })] }), _jsx("div", { className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none", style: { backgroundColor: project.color } })] }) }, project.id)); }) }), _jsxs(motion.div, { className: "mt-16 text-center", initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, children: [_jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-4", children: "Want to see more?" }), _jsx("p", { className: "text-lg text-gray-300 mb-6 max-w-xl mx-auto", children: "These are just a few highlights. Check out my GitHub for more projects and experiments in web development, algorithms, and problem solving." }), _jsxs(RippleButton, { onClick: function () {
                                setTimeout(function () {
                                    window.open('https://github.com/Santosh7131', '_blank');
                                }, 100);
                            }, size: "lg", className: "cursor-target inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-md hover:shadow-xl transition-all duration-300", style: {
                                '--ripple-button-ripple-color': 'rgba(255, 255, 255, 0.8)',
                            }, children: [_jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) }), "Explore GitHub", _jsx(RippleButtonRipples, {})] })] })] }) }));
};
