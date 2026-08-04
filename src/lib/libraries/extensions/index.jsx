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

//champierre
import chatgpt2scratchIconURL from './chatgpt2scratch/chatgpt2scratch.png';
import chatgpt2scratchInsetIconURL from './chatgpt2scratch/chatgpt2scratch-small.png';
import facemesh2scratchIconURL from './facemesh2scratch/facemesh2scratch.png';
import facemesh2scratchInsetIconURL from './facemesh2scratch/facemesh2scratch-small.png';
import scratch2webserialapiIconURL from './scratch2webserialapi/scratch2webserialapi.png';
import scratch2webserialapiInsetIconURL from './scratch2webserialapi/scratch2webserialapi-small.png';
import handpose2scratchIconURL from './handpose2scratch/handpose2scratch.png';
import handpose2scratchInsetIconURL from './handpose2scratch/handpose2scratch-small.png';
import ic2scratchIconURL from './ic2scratch/ic2scratch.png';
import ic2scratchInsetIconURL from './ic2scratch/ic2scratch-small.png';
import posenet2scratchIconURL from './posenet2scratch/posenet2scratch.png';
import posenet2scratchInsetIconURL from './posenet2scratch/posenet2scratch-small.png';
import ml2scratchIconURL from './ml2scratch/ml2scratch.png';
import ml2scratchInsetIconURL from './ml2scratch/ml2scratch-small.png';
import tm2scratchIconURL from './tm2scratch/tm2scratch.png';
import tm2scratchInsetIconURL from './tm2scratch/tm2scratch-small.png';
import tmpose2scratchIconURL from './tmpose2scratch/tmpose2scratch.png';
import tmpose2scratchInsetIconURL from './tmpose2scratch/tmpose2scratch-small.png';

//other
import appMakerIconURL from './librekitten/appmaker/appmaker.svg';
import appMakerInsetIconURL from './librekitten/appmaker/software-small.svg';
import mbotIconURL from './mbot/mbot-header.png';
import mbotInsetIconURL from './mbot/mbot.svg';
import roku from './roku/big.jpg';
import rokuSmall from './roku/small.png';
import axerAIIconURL from './other/AxerAI.svg';
import axerAIInsetIconURL from './other/InsetAxerAI.png';
import nftIconURL from './nft/nft.png';
import nftInsetIconURL from './nft/nft-small.svg';
import toonco1ImageURL from './webKit/webKit.png';
import toonco1ImageSmallURL from './webKit/webKit-small.png';
import bodyblocksIconURL from './bodyblocks/background.png';
import bodyblocksInsetIconURL from './bodyblocks/inset-small.svg';
import PictoBloxMathIconURL from './PictoBloxMath/PictoBloxMath.png';
import PictoBloxMathInsetIconURL from './PictoBloxMath/PictoBloxMath-small.svg';
import PictoBloxStringIconURL from './PictoBloxString/PictoBloxString.png';
import PictoBloxStringInsetIconURL from './PictoBloxString/PictoBloxString-small.svg';
import wonderBlocksIcon from './gaiamod/WonderBlocks.png';
import catWithDonut from './gaiamod/DingDongDitch.svg';

//GvbvdxxMod2
import NESEmuThumb from './nes_emulator/nes.svg';
import NESInsetIcon from './nes_emulator/nes-small.svg';
import gm2HTML5Small from './html5/small.svg';
import gm2HTML5Large from './html5/large.svg';
import sndanalyserBig from './sound_analyser/big.svg';
import jsDialogsBigIcon from './dialog/dialogs.png';
import jsDialogsSmallIcon from './dialog/small.png';
import speech4pcDialogsBigIcon from './speech4pc/speech.png';
import speech4pcDialogsSmallIcon from './speech4pc/small.png';
import websitesBigIcon from './websites/websites.png';
import websitesSmallIcon from './websites/small.png';
import scratchBigIcon from './control/scratch.png';
import scratchSmallIcon from './control/small.png';
import wssmall from './websockets/small.png';
import wsbig from './websockets/big.png';
import audioctxsmall from './audio_context/small.png';
import audioctxbig from './audio_context/big.png';
import userdatasmall from './userdata/small.png';
import userdatabig from './userdata/big.png';
import beepboxsmall from './beepbox_synth/small.png';
import beepboxbig from './beepbox_synth/big.png';
import betteraudioBigIcon from './better_audio/big.png';
import betteraudioSmallIcon from './better_audio/small.png';

// onegpio
import onegpioArduinoImage from './onegpioArduino/onegpioArduino.png';
import onegpioArduinoInsetIconURL from './onegpioArduino/onegpioArduino-small.png';
import onegpioRpiImage from './onegpioRpi/onegpioRpi.png';
import onegpioRpiInsetIconURL from './onegpioRpi/onegpioRpi-small.png';
import onegpioEspImage from './onegpioEsp/onegpioEsp.png';
import onegpioEspInsetIconURL from './onegpioEsp/onegpioEsp-small.png';
import onegpioPicoboardImage from './onegpioPicoboard/onegpioPicoboard.jpg';
import onegpioPicoboardInsetIconURL from './onegpioPicoboard/onegpioPicoboard-small.png';
import onegpioCpxImage from './onegpioCpx/onegpioCpx.jpg';
import onegpioCpxInsetIconURL from './onegpioCpx/onegpioCpx-small.png';
import onegpioRoboHATImage from './onegpioRoboHAT/onegpioRoboHAT.png';
import onegpioRoboHATInsetIconURL from './onegpioRoboHAT/onegpioRoboHAT-small.png';
import onegpioRpiPicoImage from './onegpioRpiPico/onegpioRpiPico.png';
import onegpioRpiPicoInsetIconURL from './onegpioRpiPico/onegpioRpiPico-small.png';

import lassImage from "./lass/lass.png";
import iftttImage from "./ifttt/ifttt.png";
import thingspeakImage from "./thingspeak/thingspeak.png";

import smartLumiesIconURL from './smart-lumies/smart-lumies.png';
import smartLumiesInsetIconURL from './smart-lumies/smart-lumies-small.svg';
import smartLumiesConnectionIconURL from './smart-lumies/smart-lumies-illustration.svg';
import smartLumiesConnectionSmallIconURL from './smart-lumies/smart-lumies-small.svg';
import smartLumiesConnectionTipIconURL from './smart-lumies/smart-lumies-button-illustration.svg';
import matatabotIconURL from './matatabot/matatabot.png';
import matatabotInsetIconURL from './matatabot/matatabot-small.svg';
import matatabotConnectionIconURL from './matatabot/matatabot-illustration.svg';
import matatabotConnectionSmallIconURL from './matatabot/matatabot-small.svg';
import midiIconURL from './midi/midi.png';
import midiInsetIconURL from './midi/midi-small.svg';
import spikePrimeIconURL from './spikePrime/spikePrime.png';
import spikePrimeInsetIconURL from './spikePrime/spikePrime-small.svg';
import spikePrimeConnectionIconURL from './spikePrime/spikePrime-illustration.svg';
import spikePrimeConnectionSmallIconURL from './spikePrime/spikePrime-small.svg';
import futureBoardIconURL from './futureBoard/futureBoard.png';
import futureBoardInsetIconURL from './futureBoard/futureBoard-small.svg';
import minecraftIconURL from './minecraft/minecraft.png';
import minecraftInsetIconURL from './minecraft/minecraft-small.svg';
import toolboxIconURL from './toolbox/toolbox.png';
import toolboxInsetIconURL from './toolbox/toolbox-small.svg';
import iCarProIconURL from './iCarPro/iCarPro.png';
import iCarProInsetIconURL from './iCarPro/iCarPro-small.svg';
import snapCircuitsU33IconURL from './snapCircuitsU33/snapCircuitsU33.png';
import snapCircuitsU33InsetIconURL from './snapCircuitsU33/snapCircuitsU33-small.svg';
import magicBlueUUIconURL from './magicBlueUU/magicBlueUU.png';
import magicBlueUUInsetIconURL from './magicBlueUU/magicBlueUU-small.svg';
import emoBlockImage from './emo/Scratch_emo.png';
import emoBlockInsertIconImage from './emo/bocco-emo_body.png';
import missmixalotIconURL from "./missmixalot/missmixalot.png";
import missmixalotInsetIconURL from "./missmixalot/missmixalot-small.svg";
import echidnaIconURL from './echidna/echidna.png';
import echidnaInsetIconURL from './echidna/erizo.png';
import echidnaConnectionIconURL from './echidna/echidna-illustration.svg';
import echidnaConnectionSmallIconURL from './echidna/echidna-small.svg';

import libraImage from './libra/Libra.png';
import libraInsetImage from './libra/Libra-small.svg';

import ptIcon from './tw/pt.svg';
import TWgalleryIcon from './gallery/TWgallery.svg';
import returnIcon from './custom/return.svg';
import customExtensionIcon from './custom/custom.svg';
import customURLIcon from './custom/customURL.svg';
import galleryIconNB from './gallery/gallery-nb.svg';
import galleryIconDash from './dashblocks/gallery.svg';
import galleryIconMist from './mistium/library.svg';
import galleryIconMW from './gallery/gallery-mw.png';;
import galleryIconTW from './gallery/gallery-tw.svg';
import galleryIconPT from './gallery/gallery.svg';
import galleryIconZT from './02engine/02engine.svg';
import scratchmegarepoThumb from './gaiamod/ScratchMegaRepo.png';

import galleryIconPM from './penguinmod/library.svg';
import galleryIconSN from './gaiamod/snailIDEEXGallery.png';
import galleryIconDM from './dinosaurmod/gallery.svg';
import galleryIconGM from './gaiamod/gallery.png';

import {APP_NAME} from '../../brand';

const urlParams = new URLSearchParams(location.search);
const IsLocal = String(window.location.href).startsWith(`http://localhost:`);
const IsLiveTests = urlParams.has('eneabletest');
const IsSecret = urlParams.has('allpowerscombined');
const IsMysterious = urlParams.has('666');

const menuItems = [
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
	//Exts
	{
        name: 'Wonder Blocks',
        extensionId: 'wonderblocks',
        iconURL: wonderBlocksIcon,
        tags: ['preload'],
        description: 'Some mysterious blocks.',
        collaborator: 'GaiaWindWave90 with some blocks from other users.',
        featured: true
    },
	 {
        name: 'App Utilities',
        extensionId: 'appmaker',
        iconURL: appMakerIconURL,
		insetIconURL: appMakerInsetIconURL,
        tags: ['other', 'preload'],
		collaborator: 'LibreKitten',
        description: 'Develop apps in PotentiaMod.',
        featured: true
    },
	{
        name: 'Web kit',
        extensionId: 'webkit',
        iconURL: toonco1ImageURL,
        insetIconURL: toonco1ImageSmallURL,
		collaborator: 'toonco1',
		tags: ['other', 'preload'],
        description: 'Make your own webkit in PotentiaMod!',
        featured: true,
    },
	{
        name: 'Roku',
        extensionId: 'roku',
        internetConnectionRequired: true,
        collaborator: 'Gvbvdxx',
        iconURL: roku,
		insetIconURL: rokuSmall,
        tags: ['other', 'preload', 'iot'],
        description: 'Interact with your Roku tv via the GM2Helper software!',
        featured: true
    },
	{
        name: 'Echidna',
        extensionId: 'echidna',
        collaborator: 'echidna',
        iconURL: echidnaIconURL,
        insetIconURL: echidnaInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'echidna' extension"
                id="gui.extension.echidna.description"
            />
        ),
        featured: true,
		tags: ['other', 'preload', 'iot'],
        helpLink: 'http://echidna.es/'
    },
	{
        name: 'NES Emulator',
        extensionId: 'nesemulator', // update reference once file names are updated
        tags: ['other', 'preload', 'iot'],
        bluetoothRequired: false,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: false,
        iconURL: NESEmuThumb,
        insetIconURL: NESInsetIcon,
        description: 'Use the power of the NES emulation in PotentiaMod!',
        featured: true,
        collaborator: 'Gvbvdxx'
    },
	{
        name: 'Libra',
        collaborator: 'Clipteam',
        extensionId: 'libra',
        iconURL: libraImage,
        insetIconURL: libraInsetImage,
        description: 'Libra Redlist extension.',
        featured: true,
		tags: ['other', 'preload']
    },
	{
        name: 'ClipCC Blocks',
        collaborator: 'Clipteam',
        extensionId: 'clipblocks',
        iconURL: 'https://github.com/SoilZhu/clipcc-gui/blob/master/src/lib/libraries/extensions/clipcc/CCUnknownExtension.jpg?raw=true',
		insetIconURL: 'https://raw.githubusercontent.com/SoilZhu/clipcc-gui/5005874fe09e4431c5c7b4c006fcfc80db4d0eb8/src/lib/libraries/extensions/clipcc/CCUnknownExtension.svg',
        description: 'Clip Blocks extension.',
        featured: true,
		tags: ['other', 'preload']
    },
	//Champierre
	{
        name: 'ChatGPT2Scratch',
        extensionId: 'chatgpt2scratch',
        iconURL: chatgpt2scratchIconURL,
        insetIconURL: chatgpt2scratchInsetIconURL,
        credits: 'ichiroc',
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
        iconURL: ml2scratchIconURL,
        insetIconURL: ml2scratchInsetIconURL,
		credits: 'champierre',
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
        iconURL: tm2scratchIconURL,
        insetIconURL: tm2scratchInsetIconURL,
		credits: 'Tsukurusha, YengawaLab and Google',
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
        iconURL: tmpose2scratchIconURL,
        insetIconURL: tmpose2scratchInsetIconURL,
		credits: 'champierre',
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
        credits: 'champierre',
        description: 'Hand tracking in Scratch.',
        iconURL: handpose2scratchIconURL,
        insetIconURL: handpose2scratchInsetIconURL,
        tags: ['preload', 'ai'],
        internetConnectionRequired: true,
        featured: true
    },	
    {
        name: 'Posenet2Scratch',
        extensionId: 'posenet2scratch',
        iconURL: posenet2scratchIconURL,
        insetIconURL: posenet2scratchInsetIconURL,
        credits: 'champierre',
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
        iconURL: facemesh2scratchIconURL,
        insetIconURL: facemesh2scratchInsetIconURL,
        credits: 'champierre',
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Use facetracking in your projects!',
        featured: true
    },
    {
        name: 'Scratch2WebSerialAPI',
        extensionId: 'scratch2webserialapi',
        iconURL: scratch2webserialapiIconURL,
        insetIconURL: scratch2webserialapiInsetIconURL,
        credits: 'champierre',
        internetConnectionRequired: true,
        tags: ['preload', 'iot'],
        description: 'Do more complex things with hardware via the serial ports.',
        featured: true
    },
    {
        name: 'ImageClassifer2Scratch',
        extensionId: 'ic2scratch',
        iconURL: ic2scratchIconURL,
        insetIconURL: ic2scratchInsetIconURL,
        credits: 'champierre',
        internetConnectionRequired: true,
        tags: ['preload', 'ai'],
        description: 'Image Classification Blocks.',
        featured: true
    },
	//Adacraft
	{
        name: 'Adacraft HTTP',
        extensionId: 'adahttp',
        tags: ['adacraft', 'preload'],
        iconURL: 'https://www.adacraft.org/studio/static/assets/dea779e4ed4e0d1e4d553755f0beea24.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/c82f3fea945be86f2c208f2e3d799c8e.svg',
        description: 'Some new blocks to send HTTP requests ad manage results.',
        collaborator: 'Adacraft',
        featured: true
    },
    {
        name: 'Adacraft GIF',
        extensionId: 'gif',
        tags: ['adacraft', 'preload'],
        iconURL: 'https://www.adacraft.org/studio/static/assets/e482db7668b6f6bbc8ce5223e4427e96.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/bbb78885842b3cd65078881647f674f2.svg',
        description: 'Some new blocks to encode GIF files.',
        collaborator: 'Adacraft',
        featured: true
    },
{
        name: 'Ada Vision',
        extensionId: 'adavision',
        tags: ['adacraft', 'ai', 'preload'],
        iconURL: 'https://www.adacraft.org/studio/static/assets/e0dbaa558a96f981dd0a34c25b4b4b84.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/327aa5322c2e9cd1cd90cb69efa1c15a.svg',
        description: 'Use TeachableMachine models to detect things in images.',
        collaborator: 'Adacraft',
        featured: true
    },
    {
        name: 'Ada Sound',
        extensionId: 'adasound',
        tags: ['adacraft', 'ai', 'preload'],
        iconURL: 'https://www.adacraft.org/studio/static/assets/3aa7424034ffdc3bd8027132a5b1b5b9.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/21800acf6e3a345f805d74d75e32bb2d.png',
        description: 'Use TeachableMachine models to detect things in sounds.',
        collaborator: 'Adacraft',
        featured: true
    },
    {
        name: 'Adacraft Runtime',
        extensionId: 'adaruntime',
        tags: ['adacraft', 'preload'],
        iconURL: 'https://www.adacraft.org/studio/static/assets/53d3dbd30eb60a7860a3ffdb4753a43f.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/e91bb243062b53cc04ac11d1c7e381d6.svg',
        description: 'Some new blocks to interact with the adacraft runtime (renderer, VM, etc.)',
        collaborator: 'Adacraft',
        featured: true
    },
{
        name: 'Ada Browser',
        tags: ['adacraft', 'preload'],
        extensionId: 'adabrowser',
        iconURL: 'https://www.adacraft.org/studio/static/assets/40998229311219c2117265d5e4bd9745.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/f1fe0bbe960a0d60c783b111c84b837e.svg',
        description: 'Some new blocks to interact with the browser',
        collaborator: 'Adacraft',
        featured: true
    },
    {
        name: 'Croquet',
        extensionId: 'croquet',
        tags: ['adacraft', 'preload'],
        iconURL: 'https://www.adacraft.org/studio/static/assets/05479b8bc697d26fee9740d868c2a30e.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/3ebaeec3436fd9dd59d325a879e1a0dc.svg',
        description: 'Croquet Collaboration Library',
        collaborator: 'Croquet Corporation',
        featured: true
    },
	//PotentiaMod
	/*
    {
        name: (
            <FormattedMessage
                defaultMessage="{APP_NAME} Blocks"
                description="Name of the strange 'PotentiaMod Blocks' extension"
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
	*/
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
    }/*,
	{
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension Gallery"
                description="Name of library item to load a custom extension gallery from a URL"
                id="tw.customExtensionGallery.name"
            />
        ),
        extensionId: 'custom_gallery',
        iconURL: customURLIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load extensions from a custom extension gallery URL."
                description="Description of library item to load extensions from a custom gallery source"
                id="tw.customExtensionGallery.description"
            />
        ),
        tags: ['potentia'],
        featured: true
    },
		 {
        name: 'PotentiaMod Extension Bonanza!',
        extensionId: 'potentiaGallery',
		href: 'https://potentiamod.github.io/extensions/',
        iconURL: galleryIconPT,
        tags: ['potentia'],
        description: 'See the glory of extensions!',
        featured: true
    }
	*/
];

const gallerySourceDisplay = {
    potentiamod: {
        name: 'PotentiaMod Extension Bonanza!',
        href: 'https://potentiamod.github.io/extensions/',
        iconURL: galleryIconPT,
        tag: 'potentia'
    },
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
    zerotwoengine: {
        name: '02Engine Extension Collection',
        href: 'https://github.com/DDguan2010/02engine-extensions/tree/master/extension',
        iconURL: galleryIconZT,
        tag: 'ztengine'
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
	sharkpool: {
        name: 'SharkPool\'s Extension Collection',
        href: 'https://sharkpools-extensions.vercel.app/',
        iconURL: 'https://studio.penguinmod.com/static/assets/93259f95026260bc06f83d29d3b89115.svg',
        tag: 'sp'
    },
    penguinmod: {
        name: 'PenguinMod Extra Extensions',
        href: 'https://extensions.penguinmod.com/',
        iconURL: galleryIconPM,
        tag: 'pm'
    },
	snailide: {
        name: 'Snail-IDE Extra Extensions',
        href: 'https://snail-ide-extensions-gallery.vercel.app/',
        iconURL: galleryIconSN,
        tag: 'sn'
    },
	dinosaurmod: {
        name: 'DinosaurMod Extra Extensions',
        href: 'https://dinosaurmod.github.io/extensions/',
        iconURL: galleryIconDM,
        tag: 'dm'
    },
	electramod: {
        name: 'ElectraMod Extra Extensions',
        href: 'https://electramod-extensions-gallery.vercel.app/',
        iconURL: 'https://electramod.vercel.app/static/assets/c5353140b7d13c3beceb811ad943bd20.svg',
        tag: 'em'
    },
	arkide: {
        name: 'Ark IDE Extra Extensions',
        href: 'https://extensions.arkide.site',
        iconURL: 'https://studio.arkide.site/static/assets/ec6c0b201605163f47d10636142e36b9.svg',
        tag: 'ark'
    },
    gaiamod: {
        name: 'GaiaMod Extra Extensions',
        href: 'https://gaiamod-main.github.io/GaiaMod-ExtensionsGallery/',
        iconURL: galleryIconGM,
        tag: 'gaia'
    },
	other: {
        name: 'Scratch Repo Mega Extension Gallery',
        href: 'https://scratchmegarepo.pages.dev/extensions',
        iconURL: scratchmegarepoThumb,
        tag: 'other'
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
        more: createGalleryStatusItem('potentiamod', 'See the glory of extensions!'),
        error: createGalleryStatusItem('potentiamod', 'Error loading PotentiaMod extension gallery.')
    },
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
	zerotwoengine: {
        loading: createGalleryStatusItem('zerotwoengine', 'Loading 02Engine extension collection...'),
        more: createGalleryStatusItem('zerotwoengine', 'See 02Engine extensions at GitHub.'),
        error: createGalleryStatusItem('zerotwoengine', 'Error loading 02Engine extension collection.')
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
	sharkpool: {
        loading: createGalleryStatusItem('sharkpool', 'Loading SharkPool\'s extension collection...'),
        more: createGalleryStatusItem('sharkpool', 'Tons of extensions created by SharkPool.'),
        error: createGalleryStatusItem('sharkpool', 'Error loading SharkPool\'s extension collection.')
    },
    penguinmod: {
        loading: createGalleryStatusItem('penguinmod', 'Loading PenguinMod Extra Extensions...'),
        more: createGalleryStatusItem('penguinmod', 'See some user-submitted extensions.'),
        error: createGalleryStatusItem('penguinmod', 'Error loading PenguinMod Extra Extensions.')
    },
	snailide: {
        loading: createGalleryStatusItem('snailide', 'Loading Snail-IDE Extra Extensions...'),
        more: createGalleryStatusItem('snailide', 'See some user-submitted extensions.'),
        error: createGalleryStatusItem('snailide', 'Error loading Snail-IDE Extra Extensions.')
    },
	dinosaurmod: {
        loading: createGalleryStatusItem('dinosaurmod', 'Loading DinosaurMod Extra Extensions...'),
        more: createGalleryStatusItem('dinosaurmod', 'See some user-submitted extensions.'),
        error: createGalleryStatusItem('dinosaurmod', 'Error loading DinosaurMod Extra Extensions.')
    },
	electramod: {
        loading: createGalleryStatusItem('electramod', 'Loading ElectraMod Extra Extensions...'),
        more: createGalleryStatusItem('electramod', 'See some user-submitted extensions.'),
        error: createGalleryStatusItem('electramod', 'Error loading ElectraMod Extra Extensions.')
    },
	arkide: {
        loading: createGalleryStatusItem('arkide', 'Loading Ark IDE Extra Extensions...'),
        more: createGalleryStatusItem('arkide', 'See some user-submitted extensions.'),
        error: createGalleryStatusItem('arkide', 'Error loading Ark IDE Extra Extensions.')
    },
    gaiamod: {
        loading: createGalleryStatusItem('gaiamod', 'Loading GaiaMod Extra Extensions...'),
        more: createGalleryStatusItem('gaiamod', 'See some user-submitted extensions.'),
        error: createGalleryStatusItem('gaiamod', 'Error loading GaiaMod Extra Extensions.')
    },
	other: {
        loading: createGalleryStatusItem('other', 'Loading the Mega Repo extensions...'),
        more: createGalleryStatusItem('other', 'A mega gallery for most of the extensions'),
        error: createGalleryStatusItem('other', 'Error loading Mega Repo extensions.')
    },
};

export default menuItems;