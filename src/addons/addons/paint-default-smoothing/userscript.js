export default async function ({ addon }) {
    // Wait until the paint editor is loaded
    await addon.tab.traps.getPaper();
    
    const defaultBrush = 10;
    const defaultEraser = 10;
    const defaultPen = 2;
    const setDefaults = (enabled) => {
        const userBrush = addon.settings.get("brush");
        const userEraser = addon.settings.get("eraser");
        const userPen = addon.settings.get("pen");

        const currentState = ReduxStore.getState();
        const currentStatePaint = currentState.scratchPaint;
        if (enabled) {
            if (currentStatePaint.brushMode.simplifySize === defaultBrush) {
                ReduxStore.dispatch({
                    type: 'scratch-paint/brush-mode/CHANGE_SIMPLIFY_SIZE',
                    simplifySize: userBrush
                });
            }
            if (currentStatePaint.eraserMode.simplifySize === defaultEraser) {
                ReduxStore.dispatch({
                    type: 'scratch-paint/eraser-mode/CHANGE_ERASER_SIMPLIFY_SIZE',
                    simplifySize: userEraser
                });
            }
            if (currentStatePaint.penMode.simplifySize === defaultPen) {
                ReduxStore.dispatch({
                    type: 'scratch-paint/pen-mode/CHANGE_PEN_SIMPLIFY_SIZE',
                    simplifySize: userPen
                });
            }
        } else {
            if (currentStatePaint.brushMode.simplifySize === userBrush) {
                ReduxStore.dispatch({
                    type: 'scratch-paint/brush-mode/CHANGE_SIMPLIFY_SIZE',
                    simplifySize: defaultBrush
                });
            }
            if (currentStatePaint.eraserMode.simplifySize === userEraser) {
                ReduxStore.dispatch({
                    type: 'scratch-paint/eraser-mode/CHANGE_ERASER_SIMPLIFY_SIZE',
                    simplifySize: defaultEraser
                });
            }
            if (currentStatePaint.penMode.simplifySize === userPen) {
                ReduxStore.dispatch({
                    type: 'scratch-paint/pen-mode/CHANGE_PEN_SIMPLIFY_SIZE',
                    simplifySize: defaultPen
                });
            }
        }
    };

    setDefaults(true);
    addon.self.addEventListener("disabled", () => {
        setDefaults(false);
    });
    addon.self.addEventListener("reenabled", () => {
        setDefaults(true);
    });
}
