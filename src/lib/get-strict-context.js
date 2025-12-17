import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
function getStrictContext(name) {
    var Context = React.createContext(undefined);
    var Provider = function (_a) {
        var value = _a.value, children = _a.children;
        return _jsx(Context.Provider, { value: value, children: children });
    };
    var useSafeContext = function () {
        var ctx = React.useContext(Context);
        if (ctx === undefined) {
            throw new Error("useContext must be used within ".concat(name !== null && name !== void 0 ? name : 'a Provider'));
        }
        return ctx;
    };
    return [Provider, useSafeContext];
}
export { getStrictContext };
