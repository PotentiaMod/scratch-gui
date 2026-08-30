import {APP_NAME} from '../brand';
import messages from './tag-messages.js';

/// Because there are all brand names, it is unnecessary for them to be translatable.
export default [
    {type: 'custom', intlLabel: messages.customextension, func: (library) => {
        library.select('custom_extension');
    } },
	
    {type: 'divider'},
	
	{type: 'title', intlLabel: 'Sources'},
	
    {tag: 'scratch', intlLabel: 'Scratch'},
    {tag: 'potentia', intlLabel: APP_NAME},
    {tag: 'tw', intlLabel: 'TurboWarp'},
    {tag: 'ccw', intlLabel: 'Cocrea World'},
    {tag: 'nb', intlLabel: 'NitroBolt'},
    {tag: 'mist', intlLabel: 'Mistium'},
    {tag: 'ae', intlLabel: 'Astra Editor'},
    {tag: 'ztengine', intlLabel: '02Engine'},
    {tag: 'bilup', intlLabel: 'Bilup'},
    {tag: 'dash', intlLabel: 'Dash'},
    {tag: 'sp', intlLabel: 'SharkPool'},
    {tag: 'pm', intlLabel: 'PenguinMod'},
    {tag: 'sn', intlLabel: 'Snail IDE'},
    {tag: 'dm', intlLabel: 'DinosaurMod'},
    {tag: 'em', intlLabel: 'ElectraMod'},
    {tag: 'ark', intlLabel: 'Ark IDE'},
    {tag: 'gaia', intlLabel: 'GaiaMod'},
    {tag: 'gvbvdxxmod', intlLabel: 'GvbvdxxMod'},
    {tag: 'adacraft', intlLabel: 'Adacraft'},
    {tag: 'other', intlLabel: 'Other Mods'},
    {tag: 'preload', intlLabel: 'Preloaded'},
];