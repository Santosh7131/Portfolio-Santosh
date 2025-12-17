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
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, createContext, useContext } from "react";
import { cn } from "@/lib/utils";
var NavbarContext = createContext({
    isScrolled: false,
});
export var Navbar = function (_a) {
    var children = _a.children, className = _a.className;
    var _b = useState(false), isScrolled = _b[0], setIsScrolled = _b[1];
    useEffect(function () {
        var handleScroll = function () {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    return (_jsx(NavbarContext.Provider, { value: { isScrolled: isScrolled }, children: _jsx(motion.nav, { className: cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", className), initial: { y: -100 }, animate: { y: 0 }, transition: { duration: 0.3 }, children: children }) }));
};
export var NavBody = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.visible, visible = _b === void 0 ? true : _b;
    var isScrolled = useContext(NavbarContext).isScrolled;
    return (_jsx(motion.div, { className: cn("hidden md:flex items-center justify-between w-full px-6 py-3 mx-auto transition-all duration-300", isScrolled
            ? "bg-black/30 backdrop-blur-md border-b border-white/10 shadow-xl"
            : "bg-transparent", className), animate: {
            opacity: visible ? 1 : 0,
            y: visible ? 0 : -20,
        }, transition: { duration: 0.3 }, children: children }));
};
export var NavItems = function (_a) {
    var items = _a.items, className = _a.className, onItemClick = _a.onItemClick, activeItem = _a.activeItem;
    return (_jsx("div", { className: cn("flex items-center space-x-1", className), children: items.map(function (item, idx) { return (_jsxs(motion.button, { onClick: function () { return onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item.id || item.link); }, className: cn("cursor-target relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300", activeItem === (item.id || item.link)
                ? "text-white"
                : "text-gray-300 hover:text-white"), whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [activeItem === (item.id || item.link) && (_jsx(motion.div, { className: "absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20", layoutId: "activeTab", transition: { type: "spring", bounce: 0.2, duration: 0.6 } })), _jsx("span", { className: "relative z-10", children: item.name })] }, "nav-item-".concat(idx))); }) }));
};
export var MobileNav = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.visible, visible = _b === void 0 ? true : _b;
    var isScrolled = useContext(NavbarContext).isScrolled;
    return (_jsx(motion.div, { className: cn("md:hidden w-full transition-all duration-300", isScrolled
            ? "bg-black/30 backdrop-blur-md border-b border-white/10 shadow-xl"
            : "bg-transparent", className), animate: {
            opacity: visible ? 1 : 0,
            y: visible ? 0 : -20,
        }, transition: { duration: 0.3 }, children: children }));
};
export var MobileNavHeader = function (_a) {
    var children = _a.children, className = _a.className;
    return (_jsx("div", { className: cn("flex items-center justify-between px-4 py-3", className), children: children }));
};
export var MobileNavToggle = function (_a) {
    var isOpen = _a.isOpen, onClick = _a.onClick;
    return (_jsx("button", { onClick: onClick, className: "cursor-target p-2 rounded-lg hover:bg-white/10 transition-colors", "aria-label": "Toggle menu", children: _jsxs(motion.div, { animate: isOpen ? "open" : "closed", className: "w-6 h-5 flex flex-col justify-between", children: [_jsx(motion.span, { variants: {
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: 45, y: 8 },
                    }, className: "w-full h-0.5 bg-white block" }), _jsx(motion.span, { variants: {
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }, className: "w-full h-0.5 bg-white block" }), _jsx(motion.span, { variants: {
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: -45, y: -8 },
                    }, className: "w-full h-0.5 bg-white block" })] }) }));
};
export var MobileNavMenu = function (_a) {
    var children = _a.children, className = _a.className, isOpen = _a.isOpen, onClose = _a.onClose;
    return (_jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.3 }, className: cn("overflow-hidden bg-black/40 backdrop-blur-lg", className), children: _jsx("div", { className: "px-4 py-6 space-y-4", children: children }) })) }));
};
export var NavbarLogo = function (_a) {
    var className = _a.className;
    return (_jsxs(motion.div, { className: cn("cursor-target flex items-center space-x-2 cursor-pointer", className), whileHover: { scale: 1.05 }, children: [_jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md", children: _jsx("span", { className: "text-white font-bold text-sm", children: "SK" }) }), _jsx("span", { className: "text-white font-semibold text-md tracking-wide hidden md:block", children: "Santosh Kumaar" })] }));
};
export var NavbarButton = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, onClick = _a.onClick, props = __rest(_a, ["children", "className", "variant", "onClick"]);
    var variantStyles = {
        primary: "bg-blue-500 hover:bg-blue-600 text-white",
        secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/20",
        dark: "bg-black hover:bg-gray-900 text-white",
        gradient: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white",
    };
    return (_jsx(motion.button, __assign({ onClick: onClick, className: cn("cursor-target px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300", variantStyles[variant], className), whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } }, props, { children: children })));
};
