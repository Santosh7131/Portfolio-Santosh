var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { StarsBackground } from './components/animate-ui/components/backgrounds/stars';
import { PortfolioNavbar } from './components/PortfolioNavbar';
import { PageTransition } from './components/PageTransition';
import { Loader } from './components/Loader';
import TargetCursor from './components/TargetCursor';
import { HomePage, setPageChangeHandler } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
var pages = {
    home: HomePage,
    about: AboutPage,
    skills: SkillsPage,
    projects: ProjectsPage
};
function App() {
    var _this = this;
    var _a = useState(true), isLoading = _a[0], setIsLoading = _a[1];
    var _b = useState('home'), currentPage = _b[0], setCurrentPage = _b[1];
    var _c = useState(false), isTransitioning = _c[0], setIsTransitioning = _c[1];
    var _d = useState('home'), targetPage = _d[0], setTargetPage = _d[1];
    var handlePageChange = useCallback(function (page) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (page === currentPage || isTransitioning)
                        return [2 /*return*/];
                    setTargetPage(page);
                    setIsTransitioning(true);
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 600); })];
                case 1:
                    _a.sent();
                    setCurrentPage(page);
                    window.scrollTo(0, 0);
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 200); })];
                case 2:
                    _a.sent();
                    setIsTransitioning(false);
                    return [2 /*return*/];
            }
        });
    }); }, [currentPage, isTransitioning]);
    var CurrentPageComponent = pages[currentPage];
    useEffect(function () {
        setPageChangeHandler(handlePageChange);
    }, [handlePageChange]);
    var handleLoadingComplete = useCallback(function () {
        setIsLoading(false);
    }, []);
    return (_jsxs("div", { className: "relative bg-black text-white overflow-hidden min-h-screen", children: [_jsx(TargetCursor, { spinDuration: 2, hideDefaultCursor: true, parallaxOn: true }), _jsxs("div", { className: "fixed inset-0 z-0", children: [_jsx(StarsBackground, {}), _jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" })] }), _jsx(AnimatePresence, { children: isLoading && _jsx(Loader, { onLoadingComplete: handleLoadingComplete }) }), _jsx(PageTransition, { isTransitioning: isTransitioning, targetPage: targetPage }), _jsx(PortfolioNavbar, { currentPage: currentPage, onPageChange: handlePageChange, isTransitioning: isTransitioning }), _jsx("div", { className: "relative z-10", children: _jsx(CurrentPageComponent, {}, currentPage) })] }));
}
export default App;
