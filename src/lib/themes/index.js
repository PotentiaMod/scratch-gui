import defaultsDeep from 'lodash.defaultsdeep';
import {defineMessages} from 'react-intl';

import * as accentPurple from './accent/purple';
import * as accentBlue from './accent/blue';
import * as accentRed from './accent/red';
import * as accentMagenta from './accent/magenta';
import * as accentOrange from './accent/orange';
import * as accentGreen from './accent/green';
import * as accentIndigo from './accent/indigo';
import * as accentCottonCandy from './accent/cottoncandy';
import * as accentRainbow from './accent/rainbow';

import * as guiLight from './gui/light';
import * as guiModernLight from './gui/modern-light';
import * as guiDark from './gui/dark';
import * as guiModernDark from './gui/modern-dark';
import * as guiMidnight from './gui/midnight';

import * as blocksThree from './blocks/three';
import * as blocksHighContrast from './blocks/high-contrast';
import * as blocksDark from './blocks/dark';

import rainbowIcon from './icons/tw-accent-rainbow.svg';

import lightModeIcon from './icons/tw-sun.svg';
import darkModeIcon from './icons/tw-moon.svg';
import midnightModeIcon from './icons/tw-midnight.svg';

import threeIcon from './icons/tw-blocks-three.svg';
import highContrastIcon from './icons/tw-blocks-high-contrast.svg';
import customIcon from './icons/tw-blocks-custom.svg';

const ACCENT_PURPLE = 'purple';
const ACCENT_BLUE = 'blue';
const ACCENT_RED = 'red';
const ACCENT_ORANGE = 'orange';
const ACCENT_MAGENTA = 'magenta';
const ACCENT_INDIGO = 'indigo';
const ACCENT_GREEN = 'green';
const ACCENT_RAINBOW = 'rainbow';
const ACCENT_COTTON_CANDY = 'cottoncandy';
const ACCENT_MAP = {
    [ACCENT_PURPLE]: accentPurple,
    [ACCENT_BLUE]: accentBlue,
    [ACCENT_RED]: accentRed,
    [ACCENT_ORANGE]: accentOrange,
    [ACCENT_MAGENTA]: accentMagenta,
    [ACCENT_INDIGO]: accentIndigo,
    [ACCENT_GREEN]: accentGreen,
    [ACCENT_RAINBOW]: accentRainbow,
    [ACCENT_COTTON_CANDY]: accentCottonCandy
};

const AccentOptions = defineMessages({
    [ACCENT_INDIGO]: {
        defaultMessage: 'Indigo',
        description: 'Name of the indigo color scheme, used by PotentiaMod by default.',
        id: 'tw.accent.indigo'
    },
    [ACCENT_MAGENTA]: {
        defaultMessage: 'Magenta',
        description: 'Name of the magenta color scheme.',
        id: 'tw.accent.magenta'
    },
    [ACCENT_ORANGE]: {
        defaultMessage: 'Orange',
        description: 'Name of the orange color scheme.',
        id: 'tw.accent.orange'
    },
	[ACCENT_GREEN]: {
        defaultMessage: 'Green',
        description: 'Name of the green color scheme',
        id: 'tw.accent.green'
    },
    [ACCENT_RED]: {
        defaultMessage: 'Red',
        description: 'Name of the red color scheme. Matches TurboWarp.',
        id: 'tw.accent.red'
    },
    [ACCENT_PURPLE]: {
        defaultMessage: 'Purple',
        description: 'Name of the purple color scheme. Matches modern Scratch.',
        id: 'tw.accent.purple'
    },
    [ACCENT_BLUE]: {
        defaultMessage: 'Blue',
        description: 'Name of the blue color scheme. Matches Scratch before the high contrast update.',
        id: 'tw.accent.blue'
    },
	[ACCENT_COTTON_CANDY]: {
        defaultMessage: 'Cotton Candy',
        description: 'Name of the pastel pink/blue color scheme.',
        id: 'tw.accent.cottoncandy'
    },
    [ACCENT_RAINBOW]: {
        defaultMessage: 'Rainbow',
        description: 'Name of color scheme that uses a rainbow.',
		icon: rainbowIcon,
        id: 'tw.accent.rainbow'
    }
});

const AccentIcons = {
    [ACCENT_RAINBOW]: rainbowIcon
};

const ACCENT_DEFAULT = ACCENT_INDIGO;

const GUI_LIGHT = 'light';
const GUI_MODERN_LIGHT = 'modern-light';
const GUI_DARK = 'dark';
const GUI_MODERN_DARK = 'modern-dark';
const GUI_MIDNIGHT = 'midnight';
const GUI_MAP = {
    [GUI_LIGHT]: guiLight,
    [GUI_MODERN_LIGHT]: guiModernLight,
    [GUI_DARK]: guiDark,
    [GUI_MODERN_DARK]: guiModernDark,
    [GUI_MIDNIGHT]: guiMidnight
};
const GuiOptions = defineMessages({
    [GUI_MODERN_LIGHT]: {
        defaultMessage: 'PotentiaMod - Light',
        description: 'Name of PotentiaMod\'s Light color scheme.',
		icon: lightModeIcon,
        id: 'tw.gui.light'
    },
    [GUI_LIGHT]: {
        defaultMessage: 'Light',
        description: 'Name of the light color scheme.',
		icon: lightModeIcon,
        id: 'tw.gui.classiclight'
    },
    [GUI_MODERN_DARK]: {
        defaultMessage: 'PotentiaMod - Dark',
        description: 'Name of PotentiaMod\'s Dark color scheme.',
		icon: darkModeIcon,
        id: 'tw.gui.dark'
    },
    [GUI_DARK]: {
        defaultMessage: 'Dark',
        description: 'Name of the dark color scheme.',
		icon: darkModeIcon,
        id: 'tw.gui.classicdark'
    },
    [GUI_MIDNIGHT]: {
        defaultMessage: 'Midnight',
        description: 'Name of the midnight color scheme.',
		icon: midnightModeIcon,
        id: 'tw.gui.midnight'
    }
});

const GuiIcons = {
    [GUI_LIGHT]: lightModeIcon,
	[GUI_MODERN_LIGHT]: lightModeIcon,
    [GUI_DARK]: darkModeIcon,
    [GUI_MODERN_DARK]: darkModeIcon,
    [GUI_MIDNIGHT]: midnightModeIcon
};

const GUI_DEFAULT = GUI_LIGHT;

const BLOCKS_THREE = 'three';
const BLOCKS_DARK = 'dark';
const BLOCKS_HIGH_CONTRAST = 'high-contrast';
const BLOCKS_CUSTOM = 'custom';
const BLOCKS_DEFAULT = BLOCKS_THREE;
const defaultBlockColors = blocksThree.blockColors;
const BLOCKS_MAP = {
    [BLOCKS_THREE]: {
        blocksMediaFolder: 'blocks-media/default',
        colors: blocksThree.blockColors,
        extensions: blocksThree.extensions,
        customExtensionColors: {},
        useForStage: true
    },
    [BLOCKS_HIGH_CONTRAST]: {
        blocksMediaFolder: 'blocks-media/high-contrast',
        colors: defaultsDeep({}, blocksHighContrast.blockColors, defaultBlockColors),
        extensions: blocksHighContrast.extensions,
        customExtensionColors: blocksHighContrast.customExtensionColors,
        useForStage: true
    },
    [BLOCKS_DARK]: {
        blocksMediaFolder: 'blocks-media/default',
        colors: defaultsDeep({}, blocksDark.blockColors, defaultBlockColors),
        extensions: blocksDark.extensions,
        customExtensionColors: blocksDark.customExtensionColors,
        useForStage: false
    },
    [BLOCKS_CUSTOM]: {
        // to be filled by editor-theme3 addon
        blocksMediaFolder: 'blocks-media/default',
        colors: blocksThree.blockColors,
        extensions: {},
        customExtensionColors: {},
        useForStage: false
    }
};

let themeObjectsCreated = 0;

class Theme {
    constructor (accent, gui, blocks) {
        // do not modify these directly
        /** @readonly */
        this.id = ++themeObjectsCreated;
        /** @readonly */
        this.accent = Object.prototype.hasOwnProperty.call(ACCENT_MAP, accent) ? accent : ACCENT_DEFAULT;
        /** @readonly */
        this.gui = Object.prototype.hasOwnProperty.call(GUI_MAP, gui) ? gui : GUI_DEFAULT;
        /** @readonly */
        this.blocks = Object.prototype.hasOwnProperty.call(BLOCKS_MAP, blocks) ? blocks : BLOCKS_DEFAULT;
    }

    static light = new Theme(ACCENT_DEFAULT, GUI_LIGHT, BLOCKS_DEFAULT);
    static dark = new Theme(ACCENT_DEFAULT, GUI_DARK, BLOCKS_DEFAULT);
    static highContrast = new Theme(ACCENT_DEFAULT, GUI_DEFAULT, BLOCKS_HIGH_CONTRAST);

    set (what, to) {
        if (what === 'accent') {
            return new Theme(to, this.gui, this.blocks);
        } else if (what === 'gui') {
            return new Theme(this.accent, to, this.blocks);
        } else if (what === 'blocks') {
            return new Theme(this.accent, this.gui, to);
        }
        throw new Error(`Unknown theme property: ${what}`);
    }

    getBlocksMediaFolder () {
        return BLOCKS_MAP[this.blocks].blocksMediaFolder;
    }

    getGuiColors () {
        return defaultsDeep(
            {},
            ACCENT_MAP[this.accent].guiColors,
            GUI_MAP[this.gui].guiColors,
            guiLight.guiColors
        );
    }

    getBlockColors () {
        return defaultsDeep(
            {},
            ACCENT_MAP[this.accent].blockColors,
            GUI_MAP[this.gui].blockColors,
            BLOCKS_MAP[this.blocks].colors
        );
    }

    getExtensions () {
        return BLOCKS_MAP[this.blocks].extensions;
    }

    isDark () {
        return this.getGuiColors()['color-scheme'] === 'dark';
    }

    getStageBlockColors () {
        if (BLOCKS_MAP[this.blocks].useForStage) {
            return this.getBlockColors();
        }
        return Theme.light.getBlockColors();
    }

    getCustomExtensionColors () {
        return BLOCKS_MAP[this.blocks].customExtensionColors;
    }
}

export {
    Theme,
    defaultBlockColors,

    ACCENT_RED,
    ACCENT_PURPLE,
    ACCENT_BLUE,
    ACCENT_ORANGE,
    ACCENT_MAGENTA,
    ACCENT_INDIGO,
    ACCENT_GREEN,
    ACCENT_RAINBOW,
    ACCENT_COTTON_CANDY,
    ACCENT_MAP,
	AccentIcons,
    AccentOptions,

    GUI_LIGHT,
    GUI_MODERN_LIGHT,
    GUI_DARK,
    GUI_MODERN_DARK,
    GUI_MIDNIGHT,
    GUI_MAP,
	GuiIcons,
    GuiOptions,

    BLOCKS_THREE,
    BLOCKS_DARK,
    BLOCKS_HIGH_CONTRAST,
    BLOCKS_CUSTOM,
    BLOCKS_MAP
};
