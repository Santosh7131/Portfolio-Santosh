import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export var PageTransition = function (_a) {
    var isTransitioning = _a.isTransitioning, _b = _a.targetPage, targetPage = _b === void 0 ? '' : _b;
    // Capitalize page name for display
    var pageDisplayName = targetPage.charAt(0).toUpperCase() + targetPage.slice(1);
    return (_jsxs(motion.div, { className: "fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden", initial: { opacity: 0 }, animate: {
            opacity: isTransitioning ? 1 : 0,
        }, transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1],
        }, style: { pointerEvents: isTransitioning ? 'auto' : 'none' }, children: [_jsx("div", { className: "absolute inset-0 bg-black z-10" }), _jsx("div", { className: "text-center relative z-20", children: _jsx(motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: {
                        opacity: isTransitioning ? 1 : 0,
                        scale: isTransitioning ? 1 : 0.8
                    }, transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                        delay: isTransitioning ? 0.1 : 0
                    }, children: _jsx("h1", { className: "text-5xl md:text-7xl font-bold text-white tracking-wide", children: _jsx("span", { className: "inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent", style: {
                                textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                            }, children: pageDisplayName }) }) }) })] }));
};
