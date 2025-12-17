import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { RippleButton, RippleButtonRipples } from '@/components/animate-ui/components/buttons/ripple';
import SpotlightCard from '@/components/SpotlightCard';
// Make the external page change handler available
var globalPageChangeHandler = null;
export var setPageChangeHandler = function (handler) {
    globalPageChangeHandler = handler;
};
var stats = [
    { number: "5+", label: "Projects Built", icon: "🚀" },
    { number: "3+", label: "Years Experience", icon: "⭐" },
    { number: "Arch", label: "I use Arch btw", icon: "🐧" }
];
export var HomePage = function () {
    var _a = useState(''), displayedText = _a[0], setDisplayedText = _a[1];
    var fullText = 'Coffee ? Terminal(Code) : Sleep()';
    var _b = useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var _c = useState(false), startTyping = _c[0], setStartTyping = _c[1];
    // Delay before starting typewriter (wait for page to settle after loading)
    useEffect(function () {
        var delayTimer = setTimeout(function () {
            setStartTyping(true);
        }, 2500); // Start typing 2.5s after page loads (after 2s loading animation + 0.5s buffer)
        return function () { return clearTimeout(delayTimer); };
    }, []);
    // Typewriter effect
    useEffect(function () {
        if (startTyping && currentIndex < fullText.length) {
            var timeout_1 = setTimeout(function () {
                setDisplayedText(function (prev) { return prev + fullText[currentIndex]; });
                setCurrentIndex(function (prev) { return prev + 1; });
            }, 100); // 100ms per character
            return function () { return clearTimeout(timeout_1); };
        }
    }, [currentIndex, startTyping]);
    // Function to navigate to projects page
    var navigateToProjects = function () {
        if (globalPageChangeHandler) {
            globalPageChangeHandler('projects');
        }
    };
    return (_jsx(motion.div, { className: "min-h-screen flex items-center justify-center pt-24 px-4", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, children: _jsxs("div", { className: "text-center max-w-6xl mx-auto", children: [_jsx(motion.div, { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1, delay: 0.2 }, children: _jsx(motion.div, { className: "mb-4 relative flex justify-center items-center min-h-[80px]", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: 0.3 }, children: _jsx("h1", { className: "text-4xl md:text-6xl font-bold text-white text-center leading-tight tracking-wide", children: _jsx("span", { className: "inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent", style: {
                                    textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                                }, children: "SANTOSH KUMAAR" }) }) }) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.5 }, className: "relative", children: _jsx("div", { className: "relative", children: _jsx("h2", { className: "text-xl md:text-3xl text-gray-300 font-light mb-6 relative z-10 font-mono inline-block", children: displayedText }) }) }), _jsx(motion.p, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, className: "text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8", children: "I focus on writing clean, intentional code and paying attention to the details that matter. Most of my work revolves around the web, with a strong preference for working from the terminal." }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1 }, className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8", children: stats.map(function (stat, index) { return (_jsx(SpotlightCard, { spotlightColor: "rgba(96, 165, 250, 0.2)", children: _jsxs(motion.div, { className: "cursor-target bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 relative overflow-hidden group", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 1.2 + index * 0.1 }, whileHover: {
                                scale: 1.05,
                                y: -5,
                                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)"
                            }, children: [_jsx(motion.div, { className: "absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-30 blur-xl", animate: { rotate: [0, 360] }, transition: { duration: 15, repeat: Infinity, ease: "linear" } }), _jsx(motion.div, { className: "text-3xl mb-2 relative z-10", whileHover: { scale: 1.2, rotate: [0, 10, -10, 0] }, transition: { duration: 0.5 }, children: stat.icon }), _jsx(motion.div, { className: "text-2xl font-bold text-white mb-1 relative z-10", initial: { backgroundPosition: "0% 50%" }, whileHover: {
                                        backgroundPosition: "100% 50%",
                                        backgroundSize: "200% 200%",
                                        transition: { duration: 1 }
                                    }, style: {
                                        background: "linear-gradient(90deg, #fff 0%, #60a5fa 50%, #fff 100%)",
                                        backgroundSize: "200% 100%",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }, children: stat.number }), _jsx("div", { className: "text-gray-400 text-sm group-hover:text-white transition-colors duration-300 relative z-10", children: stat.label }), _jsx("div", { className: "absolute inset-0 border border-white/0 group-hover:border-blue-400/30 rounded-xl transition-colors duration-300" })] }) }, index)); }) }), _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1.4 }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(RippleButton, { onClick: navigateToProjects, size: "lg", className: "cursor-target bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 font-semibold rounded-xl px-8", style: {
                                '--ripple-button-ripple-color': 'rgba(255, 255, 255, 0.6)',
                            }, children: ["\uD83C\uDF1F View My Work", _jsx(RippleButtonRipples, {})] }), _jsxs("div", { className: "flex gap-2 items-center", children: [_jsxs(RippleButton, { onClick: function (e) {
                                        // Let ripple animation start before opening link
                                        setTimeout(function () {
                                            window.open('https://drive.google.com/file/d/1-6QubvXApf7TcTM3S2n_W2VNmUWSk_vk/view?usp=sharing', '_blank');
                                        }, 100);
                                    }, size: "lg", className: "cursor-target bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 font-semibold rounded-xl px-8", style: {
                                        '--ripple-button-ripple-color': 'rgba(255, 255, 255, 0.6)',
                                    }, children: ["\uD83D\uDCC4 Resume", _jsx(RippleButtonRipples, {})] }), _jsxs(RippleButton, { onClick: function (e) {
                                        setTimeout(function () {
                                            // Trigger download
                                            var link = document.createElement('a');
                                            link.href = 'https://drive.google.com/uc?export=download&id=1-6QubvXApf7TcTM3S2n_W2VNmUWSk_vk';
                                            link.download = 'Santosh_Resume.pdf';
                                            document.body.appendChild(link);
                                            link.click();
                                            document.body.removeChild(link);
                                        }, 100);
                                    }, size: "lg", className: "cursor-target bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 font-semibold rounded-xl px-4", style: {
                                        '--ripple-button-ripple-color': 'rgba(255, 255, 255, 0.6)',
                                    }, children: [_jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" }) }), _jsx(RippleButtonRipples, {})] })] })] })] }) }));
};
