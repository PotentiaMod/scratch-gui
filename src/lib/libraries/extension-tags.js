import {APP_NAME} from '../brand';
import messages from './tag-messages.js';

/// Because there are all brand names, it is unnecessary for them to be translatable.
export default [
   {type: 'divider'},
    {type: 'custom', intlLabel: messages.customextension, func: (library) => {
        library.select('custom_extension');
    } },
    {type: 'divider'},
    {tag: 'scratch', intlLabel: 'Scratch'},
    {tag: 'potentia', intlLabel: 'PotentiaMod'},
    {tag: 'gaia', intlLabel: 'GaiaMod'},
    {tag: 'tw', intlLabel: 'TurboWarp'},
    {tag: 'other', intlLabel: 'Other Scratch Mods'},
    {tag: 'preload', intlLabel: 'Preloads'},
	{type: 'divider'},
    {tag: 'builders', intlLabel: 'Extension Builders'},
	{type: 'divider'},
    {tag: 'new', intlLabel: 'New!'},
	{tag: 'disabled', intlLabel: 'Disabled'},
	{type: 'divider'},
];