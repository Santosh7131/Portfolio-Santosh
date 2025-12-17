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
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { motion, useScroll, useSpring, } from 'motion/react';
import { Slot } from '@/components/animate-ui/primitives/animate/slot';
import { getStrictContext } from '@/lib/get-strict-context';
import { useMotionValueState } from '@/hooks/use-motion-value-state';
var _a = getStrictContext('ScrollProgressContext'), LocalScrollProgressProvider = _a[0], useScrollProgress = _a[1];
function ScrollProgressProvider(_a) {
    var _b = _a.global, global = _b === void 0 ? false : _b, _c = _a.transition, transition = _c === void 0 ? { stiffness: 250, damping: 40, bounce: 0 } : _c, _d = _a.direction, direction = _d === void 0 ? 'vertical' : _d, props = __rest(_a, ["global", "transition", "direction"]);
    var containerRef = React.useRef(null);
    var _e = useScroll(global ? undefined : { container: containerRef }), scrollYProgress = _e.scrollYProgress, scrollXProgress = _e.scrollXProgress;
    var progress = direction === 'vertical' ? scrollYProgress : scrollXProgress;
    var scale = useSpring(progress, transition);
    return (_jsx(LocalScrollProgressProvider, __assign({ value: {
            containerRef: containerRef,
            progress: progress,
            scale: scale,
            direction: direction,
            global: global,
        } }, props)));
}
function ScrollProgress(_a) {
    var _b, _c;
    var style = _a.style, _d = _a.mode, mode = _d === void 0 ? 'width' : _d, _e = _a.asChild, asChild = _e === void 0 ? false : _e, props = __rest(_a, ["style", "mode", "asChild"]);
    var _f = useScrollProgress(), scale = _f.scale, direction = _f.direction, global = _f.global;
    var scaleValue = useMotionValueState(scale);
    var Component = asChild ? Slot : motion.div;
    return (_jsx(Component, __assign({ "data-slot": "scroll-progress", "data-direction": direction, "data-mode": mode, "data-global": global, style: __assign(__assign({}, (mode === 'width' || mode === 'height'
            ? (_b = {},
                _b[mode] = scaleValue * 100 + '%',
                _b) : (_c = {},
            _c[mode] = scale,
            _c))), style) }, props)));
}
function ScrollProgressContainer(_a) {
    var ref = _a.ref, _b = _a.asChild, asChild = _b === void 0 ? false : _b, props = __rest(_a, ["ref", "asChild"]);
    var _c = useScrollProgress(), containerRef = _c.containerRef, direction = _c.direction, global = _c.global;
    React.useImperativeHandle(ref, function () { return containerRef.current; });
    var Component = asChild ? Slot : motion.div;
    return (_jsx(Component, __assign({ ref: containerRef, "data-slot": "scroll-progress-container", "data-direction": direction, "data-global": global }, props)));
}
export { ScrollProgressProvider, ScrollProgress, ScrollProgressContainer, useScrollProgress, };
