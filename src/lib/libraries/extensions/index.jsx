import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import faceSensingIconURL from './faceSensing/face-sensing.svg';
import faceSensingInsetIconURL from './faceSensing/face-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';


import ptIcon from './tw/pt.png';
import TWgalleryIcon from './gallery/TWgallery.svg';
import returnIcon from './custom/return.svg';
import customExtensionIcon from './custom/custom.svg';
import galleryIconNB from './gallery/gallery-nb.svg';
import galleryIconDash from './dashblocks/gallery.svg';
import galleryIconMist from './mistium/library.svg';
import galleryIconMW from './gallery/gallery-mw.png';;
import galleryIconTW from './gallery/gallery-tw.svg';
import galleryIconPT from './gallery/gallery.png';

import galleryIconPM from './penguinmod/library.svg';
import galleryIconDM from './dinosaurmod/gallery.svg';
import galleryIconGM from './gaiamod/gallery.png';

import {APP_NAME} from '../../brand';

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Face Sensing"
                description="Name for the 'Face Sensing' extension"
                id="tw.extension.faceSensing.name"
            />
        ),
        extensionId: 'faceSensing',
        extensionURL: 'https://extensions.turbowarp.org/lab/face-sensing.js',
        iconURL: faceSensingIconURL,
        insetIconURL: faceSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense faces with the camera."
                description="Description for the 'Face Sensing' extension"
                id="tw.extension.faceSensing.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        tags: ['scratch'],
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        tags: ['scratch'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
	 {
        name: 'App Utilities',
        extensionId: 'appmaker',
        iconURL: 'https://gaiamod-main.github.io/static/assets/ab0f9df0edc8698e6e01580a343b5423.svg',
		insetIconURL: 'https://gaiamod-main.github.io/static/assets/7698093467c8a39f4d05107e7c979c06.svg',
        tags: ['other', 'preload'],
		collaborator: 'LibreKitten',
        description: 'Develop apps in PotentiaMod.',
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="{APP_NAME} Blocks"
                description="Name of the strange 'NitroBolt Blocks' extension"
                id="tw.twExtension.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'tw',
        iconURL: ptIcon,
        description: (
            <FormattedMessage
                defaultMessage="Weird new blocks."
                description="Description of the strange 'PotentiaMod Blocks' extension"
                id="tw.twExtension.description"
            />
        ),
        tags: ['potentia'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of library item to load a custom extension from a remote source"
                id="tw.customExtension.name"
            />
        ),
        extensionId: 'custom_extension',
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions from URLs, files, or JavaScript source code."
                description="Description of library item to load a custom extension from a custom source"
                id="tw.customExtension.description"
            />
        ),
        tags: ['potentia'],
        featured: true
        // Not marked as incompatible with Scratch so that clicking on it doesn't show a prompt
    },
		 {
        name: 'PotentiaMod Extension Bonanza!',
        extensionId: 'potentiaGallery',
		href: 'https://potentiamod.github.io/extensions/',
        iconURL: galleryIconPT,
        tags: ['potentia'],
        description: 'See the glory of extensions!',
        featured: true
    },
];

const gallerySourceDisplay = {
    turbowarp: {
        name: 'TurboWarp Extension Gallery',
        href: 'https://extensions.turbowarp.org/',
        iconURL: galleryIconTW,
        tag: 'tw'
    },
	 nitrobolt: {
        name: 'NitroBolt Extension Gallery',
        href: 'https://extensions.nitrobolt.org/',
        iconURL: galleryIconNB,
        tag: 'nb'
    },
	 mistium: {
        name: 'Mistium Extension Gallery',
        href: 'https://extensions.mistium.com/',
        iconURL: galleryIconMist,
        tag: 'mist'
    },
    astraeditor: {
        name: 'AstraEditor Extension Gallery',
        href: 'https://editors.astras.top/extensions/',
        iconURL: 'https://github.com/AstraEditor/scratch-gui/blob/develop/src/lib/libraries/extensions/gallery/aegallery.png?raw=true',
        tag: 'ae'
    },
    bilup: {
        name: 'Bilup Extension Gallery',
        href: 'https://extensions.bilup.org/',
        iconURL: 'https://editor.bilup.org/static/assets/5b5e7dd645a0e3891de6e5d937cca6a6.svg',
        tag: 'bilup'
    },
	 dash: {
        name: 'Dash Extension Gallery',
        href: 'https://dashblocks.org/extensions/',
        iconURL: galleryIconDash,
        tag: 'dash'
    },
    penguinmod: {
        name: 'PenguinMod Extra Extensions',
        href: 'https://extensions.penguinmod.com/',
        iconURL: galleryIconPM,
        tag: 'pm'
    },
	dinosaurmod: {
        name: 'DinosaurMod Extra Extensions',
        href: 'https://dinosaurmod.github.io/extensions/',
        iconURL: galleryIconDM,
        tag: 'dm'
    },
    gaiamod: {
        name: 'GaiaMod Extra Extensions',
        href: 'https://gaiamod-main.github.io/GaiaMod-ExtensionsGallery/',
        iconURL: galleryIconGM,
        tag: 'gaia'
    }
};

const createGalleryStatusItem = (sourceId, description) => {
    const source = gallerySourceDisplay[sourceId];
    return {
        name: source.name,
        href: source.href,
        extensionId: `gallery_${sourceId}`,
        iconURL: source.iconURL,
        description,
        tags: [source.tag],
        featured: true
    };
};

export const galleryStatusItems = {
    turbowarp: {
        loading: createGalleryStatusItem('turbowarp', 'Loading TurboWarp extension gallery...'),
        more: createGalleryStatusItem('turbowarp', 'Learn more about extensions at extensions.turbowarp.org.'),
        error: createGalleryStatusItem('turbowarp', 'Error loading TurboWarp extension gallery. Visit extensions.turbowarp.org to find more extensions.')
    },
    nitrobolt: {
        loading: createGalleryStatusItem('nitrobolt', 'Loading NitroBolt extension gallery...'),
        more: createGalleryStatusItem('nitrobolt', 'Learn more about extensions at extensions.nitrobolt.org.'),
        error: createGalleryStatusItem('nitrobolt', 'Error loading NitroBolt extension gallery. Visit extensions.nitrobolt.org to find more extensions.')
    },
    astraeditor: {
        loading: createGalleryStatusItem('astraeditor', 'Loading AstraEditor extension gallery...'),
        more: createGalleryStatusItem('astraeditor', 'Learn more about extensions at editors.astras.top/extensions.'),
        error: createGalleryStatusItem('astraeditor', 'Error loading AstraEditor extension gallery. Visit editors.astras.top/extensions to find more extensions.')
    },
    bilup: {
        loading: createGalleryStatusItem('bilup', 'Loading Bilup extension gallery...'),
        more: createGalleryStatusItem('bilup', 'Learn more about extensions at extensions.bilup.org.'),
        error: createGalleryStatusItem('bilup', 'Error loading Bilup extension gallery. Visit extensions.bilup.org to find more extensions.')
    },
    mistium: {
        loading: createGalleryStatusItem('mistium', 'Loading Mistium extension gallery...'),
        more: createGalleryStatusItem('mistium', 'Learn more about Mistium at extensions.mistium.com.'),
        error: createGalleryStatusItem('mistium', 'Error loading Mistium extension gallery. Visit extensions.mistium.com to find more extensions.')
    },
	dash: {
        loading: createGalleryStatusItem('dash', 'Loading Dash extension gallery...'),
        more: createGalleryStatusItem('dash', 'Learn more about extensions at dashblocks.org/extensions.'),
        error: createGalleryStatusItem('dash', 'Error loading Dash extension gallery. Visit dashblocks.org/extensions to find more extensions.')
    },
    penguinmod: {
        loading: createGalleryStatusItem('penguinmod', 'Loading PenguinMod Extra Extensions...'),
        more: createGalleryStatusItem('penguinmod', 'See some user-submitted extensions.'),
        error: createGalleryStatusItem('penguinmod', 'Error loading PenguinMod Extra Extensions.')
    },
	dinosaurmod: {
        loading: createGalleryStatusItem('dinosaurmod', 'Loading DinosaurMod Extra Extensions...'),
        more: createGalleryStatusItem('dinosaurmod', 'See some user-submitted extensions.'),
        error: createGalleryStatusItem('dinosaurmod', 'Error loading DinosaurMod Extra Extensions.')
    },
    gaiamod: {
        loading: createGalleryStatusItem('gaiamod', 'Loading GaiaMod Extra Extensions...'),
        more: createGalleryStatusItem('gaiamod', 'See some user-submitted extensions.'),
        error: createGalleryStatusItem('gaiamod', 'Error loading GaiaMod Extra Extensions.')
    },
};