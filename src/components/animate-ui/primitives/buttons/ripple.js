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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { motion } from 'motion/react';
import { getStrictContext } from '@/lib/get-strict-context';
import { Slot } from '@/components/animate-ui/primitives/animate/slot';
var _a = getStrictContext('RippleButtonContext'), RippleButtonProvider = _a[0], useRippleButton = _a[1];
function RippleButton(_a) {
    var ref = _a.ref, onClick = _a.onClick, _b = _a.hoverScale, hoverScale = _b === void 0 ? 1.05 : _b, _c = _a.tapScale, tapScale = _c === void 0 ? 0.95 : _c, _d = _a.asChild, asChild = _d === void 0 ? false : _d, style = _a.style, props = __rest(_a, ["ref", "onClick", "hoverScale", "tapScale", "asChild", "style"]);
    var _e = React.useState([]), ripples = _e[0], setRipples = _e[1];
    var buttonRef = React.useRef(null);
    React.useImperativeHandle(ref, function () { return buttonRef.current; });
    var createRipple = React.useCallback(function (event) {
        var button = buttonRef.current;
        if (!button)
            return;
        var rect = button.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        var newRipple = {
            id: Date.now(),
            x: x,
            y: y,
        };
        setRipples(function (prev) { return __spreadArray(__spreadArray([], prev, true), [newRipple], false); });
        setTimeout(function () {
            setRipples(function (prev) { return prev.filter(function (r) { return r.id !== newRipple.id; }); });
        }, 600);
    }, []);
    var handleClick = React.useCallback(function (event) {
        createRipple(event);
        if (onClick) {
            onClick(event);
        }
    }, [createRipple, onClick]);
    var Component = asChild ? Slot : motion.button;
    return (_jsx(RippleButtonProvider, { value: { ripples: ripples, setRipples: setRipples }, children: _jsx(Component, __assign({ ref: buttonRef, "data-slot": "ripple-button", onClick: handleClick, whileTap: { scale: tapScale }, whileHover: { scale: hoverScale }, style: __assign({ position: 'relative', overflow: 'hidden' }, style) }, props)) }));
}
function RippleButtonRipples(_a) {
    var _b = _a.color, color = _b === void 0 ? 'var(--ripple-button-ripple-color)' : _b, _c = _a.scale, scale = _c === void 0 ? 10 : _c, _d = _a.transition, transition = _d === void 0 ? { duration: 0.6, ease: 'easeOut' } : _d, _e = _a.asChild, asChild = _e === void 0 ? false : _e, style = _a.style, props = __rest(_a, ["color", "scale", "transition", "asChild", "style"]);
    var ripples = useRippleButton().ripples;
    var Component = asChild ? Slot : motion.span;
    return ripples.map(function (ripple) { return (_jsx(Component, __assign({ initial: { scale: 0, opacity: 0.5 }, animate: { scale: scale, opacity: 0 }, transition: transition, style: __assign({ position: 'absolute', borderRadius: '50%', pointerEvents: 'none', width: '20px', height: '20px', backgroundColor: color, top: ripple.y - 10, left: ripple.x - 10 }, style) }, props), ripple.id)); });
}
export { RippleButton, RippleButtonRipples, };
