import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/SpotlightCard';
var skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL", "Firebase"]
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "Docker", "AWS", "Figma", "VS Code", "Linux"]
    }
];
export var SkillsPage = function () {
    return (_jsx("div", { className: "min-h-screen pt-28 pb-20 px-4", children: _jsxs("div", { className: "container mx-auto max-w-5xl", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-center mb-4", children: _jsx("span", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "Skills" }) }), _jsx("p", { className: "text-gray-400 text-center mb-16 max-w-2xl mx-auto", children: "Technologies and tools I work with" }), _jsx("div", { className: "space-y-12", children: skillCategories.map(function (category, index) { return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, children: [_jsx("h2", { className: "text-2xl font-semibold text-white mb-6", children: category.title }), _jsx("div", { className: "flex flex-wrap gap-3", children: category.skills.map(function (skill, skillIndex) { return (_jsx(SpotlightCard, { spotlightColor: "rgba(96, 165, 250, 0.15)", children: _jsx(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }, className: "cursor-target bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all", children: skill }) }, skill)); }) })] }, category.title)); }) })] }) }));
};
