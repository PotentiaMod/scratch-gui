/**
 * Shared accent override helpers.
 *
 * The custom-editor-theme addon's "主题强调色" (accentColor) drives the whole GUI
 * accent system (buttons, toggles, sliders, extension buttons, drop-highlight...),
 * exactly like a built-in accent theme in src/lib/themes/accent.
 *
 * On the editor page the addon does this through its userstyle
 * (experimental_editor.css), overriding --looks-secondary & co. with !important.
 * The standalone addon settings page (src/addons/settings/settings.jsx) lives in a
 * SEPARATE document that never loads that userstyle, so it applies the same
 * overrides inline. Keep the derived shades here identical to the CSS ones.
 */

const MIX = (color, pct, target) => `color-mix(in srgb, ${color} ${pct}, ${target})`;

export const ACCENT_OVERRIDE_NAMES = [
    '--looks-secondary',
    '--looks-secondary-light',
    '--looks-secondary-lighter',
    '--motion-primary',
    '--motion-primary-transparent',
    '--motion-tertiary',
    '--looks-transparent',
    '--looks-light-transparent',
    '--looks-secondary-dark',
    '--looks-secondary-darker',
    '--looks-secondary-deep-dark',
    '--extensions-primary',
    '--extensions-tertiary',
    '--extensions-transparent',
    '--extensions-light',
    '--drop-highlight'
];

/**
 * @param {HTMLElement} root element to apply the overrides on (usually document.documentElement)
 * @param {string} accentColor CSS color for the accent
 */
export const applyAccentOverrides = (root, accentColor) => {
    root.style.setProperty('--looks-secondary', accentColor);
    root.style.setProperty('--looks-secondary-light', MIX(accentColor, '80%', 'white'));
    root.style.setProperty('--looks-secondary-lighter', MIX(accentColor, '90%', 'white'));
    root.style.setProperty('--motion-primary', accentColor);
    root.style.setProperty('--motion-primary-transparent', MIX(accentColor, '90%', 'transparent'));
    root.style.setProperty('--motion-tertiary', MIX(accentColor, '70%', 'black'));
    root.style.setProperty('--looks-transparent', MIX(accentColor, '35%', 'transparent'));
    root.style.setProperty('--looks-light-transparent', MIX(accentColor, '15%', 'transparent'));
    root.style.setProperty('--looks-secondary-dark', MIX(accentColor, '80%', 'black'));
    root.style.setProperty('--looks-secondary-darker', MIX(accentColor, '90%', 'black'));
    root.style.setProperty('--looks-secondary-deep-dark', MIX(accentColor, '100%', 'black'));
    root.style.setProperty('--extensions-primary', accentColor);
    root.style.setProperty('--extensions-tertiary', MIX(accentColor, '80%', 'black'));
    root.style.setProperty('--extensions-transparent', MIX(accentColor, '35%', 'transparent'));
    root.style.setProperty('--extensions-light', MIX(accentColor, '75%', 'white'));
    root.style.setProperty('--drop-highlight', MIX(accentColor, '70%', 'white'));
};

export const clearAccentOverrides = root => {
    for (const name of ACCENT_OVERRIDE_NAMES) {
        root.style.removeProperty(name);
    }
};