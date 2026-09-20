//This entire code is taken from NitroBolt.
import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import log from '../lib/log';

import extensionLibraryContent, {
    galleryStatusItems
} from '../lib/libraries/extensions/index.jsx';
import extensionTags from '../lib/libraries/extension-tags';
import {
    addPackURL,
    getCachedPack,
    getExtensionId,
    getIndividualExtensions,
    getPackURLs,
    removePackURL,
    resolveURL,
    setCachedPack,
    setIndividualExtensions,
    setPackURLs,
    validatePack
} from '../lib/extension-packs';

import LibraryComponent from '../components/library/library.jsx';
import extensionIcon from '../components/action-menu/icon--sprite.svg';
import PMExtensions from '../lib/libraries/extensions/index.jsx';
import {manuallyTrustExtension} from './tw-security-manager.jsx';
import ExtensionPackManager from '../components/nb-extension-pack-manager/extension-pack-manager.jsx';

import defaultExtensionBanner from '../lib/libraries/extensions/potentiamod/placeholder.png'

import defaultICON from '../lib/libraries/extensions/icons/placeholder.svg';
import POTIcon from '../lib/libraries/extensions/icons/potentiamod.svg';
import TWIcon from '../lib/libraries/extensions/icons/turbowarp.svg';
import CCWIcon from '../lib/libraries/extensions/icons/ccw.png';
import NBIcon from '../lib/libraries/extensions/icons/nitrobolt.svg';
import MWIcon from '../lib/libraries/extensions/icons/mistwarp.svg';
import AEIcon from '../lib/libraries/extensions/icons/astraeditor.png';
import ZTIcon from '../lib/libraries/extensions/icons/02engine.png';
import BLIcon from '../lib/libraries/extensions/icons/bilup.svg';
import DBIcon from '../lib/libraries/extensions/icons/dashblocks.svg';
import PMIcon from '../lib/libraries/extensions/icons/penguinmod.svg';
import ARKIcon from '../lib/libraries/extensions/icons/arkide.png';
import SNIcon from '../lib/libraries/extensions/icons/snailide.png';
import DMIcon from '../lib/libraries/extensions/icons/dinosaurmod.svg';
import EMIcon from '../lib/libraries/extensions/icons/electramod.svg';
import GMIcon from '../lib/libraries/extensions/icons/gaiamod.png';
import SPIcon from '../lib/libraries/extensions/icons/sharkpool.svg';

//Take that, MistWarp and Bilup!
const TAG_STATUS_COLORS = {
    online: '#4CAF50',
    local: '#2196F3',
    loading: '#FFC107',
    error: '#F44336'
};

const SidebarStatusDot = ({color, isLoading, className}) => (
    <span
        className={classNames(className, {'sidebar-loading-dot': isLoading})}
        style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            marginRight: '0.5rem',
            flexShrink: 0,
            background: color,
            boxShadow: `0 0 0 2px ${color}40`
        }}
    />
);

const updateGallery = newGallery => {
    cachedGallery = newGallery;
    galleryUpdateListeners.forEach(listener => listener(newGallery));
};

let galleryUpdateListeners = [];

const addGalleryUpdateListener = listener => {
    galleryUpdateListeners.push(listener);
    return () => {
        const index = galleryUpdateListeners.indexOf(listener);
        if (index > -1) {
            galleryUpdateListeners.splice(index, 1);
        }
    };
};

const gallerySources = [
    {
        id: 'potentiamod',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/potentiamod/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/potentiamod/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/potentiamod/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/pot-extensions.json',
        icon: POTIcon,
        tag: 'potentia'
    },		
    {
        id: 'turbowarp',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/turbowarp/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/turbowarp/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/turbowarp/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/tw-extensions.json',
        icon: TWIcon,
        tag: 'tw',
    },
	{
        id: 'cocreaworld',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/cocreaworld/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/cocreaworld/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/cocreaworld/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/ccw-extensions.json',
        icon: CCWIcon,
        tag: 'ccw'
    },
    {
        id: 'nitrobolt',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/nitrobolt/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/nitrobolt/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/nitrobolt/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/nb-extensions.json',
        icon: NBIcon,
        tag: 'nb'
    },
    {
        id: 'astraeditor',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/astraeditor/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/astraeditor/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/astraeditor/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/ae-extensions.json',
        icon: AEIcon,
        tag: 'ae'
    },	
	{
        id: 'zerotwoengine',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/zerotwoengine/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/zerotwoengine/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/zerotwoengine/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/ztengine-extensions.json',
        icon: ZTIcon,
        tag: 'ztengine'
    },	
    {
        id: 'bilup',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/bilup/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/bilup/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/bilup/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/bilup-extensions.json',
        icon: BLIcon,
        tag: 'bilup'
    },	
	{
        id: 'mistium',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/mistium/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/mistium/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/mistium/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/mist-extensions.json',
        icon: MWIcon,
        tag: 'mist'
    },
	{
        id: 'dash',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/dash/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/dash/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/dash/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/dash-extensions.json',
        icon: DBIcon,
        tag: 'dash'
    },
	{
        id: 'sharkpool',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/sharkpool/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/sharkpool/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/sharkpool/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/sp-extensions.json',
		icon: SPIcon,
        tag: 'sp'
    },
    {
        id: 'penguinmod',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/penguinmod/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/penguinmod/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/penguinmod/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/pm-extensions.json',
		icon: PMIcon,
        tag: 'pm'
    },
	{
        id: 'snailide',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/snailide/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/snailide/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/snailide/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/sn-extensions.json',
        icon: SNIcon,
        tag: 'sn'
    },
	{
        id: 'dinosaurmod',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/dinosaurmod/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/dinosaurmod/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/dinosaurmod/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/dm-extensions.json',
        icon: DMIcon,
        tag: 'dm'
    },
	{
        id: 'electramod',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/electramod/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/electramod/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/electramod/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/em-extensions.json',
        icon: EMIcon,
        tag: 'em'
    },
	{
        id: 'arkide',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/arkide/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/arkide/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/arkide/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/ark-extensions.json',
        icon: ARKIcon,
        tag: 'ark'
    },
    {
        id: 'gaiamod',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/gaiamod/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/gaiamod/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/gaiamod/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/gm-extensions.json',
        icon: GMIcon,
        tag: 'gaia'
    },
	//Others always the end
	{
        id: 'other',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/other/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/other/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/other/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/other-extensions.json',
        icon: defaultICON,
        tag: 'other'
    },
];

const messages = defineMessages({
    extensionTitle: {
        defaultMessage: 'Choose an Extension',
        description: 'Heading for the extension library',
        id: 'gui.extensionLibrary.chooseAnExtension'
    },
    header: {
        defaultMessage: 'Extensions',
        description: 'Header for extension library',
        id: 'tw.gui.extensionLibrary.header'
    },
	 customGalleryPrompt: {
        defaultMessage: 'Enter custom extension gallery URL:',
        description: 'Prompt for entering custom extension gallery URL',
        id: 'tw.customExtensionGallery.prompt'
    },
	    extensionWarning: {
        // eslint-disable-next-line max-len
        defaultMessage: 'This extension is not recommended for real projects. It may be unstable and cause problems with your project later on. Are you sure you want to enable it?',
        description: 'Confirm loading buggy and unstable extension',
        id: 'tw.confirmBuggyUnstableExtension'
    },
    bugWarning: {
        // eslint-disable-next-line max-len
        // Copypasted from GvbvdxxMod2
        defaultMessage: 'This extension is not trusted, and it has some glitches and bugs, adding this in might make GaiaMod collapse, or some blocks may not work correctly, BACK UP YOUR PROJECT FIRST BEFORE USING THESE. Do you want to add the extension now?',
        description: 'Confirm loading buggy and unstable extension',
        id: 'tw.confirmBuggyExtension'
    }

});

const toLibraryItem = extension => {
    if (typeof extension === 'object') {
        return ({
            rawURL: extension.iconURL || extensionIcon,
            ...extension
        });
    }
    return extension;
};

const translateGalleryItem = (extension, locale) => ({
    ...extension,
    name: extension.nameTranslations[locale] || extension.name,
    description: extension.descriptionTranslations[locale] || extension.description
});

const mapGalleryExtension = (extension, source) => ({
    name: extension.name || extension.eid,
    nameTranslations: extension.nameTranslations || {},
    description: extension.description,
    descriptionTranslations: extension.descriptionTranslations || {},
    extensionId: extension.id || extension.extensionId || extension.eid,
    extensionURL: `${source.baseURL}${extension.slug || extension.URL || extension.url || extension.extensionURL || extension.code}.js`,
    iconURL: extension.image ? `${source.baseImageURL}${extension.image}` : extension.cover ? `${source.baseImageURL}${extension.cover}` : extension.banner ? `${source.baseImageURL}${extension.banner}` : extension.thumb ? `${source.baseImageURL}${extension.thumb}` : extension.iconURL ? `${source.baseImageURL}${extension.iconURL}` : defaultExtensionBanner,
    tags: [source.tag],
	insetIconURL: [source.icon] || defaultICON,
    credits: [
            ...(extension.original || []),
            ...(extension.creator || []),
            ...(extension.author || []),
            ...(extension.publisher || []),
            ...(extension.by || [])
        ].map(credit => {
            if (credit.link) {
                return (
                    <a
                        href={credit.link}
                        target="_blank"
                        rel="noreferrer"
                        key={credit.name}
                    >
                        {credit.name}
                    </a>
                );
            }
            return credit.name;
        }),
        docsURI: extension.docs ? `${source.baseURL}${extension.slug || extension.URL || extension.url || extension.extensionURL || extension.code}` : null,
    samples: extension.samples ? extension.samples.map(sample => ({
        href: `${process.env.ROOT}editor?project_url=${source.baseSamplesURL}${encodeURIComponent(sample)}.sb3`,
        text: sample
    })) : null,
    featured: true
});

const mapPackExtension = (extension, pack) => ({
    name: extension.name || extension.eid,
    nameTranslations: extension.nameTranslations || {},
    description: extension.description || '',
    descriptionTranslations: extension.descriptionTranslations || {},
    extensionId: extension.id || extension.extensionId || extension.eid,
    extensionURL: resolveURL(
        extension.slug.endsWith('.js') ? extension.slug : `${extension.slug || extension.URL || extension.url || extension.extensionURL || extension.code}.js`,
        pack.information.source
    ),
    iconURL: extension.image ? resolveURL(extension.image || extension.cover || extension.thumb || extension.banner || extension.iconURL, pack.information.source) : defaultExtensionBanner,
	insetIconURL: defaultICON,
    tags: [pack.information.tag],
    credits: [
        ...(extension.original || []),
        ...(extension.by || [])
    ].map(credit => (credit.link ? (
        <a
            href={credit.link}
            target="_blank"
            rel="noreferrer"
            key={credit.name}
        >
            {credit.name}
        </a>
    ) : credit.name)),
    docsURI: extension.docs ? resolveURL(extension.slug, pack.information.source) : null,
    samples: extension.samples ? extension.samples.map(sample => ({
        href: `${process.env.ROOT}editor?project_url=${encodeURIComponent(
            resolveURL(`samples/${sample}.sb3`, pack.information.source)
        )}`,
        text: sample
    })) : null,
    incompatibleWithScratch: !extension.scratchCompatible,
    featured: true
});

const preparePack = (packURL, pack, error) => ({
    url: packURL,
    name: pack.information.name,
    tag: pack.information.tag,
    extensions: pack.extensions.map(extension => mapPackExtension(extension, pack)),
    error
});

const fetchPack = async packURL => {
    try {
        const res = await fetch(packURL);
        if (!res.ok) throw new Error(`[extension pack] HTTP status ${res.status}`);
        const pack = validatePack(await res.json(), packURL);
        setCachedPack(packURL, pack);
        return preparePack(packURL, pack, null);
    } catch (error) {
        const cachedPack = getCachedPack(packURL);
        if (!cachedPack) throw error;
        const pack = validatePack(cachedPack, packURL);
        log.warn(`[extension pack] Using saved copy of ${packURL}`, error);
        return preparePack(packURL, pack, 'Offline — using saved copy');
    }
};

const fetchSavedPacks = async () => {
    const packURLs = getPackURLs();
    const results = await Promise.allSettled(packURLs.map(fetchPack));
    const packs = [];
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            packs.push(result.value);
        } else {
            log.error(result.reason);
            packs.push({
                url: packURLs[index],
                name: packURLs[index],
                tag: '',
                extensions: [],
                error: result.reason.message
            });
        }
    });
    return packs;
};

let cachedPacks = [];
const initialPackLoad = fetchSavedPacks().then(packs => {
    const savedPackURLs = new Set(getPackURLs());
    cachedPacks = packs.filter(pack => savedPackURLs.has(pack.url));
    return packs;
});

let cachedGalleryBySource = null;
let externalGalleryListenerAttached = false;

const fetchLibrary = async () => {
    const results = await Promise.allSettled(gallerySources.map(async source => {
        const res = await fetch(source.metadataURL);
        if (!res.ok) {
            throw new Error(`[${source.id}] HTTP status ${res.status}`);
        }
        const data = await res.json();
        return data.extensions.map(extension => mapGalleryExtension(extension, source));
    }));

    const extensionIds = new Set();
    const galleryBySource = {};

    for (const [index, result] of results.entries()) {
        const source = gallerySources[index];

        if (result.status === 'fulfilled') {
            const extensions = [];
            for (const extension of result.value) {
                // Keep first occurrence, so PotentiaMod wins when IDs overlap.
                if (!extensionIds.has(extension.extensionId)) {
                    extensionIds.add(extension.extensionId);
                    extensions.push(extension);
                }
            }
            galleryBySource[source.id] = {
                status: 'success',
                extensions
            };
        } else {
            log.error(result.reason);
            galleryBySource[source.id] = {
                status: 'error',
                error: result.reason,
                extensions: []
            };
        }
    }

    return galleryBySource;
};

class ExtensionLibrary extends React.PureComponent {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleItemSelect',
			'wrapperEventHandler',
            'handleAddPack',
            'handleAddExtension',
            'handleRemoveExtension',
            'handleRemovePack',
            'handleReorderExtensions',
            'handleReorderPacks',
            'handleOpenManager',
            'handleCloseManager'
        ]);
		this.pendingExtensions = new Set();
        this.state = {
            galleryBySource: cachedGalleryBySource,
            galleryTimedOut: false,
            packs: cachedPacks,
            individualExtensions: getIndividualExtensions(),
            managerVisible: false,
            managerError: ''
        };
    }
    componentDidMount () {
		 initialPackLoad.then(packs => {
            this.setState(state => {
                const savedPackURLs = getPackURLs();
                const packsByURL = new Map([
                    ...packs.map(pack => [pack.url, pack]),
                    ...state.packs.map(pack => [pack.url, pack])
                ]);
                const currentPacks = savedPackURLs
                    .map(url => packsByURL.get(url))
                    .filter(Boolean);
                cachedPacks = currentPacks;
                return {packs: currentPacks};
            });
        });
		this.unsubscribeGalleryUpdate = addGalleryUpdateListener(newGallery => {
            this.setState({ gallery: newGallery });
        });
		
		if (!externalGalleryListenerAttached) {
            window.addEventListener('message', this.wrapperEventHandler);
        }
		
        if (!this.state.galleryBySource) {
            const timeout = setTimeout(() => {
                this.setState({
                    galleryTimedOut: true
                });
            }, 750);

            fetchLibrary()
                .then(galleryBySource => {
                    cachedGalleryBySource = galleryBySource;
                    this.setState({
                        galleryBySource
                    });
                    clearTimeout(timeout);
                })
                .catch(error => {
                    log.error(error);
                    clearTimeout(timeout);
                });
        }
    }

	componentWillUnmount() {
        if (this.unsubscribeGalleryUpdate) {
            this.unsubscribeGalleryUpdate();
        }
    }
	
	async handleAddPack (value) {
        if (!value) return;
        try {
            const url = new URL(value.trim()).href;
            const pack = await fetchPack(url);
            addPackURL(url);
            this.setState(state => ({
                packs: [...state.packs.filter(item => item.url !== url), pack],
                managerError: ''
            }), () => {
                cachedPacks = this.state.packs;
            });
        } catch (error) {
            log.error(error);
            this.setState({managerError: `Could not add extension pack: ${error.message}`});
        }
    }
    handleRemovePack (url) {
        removePackURL(url);
        this.setState(state => ({packs: state.packs.filter(item => item.url !== url)}), () => {
            cachedPacks = this.state.packs;
        });
    }
    async handleAddExtension (extension) {
        const name = extension.name.trim();
        try {
            if (!name) throw new Error('Enter a display name.');
            let url;
            let source;
            if (extension.type === 'url') {
                url = new URL(extension.url.trim()).href;
                if (!/^https?:$/.test(new URL(url).protocol)) throw new Error('Enter an HTTP(S) extension URL.');
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Extension returned HTTP ${response.status}.`);
                source = await response.text();
            } else {
                source = extension.source;
                if (!source) throw new Error('Choose a JavaScript file or paste extension code.');
                url = `data:application/javascript,${encodeURIComponent(source)}`;
            }
            const id = getExtensionId(source);
            const item = {name, id, url, sourceType: extension.type, fileName: extension.fileName};
            const individualExtensions = [
                ...this.state.individualExtensions.filter(oldItem => oldItem.id !== id && oldItem.url !== url),
                item
            ];
            setIndividualExtensions(individualExtensions);
            this.setState({individualExtensions, managerError: ''});
        } catch (error) {
            this.setState({managerError: `Could not add extension: ${error.message}`});
        }
    }
    handleRemoveExtension (url) {
        this.setState(state => {
            const individualExtensions = state.individualExtensions.filter(item => item.url !== url);
            setIndividualExtensions(individualExtensions);
            return {individualExtensions};
        });
    }
    handleReorderPacks (fromIndex, toIndex) {
        this.setState(state => {
            const packs = [...state.packs];
            const [pack] = packs.splice(fromIndex, 1);
            packs.splice(toIndex, 0, pack);
            setPackURLs(packs.map(item => item.url));
            cachedPacks = packs;
            return {packs};
        });
    }
    handleReorderExtensions (fromIndex, toIndex) {
        this.setState(state => {
            const individualExtensions = [...state.individualExtensions];
            const [extension] = individualExtensions.splice(fromIndex, 1);
            individualExtensions.splice(toIndex, 0, extension);
            setIndividualExtensions(individualExtensions);
            return {individualExtensions};
        });
    }
    handleOpenManager () {
        this.setState({managerVisible: true, managerError: ''});
    }
    handleCloseManager () {
        this.setState({managerVisible: false, managerError: ''});
    }
	
    handleItemSelect (item) {
		
		if (item.isBuggy && !confirm(this.props.intl.formatMessage(messages.bugWarning))) {
            return;
        }
        // eslint-disable-next-line no-alert
        if (item.extensionWarningOnImport && !confirm(this.props.intl.formatMessage(messages.extensionWarning))) {
            return;
        }
		
        if (item.href) {
            return;
        }

	   
        const extensionId = item.extensionId;
		
		
        if (extensionId === 'custom_extension'){
            this.props.onOpenCustomExtensionModal();
            return;
        }	
		
		if (extensionId === 'procedures_enable_return') {
            this.props.onEnableProcedureReturns();
            this.props.onCategorySelected('myBlocks');
            return;
        }

        const url = item.extensionURL ? item.extensionURL : extensionId;
        if (!item.disabled || !item.comingSoon) {
			//Disabled this below because how stupid GaiaMod fans are thinking of trusting extensions.
			//if (item.extensionURL) manuallyTrustExtension(url);
            if (this.props.vm.extensionManager.isExtensionLoaded(extensionId)) {
                this.props.onCategorySelected(extensionId);
            } else {
                this.props.vm.extensionManager.loadExtensionURL(url)
                    .then(() => {
                        this.props.onCategorySelected(extensionId);
                    })
                    .catch(err => {
                        log.error(err);
                        // eslint-disable-next-line no-alert
                        alert(err);
                    });
            }
        }
    }
	
	async wrapperEventHandler(e) {
        /**
         * External gallery support.
         * 
         * Supports galleries outside the editor to automatically load extensions without
         * having to manually input the extension code.
         */
        // Don't recursively try to run this event.
        if (e.origin === window.origin) return;


       /*
        // 'isTrustedExtension' checks the extension url.
        if (!isTrustedExtension(e.origin)) {
            e.source.postMessage({
                p4: {
                    type: 'error',
                    error: 'not_trusted'
                }
            }, e.origin);
            return;
        }
		*/

        const extensionSource = e.data.loadExt;
        if (!extensionSource || typeof extensionSource !== 'string') {
            e.source.postMessage({
                p4: {
                    type: 'error',
                    error: 'no_extension_source_string'
                }
            }, e.origin);
            return;
        }

        // Load the extension like any other custom extension url (this means sandboxing for some urls)
        if (
            this.props.vm.extensionManager.isExtensionLoaded(extensionSource) ||
            this.props.vm.extensionManager.workerURLs.includes(extensionSource)
        ) {
            this.props.onCategorySelected(extensionSource);
            e.source.postMessage({
                p4: {
                    type: 'success'
                }
            }, e.origin);
        } else {
            if (this.pendingExtensions.has(extensionSource)) {
                // Prevent dual loading.
                return;
            }

            this.pendingExtensions.add(extensionSource);
            this.props.vm.extensionManager.loadExtensionURL(extensionSource)
                .then(() => {
                    this.pendingExtensions.delete(extensionSource);
                    this.props.onCategorySelected(extensionSource);
                    e.source.postMessage({
                        p4: {
                            type: 'success'
                        }
                    }, e.origin);
                })
                .catch(err => {
                    log.error(err);
                    // The source website is expected to display the error
                    e.source.postMessage({
                        p4: {
                            type: 'error',
                            error: 'couldnt_load',
                            pmerror: String(err.stack ? err.stack : err)
                        }
                    }, e.origin);
                });
        }
    }
	
    render () {
        let library = null;
		let tags = extensionTags;
        if (this.state.galleryBySource || this.state.galleryTimedOut) {
            library = extensionLibraryContent.map(toLibraryItem);

            const locale = this.props.intl.locale;
			
			 tags = [
                ...extensionTags,
                {tag: 'individual', intlLabel: 'Individual'},
                ...this.state.packs
                    .filter(pack => pack.tag)
                    .map(pack => ({tag: pack.tag, intlLabel: pack.name}))
            ];

            library = extensionLibraryContent.map(toLibraryItem);
            library.push('---');

            for (const source of gallerySources) {
                const sourceGallery = this.state.galleryBySource ? this.state.galleryBySource[source.id] : null;
                const sourceStatusItems = galleryStatusItems[source.id];

                const extensionsToExclude = [
                    'polzovatel8787dashApi'
                ];

                if (sourceGallery && sourceGallery.status === 'success') {
                    library.push(toLibraryItem(sourceStatusItems.more));
                    library.push(
                        ...sourceGallery.extensions
                            .filter(i => !extensionsToExclude.includes(i.extensionId))
                            .map(i => translateGalleryItem(i, locale))
                            .map(toLibraryItem)
                    );
                } else if (sourceGallery && sourceGallery.status === 'error') {
                    library.push(toLibraryItem(sourceStatusItems.error));
                } else {
                    library.push(toLibraryItem(sourceStatusItems.loading));
                }

                library.push('---');
            }
			
			if (this.state.individualExtensions.length) {
                library.push(...this.state.individualExtensions.map(extension => toLibraryItem({
                    name: extension.name,
                    description: '',
                    extensionId: extension.id,
                    extensionURL: extension.url,
                    iconURL: defaultExtensionBanner,
                    tags: ['individual'],
                    incompatibleWithScratch: true,
                    featured: true
                })));
                library.push('---');
            }

            for (const pack of this.state.packs) {
                if (!pack.extensions.length) continue;
                library.push(...pack.extensions
                    .map(i => translateGalleryItem(i, locale))
                    .map(toLibraryItem));
                library.push('---');
            }

            if (library[library.length - 1] === '---') {
                library.pop();
            }
        }
		
		   if (this.state.managerVisible) {
            return (
                <ExtensionPackManager
                    error={this.state.managerError}
                    extensions={this.state.individualExtensions}
                    packs={this.state.packs}
                    onAddExtension={this.handleAddExtension}
                    onAddPack={this.handleAddPack}
                    onClose={this.handleCloseManager}
                    onRemoveExtension={this.handleRemoveExtension}
                    onRemovePack={this.handleRemovePack}
                    onReorderExtensions={this.handleReorderExtensions}
                    onReorderPacks={this.handleReorderPacks}
                />
            );
        }

        return (
            <LibraryComponent
                data={library}
                filterable
                persistableKey="extensionId"
                id="extensionLibrary"
                tags={tags}
                onTagManager={this.handleOpenManager}
                header={this.props.intl.formatMessage(messages.header)}
                title={this.props.intl.formatMessage(messages.extensionTitle)}
                visible={this.props.visible}
                onItemSelected={this.handleItemSelect}
                onRequestClose={this.props.onRequestClose}
            />
        );
    }
}

ExtensionLibrary.propTypes = {
    intl: intlShape.isRequired,
    onCategorySelected: PropTypes.func,
    onOpenCustomExtensionModal: PropTypes.func,
    onOpenCustomGalleryModal: PropTypes.func,
    onTagManager: PropTypes.func,
    onRequestClose: PropTypes.func,
    visible: PropTypes.bool,
    vm: PropTypes.instanceOf(VM).isRequired // eslint-disable-line react/no-unused-prop-types
};

export default injectIntl(ExtensionLibrary);

export {
    updateGallery
};