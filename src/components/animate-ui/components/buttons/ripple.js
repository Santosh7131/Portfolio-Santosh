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
import { buttonVariants } from '@/components/animate-ui/components/buttons/button';
import { RippleButton as RippleButtonPrimitive, RippleButtonRipples as RippleButtonRipplesPrimitive, } from '@/components/animate-ui/primitives/buttons/ripple';
import { cn } from '@/lib/utils';
var rippleButtonVariants = {
    default: 'bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 [--ripple-button-ripple-color:rgba(156,163,175,0.5)]',
    accent: '[--ripple-button-ripple-color:var(--accent-foreground)]',
    destructive: '[--ripple-button-ripple-color:var(--destructive-foreground)]',
    outline: '[--ripple-button-ripple-color:var(--foreground)]',
    secondary: '[--ripple-button-ripple-color:var(--secondary-foreground)]',
    ghost: '[--ripple-button-ripple-color:var(--foreground)]',
    link: '[--ripple-button-ripple-color:var(--primary-foreground)]',
};
function RippleButton(_a) {
    var className = _a.className, variant = _a.variant, size = _a.size, props = __rest(_a, ["className", "variant", "size"]);
    return (_jsx(RippleButtonPrimitive, __assign({ className: cn(buttonVariants({ variant: variant, size: size, className: className }), rippleButtonVariants[variant]) }, props)));
}
function RippleButtonRipples(props) {
    return _jsx(RippleButtonRipplesPrimitive, __assign({}, props));
}
export { RippleButton, RippleButtonRipples, };
