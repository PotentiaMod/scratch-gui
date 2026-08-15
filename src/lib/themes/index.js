import defaultsDeep from 'lodash.defaultsdeep';
import {defineMessages} from 'react-intl';

import * as accentPurple from './accent/purple';
import * as accentBlue from './accent/blue';
import * as accentRed from './accent/red';
import * as accentCyan from './accent/cyan';
import * as accentLime from './accent/lime';
import * as accentMagenta from './accent/magenta';
import * as accentOrange from './accent/orange';
import * as accentGreen from './accent/green';
import * as accentIndigo from './accent/indigo';
import * as accentIndigoBlue from './accent/indigo-blue';
import * as accentCorruptedBlue from './accent/corrupted-blue';
import * as accentGaiaBlue from './accent/gaia-blue';
import * as accentFuchsia from './accent/magenta-purple';
import * as accentCottonCandy from './accent/cottoncandy';
import * as accentRainbow from './accent/rainbow';
import * as accentStars from './accent/stars';
import * as accentCustom from './accent/custom';

import * as guiLight from './gui/light';
import * as guiModernLight from './gui/modern-light';
import * as guiLighterColor from './gui/lighter-colored';
import * as guiDark from './gui/dark';
import * as guiModernDark from './gui/modern-dark';
import * as guiMidnight from './gui/midnight';
import * as guiDeepDark from './gui/deep-dark';
import * as guiDarkerColor from './gui/darker-colored';

import * as blocksThree from './blocks/three';
import * as blocksHighContrast from './blocks/high-contrast';
import * as blocksDark from './blocks/dark';
import * as blocksColorful from './blocks/colorful';

import rainbowIcon from './icons/tw-accent-rainbow.svg';
import starsIcon from './icons/tw-accent-stars.svg';

import lightModeIcon from './icons/tw-sun.svg';
import darkModeIcon from './icons/tw-moon.svg';
import midnightModeIcon from './icons/tw-midnight.svg';
import paletteIcon from './icons/tw-palette.svg';

import threeIcon from './icons/tw-blocks-three.svg';
import highContrastIcon from './icons/tw-blocks-high-contrast.svg';
import darkIcon from './icons/tw-blocks-dark.svg';
import colorfulIcon from './icons/tw-blocks-colorful.svg';
import customIcon from './icons/tw-blocks-custom.svg';

const ACCENT_PURPLE = 'purple';
const ACCENT_BLUE = 'blue';
const ACCENT_RED = 'red';
const ACCENT_CYAN = 'cyan';
const ACCENT_LIME = 'lime';
const ACCENT_ORANGE = 'orange';
const ACCENT_MAGENTA = 'magenta';
const ACCENT_FUCHSIA = 'fuchsia';
const ACCENT_INDIGO = 'indigo';
const ACCENT_INDIGO_BLUE = 'indigoblue';
const ACCENT_CORRUPTED_BLUE = 'corruptedblue';
const ACCENT_GAIA_BLUE = 'gaiablue';
const ACCENT_GREEN = 'green';
const ACCENT_RAINBOW = 'rainbow';
const ACCENT_COTTON_CANDY = 'cottoncandy';
const ACCENT_STARS = 'stars'; //unique
const ACCENT_CUSTOM = 'custom';
const ACCENT_MAP = {
    [ACCENT_PURPLE]: accentPurple,
    [ACCENT_BLUE]: accentBlue,
    [ACCENT_RED]: accentRed,
    [ACCENT_CYAN]: accentCyan,
    [ACCENT_LIME]: accentLime,
    [ACCENT_ORANGE]: accentOrange,
    [ACCENT_MAGENTA]: accentMagenta,
    [ACCENT_FUCHSIA]: accentFuchsia,
    [ACCENT_INDIGO]: accentIndigo,
    [ACCENT_INDIGO_BLUE]: accentIndigoBlue,
    [ACCENT_CORRUPTED_BLUE]: accentCorruptedBlue,
    [ACCENT_GAIA_BLUE]: accentGaiaBlue,
    [ACCENT_GREEN]: accentGreen,
    [ACCENT_RAINBOW]: accentRainbow,
    [ACCENT_STARS]: accentStars,
    [ACCENT_CUSTOM]: accentCustom,
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
	[ACCENT_CYAN]: {
        defaultMessage: 'Cyan',
        description: 'Name of the cyan blue color scheme. Matches PenguinMod.',
        id: 'tw.accent.cyan'
    },
	[ACCENT_LIME]: {
        defaultMessage: 'Lime',
        description: 'Name of the lime green color scheme. Matches DinosaurMod.',
        id: 'tw.accent.lime'
    },
	[ACCENT_FUCHSIA]: {
        defaultMessage: 'Fuchsia',
        description: 'Name of the fuchsia color scheme. Matches Snail IDE.',
        id: 'tw.accent.fuchsia'
    },
	[ACCENT_INDIGO_BLUE]: {
        defaultMessage: 'Serene Blue',
        description: 'Name of the indigoish-blue color scheme. Matches Ark IDE.',
        id: 'tw.accent.indigoblue'
    },
	[ACCENT_CORRUPTED_BLUE]: {
        defaultMessage: 'Corrupted Blue',
        description: 'Name of the greyish-blue color scheme. Matches ElectraMod.',
        id: 'tw.accent.corruptedblue'
    },
	[ACCENT_GAIA_BLUE]: {
        defaultMessage: 'Gaia Blue',
        description: 'Name of the pure blue color scheme. Matches GaiaMod.',
        id: 'tw.accent.gaiablue'
    },
	[ACCENT_COTTON_CANDY]: {
        defaultMessage: 'Cotton Candy',
        description: 'Name of the pastel pink/blue color scheme.',
        id: 'tw.accent.cottoncandy'
    },
	[ACCENT_STARS]: {
        defaultMessage: 'Stars',
        description: 'Name of special color scheme.',
        id: 'tw.accent.stars'
    },
    [ACCENT_RAINBOW]: {
        defaultMessage: 'Rainbow',
        description: 'Name of color scheme that uses a rainbow.',
        id: 'tw.accent.rainbow'
    }
});

const AccentIcons = {
    //[ACCENT_RAINBOW]: rainbowIcon,
    //[ACCENT_STARS]: starsIcon
};

const ACCENT_DEFAULT = ACCENT_INDIGO;

const GUI_LIGHT = 'light';
const GUI_MODERN_LIGHT = 'modern-light';
const GUI_LIGHTER_COLORED = 'lighter-colored';
const GUI_DARK = 'dark';
const GUI_MODERN_DARK = 'modern-dark';
const GUI_MIDNIGHT = 'midnight';
const GUI_DEEP_DARK = 'deep-dark';
const GUI_DARKER_COLORED = 'darker-colored';
const GUI_MAP = {
    [GUI_LIGHT]: guiLight,
    [GUI_MODERN_LIGHT]: guiModernLight,
    [GUI_LIGHTER_COLORED]: guiLighterColor,
    [GUI_DARK]: guiDark,
    [GUI_MODERN_DARK]: guiModernDark,
    [GUI_MIDNIGHT]: guiMidnight,
    [GUI_DEEP_DARK]: guiDeepDark,
    [GUI_DARKER_COLORED]: guiDarkerColor
};
const GuiOptions = defineMessages({
    [GUI_MODERN_LIGHT]: {
        defaultMessage: 'PotentiaMod - Light',
        description: 'Name of PotentiaMod\'s Light color scheme.',
        id: 'tw.gui.light'
    },
    [GUI_LIGHT]: {
        defaultMessage: 'Light',
        description: 'Name of the light color scheme.',
        id: 'tw.gui.classiclight'
    },
	[GUI_LIGHTER_COLORED]: {
        defaultMessage: 'Lighter (Colored)',
        description: 'Name of the lighter color scheme.',
        id: 'tw.gui.lightercolored'
    },
    [GUI_MODERN_DARK]: {
        defaultMessage: 'PotentiaMod - Dark',
        description: 'Name of PotentiaMod\'s Dark color scheme.',
        id: 'tw.gui.dark'
    },
    [GUI_DARK]: {
        defaultMessage: 'Dark',
        description: 'Name of the dark color scheme.',
        id: 'tw.gui.classicdark'
    },
    [GUI_DEEP_DARK]: {
        defaultMessage: 'Deep Dark',
        description: 'Name of the deep dark color scheme.',
        id: 'tw.gui.deepdark'
    },
	[GUI_DARKER_COLORED]: {
        defaultMessage: 'Darker (Colored)',
        description: 'Name of the darker color scheme.',
        id: 'tw.gui.darkercolored'
    },
	[GUI_MIDNIGHT]: {
        defaultMessage: 'Amoled',
        description: 'Name of the amoled color scheme.',
        id: 'tw.gui.midnight'
    }
});

const GuiIcons = {
    [GUI_LIGHT]: lightModeIcon,
	[GUI_MODERN_LIGHT]: paletteIcon,
	[GUI_LIGHTER_COLORED]: paletteIcon,
    [GUI_DARK]: darkModeIcon,
    [GUI_MODERN_DARK]: paletteIcon,
    [GUI_DEEP_DARK]: paletteIcon,
    [GUI_DARKER_COLORED]: paletteIcon,
    [GUI_MIDNIGHT]: paletteIcon
};

const GUI_DEFAULT = GUI_LIGHT;

const BLOCKS_THREE = 'three';
const BLOCKS_DARK = 'dark';
const BLOCKS_HIGH_CONTRAST = 'high-contrast';
const BLOCKS_COLORFUL = 'colorful';
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
	[BLOCKS_COLORFUL]: {
        blocksMediaFolder: 'blocks-media/default',
        colors: defaultsDeep({}, blocksColorful.blockColors, defaultBlockColors),
        extensions: blocksColorful.extensions,
        customExtensionColors: blocksColorful.customExtensionColors,
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

const BlockIcons = {
    [BLOCKS_THREE]: threeIcon,
    [BLOCKS_HIGH_CONTRAST]: highContrastIcon,
    [BLOCKS_DARK]: darkIcon,
    [BLOCKS_COLORFUL]: colorfulIcon,
    [BLOCKS_CUSTOM]: customIcon
};

const BlockOptions = defineMessages({
    [BLOCKS_THREE]: {
        defaultMessage: 'Original',
        description: 'Name of normal Scratch block colors.',
        id: 'tw.blockColors.three'
    },
    [BLOCKS_HIGH_CONTRAST]: {
        defaultMessage: 'High Contrast',
        description: 'Name of the high contrast block colors.',
        id: 'tw.blockColors.highContrast'
    },
    [BLOCKS_DARK]: {
        defaultMessage: 'Dark',
        description: 'Name of the dark block colors',
        id: 'tw.blockColors.dark'
    },
	[BLOCKS_COLORFUL]: {
        defaultMessage: 'Colorful (Beta)',
        description: 'Name of the colorful block colors',
        id: 'tw.blockColors.colorful'
    },
    [BLOCKS_CUSTOM]: {
        defaultMessage: 'Customize in Addon Settings',
        description: 'Link in block color list to open addon settings for more customization',
        id: 'tw.blockColors.custom'
    }
});

let themeObjectsCreated = 0;

class Theme {
    constructor (accent, gui, blocks, wallpaper, font) {
        // do not modify these directly
        /** @readonly */
        this.id = ++themeObjectsCreated;
        /** @readonly */
        this.accent = Object.prototype.hasOwnProperty.call(ACCENT_MAP, accent) ? accent : ACCENT_DEFAULT;
        /** @readonly */
        this.gui = Object.prototype.hasOwnProperty.call(GUI_MAP, gui) ? gui : GUI_DEFAULT;
        /** @readonly */
        this.blocks = Object.prototype.hasOwnProperty.call(BLOCKS_MAP, blocks) ? blocks : BLOCKS_DEFAULT;
		/** @readonly */
        this.wallpaper = wallpaper || {url: null, opaque: 0.6};
        /** @readonly */
        this.font = font || {font: null}
    }

    static light = new Theme(ACCENT_DEFAULT, GUI_LIGHT, BLOCKS_DEFAULT, null, null);
    static dark = new Theme(ACCENT_DEFAULT, GUI_DARK, BLOCKS_DEFAULT, null, null);
    static highContrast = new Theme(ACCENT_DEFAULT, GUI_DEFAULT, BLOCKS_HIGH_CONTRAST, null, null);

    set (what, to) {
        if (what === 'accent') {
            return new Theme(to, this.gui, this.blocks, this.wallpaper, this.font);
        } else if (what === 'gui') {
            return new Theme(this.accent, to, this.blocks, this.wallpaper, this.font);
        } else if (what === 'blocks') {
            return new Theme(this.accent, this.gui, to, this.wallpaper, this.font);
        } else if (what === 'wallpaper') {
            return new Theme(this.accent, this.gui, this.blocks, to, this.font);
        } else if (what === 'font') {
            return new Theme(this.accent, this.gui, this.blocks, this.wallpaper, to);
        }
        throw new Error(`Unknown theme property: ${what}`);
    }

    getBlocksMediaFolder () {
        return BLOCKS_MAP[this.blocks].blocksMediaFolder;
    }

     getGuiColors () {
        return defaultsDeep(
            {},
            Object.hasOwn(this.accent, 'primaryColor') ?
                ACCENT_MAP[ACCENT_CUSTOM].getGuiColors(
                    this.accent.primaryColor,
                    this.accent.secondaryColor,
                    this.accent.tertiaryColor,
                    this.accent.gradient
                ) :
                ACCENT_MAP[this.accent].guiColors,
            GUI_MAP[this.gui].guiColors,
            guiLight.guiColors
        );
    }

   getBlockColors () {
        let blockColors = defaultsDeep(
            {},
			Object.hasOwn(this.accent, 'primaryColor') ?
                ACCENT_MAP[ACCENT_CUSTOM].getBlockColors(
                    this.accent.primaryColor,
                    this.accent.secondaryColor
                ) :
            ACCENT_MAP[this.accent].blockColors,
            GUI_MAP[this.gui].blockColors,
            BLOCKS_MAP[this.blocks].colors
        );
        if (this.wallpaper.url !== null) {
            blockColors = defaultsDeep(
                {workspace: blockColors.workspace + Math.round(this.wallpaper.opaque * 255).toString(16).padStart(2, 0)},
                blockColors
            )
        }
        return blockColors;
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
    ACCENT_CYAN,
    ACCENT_LIME,
    ACCENT_MAGENTA,
    ACCENT_FUCHSIA,
    ACCENT_INDIGO,
    ACCENT_INDIGO_BLUE,
    ACCENT_CORRUPTED_BLUE,
    ACCENT_GAIA_BLUE,
    ACCENT_GREEN,
    ACCENT_RAINBOW,
    ACCENT_COTTON_CANDY,
	ACCENT_CUSTOM,
    ACCENT_MAP,
	AccentIcons,
    AccentOptions,

    GUI_LIGHT,
    GUI_MODERN_LIGHT,
    GUI_LIGHTER_COLORED,
    GUI_DARK,
    GUI_MODERN_DARK,
    GUI_DEEP_DARK,
    GUI_DARKER_COLORED,
    GUI_MIDNIGHT,
    GUI_MAP,
	GuiIcons,
    GuiOptions,

    BLOCKS_THREE,
    BLOCKS_DARK,
    BLOCKS_HIGH_CONTRAST,
    BLOCKS_COLORFUL,
    BLOCKS_CUSTOM,
    BLOCKS_MAP
};
