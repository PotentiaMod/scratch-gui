//From CattyMod!
export const GO_ICON_KEY = 'potentiamod:goIcon';

export const GO_ICON_PLAY = 'play';
export const GO_ICON_FLAG = 'flag';
export const GO_ICON_ARROW = 'arrow';
import TWRenderRecoloredImage from './tw-recolor/render.jsx';
import POTPLAY from '!./tw-recolor/build!./go-icon/play-icon.svg';
import POTBLOCKS from '!./tw-recolor/build!./go-icon/flag-icon.svg';
import POTFLAG from '!./tw-recolor/build!./go-icon/flag-icon.svg';
import POTARROW from '!./tw-recolor/build!./go-icon/arrow-icon.svg';

const POTENTIA_PLAY =
    'https://potentiamod.github.io/img/go-icon/play-icon.svg';

const FLAG_BLOCKS =
    'https://potentiamod.github.io/img/go-icon/flag-icon.svg';

const FLAG =
    'https://potentiamod.github.io/img/go-icon/flag-icon.svg';
	
const ARROW =
    'https://potentiamod.github.io/img/go-icon/arrow-icon.svg';

const isFileProtocol = () =>
    typeof window !== 'undefined' &&
    window.location.protocol === 'file:';

export const getGoIcon = () => {
    if (isFileProtocol()) {
        return GO_ICON_PLAY;
    }

    try {
        const value = window.localStorage.getItem(GO_ICON_KEY);

        if (
            value === GO_ICON_PLAY ||
            value === GO_ICON_FLAG ||
            value === GO_ICON_ARROW
        ) {
            return value;
        }
    } catch (e) {
        // Ignore localStorage errors.
    }

    return GO_ICON_PLAY;
};

export const setGoIcon = mode => {
    if (isFileProtocol()) {
        return;
    }

    if (
        mode !== GO_ICON_PLAY &&
        mode !== GO_ICON_FLAG &&
        mode !== GO_ICON_ARROW
    ) {
        return;
    }

    try {
        window.localStorage.setItem(GO_ICON_KEY, mode);
    } catch (e) {
        // Ignore localStorage errors.
    }
};

export const getGoIconImage = mode => {
    switch (mode) {
    case GO_ICON_FLAG:
        return FLAG;

    case GO_ICON_ARROW:
        return ARROW;

    case GO_ICON_PLAY:
    default:
        return POTENTIA_PLAY;
    }
};

export const getGoIconSvg = mode => {
    switch (mode) {
    case GO_ICON_FLAG:
        return FLAG_BLOCKS;

    case GO_ICON_ARROW:
        return ARROW;

    case GO_ICON_PLAY:
    default:
        return POTENTIA_PLAY;
    }
};

export const replaceGreenFlags = mode => {
    if (
        typeof document === 'undefined' ||
        typeof navigator === 'undefined' ||
        navigator.onLine === false ||
        isFileProtocol()
    ) {
        return;
    }

    /*
     * Normal <img> elements use getGoIconImage().
     *
     * Blockly block <image> elements use getGoIconSvg().
     *
     * This keeps FLAG_BLOCKS exclusively for blocks.
     */
    const normalIcon = getGoIconImage(mode);
    const blockIcon = getGoIconSvg(mode);

    try {
        /*
         * Replace normal <img> green flags.
         */
        document.querySelectorAll('TWRenderRecoloredImage').forEach(e => {
            try {
                const className =
                    typeof e.className === 'string' ?
                        e.className :
                        '';

                const isGreenFlag =
                    className.includes('green-flag') ||
                    Boolean(
                        e.closest(
                            '.stage_green-flag-overlay_gNXnv'
                        )
                    );

                if (isGreenFlag) {
                    e.src = normalIcon;
                }
            } catch (err) {
                // Ignore individual elements.
            }
        });

        /*
         * Replace the flag inside "when green flag clicked"
         * Blockly blocks.
         *
         * The workspace block does not have a reliable
         * event_whenflagclicked data-id, so detect it by
         * finding a green-flag.svg or blue-flag.svg image
         * inside a .blocklyDraggable block.
         */
        document.querySelectorAll(
            '.blocklyDraggable image'
        ).forEach(e => {
            try {
                const block = e.closest(
                    '.blocklyDraggable'
                );

                if (!block) {
                    return;
                }

                const href =
                    e.getAttribute('href') || '';

                const xlinkHref =
                    e.getAttribute('xlink:href') || '';

                const namespacedXlinkHref =
                    e.getAttributeNS(
                        'http://www.w3.org/1999/xlink',
                        'href'
                    ) || '';

                const isFlag =
                    href.includes('green-flag.svg') ||
                    href.includes('flag-icon.svg') ||
                    href.includes('flag-icon.svg') ||
                    xlinkHref.includes('green-flag.svg') ||
                    xlinkHref.includes('flag-icon.svg') ||
                    xlinkHref.includes('flag-icon.svg') ||
                    namespacedXlinkHref.includes(
                        'green-flag.svg'
                    ) ||
                    namespacedXlinkHref.includes(
                        'arrow-icon.svg'
                    );

                if (!isFlag) {
                    return;
                }

                /*
                 * BLOCKS ONLY use blockIcon.
                 *
                 * greenflag:
                 *     FLAG_BLOCKS
                 */
                e.setAttribute(
                    'href',
                    blockIcon
                );

                e.setAttribute(
                    'xlink:href',
                    blockIcon
                );

                e.setAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    'href',
                    blockIcon
                );
            } catch (err) {
                // Ignore individual elements.
            }
        });
    } catch (e) {
        // Keep Go Icon from breaking the GUI.
    }
};

export const stopGoIconObserver = () => {
    if (isFileProtocol()) {
        return;
    }

    if (
        typeof window === 'undefined' ||
        !window._potentiamod_goIcon_observer
    ) {
        return;
    }

    try {
        window._potentiamod_goIcon_observer.disconnect();
    } catch (e) {
        // Ignore observer errors.
    }

    window._potentiamod_goIcon_observer = null;
};

export const startGoIconObserver = () => {
    if (
        typeof document === 'undefined' ||
        typeof window === 'undefined' ||
        typeof navigator === 'undefined' ||
        navigator.onLine === false ||
        isFileProtocol()
    ) {
        return;
    }

    stopGoIconObserver();

    const mode = getGoIcon();

    replaceGreenFlags(mode);

    if (typeof MutationObserver === 'undefined') {
        return;
    }

    const observer = new MutationObserver(() => {
        if (
            navigator.onLine === false ||
            isFileProtocol()
        ) {
            try {
                observer.disconnect();
            } catch (e) {
                // Ignore observer errors.
            }

            if (
                typeof window !== 'undefined' &&
                window._potentiamod_goIcon_observer === observer
            ) {
                window._potentiamod_goIcon_observer = null;
            }

            return;
        }

        replaceGreenFlags(mode);
    });

    window._potentiamod_goIcon_observer = observer;

    try {
        observer.observe(
            document.body || document.documentElement,
            {
                childList: true,
                subtree: true
            }
        );
    } catch (e) {
        window._potentiamod_goIcon_observer = null;
    }
};

export const applyGoIcon = mode => {
    if (isFileProtocol()) {
        return;
    }

    if (
        mode !== GO_ICON_PLAY &&
        mode !== GO_ICON_FLAG &&
        mode !== GO_ICON_ARROW
    ) {
        return;
    }

    setGoIcon(mode);

    if (
        typeof navigator !== 'undefined' &&
        navigator.onLine === false
    ) {
        stopGoIconObserver();
        return;
    }

    startGoIconObserver();
};

export const handleGoIconFullscreenChange = () => {
    if (isFileProtocol()) {
        return;
    }

    if (
        typeof navigator !== 'undefined' &&
        navigator.onLine === false
    ) {
        return;
    }

    const mode = getGoIcon();

    replaceGreenFlags(mode);

    setTimeout(() => {
        if (!isFileProtocol()) {
            replaceGreenFlags(mode);
        }
    }, 0);

    setTimeout(() => {
        if (!isFileProtocol()) {
            replaceGreenFlags(mode);
        }
    }, 100);

    setTimeout(() => {
        if (!isFileProtocol()) {
            replaceGreenFlags(mode);
        }
    }, 500);
};

export const initializeGoIcon = () => {
    if (
        typeof window === 'undefined' ||
        typeof document === 'undefined' ||
        isFileProtocol()
    ) {
        return () => {};
    }

    const initialize = () => {
        if (isFileProtocol()) {
            return;
        }

        startGoIconObserver();
    };

    if (document.readyState === 'loading') {
        document.addEventListener(
            'DOMContentLoaded',
            initialize,
            {once: true}
        );
    } else {
        initialize();
    }

    const fullscreenHandler =
        handleGoIconFullscreenChange;

    document.addEventListener(
        'fullscreenchange',
        fullscreenHandler
    );

    return () => {
        document.removeEventListener(
            'fullscreenchange',
            fullscreenHandler
        );

        stopGoIconObserver();
    };
};
