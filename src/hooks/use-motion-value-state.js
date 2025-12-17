import * as React from 'react';
function useMotionValueState(motionValue) {
    return React.useSyncExternalStore(function (callback) {
        var unsub = motionValue.on('change', callback);
        return unsub;
    }, function () { return motionValue.get(); }, function () { return motionValue.get(); });
}
export { useMotionValueState };
