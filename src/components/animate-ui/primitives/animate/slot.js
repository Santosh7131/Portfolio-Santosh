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
import { motion, isMotionComponent } from 'motion/react';
import { cn } from '@/lib/utils';
function mergeRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return function (node) {
        refs.forEach(function (ref) {
            if (!ref)
                return;
            if (typeof ref === 'function') {
                ref(node);
            }
            else {
                ref.current = node;
            }
        });
    };
}
function mergeProps(childProps, slotProps) {
    var merged = __assign(__assign({}, childProps), slotProps);
    if (childProps.className || slotProps.className) {
        merged.className = cn(childProps.className, slotProps.className);
    }
    if (childProps.style || slotProps.style) {
        merged.style = __assign(__assign({}, childProps.style), slotProps.style);
    }
    return merged;
}
function Slot(_a) {
    var children = _a.children, ref = _a.ref, props = __rest(_a, ["children", "ref"]);
    var isAlreadyMotion = typeof children.type === 'object' &&
        children.type !== null &&
        isMotionComponent(children.type);
    var Base = React.useMemo(function () {
        return isAlreadyMotion
            ? children.type
            : motion.create(children.type);
    }, [isAlreadyMotion, children.type]);
    if (!React.isValidElement(children))
        return null;
    var _b = children.props, childRef = _b.ref, childProps = __rest(_b, ["ref"]);
    var mergedProps = mergeProps(childProps, props);
    return (_jsx(Base, __assign({}, mergedProps, { ref: mergeRefs(childRef, ref) })));
}
export { Slot, };
