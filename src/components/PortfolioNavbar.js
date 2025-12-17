import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu, } from "@/components/ui/resizable-navbar";
import { useState } from "react";
var navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' }
];
export var PortfolioNavbar = function (_a) {
    var currentPage = _a.currentPage, onPageChange = _a.onPageChange, _b = _a.isTransitioning, isTransitioning = _b === void 0 ? false : _b;
    var _c = useState(false), isMobileMenuOpen = _c[0], setIsMobileMenuOpen = _c[1];
    var handleNavClick = function (pageId) {
        if (!isTransitioning && pageId) {
            onPageChange(pageId);
            setIsMobileMenuOpen(false);
        }
    };
    return (_jsxs(Navbar, { children: [_jsxs(NavBody, { visible: !isTransitioning, children: [_jsx(NavbarLogo, {}), _jsx(NavItems, { items: navItems.map(function (item) { return ({
                            name: item.name,
                            link: item.id,
                            id: item.id
                        }); }), onItemClick: handleNavClick, activeItem: currentPage }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(NavbarButton, { children: "GitHub" }), _jsx(NavbarButton, { variant: "primary", onClick: function () { return window.open('https://linkedin.com/in/your-profile', '_blank'); }, children: "LinkedIn" })] })] }), _jsxs(MobileNav, { visible: !isTransitioning, children: [_jsxs(MobileNavHeader, { children: [_jsx(NavbarLogo, {}), _jsx(MobileNavToggle, { isOpen: isMobileMenuOpen, onClick: function () { return setIsMobileMenuOpen(!isMobileMenuOpen); } })] }), _jsxs(MobileNavMenu, { isOpen: isMobileMenuOpen, onClose: function () { return setIsMobileMenuOpen(false); }, children: [navItems.map(function (item, idx) { return (_jsx("button", { onClick: function () { return handleNavClick(item.id); }, className: "cursor-target relative text-left w-full py-2 px-4 rounded-lg transition-colors ".concat(currentPage === item.id
                                    ? 'text-white bg-white/10'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'), children: _jsx("span", { className: "block", children: item.name }) }, "mobile-link-".concat(idx))); }), _jsxs("div", { className: "flex w-full flex-col gap-4 pt-4", children: [_jsx(NavbarButton, { onClick: function () {
                                            setIsMobileMenuOpen(false);
                                            window.open('https://github.com/Santosh7131', '_blank');
                                        }, variant: "secondary", className: "w-full", children: "GitHub" }), _jsx(NavbarButton, { onClick: function () {
                                            setIsMobileMenuOpen(false);
                                            window.open('https://linkedin.com/in/your-profile', '_blank');
                                        }, variant: "primary", className: "w-full", children: "LinkedIn" })] })] })] })] }));
};
