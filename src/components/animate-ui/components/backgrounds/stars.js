'use client';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
function cn() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    var result = [];
    classes.forEach(function (cls) {
        if (!cls)
            return;
        if (typeof cls === 'string') {
            result.push(cls);
            return;
        }
        if (typeof cls === 'object') {
            Object.entries(cls).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value)
                    result.push(key);
            });
        }
    });
    return result.join(' ');
}
function generateStars(count, starColor) {
    var shadows = [];
    for (var i = 0; i < count; i++) {
        var x = Math.floor(Math.random() * 4000) - 2000;
        var y = Math.floor(Math.random() * 4000) - 2000;
        shadows.push("".concat(x, "px ").concat(y, "px ").concat(starColor));
    }
    return shadows.join(', ');
}
function StarLayer(_a) {
    var _b = _a.count, count = _b === void 0 ? 1000 : _b, _c = _a.size, size = _c === void 0 ? 1 : _c, _d = _a.transition, transition = _d === void 0 ? { repeat: Infinity, duration: 50, ease: 'linear' } : _d, _e = _a.starColor, starColor = _e === void 0 ? '#fff' : _e, className = _a.className, props = __rest(_a, ["count", "size", "transition", "starColor", "className"]);
    var _f = useState(''), boxShadow = _f[0], setBoxShadow = _f[1];
    useEffect(function () {
        setBoxShadow(generateStars(count, starColor));
    }, [count, starColor]);
    return (_jsxs(motion.div, __assign({ animate: { y: [0, -2000] }, transition: transition, className: cn('absolute top-0 left-0 w-full h-[2000px]', className) }, props, { children: [_jsx("div", { className: "absolute bg-transparent rounded-full", style: {
                    width: "".concat(size, "px"),
                    height: "".concat(size, "px"),
                    boxShadow: boxShadow,
                } }), _jsx("div", { className: "absolute bg-transparent rounded-full top-[2000px]", style: {
                    width: "".concat(size, "px"),
                    height: "".concat(size, "px"),
                    boxShadow: boxShadow,
                } })] })));
}
function StarsBackground(_a) {
    var children = _a.children, className = _a.className, _b = _a.factor, factor = _b === void 0 ? 0.05 : _b, _c = _a.speed, speed = _c === void 0 ? 50 : _c, _d = _a.transition, transition = _d === void 0 ? { stiffness: 50, damping: 20 } : _d, _e = _a.starColor, starColor = _e === void 0 ? '#fff' : _e, _f = _a.pointerEvents, pointerEvents = _f === void 0 ? true : _f, props = __rest(_a, ["children", "className", "factor", "speed", "transition", "starColor", "pointerEvents"]);
    var offsetX = useMotionValue(1);
    var offsetY = useMotionValue(1);
    var springX = useSpring(offsetX, transition);
    var springY = useSpring(offsetY, transition);
    var handleMouseMove = useCallback(function (e) {
        var centerX = window.innerWidth / 2;
        var centerY = window.innerHeight / 2;
        var newOffsetX = -(e.clientX - centerX) * factor;
        var newOffsetY = -(e.clientY - centerY) * factor;
        offsetX.set(newOffsetX);
        offsetY.set(newOffsetY);
    }, [offsetX, offsetY, factor]);
    return (_jsxs("div", __assign({ className: cn('relative size-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]', className), onMouseMove: handleMouseMove }, props, { children: [_jsxs(motion.div, { style: { x: springX, y: springY }, className: cn({ 'pointer-events-none': !pointerEvents }), children: [_jsx(StarLayer, { count: 1000, size: 1, transition: { repeat: Infinity, duration: speed, ease: 'linear' }, starColor: starColor }), _jsx(StarLayer, { count: 400, size: 2, transition: { repeat: Infinity, duration: speed * 2, ease: 'linear' }, starColor: starColor }), _jsx(StarLayer, { count: 200, size: 3, transition: { repeat: Infinity, duration: speed * 3, ease: 'linear' }, starColor: starColor })] }), children] })));
}
export { StarLayer, StarsBackground };
