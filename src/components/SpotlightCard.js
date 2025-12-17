import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import './SpotlightCard.css';
var SpotlightCard = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.spotlightColor // Blue-400 with transparency to match portfolio theme
    , spotlightColor = _c === void 0 ? 'rgba(96, 165, 250, 0.15)' : _c // Blue-400 with transparency to match portfolio theme
    ;
    var divRef = useRef(null);
    var handleMouseMove = function (e) {
        if (!divRef.current)
            return;
        var rect = divRef.current.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        divRef.current.style.setProperty('--mouse-x', "".concat(x, "px"));
        divRef.current.style.setProperty('--mouse-y', "".concat(y, "px"));
        divRef.current.style.setProperty('--spotlight-color', spotlightColor);
    };
    return (_jsx("div", { ref: divRef, onMouseMove: handleMouseMove, className: "card-spotlight ".concat(className), children: children }));
};
export default SpotlightCard;
