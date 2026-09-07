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
import * as accentHotFuse from './accent/hotfuse';
import * as accentNitroFire from './accent/nitrofire';

import * as accentGreenTea from './accent/green-tea';
import * as accentPaleBlue from './accent/pale-blue';
import * as accentEggplantPurple from './accent/eggplant-purple';
import * as accentTrans from './accent/trans';
import * as accentGay from './accent/gay';
import * as accentBi from './accent/bi';
import * as accentPan from './accent/pan';
import * as accentLesbian from './accent/lesbian';
import * as accentNonbinary from './accent/nonbinary';
import * as accentAce from './accent/ace';
import * as accentRotur from './accent/rotur';
import * as accentPink from './accent/pink';
import * as accentPinkV2 from './accent/pink(v2)';
import * as accentSunset from './accent/sunset';
import * as accentOcean from './accent/ocean';
import * as accentAurora from './accent/aurora';
import * as accentCosmic from './accent/cosmic';
import * as accentFire from './accent/fire';
import * as accentNebula from './accent/nebula';
import * as accentLavender from './accent/lavender';
import * as accentMint from './accent/mint';
import * as accentCherry from './accent/cherry';
import * as accentSky from './accent/sky';
import * as accentForest from './accent/forest';
import * as accentCoral from './accent/coral';
import * as accentAstraEditor from './accent/astraeditor';
import * as accent02 from './accent/02e';
import * as accentCE from './accent/ce';
import * as accentMiku from './accent/miku';
import * as accentTY from './accent/ty';
import * as accentOubi from './accent/oubi';
import * as accentOmniBlue from './accent/omnimax-blue';
import * as accentVaporwave from './accent/vaporwave';
import * as accentMatrix from './accent/matrix';
import * as accentHoney from './accent/honey';
import * as accentYellow from './accent/yellow';
import * as accentGreenV2 from './accent/green(v2)';
import * as accentDarkGreen from './accent/dark-green';
import * as accentCustom from './accent/custom';

import * as guiLight from './gui/light';
import * as guiModernLight from './gui/modern-light';
import * as guiAmpLight from './gui/amp-light';
import * as guiGenesisLight from './gui/genesislight';
import * as guiModernWhite from './gui/modern-white';
import * as guiDark from './gui/dark';
import * as guiAmpDark from './gui/amp-dark';
import * as guiModernDark from './gui/modern-dark';
import * as guiGenesisDark from './gui/genesisdark';
import * as guiDeepDark from './gui/deep-dark';
import * as guiMidnight from './gui/midnight';
import * as guiAmoled from './gui/amoled';
import * as guiAmpAmoled from './gui/amp-amoled';
import * as guiHighContrast from './gui/amp-high-contrast';

import * as blocksThree from './blocks/three';
import * as blocksHighContrast from './blocks/high-contrast';
import * as blocksDark from './blocks/dark';
import * as blocksColorful from './blocks/colorful';

import rainbowIcon from './icons/tw-accent-rainbow.svg';
import starsIcon from './icons/tw-accent-stars.svg';

import lightModeIcon from './icons/tw-sun.svg';
import darkModeIcon from './icons/tw-moon.svg';
import midnightModeIcon from './icons/tw-star.svg';
import paletteIcon from './icons/tw-palette.svg';

import threeIcon from './icons/tw-blocks-three.svg';
import highContrastIcon from './icons/tw-blocks-high-contrast.svg';
import darkIcon from './icons/tw-blocks-dark.svg';
import colorfulIcon from './icons/tw-blocks-colorful.svg';
import customIcon from './icons/tw-blocks-custom.svg';

import alignLeftIcon from '../../components/menu-bar/tw-align-left.svg';
import alignCenterIcon from '../../components/menu-bar/tw-align-center.svg';
import alignRightIcon from '../../components/menu-bar/tw-align-right.svg';

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
const ACCENT_COTTON_CANDY = 'cottoncandy'; //unique
const ACCENT_HOT_FUSE = 'stars'; //unique
const ACCENT_NITRO_FIRE = 'nitrofire'; //unique
const ACCENT_OMNIBLUE = 'omnimax-blue'; //LOL From my deleted MistWarp mod.
const ACCENT_GREEN_TEA = 'green-tea'; //Bilup
const ACCENT_PALE_BLUE = 'pale-blue'; //Bilup
const ACCENT_EGGPLANT_PURPLE = 'eggplant-purple'; //Bilup
const ACCENT_TRANS = 'trans'; //MistWarp
const ACCENT_GAY = 'gay'; //MistWarp
const ACCENT_BI = 'bi'; //MistWarp
const ACCENT_LESBIAN = 'lesbian'; //MistWarp
const ACCENT_PAN = 'pan'; //MistWarp
const ACCENT_NONBINARY = 'nonbinary'; //MistWarp
const ACCENT_ACE = 'ace'; //MistWarp
const ACCENT_ROTUR = 'rotur'; //MistWarp
const ACCENT_PINK = 'pink'; //MistWarp
const ACCENT_PINK2 = 'pink(v2)'; //MistWarp
const ACCENT_GREEN2 = 'greenv2'; //MistWarp
const ACCENT_YELLOW = 'yellow'; //MistWarp
const ACCENT_DARK_GREEN = 'dark-green'; //MistWarp
const ACCENT_SUNSET = 'sunset'; //MistWarp
const ACCENT_OCEAN = 'ocean'; //MistWarp
const ACCENT_AURORA = 'aurora'; //MistWarp
const ACCENT_COSMIC = 'cosmic'; //MistWarp
const ACCENT_NEBULA = 'nebula'; //MistWarp
const ACCENT_FIRE = 'fire'; //MistWarp
const ACCENT_MINT = 'mint'; //MistWarp
const ACCENT_SKY = 'sky'; //MistWarp
const ACCENT_FOREST = 'forest'; //MistWarp
const ACCENT_CHERRY = 'cherry'; //MistWarp
const ACCENT_LAVENDER = 'lavender'; //MistWarp
const ACCENT_CORAL = 'coral'; //MistWarp
const ACCENT_VAPORWAVE = 'vaporwave'; //MistWarp
const ACCENT_MATRIX = 'matrix'; //MistWarp
const ACCENT_HONEY = 'honey'; //MistWarp
const ACCENT_AE = 'astraeditor'; //Astra Editor
const ACCENT_MIKU = 'miku'; //Astra Editor
const ACCENT_TY = 'ty'; //Astra Editor
const ACCENT_OUBI = 'oubi'; //Astra Editor
const ACCENT_CE = 'ce'; //02Engines
const ACCENT_02E = '02e'; //02Engine
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
    [ACCENT_HOT_FUSE]: accentHotFuse,
    [ACCENT_NITRO_FIRE]: accentNitroFire,
    [ACCENT_OMNIBLUE]: accentOmniBlue,
    [ACCENT_COTTON_CANDY]: accentCottonCandy,
	[ACCENT_GREEN_TEA]: accentGreenTea,
	[ACCENT_PALE_BLUE]: accentPaleBlue,
	[ACCENT_EGGPLANT_PURPLE]: accentEggplantPurple,
	[ACCENT_TRANS]: accentTrans,
	[ACCENT_GAY]: accentGay,
	[ACCENT_BI]: accentBi,
	[ACCENT_PAN]: accentPan,
	[ACCENT_LESBIAN]: accentLesbian,
	[ACCENT_NONBINARY]: accentNonbinary,
	[ACCENT_ACE]: accentAce,
	[ACCENT_ROTUR]: accentRotur,
	[ACCENT_PINK]: accentPink,
	[ACCENT_PINK2]: accentPinkV2,
	[ACCENT_GREEN2]: accentGreenV2,
	[ACCENT_YELLOW]: accentYellow,
	[ACCENT_DARK_GREEN]: accentDarkGreen,
	[ACCENT_SUNSET]: accentSunset,
	[ACCENT_OCEAN]: accentOcean,
	[ACCENT_AURORA]: accentAurora,
	[ACCENT_COSMIC]: accentCosmic,
	[ACCENT_FIRE]: accentFire,
	[ACCENT_FOREST]: accentForest,
	[ACCENT_NEBULA]: accentNebula,
	[ACCENT_LAVENDER]: accentLavender,
	[ACCENT_MINT]: accentMint,
	[ACCENT_CHERRY]: accentCherry,
	[ACCENT_SKY]: accentSky,
	[ACCENT_CORAL]: accentCoral,
	[ACCENT_AE]: accentAstraEditor,
	[ACCENT_02E]: accent02,
	[ACCENT_CE]: accentCE,
	[ACCENT_MIKU]: accentMiku,
	[ACCENT_TY]: accentTY,
	[ACCENT_OUBI]: accentOubi,
	[ACCENT_VAPORWAVE]: accentVaporwave,
	[ACCENT_MATRIX]: accentMatrix,
	[ACCENT_HONEY]: accentHoney,
    [ACCENT_CUSTOM]: accentCustom
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
	[ACCENT_PINK]: {
        defaultMessage: 'Pink',
        description: 'Name of the pink color scheme',
        id: 'tw.accent.pink',
    },
    [ACCENT_ORANGE]: {
        defaultMessage: 'Orange',
        description: 'Name of the orange color scheme.',
        id: 'tw.accent.orange'
    },
	[ACCENT_YELLOW]: {
        defaultMessage: 'Yellow',
        description: 'Name of the yellow color scheme',
        id: 'tw.accent.yellow',
    },
	[ACCENT_GREEN]: {
        defaultMessage: 'Green',
        description: 'Name of the green color scheme',
        id: 'tw.accent.green'
    },
	 [ACCENT_DARK_GREEN]: {
        defaultMessage: 'Dark Green',
        description: 'Name of the dark green color scheme',
        id: 'tw.accent.darkgreen',
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
        defaultMessage: 'S. Blue',
        description: 'Name of the indigoish-blue color scheme. Matches Ark IDE.',
        id: 'tw.accent.indigoblue'
    },
	[ACCENT_CORRUPTED_BLUE]: {
        defaultMessage: 'C. Blue',
        description: 'Name of the greyish-blue color scheme. Matches ElectraMod.',
        id: 'tw.accent.corruptedblue'
    },
	[ACCENT_GAIA_BLUE]: {
        defaultMessage: 'G. Blue',
        description: 'Name of the pure blue color scheme. Matches GaiaMod.',
        id: 'tw.accent.gaiablue'
    },
	[ACCENT_COTTON_CANDY]: {
        defaultMessage: 'C. Candy',
        description: 'Name of the pastel pink/blue color scheme.',
        id: 'tw.accent.cottoncandy'
    },
	[ACCENT_OMNIBLUE]: {
        defaultMessage: 'O. Blue',
        description: 'Name of color scheme.',
        id: 'tw.accent.omniblue'
    },
	[ACCENT_HOT_FUSE]: {
        defaultMessage: 'H. Fuse',
        description: 'Name of hot pink-purple color scheme.',
        id: 'tw.accent.hotfuse'
    },
	[ACCENT_NITRO_FIRE]: {
        defaultMessage: 'N. Fire',
        description: 'Name of orange-red color scheme.',
        id: 'tw.accent.nitrofire'
    },
	[ACCENT_NEBULA]: {
        defaultMessage: 'Nebula',
        description: 'Name of color scheme.',
        id: 'tw.accent.nebula'
    },
	[ACCENT_COSMIC]: {
        defaultMessage: 'Cosmic',
        description: 'Name of color scheme.',
        id: 'tw.accent.cosmic'
    },
	[ACCENT_AURORA]: {
        defaultMessage: 'Aurora',
        description: 'Name of color scheme.',
        id: 'tw.accent.aurora'
    },
	[ACCENT_MINT]: {
        defaultMessage: 'Mint',
        description: 'Name of color scheme.',
        id: 'tw.accent.mint'
    },
    [ACCENT_RAINBOW]: {
        defaultMessage: 'Rainbow',
        description: 'Name of color scheme that uses a rainbow.',
        id: 'tw.accent.rainbow'
    },
	
});

const AccentIcons = {
    //[ACCENT_RAINBOW]: rainbowIcon,
    //[ACCENT_HOT_FUSE]: starsIcon
};

const ACCENT_DEFAULT = ACCENT_INDIGO;

const GUI_LIGHT = 'light';
const GUI_MODERN_LIGHT = 'modern-light';
const GUI_AMP_LIGHT = 'amp-light';
const GUI_GENESIS_LIGHT = 'genesislight';
const GUI_MODERN_WHITE = 'modern-white';
const GUI_DARK = 'dark';
const GUI_AMP_DARK = 'amp-dark';
const GUI_MODERN_DARK = 'modern-dark';
const GUI_GENESIS_DARK = 'genesisdark';
const GUI_DEEP_DARK = 'deep-dark';
const GUI_MIDNIGHT = 'midnight';
const GUI_AMOLED = 'amoled';
const GUI_AMP_AMOLED = 'amp-amoled';
const GUI_HIGH_CONTRAST = 'high-contrast';
const GUI_CUSTOM = "custom";
const GUI_MAP = {
    [GUI_LIGHT]: guiLight,
    [GUI_MODERN_LIGHT]: guiModernLight,
    [GUI_AMP_LIGHT]: guiAmpLight,
    [GUI_GENESIS_LIGHT]: guiGenesisLight,
    [GUI_MODERN_WHITE]: guiModernWhite,
    [GUI_DARK]: guiDark,
    [GUI_MODERN_DARK]: guiModernDark,
    [GUI_GENESIS_DARK]: guiGenesisDark,
    [GUI_AMP_DARK]: guiModernDark,
    [GUI_DEEP_DARK]: guiDeepDark,
    [GUI_MIDNIGHT]: guiMidnight,
    [GUI_AMOLED]: guiAmoled,
    [GUI_AMP_AMOLED]: guiAmpAmoled,
    [GUI_HIGH_CONTRAST]: guiHighContrast,
	// amp-customizable-colours addon
    [GUI_CUSTOM]: {},
};
const GuiOptions = defineMessages({
    [GUI_LIGHT]: {
        defaultMessage: 'Light',
        description: 'Name of the light color scheme.',
        id: 'tw.gui.light'
    },
    [GUI_MODERN_LIGHT]: {
        defaultMessage: 'PotentiaMod - Light',
        description: 'Name of PotentiaMod\'s Light color scheme.',
        id: 'tw.gui.modernlight'
    },
    [GUI_GENESIS_LIGHT]: {
        defaultMessage: 'Genesis Light',
        description: 'Name of a light color scheme. Matches the defunct Genesis IDE color.',
        id: 'tw.gui.genesislight'
    },
	[GUI_AMP_LIGHT]: {
        defaultMessage: 'AmpMod light',
        description: 'Name of a light color scheme. Matches AmpMod\'s color.',
        id: 'tw.gui.amplight'
    },
	[GUI_MODERN_WHITE]: {
        defaultMessage: 'Astra White',
        description: 'Name of a light color scheme. Matches Astra Editor\'s color.',
        id: 'tw.gui.astralight'
    },
    [GUI_DARK]: {
        defaultMessage: 'Dark',
        description: 'Name of the dark color scheme.',
        id: 'tw.gui.dark'
    },
    [GUI_MODERN_DARK]: {
        defaultMessage: 'PotentiaMod - Dark',
        description: 'Name of PotentiaMod\'s Dark color scheme.',
        id: 'tw.gui.moderndark'
    },
	[GUI_GENESIS_DARK]: {
        defaultMessage: 'Genesis Dark',
        description: 'Name of a dark color scheme. Matches the defunct Genesis IDE color.',
        id: 'tw.gui.genesisdark'
    },
	[GUI_AMP_DARK]: {
        defaultMessage: 'AmpMod Dark',
        description: 'Name of a dark color scheme. Matches AmpMod\'s color.',
        id: 'tw.gui.ampdark'
    },
	[GUI_DEEP_DARK]: {
        defaultMessage: 'Astra Dark',
        description: 'Name of a dark color scheme. Matches Astra Editor\'s color.',
        id: 'tw.gui.astradark'
    },
	[GUI_MIDNIGHT]: {
        defaultMessage: 'Midnight',
        description: 'Name of the midnight color scheme.',
        id: 'tw.gui.midnight'
    },
	[GUI_AMOLED]: {
        defaultMessage: 'Amoled',
        description: 'Name of the amoled color scheme.',
        id: 'tw.gui.amoled'
    },
	[GUI_AMP_AMOLED]: {
        defaultMessage: 'AmpMod Amoled',
        description: 'Name of the amoled color scheme. Matches AmpMod\'s color.',
        id: 'tw.gui.ampamoled'
    },
	[GUI_HIGH_CONTRAST]: {
        defaultMessage: 'High Contrast',
        description: 'Name of the color scheme. Matches AmpMod\'s high-contrast color.',
        id: 'tw.gui.highcontrast'
    }
});

const GuiIcons = {
    [GUI_LIGHT]: lightModeIcon,
	[GUI_MODERN_LIGHT]: lightModeIcon,
	[GUI_GENESIS_LIGHT]: lightModeIcon,
	[GUI_MODERN_WHITE]: lightModeIcon,
	[GUI_AMP_LIGHT]: lightModeIcon,
    [GUI_DARK]: darkModeIcon,
    [GUI_MODERN_DARK]: darkModeIcon,
    [GUI_GENESIS_DARK]: darkModeIcon,
    [GUI_AMP_DARK]: darkModeIcon,
    [GUI_DEEP_DARK]: darkModeIcon,
    [GUI_MIDNIGHT]: midnightModeIcon,
    [GUI_AMOLED]: midnightModeIcon,
    [GUI_AMP_AMOLED]: midnightModeIcon,
    [GUI_HIGH_CONTRAST]: paletteIcon
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
//Copied from ScratchBox/MistWarp
const MENUBAR_ALIGN = {
    left: {
        defaultMessage: 'Left',
        description: 'Label for left-aligned menu bar',
        id: 'tw.menuBar.align.left',
        icon: alignLeftIcon
    },
    center: {
        defaultMessage: 'Center',
        description: 'Label for center-aligned menu bar',
        id: 'tw.menuBar.align.center',
        icon: alignCenterIcon
    },
    right: {
        defaultMessage: 'Right',
        description: 'Label for right-aligned menu bar',
        id: 'tw.menuBar.align.right',
        icon: alignRightIcon
    }
};
const MENUBAR_ALIGN_DEFAULT = 'left';

let themeObjectsCreated = 0;

class Theme {
    constructor (accent, gui, blocks, menuBarAlign, wallpaper, font) {
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
        this.menuBarAlign = Object
            .keys(MENUBAR_ALIGN)
            .includes(menuBarAlign) ?
            menuBarAlign : MENUBAR_ALIGN_DEFAULT;
    
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
            return new Theme(to, this.gui, this.blocks, this.menuBarAlign, this.wallpaper, this.font);
        } else if (what === 'gui') {
            return new Theme(this.accent, to, this.blocks, this.wallpaper, this.menuBarAlign, this.font);
        } else if (what === 'blocks') {
            return new Theme(this.accent, this.gui, to, this.wallpaper, this.menuBarAlign, this.font);
        } else if (what === 'wallpaper') {
            return new Theme(this.accent, this.gui, this.blocks, to, this.menuBarAlign, this.font);
        } else if (what === 'menuBarAlign') {
            return new Theme(this.accent, this.gui, this.blocks, this.wallpaper, to, this.font);
        }else if (what === 'font') {
            return new Theme(this.accent, this.gui, this.blocks, this.wallpaper, this.menuBarAlign, to);
        }
        throw new Error(`Unknown theme property: ${what}`);
    }

    getBlocksMediaFolder () {
        return BLOCKS_MAP[this.blocks].blocksMediaFolder;
    }

     getGuiColors() {
        return defaultsDeep(
            {},
            this.gui === "custom"
                ? null
                : Object.hasOwn(this.accent, 'primaryColor') ?
                ACCENT_MAP[ACCENT_CUSTOM].getGuiColors(
                    this.accent.primaryColor,
                    this.accent.secondaryColor,
                    this.accent.tertiaryColor,
                    this.accent.gradient
                )
				: ACCENT_MAP[this.accent].guiColors,
            GUI_MAP[this.gui].guiColors,
            guiLight.guiColors,
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
    ACCENT_NITRO_FIRE,
    ACCENT_HOT_FUSE,
	ACCENT_CUSTOM,
    ACCENT_MAP,
	AccentIcons,
    AccentOptions,

    GUI_LIGHT,
    GUI_MODERN_LIGHT,
    GUI_DARK,
    GUI_MODERN_DARK,
    GUI_MIDNIGHT,
    GUI_CUSTOM,
    GUI_MAP,
	GuiIcons,
    GuiOptions,

    BLOCKS_THREE,
    BLOCKS_DARK,
    BLOCKS_HIGH_CONTRAST,
    BLOCKS_COLORFUL,
    BLOCKS_CUSTOM,
    BLOCKS_MAP,
	
	MENUBAR_ALIGN,
    MENUBAR_ALIGN_DEFAULT
};
