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
import extensionTags from '../lib/libraries/tw-extension-tags';

import LibraryComponent from '../components/library/library.jsx';
import extensionIcon from '../components/action-menu/icon--sprite.svg';

const updateGallery = newGallery => {
    cachedGallery = newGallery;
    galleryUpdateListeners.forEach(listener => listener(newGallery));
};

let galleryUpdateListeners = [];

const CCW_EXTENSION_API_BASE = 'https://ccwbfs-proxy.netlify.app/extensions';

const CCW_METADATA_CACHE = {};

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
        tag: 'potentia'
    },		
    {
        id: 'turbowarp',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/turbowarp/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/turbowarp/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/turbowarp/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/tw-extensions.json',
        tag: 'tw'
    },
    {
        id: 'nitrobolt',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/nitrobolt/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/nitrobolt/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/nitrobolt/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/nb-extensions.json',
        tag: 'nb'
    },
    {
        id: 'astraeditor',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/astraeditor/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/astraeditor/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/astraeditor/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/ae-extensions.json',
        tag: 'ae'
    },	
	{
        id: 'zerotwoengine',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/zerotwoengine/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/zerotwoengine/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/zerotwoengine/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/ztengine-extensions.json',
        tag: 'ztengine'
    },	
    {
        id: 'bilup',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/bilup/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/bilup/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/bilup/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/bilup-extensions.json',
        tag: 'bilup'
    },	
	{
        id: 'mistium',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/mistium/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/mistium/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/mistium/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/mist-extensions.json',
        tag: 'mist'
    },
	{
        id: 'dash',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/dash/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/dash/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/dash/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/dash-extensions.json',
        tag: 'dash'
    },
	{
        id: 'sharkpool',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/sharkpool/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/sharkpool/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/sharkpool/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/sp-extensions.json',
        tag: 'sp'
    },
    {
        id: 'penguinmod',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/penguinmod/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/penguinmod/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/penguinmod/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/pm-extensions.json',
        tag: 'pm'
    },
	{
        id: 'snailide',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/snailide/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/snailide/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/snailide/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/sn-extensions.json',
        tag: 'sn'
    },
	{
        id: 'dinosaurmod',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/dinosaurmod/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/dinosaurmod/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/dinosaurmod/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/dm-extensions.json',
        tag: 'dm'
    },
	{
        id: 'electramod',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/electramod/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/electramod/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/electramod/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/em-extensions.json',
        tag: 'em'
    },
	{
        id: 'arkide',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/arkide/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/arkide/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/arkide/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/ark-extensions.json',
        tag: 'ark'
    },
    {
        id: 'gaiamod',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/gaiamod/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/gaiamod/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/gaiamod/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/gm-extensions.json',
        tag: 'gaia'
    },
	{
        id: 'other',
        baseURL: 'https://potentiamod.github.io/extensions/extensions/other/',
        baseImageURL: 'https://potentiamod.github.io/extensions/img/other/',
        baseSamplesURL: 'https://potentiamod.github.io/extensions/samples/other/',
        metadataURL: 'https://potentiamod.github.io/extensions/data/metadata/other-extensions.json',
        tag: 'other'
    }
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
    name: extension.name,
    nameTranslations: extension.nameTranslations || {},
    description: extension.description,
    descriptionTranslations: extension.descriptionTranslations || {},
    extensionId: extension.id,
    extensionURL: `${source.baseURL}${extension.slug}.js`,
    iconURL: `${source.baseImageURL}${extension.image || 'placeholder.png'}`,
    tags: [source.tag],
    credits: [
            ...(extension.original || []),
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
    docsURI: extension.docs ? `${source.baseURL}${extension.slug}` : null,
    samples: extension.samples ? extension.samples.map(sample => ({
        href: `${process.env.ROOT}editor?project_url=${source.baseSamplesURL}${encodeURIComponent(sample)}.sb3`,
        text: sample
    })) : null,
    featured: true
});

const toCCWGalleryItem = (item) => {
    const credits = [];
    if (item.publisher) {
        if (item.publisher.nickname) {
            const oid = item.publisher.oid || item.publisher._id || item.publisher.id || '';
            if (oid) {
                credits.push(
                    <a href={`https://www.ccw.site/student/${oid}`} target="_blank" rel="noreferrer" key={oid}>
                        {item.publisher.nickname}
                    </a>
                );
            } else {
                credits.push(item.publisher.nickname);
            }
        }
    }
    return {
        name: item.name || item.eid || 'Unknown extension',
        nameTranslations: {},
        description: item.description || 'Not available.',
        descriptionTranslations: {},
        extensionId: `ccw_${item.eid || item.id}`,
        extensionURL: null,
        iconURL: item.cover || 'https://placehold.co/600x310/f5f5f5/111111?text=No+Cover',
        tags: ['ccw'],
        credits,
        docsURI: null,
        samples: null,
        incompatibleWithScratch: false,
        featured: true,
        _ccwMeta: {
            eid: item.eid,
            id: item.id,
            publisher: item.publisher,
            stats: item.stats,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            versions: item.versions,
            activeVersionId: item.activeVersionId
        }
    };
};

let cachedGalleryBySource = null;

const fetchCCWItemMetadata = async (eid) => {
    if (CCW_METADATA_CACHE[eid]) {
        return CCW_METADATA_CACHE[eid];
    }
    const response = await fetch(`${CCW_EXTENSION_API_BASE}/${encodeURIComponent(eid)}`);
    if (!response.ok) {
        throw new Error(`CCW metadata HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const metadata = data?.body || data;
    if (!metadata || !Array.isArray(metadata.versions) || !metadata.versions.length) {
        throw new Error('No versions found for this CCW extension.');
    }
    if (!metadata.versions[0]?.assetUri) {
        throw new Error('The latest version does not include an asset URL.');
    }
    CCW_METADATA_CACHE[eid] = metadata;
    return metadata;
};

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

const fetchCCWExtensions = async (name, sortField, page, perPage) => {
	
    let requestUrl = `${CCW_EXTENSION_API_BASE}?page=${page || 1}&perPage=${perPage || 30}&sortField=${sortField || 'updatedAt'}&sortType=DESC`;
    if (name) {
        requestUrl += `&name=${encodeURIComponent(name)}`;
    }
    const response = await fetch(requestUrl);
    if (!response.ok) {
        throw new Error(`CCW API HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    if (json?.body?.data) {
        const body = json.body;
        return {
            items: body.data,
            total: body.total || body.totalCount || body.count || null,
            page: body.page || page || 1,
            perPage: body.perPage || perPage || 30
        };
    }
    throw new Error('CCW API response format unexpected');
};


class ExtensionLibrary extends React.PureComponent {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleItemSelect'
        ]);
        this.state = {
            galleryBySource: cachedGalleryBySource,
            galleryTimedOut: false
        };
    }
    componentDidMount () {
		this.unsubscribeGalleryUpdate = addGalleryUpdateListener(newGallery => {
            this.setState({ gallery: newGallery });
        });
		
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
        this.fetchAndSetCCWItems('', 'likeCount', 1);
    }
    async fetchAndSetCCWItems (name, sortField, page = 1) {
        this.setState({ccwLoading: true});
        try {
            const result = await fetchCCWExtensions(name, sortField, page, this.state.ccwPerPage);
            const rawItems = Array.isArray(result.items) ? result.items : [];
            const ccwItems = rawItems.map(item => toCCWGalleryItem(item));
            const hasMore = typeof result.total === 'number' ?
                (page * result.perPage) < result.total :
                rawItems.length >= result.perPage;
            this.setState({
                ccwItems,
                ccwLoading: false,
                ccwPage: page,
                ccwHasMore: hasMore,
                ccwTotal: result.total
            });
        } catch (err) {
            log.error(err);
            this.setState({ccwItems: [], ccwLoading: false, ccwHasMore: false, ccwTotal: null});
        }
    }
	
	componentWillUnmount() {
        if (this.unsubscribeGalleryUpdate) {
            this.unsubscribeGalleryUpdate();
        }
    }
	
    handleItemSelect (item) {
        if (item.href) {
            return;
        }

        const openCCWInsert = async (id,version,url) => {
			try{
				id=id??prompt("Enter CCW extension ID");
				if(id===null) return null;
				let res=await fetch("https://bfs-web.ccw.site/extensions/"+id);
				if(!res.ok) throw"Retrieval failed!";
				let json=await res.json();
				let versions=json.body.versions;
				version=version??prompt("Enter the version to obtain.",versions[0].version);
				if(version===null) return null;
				let assets=versions.filter(asset=>asset.version===version);
				if(assets.length!=1) if(confirm("Search failed!")) return await this.openCCWInsert.call(this,id);
				url=url??prompt("Load the extension immediately?",assets[0].assetUri);
				if(url===null) return null;
				return this.load.call(this, url);
			}
			catch(e){
				if(confirm(e.message)) return await this.openCCWInsert.call(this);
			}
	   };
	   
        const extensionId = item.extensionId;
		


        if (extensionId === 'custom_extension') {
            this.props.onOpenCustomExtensionModal();
            return;
        }
		
		if (extensionId === 'custom_gallery') {
            if (this.props.onOpenCustomGalleryModal) {
                this.props.onOpenCustomGalleryModal();
            }
            return;
        }
		

		 // Handle CCW gallery items: fetch metadata and load extension
        if (item._ccwMeta && item._ccwMeta.eid) {
            const ccwEid = item._ccwMeta.eid;
            fetchCCWItemMetadata(ccwEid)
                .then(metadata => {
                    const versions = Array.isArray(metadata.versions) ? metadata.versions : [];
                    const selectedVersion = versions[0];
                    if (!selectedVersion?.assetUri) {
                        throw new Error('No valid asset URL found for this CCW extension.');
                    }
                    const url = item.assetUri ? item.assetUri : ccwEid;
                    if (!item.disabled) {
                        this.props.onCategorySelected(ccwEid);
                    } else {
                        this.props.vm.extensionManager.loadExtensionURL(assetUri)
                            .then(() => {
                                if (this.props.onCategorySelected) {
                                    this.props.onCategorySelected(ccwEid);
                                }
                            })
                            .catch(err => {
                                log.error(err);
                                // eslint-disable-next-line no-alert
                                alert(err);
                            });
                    }
                })
                .catch(err => {
                    log.error(err);
                    // eslint-disable-next-line no-alert
                    alert(err || String(err));
                });
            return;
        }

        const url = item.extensionURL ? item.extensionURL : extensionId;
        if (!item.disabled) {
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
    render () {
        let library = null;
        if (this.state.galleryBySource || this.state.galleryTimedOut) {
            library = extensionLibraryContent.map(toLibraryItem);
            library.push('---');

            const locale = this.props.intl.locale;

            for (const source of gallerySources) {
                const sourceGallery = this.state.galleryBySource ? this.state.galleryBySource[source.id] : null;
                const sourceStatusItems = galleryStatusItems[source.id];

                const extensionsToExclude = [
                    'faceSensing',
                    'fetch',
                    'fullscreen0419',
                    'images',
                    'lmsCast',
                    'lmscomments',
                    'lmsHackedBlocks',
                    'lmsmcutils',
                    'lmsutilsblocks',
                    'RixxyX',
                    'ShovelUtils',
                    'shreder95resolution',
                    'skyhigh173JSON'
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

            if (library[library.length - 1] === '---') {
                library.pop();
            }
        }

        return (
            <LibraryComponent
                data={library}
                filterable
                persistableKey="extensionId"
                id="extensionLibrary"
                tags={extensionTags}
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
    onRequestClose: PropTypes.func,
    visible: PropTypes.bool,
    vm: PropTypes.instanceOf(VM).isRequired // eslint-disable-line react/no-unused-prop-types
};

export default injectIntl(ExtensionLibrary);