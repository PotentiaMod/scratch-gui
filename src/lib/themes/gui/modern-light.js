const guiColors = {
    'color-scheme': 'light',

    'ui-primary': '#EDEDED', /* #E5F0FF */
    'ui-secondary': '#D6D6D6', /* #E9F1FC */
    'ui-tertiary': '#C9C9C9', /* #D9E3F2 */

    'ui-modal-overlay': 'var(--motion-primary-transparent)',
    'ui-modal-background': 'hsla(0, 100%, 100%, 1)', /* #FFFFFF */
    'ui-modal-foreground': 'hsl(0,0%,91%)', /* #575E75 */
    'ui-modal-header-background': 'var(--looks-secondary)',
    'ui-modal-header-foreground': 'hsla(0, 100%, 100%, 1)', /* #FFFFFF */

    'ui-white': 'hsla(0, 100%, 100%, 1)', /* #FFFFFF */
    'ui-white-dim': 'hsla(0, 100%, 100%, 0.75)', /* 25% transparent version of ui-white */
    'ui-white-transparent': 'hsla(0, 100%, 100%, 0.25)', /* 25% transparent version of ui-white */
    'ui-transparent': 'hsla(0, 100%, 100%, 0)', /* 25% transparent version of ui-white */

    'ui-black-transparent': 'hsla(0, 0%, 0%, 0.15)', /* 15% transparent version of black */

    'text-primary': 'hsl(0,0%,0%)', /* #575E75 */
    'text-primary-transparent': 'hsla(0, 0%, 0%, 0.75)',

    'menu-bar-background': 'white',
    'menu-bar-foreground': 'black',
    'menu-bar-background-image': 'var(--looks-secondary)',
	'menu-bar-icon-filter': 'invert(100%)',
	

    'progress-bar-outer': 'var(--looks-secondary)',
	
    'feedback-background': 'var(--looks-secondary)',
    'feedback-foreground': 'white',

    'shadow': 'hsla(0, 0%, 0%, 0.15)',

    'page-background': '#ffffff',
    'page-foreground': '#000000'

};

const blockColors = {};

export {
    guiColors,
    blockColors
};
