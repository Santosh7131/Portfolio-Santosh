import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
export function Loader(_a) {
    var onLoadingComplete = _a.onLoadingComplete;
    var _b = useState(0), count = _b[0], setCount = _b[1];
    useEffect(function () {
        // Animate counter from 0 to 100
        var duration = 2000; // 2 seconds
        var steps = 100;
        var stepDuration = duration / steps;
        var currentStep = 0;
        var interval = setInterval(function () {
            currentStep++;
            setCount(currentStep);
            if (currentStep >= steps) {
                clearInterval(interval);
                setTimeout(function () {
                    onLoadingComplete();
                }, 200);
            }
        }, stepDuration);
        return function () { return clearInterval(interval); };
    }, [onLoadingComplete]);
    return (_jsx(motion.div, { className: "fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden", initial: { opacity: 1 }, exit: {
            opacity: 0,
            transition: {
                duration: 0.6,
                ease: [0.77, 0, 0.175, 1]
            }
        }, children: _jsx("div", { className: "text-center relative z-20", children: _jsxs(motion.div, { className: "relative", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, children: [_jsxs("div", { className: "text-[120px] md:text-[180px] font-bold leading-none", children: [_jsx("span", { className: "bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent", children: count }), _jsx("span", { className: "text-gray-600", children: "%" })] }), _jsx(motion.p, { className: "text-sm md:text-base text-gray-500 tracking-[0.3em] uppercase mt-4", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.3 }, children: "Loading" }), _jsx("div", { className: "w-64 md:w-80 mx-auto mt-8", children: _jsx("div", { className: "h-[2px] bg-gray-800 rounded-full overflow-hidden", children: _jsx(motion.div, { className: "h-full bg-gradient-to-r from-white to-gray-400", initial: { width: '0%' }, animate: { width: "".concat(count, "%") }, transition: { duration: 0.1, ease: 'linear' } }) }) })] }) }) }));
}
