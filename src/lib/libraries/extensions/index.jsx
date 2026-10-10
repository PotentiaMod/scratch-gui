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

import customExtensionIcon from './custom/custom.svg';
import customURLIcon from './custom/customURL.svg';


import {APP_NAME} from '../../brand';

let platform = "browsers";
if (window.cordova && window.cordova.platformId !== "browser") {
    platform = window.cordova.platformId;
} else if (navigator.userAgent.indexOf("Electron/") > 0) {
    platform = "electron";
}

const urlParams = new URLSearchParams(location.search);
const IsLocal = String(window.location.href).startsWith(`http://localhost:`);
const IsLiveTests = urlParams.has('livetest');
const IsSecret = urlParams.has('allpowerscombined');
const IsMysterious = urlParams.has('666');

const menuItems = [
    {
        name: 'Custom Extension',
        extensionId: 'custom_extension',
		iconURL: require('../extensions/custom/CustomEx.svg'),
	    insetIconURL: require('../extensions/custom/CustomSmall.svg'),
        description: 'Load custom extensions from URLs, files, or JavaScript source code.',
        tags: ['custom'],
        featured: true
        // Not marked as incompatible with Scratch so that clicking on it doesn't show a prompt
    },
	{
        // not really an extension, but it's easiest to present it as one
        name: (
            <FormattedMessage
                defaultMessage="Custom Reporters"
                description="Name of custom reporters extension"
                id="tw.customReporters.name"
            />
        ),
        extensionId: 'procedures_enable_return',
        iconURL: require('../extensions/custom/return.svg'),
        description: (
            <FormattedMessage
                defaultMessage="Allow custom blocks to output values and be used as inputs."
                description="Description of custom reporters extension"
                id="tw.customReporters.description"
            />
        ),
        tags: ['tw'],
        featured: true
    },
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
	/*
    {
        name: (
            <FormattedMessage
                defaultMessage="Face Sensor"
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
	*/
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
	//Exts
	{
        name: 'Wonder Blocks',
        extensionId: 'wonderblocks',
        iconURL: require('../extensions/gaiamod/WonderBlocks.png'),
	    insetIconURL: require('../extensions/gaiamod/gaiamod_icon.png'),
        tags: ['gm', 'preload'],
        description: 'Some mysterious blocks.',
        collaborator: 'GaiaWindWave90',
        featured: true
    },
	 {
        name: 'App Utilities',
        extensionId: 'appmaker',
        iconURL: require('../extensions/librekitten/appmaker/appmaker.svg'),
	    insetIconURL: require('../extensions/librekitten/appmaker/software-small.svg'),
        tags: ['other', 'preload'],
		collaborator: 'LibreKitten',
        description: 'Develop apps in PotentiaMod.',
        featured: true
    },
	{
        name: 'Cozmo',
        extensionId: 'cozmo',
        tags: ['cognimates', 'preload', 'new'],
		isNew: true,
        iconURL: require('../extensions/cognimates/cozmo-ext.png'),
		insetIconURL: require('../extensions/cognimates/cozmo-small.jpg'),
		collaborator: 'Anki',
        description: 'Play with Cozmo in PotentiaMod.',
        featured: true
    },
	{
        name: 'Tinkibot',
        extensionId: 'tinkibot',
		tags: ['preload', 'new'],
		isNew: true,
        iconURL: require('../extensions/tinkibot/tinkibot.png'),
		insetIconURL: require('../extensions/tinkibot/tinkimo-small.png'),
		collaborator: 'Tinkimo',
        description: 'Control one or more Tinkibots',
        featured: true,
        internetConnectionRequired: false
    },
  {
    name: 'Google Maps',
    extensionId: "googleMap",
    collaborator: "Champierre, TYiC",
	tags: ['preload', 'new'],
	isNew: true,
	iconURL: require('../extensions/googleMap/googleMap.png'),
	insetIconURL: require('../extensions/googleMap/googleMap-small.png'),
    description: 'Display geographic location using the latitude and longitude coordinates (Experimental).',
    featured: true,
    disabled: false,
    internetConnectionRequired: true,
    useAutoScan: false,
    helpLink: "https://github.com/estea8968/scratch3-internet",
  },
	{
        name: 'Ruby',
        extensionId: 'ruby',
        tags: ['preload', 'new'],
		isNew: true,
        iconURL: require('../extensions/smalruby-ruby/smalruby-ruby.svg'),
	    insetIconURL: require('../extensions/smalruby-ruby/smalruby-ruby-small.svg'),
		collaborator: 'SmallRuby',
        description: 'Use Ruby methods in PotentiaMod.',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
    },
	{
        name: 'Alexa',
        extensionId: 'alexa',
        tags: ['cognimates', 'preload', 'new'],
		isNew: true,
        iconURL: require('../extensions/cognimates/Alexa_extension.png'),
		collaborator: 'Amazon',
        description: 'Talk to Alexa in PotentiaMod.',
        featured: true
    },
  {
    name:'Google Sheets',
    extensionId: "rwGoogle",
    collaborator: "estea chen, TYiC",
	tags: ['preload', 'new'],
	isNew: true,
    iconURL: require('../extensions/rwgoogle/rwgoogle.png'),
	insetIconURL: require('../extensions/rwgoogle/clound-small.png'),
    description: 'Read and write Google Sheets and Google Forms.',
    featured: true,
    disabled: false,
    // bluetoothRequired: false,
    internetConnectionRequired: true,
    // launchPeripheralConnectionFlow: false,
    useAutoScan: false,
    helpLink: "https://github.com/estea8968/scratch3-internet",
  },
	{
        name: 'QR Code',
        extensionId: 'qrcode',
        tags: ['preload', 'new'],
		isNew: true,
        collaborator: 'Sugiura Lab',
        iconURL: require('../extensions/qrcode/qrcode.png'),
		insetIconURL: require('../extensions/qrcode/qrcode-small.svg'),
		description: 'Scans things with a QR Code extension.',
        featured: true,
        disabled: false,
        internetConnectionRequired: false,
        bluetoothRequired: false,
    },
	{
    name: "LineNotify",
    extensionId: "linenotify",
    collaborator: "estea chen",
	tags: ['preload', 'new'],
	isNew: true,
    iconURL: require('../extensions/linenotify/linenotify.svg'),
	insetIconURL: require('../extensions/linenotify/linenotify_small.svg'),
    description: "Use Line Notify to send messages.",
    featured: true,
    disabled: false,
    internetConnectionRequired: true,
    bluetoothRequired: false,
    //helpLink: ''
  },
	{
        name: 'KidsBoard',
        extensionId: 'kidsboard',
        collaborator: 'Nekoma Manufacturing',
        iconURL: require('../extensions/kidsboard/kidsboard.svg'),
	    insetIconURL: require('../extensions/kidsboard/kidsboard-small.svg'),
		tags: ['preload', 'new'],
		isNew: true,
        description: 'Connect KidsBoard via Bluetooth to operate the LEDs, buttons, speaker, and sensors.',
        featured: true,
        bluetoothRequired: true
    },
	{
        name: 'EIM Messaging',
        extensionId: 'eim',
        iconURL: require('../extensions/eim/illustration.jpg'),
		insetIconURL: require('../extensions/eim/small.svg'),
        tags: ['preload', 'new'],
		isNew: true,
		collaborator: 'CodeLab',
        description: 'Everything is a mesage! Contains capabilities of all the other extensions.',
        featured: true
    },
{
        name: 'Marty the Robot',
        extensionId: 'marty',
        collaborator: 'Robotical',
        iconURL: require('../extensions/marty/marty.png'),
	    insetIconURL: require('../extensions/marty/marty-small.svg'),
        description: 'Play and program with Marty.',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: true
    },
	{
        name: 'Ohbot',
        extensionId: 'ohbot',
        iconURL: require('../extensions/ohbot/ohbot.png'),
	    insetIconURL: require('../extensions/ohbot/ohbot-small.svg'),
		collaborator: 'Ohbot',
		tags: ['preload'],
        description: 'Control your Ohbot',
        featured: true
    },
	{
        name: 'Line',
        extensionId: 'line',
        collaborator: 'Ankurugranpa',
        iconURL: require('../extensions/line/line.png'),
	    insetIconURL: require('../extensions/line/line-small.png'),
		tags: ['special', 'othermods'],
        description: 'Connect to LINE message API!',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
    }, 
	{
        name: 'Face Emotion Sensing',
        extensionId: 'poseFace',
        tags: ['preload', 'new'],
		isNew: true,
        iconURL: require('../extensions/poseFace/pose-face.png'),
		insetIconURL: require('../extensions/poseFace/pose-face-small.svg'),
		collaborator: 'Raise Playground',
        description: 'Sense face movement with the camera with added emotion detection.',
        featured: true
    },
	{
        name: 'Body Sensing',
        extensionId: 'poseBody',
        tags: ['preload', 'new'],
		isNew: true,
        iconURL: require('../extensions/poseBody/pose-body.png'),
		insetIconURL: require('../extensions/poseBody/pose-body-small.svg'),
		collaborator: 'Raise Playground',
        description: 'Sense body position with the camera.',
        featured: true
    },
	{
        name: 'Hand Sensing',
        extensionId: 'poseHand',
        tags: ['preload', 'new'],
		isNew: true,
        iconURL: require('../extensions/poseHand/pose-hand.png'),
		insetIconURL: require('../extensions/poseHand/pose-hand-small-3.svg'),
		collaborator: 'Raise Playground',
        description: 'Sense hand position with the camera.',
        featured: true
    },
	{
        name: 'Object Detection',
        extensionId: 'objectDetection',
		tags: ['preload', 'new'],
		isNew: true,
        iconURL: require('../extensions/objectDetection/objectdetection.png'),
		insetIconURL: require('../extensions/objectDetection/objectdetectionsmall.svg'),
        description: 'Detect and identify objects in the camera view.',
		collaborator: 'Raise Playground',
        featured: true
    },
	{
    name: "Text Sentiment",
    extensionId: "textSentiment",
    collaborator: "TYiC",
	tags: ['preload', 'new'],
	isNew: true,
    iconURL: require('../extensions/textSentiment/textSentiment.png'),
	insetIconURL: require('../extensions/textSentiment/textSentiment-small.png'),
    description: "Text Sentiment.",
    featured: true,
    disabled: false,
    internetConnectionRequired: true,
    useAutoScan: false,
    helpLink: "https://github.com/estea8968/scratch3-internet",
  },
  	{
        name: 'Smart Lumies',
        extensionId: 'smartLumies',
        collaborator: 'PlusPlus',
        iconURL: require('../extensions/smart-lumies/smart-lumies.png'),
	    insetIconURL: require('../extensions/smart-lumies/smart-lumies-small.svg'),
        description: 'Have fun with Smart Lumies Cube in PotentiaMod!',
		tags: ['preload'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
		connectionIconURL: require('../extensions/smart-lumies/smart-lumies-illustration.svg'),
        connectionSmallIconURL: require('../extensions/smart-lumies/smart-lumies-small.svg'),
        connectionTipIconURL: require('../extensions/smart-lumies/smart-lumies-button-illustration.svg'),
        connectingMessage: 'Have your Cube nearby.',
        helpLink: 'https://smartlumies.com'
    },
	{
        name: 'Magic Blue UU',
        extensionId: 'magicBlueUU',
        collaborator: 'PlusPlus',
        iconURL: require('../extensions/magicBlueUU/magicBlueUU.png'),
	    insetIconURL: require('../extensions/magicBlueUU/magicBlueUU-small.svg'),
		tags: ['preload'],
        description: (
            <FormattedMessage
                defaultMessage='Magic Blue UU extension.'
                description='Description for the Magic Blue UU extension'
                id='gui.extension.magicBlueUU.description'
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectingMessage: (
            <FormattedMessage
                defaultMessage='Connecting'
                description='Have your Magic Blue UU nearby.'
                id='gui.extension.magicBlueUU.connectingMessage'
            />
        )
    },
	{
        name: 'Smart Lights',
        extensionId: 'hue',
        tags: ['cognimates', 'preload', 'new'],
		isNew: true,
        iconURL: require('../extensions/cognimates/Hue_extension.png'),
		collaborator: 'Cognimates',
        description: 'Blocks used for changing and modifying lights.',
        featured: true
    },
	{
        name: 'Feelings',
        extensionId: 'sentiment',
        tags: ['cognimates', 'preload', 'new'],
		isNew: true,
        iconURL: require('../extensions/cognimates/sentiment_ext.png'),
		insetIconURL: require('../extensions/cognimates/sentiment-small.svg'),
		collaborator: 'Cognimates',
        description: 'Detects feelings',
        featured: true
    },
	{
        name: 'Wemo',
        extensionId: 'wemo',
        tags: ['cognimates', 'preload', 'new'],
		isNew: true,
        iconURL: require('../extensions/cognimates/wemo_ext.png'),
		collaborator: 'Cognimates',
        description: 'Play with Wemo in PotentiaMod.',
        featured: true
    },
	{
        name: (
            <FormattedMessage
                defaultMessage="HighClass"
                description="Name of HighClass extension"
                id="sn.hc.name"
            />
        ),
        extensionId: 'hc',
		tags: ['preload', 'new'],
		isNew: true,
		collaborator: 'Cubix Entertainment',
        iconURL: require('../extensions/hc/hc.svg'),
	    insetIconURL: require('../extensions/hc/hc-small.svg'),
        description: (
            <FormattedMessage
                defaultMessage="Special Blocks that make development alot easier. Also compatible with PotentiaMod."
                description="Description of HighClass extension"
                id="sn.hc.description"
            />
        ),
        featured: true,
        incompatibleWithScratch: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Snap"
                description="Name of Snext Audio Player extension"
                id="sn.snap.name"
            />
        ),
        extensionId: 'snap',
		tags: ['preload', 'new'],
		isNew: true,
		collaborator: 'Cubix Entertainment',
        iconURL: require('../extensions/snap/snap.svg'),
	    insetIconURL: require('../extensions/snap/snap-small.svg'),
        description: (
            <FormattedMessage
                defaultMessage="SNext Audio Player or SNAP is an extension developed to allow developers to play audio from an external source."
                description="Description of SNext Audio Player extension"
                id="sn.snap.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
        incompatibleWithScratch: true
    },
	{
        name: (
            <FormattedMessage
                defaultMessage="Robobo"
                description="Robobo 3.0 Extension"
                id="gui.extension.robobo.name"
            />
        ),
        extensionId: 'robobo',
        iconURL: require('../extensions/robobo/robobo.png'),
	    insetIconURL: require('../extensions/robobo/robobo-small.svg'),
		tags: ['preload', 'new'],
		isNew: true,
		collaborator: 'MINT',
        description: (
            <FormattedMessage
                defaultMessage="Robobo extension."
                description="Description for the 'Music' extension"
                id="gui.extension.robobo.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },    
	{
    name: 'LEGO Mario',
    extensionId: 'legoMario',
    collaborator: 'bricklife',
    iconURL: require('../extensions/legomario/legomario.png'),
    insetIconURL: require('../extensions/legomario/legomario-small.svg'),
    description: 'Know what he\'s doing!',
	tags: ['preload', 'new'],
	isNew: true,
    featured: true,
    disabled: false,
    bluetoothRequired: true,
    internetConnectionRequired: true,
    launchPeripheralConnectionFlow: true,
    useAutoScan: true,
    connectionIconURL: require('../extensions/legomario/legomario-illustration.svg'),
    connectionSmallIconURL: require('../extensions/legomario/legomario-small.svg'),
    connectionTipIconURL: require('../extensions/legomario/legomario-button-illustration.svg'),
    connectingMessage: 'Connecting',
    helpLink: 'https://scratch.mit.edu/boost'
    },
	{
    name: 'LEGO Luigi',
    extensionId: 'legoLuigi',
    collaborator: 'bricklife',
    iconURL: require('../extensions/legoluigi/legoluigi.png'),
    insetIconURL: require('../extensions/legoluigi/legoluigi-small.svg'),
    description: 'Know what he\'s doing!',
	tags: ['preload', 'new'],
	isNew: true,
    featured: true,
    disabled: false,
    bluetoothRequired: true,
    internetConnectionRequired: true,
    launchPeripheralConnectionFlow: true,
    useAutoScan: true,
    connectionIconURL: require('../extensions/legoluigi/legoluigi-illustration.svg'),
    connectionSmallIconURL: require('../extensions/legoluigi/legoluigi-small.svg'),
    connectionTipIconURL: require('../extensions/legoluigi/legoluigi-button-illustration.svg'),
    connectingMessage: 'Connecting',
    helpLink: 'https://scratch.mit.edu/boost'
    },
	{
    name: 'LEGO Peach',
    extensionId: 'legoPeach',
    collaborator: 'bricklife',
    iconURL: require('../extensions/legopeach/legopeach.png'),
    insetIconURL: require('../extensions/legopeach/legopeach-small.svg'),
    description: 'Know what she\'s doing!',
	tags: ['preload', 'new'],
	isNew: true,
    featured: true,
    disabled: false,
    bluetoothRequired: true,
    internetConnectionRequired: true,
    launchPeripheralConnectionFlow: true,
    useAutoScan: true,
    connectionIconURL: require('../extensions/legopeach/legopeach-illustration.svg'),
    connectionSmallIconURL: require('../extensions/legopeach/legopeach-small.svg'),
    connectionTipIconURL: require('../extensions/legopeach/legopeach-button-illustration.svg'),
    connectingMessage: 'Connecting',
    helpLink: 'https://scratch.mit.edu/boost'
    },
	{
        name: 'OneGpio Arduino',
        extensionId: 'onegpioArduino',
        collaborator: 'Mr. Y\'s Lab',
        iconURL: require('../extensions/onegpioArduino/onegpioArduino.png'),
	    insetIconURL: require('../extensions/onegpioArduino/onegpioArduino-small.png'),
        description: 'OneGPIOArduino',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'
    },
    {
        name: 'OneGpio Raspberry Pi',
        extensionId: 'onegpioRpi',
        collaborator: 'Mr. Y\'s Lab',
        iconURL: require('../extensions/onegpioRpi/onegpioRpi.png'),
	    insetIconURL: require('../extensions/onegpioRpi/onegpioRpi-small.png'),
        description: 'OneGPIORpi',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio Picoboard',
        extensionId: 'onegpioPicoboard',
        collaborator: 'Mr. Y\'s Lab',
		iconURL: require('../extensions/onegpioPicoboard/onegpioPicoboard.jpg'),
	    insetIconURL: require('../extensions/onegpioPicoboard/onegpioPicoboard-small.png'),
        description: 'OneGPIOPicoboard',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio Playground Express',
        extensionId: 'onegpioCpx',
        collaborator: 'Mr. Y\'s Lab',
		iconURL: require('../extensions/onegpioCpx/onegpioCpx.jpg'),
	    insetIconURL: require('../extensions/onegpioCpx/onegpioCpx-small.png'),
        description: 'OneGPIOCpx',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio RoboHAT MM1',
        extensionId: 'onegpioRoboHAT',
        collaborator: 'Mr. Y\'s Lab',
		iconURL: require('../extensions/onegpioRoboHAT/onegpioRoboHAT.png'),
	    insetIconURL: require('../extensions/onegpioRoboHAT/onegpioRoboHAT-small.png'),
        description: 'OneGPIORoboHAT',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
    {
        name: 'OneGpio Raspberry Pi Pico',
        extensionId: 'onegpioRpiPico',
        collaborator: 'Mr. Y\'s Lab',
		iconURL: require('../extensions/onegpioRpiPico/onegpioRpiPico.png'),
	    insetIconURL: require('../extensions/onegpioRpiPico/onegpioRpiPico-small.png'),
        description: 'onegpioRpiPico',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
	//Champierre
	{
        name: 'ChatGPT2Scratch',
        extensionId: 'chatgpt2scratch',
		iconURL: require('../extensions/chatgpt2scratch/chatgpt2scratch.png'),
	    insetIconURL: require('../extensions/chatgpt2scratch/chatgpt2scratch-small.png'),
        collaborator: 'ichiroc',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Interact with ChatGPT in Scratch!',
        featured: true
    },
    {
        name: 'ML2Scratch',
        extensionId: 'ml2scratch',
		iconURL: require('../extensions/ml2scratch/ml2scratch.png'),
	    insetIconURL: require('../extensions/ml2scratch/ml2scratch-small.png'),
		collaborator: 'champierre',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Lets you train with Machine Learning blocks.',
        featured: true
    },
    {
        name: 'TM2Scratch',
        extensionId: 'tm2scratch',
        iconURL: require('../extensions/tm2scratch/tm2scratch.png'),
	    insetIconURL: require('../extensions/tmpose2scratch/tmpose2scratch.png'),
		collaborator: 'Tsukurusha, YengawaLab and Google',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Lets you train with images and audio.',
        featured: true
    },
    {
        name: 'TMPose2Scratch',
        extensionId: 'tmpose2scratch',
        iconURL: require('../extensions/tmpose2scratch/tmpose2scratch.png'),
	    insetIconURL: require('../extensions/tmpose2scratch/tmpose2scratch-small.png'),
		collaborator: 'champierre',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Lets you train with poses.',
        featured: true
    },
    {
        name: 'HandPose2Scratch',
        extensionId: 'handpose2scratch',
        collaborator: 'champierre',
        description: 'Hand tracking in Scratch.',
        iconURL: require('../extensions/handpose2scratch/handpose2scratch.png'),
	    insetIconURL: require('../extensions/handpose2scratch/handpose2scratch-small.png'),
        tags: ['preload', 'ai'],
        internetConnectionRequired: true,
        featured: true
    },	
    {
        name: 'Posenet2Scratch',
        extensionId: 'posenet2scratch',
        iconURL: require('../extensions/posenet2scratch/posenet2scratch.png'),
	    insetIconURL: require('../extensions/posenet2scratch/posenet2scratch-small.png'),
        collaborator: 'champierre',
        featured: true,
        bluetoothRequired: false,
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Detect human poses quickly and accurately with a normal WebCam without using a special device',
        featured: true
    },
    {
        name: 'Facemesh2scratch',
        extensionId: 'facemesh2scratch',
        iconURL: require('../extensions/facemesh2scratch/facemesh2scratch.png'),
	    insetIconURL: require('../extensions/facemesh2scratch/facemesh2scratch-small.png'),
        collaborator: 'champierre',
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Use facetracking in your projects!',
        featured: true
    },
    {
        name: 'Scratch2WebSerialAPI',
        extensionId: 'scratch2webserialapi',
        iconURL: require('../extensions/scratch2webserialapi/scratch2webserialapi.png'),
	    insetIconURL: require('../extensions/scratch2webserialapi/scratch2webserialapi-small.png'),
        collaborator: 'champierre',
        internetConnectionRequired: true,
        tags: ['preload', 'iot'],
        description: 'Do more complex things with hardware via the serial ports.',
        featured: true
    },
    {
        name: 'ImageClassifer2Scratch',
        extensionId: 'ic2scratch',
        iconURL: require('../extensions/ic2scratch/ic2scratch.png'),
	    insetIconURL: require('../extensions/ic2scratch/ic2scratch-small.png'),
        collaborator: 'champierre',
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Image Classification Blocks.',
        featured: true
    },
	{
        name: 'scratch2maqueen',
        extensionId: 'scratch2maqueen', // update reference once file names are updated
        tags: ['preload'],
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        iconURL: require('../extensions/scratch2maqueen/scratch2maqueen.png'),
	    insetIconURL: require('../extensions/scratch2maqueen/scratch2maqueen-small.png'),
        description: 'Control DFRobot Maqueen.',
        featured: true,
        collaborator: 'Vernier',
    },
	//Adacraft
	{
        name: 'Adacraft HTTP',
        extensionId: 'adahttp',
        tags: ['other', 'preload'],
        iconURL: require('../extensions/adacraft/http.png'),
	    insetIconURL: require('../extensions/adacraft/http-small.svg'),
        description: 'Some new blocks to send HTTP requests ad manage results.',
        collaborator: 'Adacraft',
        featured: true
    },
    {
        name: 'Adacraft GIF',
        extensionId: 'gif',
        tags: ['other', 'preload'],
        iconURL: require('../extensions/adacraft/gif.png'),
	    insetIconURL: require('../extensions/adacraft/gif-small.svg'),
        description: 'Some new blocks to encode GIF files.',
        collaborator: 'Adacraft',
        featured: true
    },
{
        name: 'Ada Browser',
        tags: ['other', 'preload'],
        extensionId: 'adabrowser',
        iconURL: require('../extensions/adacraft/browser.png'),
	    insetIconURL: require('../extensions/adacraft/browser-small.svg'),
        description: 'Some new blocks to interact with the browser',
        collaborator: 'Adacraft',
        featured: true
    },
	
	//GvbvdxxMod Preloads
	{
        name: 'Roku',
        extensionId: 'roku',
        internetConnectionRequired: true,
        collaborator: 'Gvbvdxx',
		iconURL: require('../extensions/roku/big.jpg'),
	    insetIconURL: require('../extensions/roku/small.png'),
        tags: ['other', 'preload'],
        description: 'Interact with your Roku tv via the GM2Helper software!',
        featured: true
    },
	{
        name: 'HTML5 Elements',
        extensionId: 'html5',
		iconURL: require('../extensions/html5/small.svg'),
	    insetIconURL: require('../extensions/html5/large.svg'),
        description: 'Create HTMl5 elements. Display sprite costumes out of the stage!',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['other', 'preload']
    },
{
        name: 'Gvbvdxx Extras',
        extensionId: 'extra',
		iconURL: require('../extensions/potentiamod/placeholder.png'),
        description: 'Unfinished Gvbvdxx Mod Helper App.',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['other', 'preload']
    },
{
        name: 'Website API',
        extensionId: 'websites',
		iconURL: require('../extensions/websites/websites.png'),
	    insetIconURL: require('../extensions/websites/small.png'),
        description: 'Website API',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['other', 'preload']
    },
	{
        name: 'NES Emulator',
        extensionId: 'nesemulator', // update reference once file names are updated
		iconURL: require('../extensions/nes_emulator/nes.svg'),
	    insetIconURL: require('../extensions/nes_emulator/nes-small.svg'),
        description: 'Use the power of the NES emulation in PotentiaMod!',
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: false,
        bluetoothRequired: false,
        tags: ['other', 'preload'],
        featured: true,
        collaborator: 'Gvbvdxx'
    },
	{
        name: 'User Data',
        extensionId: 'userdata',
		iconURL: require('../extensions/userdata/small.png'),
	    insetIconURL: require('../extensions/userdata/big.png'),
        description: 'Get The User\'s Data',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['other', 'preload']
	},
	//PenguinMod Preloads
	{
        name: 'PenguinMod Runtime',
        extensionId: 'jgRuntime',
        iconURL: require('../extensions/penguinmod/extensions/runtime.svg'),
        description:'Blocks for modifying project data and settings from PenguinMod itself.',
        collaborator: 'PenguinMod',
        tags: ['other', 'preload'],
		featured: true
    },
	 {
        name: 'Prism',
        extensionId: 'jgPrism',
        tags: ['other', 'preload'],
        iconURL: require('../extensions/penguinmod/extensions/prism.png'),
		collaborator: 'PenguinMod',
        description: 'Blocks for specific use-cases or major convenience.',
        featured: true
    },
	 {
        name: 'Motion Expansion',
        extensionId: 'pmMotionExpansion',
        iconURL: require('../extensions/penguinmod/extensions/motion_expanded.png'),
        description: 'More small motion blocks for movement or collision.',
        tags: ['other', 'preload'],
		collaborator: 'PenguinMod',
		featured: true
    },
	{
        name: 'Scratch Authentication',
        extensionId: 'jgScratchAuthenticate',
        iconURL: require('./penguinmod/extensions/scratchauth2.svg'),
		collaborator: 'PenguinMod',
		tags: ['other', 'preload'],
        description: "Interact with Scratch Authentication to prove the player is a real scratch user.",
        featured: true
    },
	//Builders
	{
        name: 'KittenBot Extension Maker',
        href: 'https://kittenbot.github.io/scratch3-extension/',
        extensionId: 'kittenBotExtensionMaker',
		iconURL: require('../extensions/extension-builders/KittenBot.png'),
        description: 'Create extensions with KittenBot!',
        tags: ['other', 'builders'],
        featured: true
    },
	{
        name: 'GaiaMod Extension Editor',
        href: 'https://gaiamod-main.github.io/Extension-Editor/',
        extensionId: 'GMExtEditor',
		iconURL: require('../extensions/extension-builders/GaiaExtEditor.svg'),
	    insetIconURL: require('../extensions/extension-builders/GaiaExtEditor-small.svg'),
        description: 'Either create or edit extensions with a modfication of Astra Editor Extension Editor.',
        tags: ['gaia', 'builders'],
        isNew: true,
        featured: true,
    },
    {
        name: 'ExtForge',
        href: 'https://jwklong.github.io/extforge',
        extensionId: 'extforge',
        iconURL: require('../extensions/extension-builders/extforge.svg'),
        description: 'Create extensions with a block-based UI.',
        collaborator: 'jwklong',
        tags: ['other', 'builders'],
        featured: true
    },
    {
        name: 'TurboBuilder',
        href: 'https://turbobuilder.vercel.app/',
        extensionId: 'turboBuilder',
        iconURL: require('../extensions/extension-builders/turbobuilder.png'),
        description: 'Create your own amazing extensions using a scratch-based UI!',
        collaborator: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['tw', 'builders'],
        featured: true
    },
	//More Ext Galleries besides ones
	{
        name: 'Former VM Extension Collection',
        href: 'https://gaiawindwave90.github.io/VM-to-JS-Extensions/?originSpecial=true',
        extensionId: 'VMExtLibrary',
        iconURL: require('../extensions/potentiamod/vm_library.svg'),
        description: 'Tons of extensions converted from built-ins.\n\nClick on an extension to add it to your project.',
        collaborator: 'Listed in the site',
        tags: ['potentia'],
        featured: true
    },
	//Turbo
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWarp Blocks"
                description="Name of the strange 'TurboWarp  Blocks' extension"
                id="tw.twExtension.name"
                values={{
                    APP_NAME
                }}
            />
        ),
        extensionId: 'tw',
        iconURL: require('../extensions/tw/tw.svg'),
        description: (
            <FormattedMessage
                defaultMessage="Weird new blocks, with more modifications by GaiaWindWave90."
                description="Description of the strange 'TurboWarp  Blocks' extension"
                id="tw.twExtension.description"
            />
        ),
        tags: ['tw'],
        featured: true
    },
];


const gallerySourceDisplay = {
    potentiamod: {
        name: 'PotentiaMod Extension Gallery',
        href: 'https://potentiamod.github.io/pot-extensions/',
        iconURL: require('../extensions/gallery/potentiamod.svg'),
        tag: 'potentia'
    },
	 gaiamod: {
        name: 'GaiaMod Extension Gallery',
        href: 'https://gaiawindwave90.github.io/gm-extensions/',
        iconURL: require('../extensions/gallery/gaiamod.png'),
        tag: 'gaia'
    },
    turbowarp: {
        name: 'TurboWarp Extension Gallery',
        href: 'https://extensions.turbowarp.org/',
        iconURL: require('../extensions/gallery/turbowarp.svg'),
        tag: 'tw'
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
	potentiamod: {
        loading: createGalleryStatusItem('potentiamod', 'Loading PotentiaMod extension gallery...'),
        more: createGalleryStatusItem('potentiamod', 'See some user-submitted extensions.'),
        error: createGalleryStatusItem('potentiamod', 'Error loading PotentiaMod extension gallery.')
    },
    gaiamod: {
        loading: createGalleryStatusItem('gaiamod', 'Loading GaiaMod extension gallery...'),
        more: createGalleryStatusItem('gaiamod', 'See some user-submitted extensions.'),
        error: createGalleryStatusItem('gaiamod', 'Error loading GaiaMod extension gallery.')
    },
    turbowarp: {
        loading: createGalleryStatusItem('turbowarp', 'Loading TurboWarp extension gallery...'),
        more: createGalleryStatusItem('turbowarp', 'Learn more about extensions at extensions.turbowarp.org.'),
        error: createGalleryStatusItem('turbowarp', 'Error loading TurboWarp extension gallery. Visit extensions.turbowarp.org to find more extensions.')
    }
};

/*
----------------------------------------------
### NOTE TO POTENTIAMOD FORKS: ###
Please DO NOT make the extensions below accessible in the editor without livetests!
They are NOT fully developed for people to use and create full projects with!

These extensions could have missing features, cause random errors, broken projects, or even crash the editor!
Moving these into the main extension list will cause people who use your fork to assume they are ready for them to use!

Please keep these in livetests to reduce bug reports on your fork! :)

This was copied from PenguinMod.
----------------------------------------------
*/
if (IsLocal || IsLiveTests) {
const livetests = [
	{
        name: 'Test Extension',
        extensionId: 'test',
        iconURL: require('../extensions/potentiamod/placeholder.png'),
        tags: ['potentia', 'preload', 'dev'],
        description: 'A test extension to see if possible. For developers only.',
        featured: true
    },
	{
            name: 'Editor',
            href: 'https://potentiamod.github.io/editor.html',
            extensionId: 'gallery_potentiamodEditor',
            iconURL: require('../extensions/gallery/potentiamod.svg'),
			tags: ['potentia', 'preload', 'dev'],
            description: 'Opens the editor with this tab as the parent, still with the library opened. For developers.',
            featured: true
        },
        {
            name: 'localhost:8601',
            href: 'http://localhost:8601',
            extensionId: 'gallery_potentiamodLocalhost8601',
            iconURL: require('../extensions/potentiamod/placeholder.png'),
			tags: ['potentia', 'preload', 'dev'],
            description: 'Opens localhost:8601 in a new tab with this tab as the parent. For developers',
            featured: true
        },
		 {
        name: 'TurboBuilder - Dev Branch',
        href: 'https://dev-turbobuilder.vercel.app/',
        extensionId: 'turboBuilderDev',
        iconURL: require('../extensions/extension-builders/turbobuilder-dev.png'),
        description: 'Publicly available developer branch, with the latest features.',
        collaborator: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['tw', 'builders', 'dev'],
        featured: true
    },
];
livetests.forEach(ext => {
        menuItems.push(ext);
    });
}


export default menuItems;