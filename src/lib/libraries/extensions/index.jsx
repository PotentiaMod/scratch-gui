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

import shredsdkIcon from './shredsdk/shredsdk.svg'
import utilsIcon from './utils/utilites.svg';
import gameutilsIcon from './gameutils/gameutils.svg'

import kidsboardIconURL from './kidsboard/kidsboard.svg';
import kidsboardInsetIconURL from './kidsboard/kidsboard-small.svg';

// ESP32
import esp32SerialIconURL from './zumiAI/zumiAI.png';
import esp32SerialInsetIconURL from './zumiAI/zumiAI-small.svg';
import esp32SerialConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import esp32SerialConnectionSmallIconURL from './zumiAI/zumiAI-small.svg';

// ESP32
import esp32BluetoothIconURL from './zumiAI/zumiAI.png';
import esp32BluetoothInsetIconURL from './zumiAI/zumiAI_bluetooth-small.svg';
import esp32BluetoothConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import esp32BluetoothConnectionSmallIconURL from './zumiAI/zumiAI_bluetooth-small.svg'; //

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
import scratch2maqueenIconURL from './scratch2maqueen/scratch2maqueen.png';
import scratch2maqueenInsetIconURL from './scratch2maqueen/scratch2maqueen-small.png';

//AkariGroup
import akariBlocksImage from './akariBlocks/logo320.jpg';
import akariBlocksButtonImage from './akariBlocks/logo320_ex.jpg';
import akariCameraImage from './akariCamera/logo320.jpg';
import akariCameraButtonImage from './akariCamera/logo320_ex.jpg';
import akariBlocksSimpleImage from './akariBlocksSimple/logo320.jpg';
import akariBlocksSimpleButtonImage from './akariBlocksSimple/logo320_ex.jpg';
import akariCameraSimpleImage from './akariCameraSimple/logo320.jpg';
import akariCameraSimpleButtonImage from './akariCameraSimple/logo320_ex.jpg';

import playgoIconURL from './playgo/playgo.png';
import playgoInsetIconURL from './playgo/playgo-small.svg';
import playgoConnectionIconURL from './wedo2/wedo-illustration.svg';
import playgoConnectionSmallIconURL from './wedo2/wedo-small.svg';
import playgoConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import playIoTIconURL from './playiot/playiot.png';
import playIoTInsetIconURL from './playiot/playiot-small.svg';
import playIoTConnectionIconURL from './wedo2/wedo-illustration.svg';
import playIoTConnectionSmallIconURL from './wedo2/wedo-small.svg';
import playIoTConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import playMeIconURL from './playme/playme.png';
import playMeInsetIconURL from './playme/playme-small.svg';
import playMeConnectionIconURL from './wedo2/wedo-illustration.svg';
import playMeConnectionSmallIconURL from './wedo2/wedo-small.svg';
import playMeConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

// default icon if one is not made yet...
import defaultExtensionIcon from './potentiamod/placeholder.png';

//junilab
import jdcodeIconURL from './jdcode/jdcode.png';
import jdcodeInsetIconURL from './jdcode/jdcode-small.png';
import jdcodeConnectionIconURL from './jdcode/jdcode-illustration.png';
import jdcodeConnectionSmallIconURL from './jdcode/jdcode-small.png';
import robodogIconURL from './robodog/robodog.png';
import robodogInsetIconURL from './robodog/robodog-small.png';
import robodogConnectionIconURL from './robodog/robodog-illustration.png';
import robodogConnectionSmallIconURL from './robodog/robodog-small.png';
import jcboardIconURL from './jcboard/jcboard.png';
import jcboardInsetIconURL from './jcboard/jcboard-small.png';
import jcboardConnectionIconURL from './jcboard/jcboard-illustration.png';
import jcboardConnectionSmallIconURL from './jcboard/jcboard-small.png';
import uglybotIconURL from './uglybot/uglybot.png';
import uglybotInsetIconURL from './uglybot/uglybot-small.png';
import uglybotConnectionIconURL from './uglybot/uglybot-illustration.png';
import uglybotConnectionSmallIconURL from './uglybot/uglybot-small.png';
import firmtechIconURL from './firmtech/firmtech.png';
import firmtechInsetIconURL from './firmtech/firmtech-small.png';
import firmtechConnectionIconURL from './firmtech/firmtech-illustration.png';
import firmtechConnectionSmallIconURL from './firmtech/firmtech-small.png';
import aidroneIconURL from './aidrone/aidrone.png';
import aidroneInsetIconURL from './aidrone/aidrone-small.png';
import aidroneConnectionIconURL from './aidrone/aidrone-illustration.png';
import aidroneConnectionSmallIconURL from './aidrone/aidrone-small.png';
import aicobotIconURL from './aicobot/aicobot.png';
import aicobotInsetIconURL from './aicobot/aicobot-small.png';
import aicobotConnectionIconURL from './aicobot/aicobot-illustration.png';
import aicobotConnectionSmallIconURL from './aicobot/aicobot-small.png';

//garragames
import koriIconURL from './kori/kori.png';
import koriInsetIconURL from './kori/kori-small.svg';
import koriConnectionIconURL from './kori/kori-illustration.svg';
import koriConnectionSmallIconURL from './kori/kori-small.svg'

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
import martyIconURL from './marty/marty.png';
import martyInsetIconURL from './marty/marty-small.svg';
import ohbotIconURL from './ohbot/ohbot.png';
import ohbotInsetIconURL from './ohbot/ohbot-small.svg';
import webmidiIconURL from './webmidi/webmidi.png';
import webmidiInsetIconURL from './webmidi/webmidi-small.png';
import newBlockImage from './newblocks/newblocks.png';
import newBlockButtonImage from './newblocks/newblocks-small.png';
import newMicrobitImage from './newmicrobit/newmicrobit.png';
import newMicrobitButtonImage from './newmicrobit/newmicrobit-small.png';
import ExtensionInsetIconURL from './ellabsextension/extension-icon.png';
import ExtensionIconURL from './ellabsextension/extension-background.png';
import maikaIconURL from './olliMaika/maika.png';
import maikaforInsetIconURL from './olliMaika/maika-small.png';
import duploIconURL from './duplotrain/duplo-train-illustration.png';
import duploforInsetIconURL from './duplotrain/duplo-train-small.svg';
import poweredupIconURL from './poweredup/poweredup.png';
import poweredupforInsetIconURL from './poweredup/poweredup-small.svg';

//166iwase-lgtm/taichan0123
import meshImage from './mesh/mesh.png';
import ledButtonImage from './led/led-small.png';
import brightnessButtonImage from './brightness/brightness-small.png';
import motionButtonImage from './motion/motion-small.png';
import gpioButtonImage from './gpio/gpio-small.png';

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

import rosIconURL from './ros/ros.png';
import rosInsetIconURL from './ros/ros-small.svg';
import rosConnectionIconURL from './ros/ros-illustration.svg';
import rosConnectionSmallIconURL from './ros/ros-small.svg';

import pr2RobotIconURL from './pr2robot/pr2.png';
import pr2RobotInsetIconURL from './pr2robot/pr2-small.svg';
import pr2RobotConnectionSmallIconURL from './pr2robot/pr2-small.svg';

import fetchRobotIconURL from './fetchrobot/fetch.png';
import fetchRobotInsetIconURL from './fetchrobot/fetch-small.svg';
import fetchRobotConnectionSmallIconURL from './fetchrobot/fetch-small.svg';

import spotRobotIconURL from './spotrobot/spot.png';
import spotRobotInsetIconURL from './spotrobot/spot-small.svg';
import spotRobotConnectionSmallIconURL from './spotrobot/spot-small.svg';

import go1RobotIconURL from './go1robot/go1.png';
import go1RobotInsetIconURL from './go1robot/go1-small.svg';
import go1RobotConnectionSmallIconURL from './go1robot/go1-small.svg';

import pepperRobotIconURL from './pepperrobot/pepper.png';
import pepperRobotInsetIconURL from './pepperrobot/pepper-small.svg';
import pepperRobotConnectionSmallIconURL from './pepperrobot/pepper-small.svg';

import sencuIconURL from "./sencu/sencu.jpg";

import kakaIconURL from './kaka/kaka.png';
import kakaInsetIconURL from './kaka/kaka-small.svg';
import kakaConnectionIconURL from './kaka/kaka-illustration.svg';
import kakaConnectionSmallIconURL from './kaka/kaka-small.svg';
import kakaHelpLink from './kaka/kakaHelpLink.png';

import galaxyRVRIconURL from './galaxyRVR/galaxyRVR.jpg';
import galaxyRVRInsetIconURL from './galaxyRVR/galaxyRVR-small.svg';
import galaxyRVRConnectionIconURL from './galaxyRVR/galaxyRVR-illustration.svg';
import galaxyRVRConnectionSmallIconURL from './galaxyRVR/galaxyRVR-small.svg';
import galaxyRVRHelpLink from './galaxyRVR/galaxyRVRHelpLink.png';

import zeusCarIconURL from './zeusCar/zeusCar.jpg';
import zeusCarInsetIconURL from './zeusCar/zeusCar-small.svg';
import zeusCarConnectionIconURL from './zeusCar/zeusCar-illustration.svg';
import zeusCarConnectionSmallIconURL from './zeusCar/zeusCar-small.svg';
import zeusCarHelpLink from './zeusCar/zeusCarHelpLink.png';

import piCarXIconURL from './picar-x/piCarX.png';
import piCarXInsetIconURL from './picar-x/piCarX-small.svg';
import piCarXConnectionIconURL from './picar-x/piCarX-illustration.svg';
import piCarXConnectionSmallIconURL from './picar-x/piCarX-small.svg';
import piCarXHelpLink from './picar-x/piCarXHelpLink.png';

import gsaTempVariablesExtensionIcon from './penguinmod/extensions/tempvariables.svg';
import jgIframeExtensionIcon from './penguinmod/extensions/iframe.png';
import jgExtendedAudioExtensionIcon from './penguinmod/extensions/extendedaudio.png';
import jgScratchAuthExtensionIcon from './penguinmod/extensions/scratchauth2.svg';
import jgPermissionExtensionIcon from './penguinmod/extensions/permissions.png';
import jgCloneManagerExtensionIcon from './penguinmod/extensions/clonemanager.png';
import pmInlineBlocksExtensionIcon from './penguinmod/extensions/inlineblocks.png';
import jgPackagerApplicationsExtensionIcon from './penguinmod/extensions/packagedApplications.png';
import jgPackagerApplicationsInsetExtensionIcon from './penguinmod/extensions/packagedApplications_inset.png';
import spJSONExtensionIcon from './penguinmod/extensions/sp_json.svg';

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
import tinkibotIconURL from './tinkibot/tinkibot.png';
import tinkibotInsetIconURL from './tinkibot/tinkimo-small.png';
import mcremoteIconURL from './mcremote/mcremote.svg';
import libraImage from './libra/Libra.png';
import libraInsetImage from './libra/Libra-small.svg';
import rubyIconURL from './smalruby-ruby/smalruby-ruby.svg';
import rubyInsetIconURL from './smalruby-ruby/smalruby-ruby-small.svg';
import translations from './smalruby-ruby/translations.json';

import ptIcon from './tw/tw.svg';
import TWgalleryIcon from './gallery/TWgallery.svg';
import returnIcon from './custom/return.svg';
import customExtensionIcon from './custom/custom.svg';
import customExtIcon from './custom/CustomEx.svg';
import customExtInsetIcon from './custom/CustomSmall.svg';
import customURLIcon from './custom/customURL.svg';
import galleryIconCCW from './gallery/cocreaworld.svg';
import galleryIconNB from './gallery/nitrobolt.svg';
import galleryIconDash from './gallery/dash.svg';
import galleryIconMist from './mistium/library.svg';
import galleryIconMW from './gallery/mistwarp.svg';;
import galleryIconTW from './gallery/turbowarp.svg';
import galleryIconPT from './gallery/potentiamod.svg';
import galleryIconZT from './gallery/02engine.svg';
import galleryIconPM from './gallery/penguinmod.svg';
import galleryIconSN from './gallery/snailide.png';
import galleryIconDM from './gallery/dinosaurmod.svg';
import galleryIconGM from './gallery/gaiamod.png';
import scratchmegarepoThumb from './gallery/megarepo.png';


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
        iconURL: customExtIcon,
		insetIconURL: customExtInsetIcon,
        description: 'Load custom extensions from URLs, files, or JavaScript source code.',
        tags: ['custom'],
        featured: true
        // Not marked as incompatible with Scratch so that clicking on it doesn't show a prompt
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
    {
        name: (
            <FormattedMessage
                defaultMessage="Face Sensing (Built-In)"
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
        tags: ['gm', 'preload'],
        description: 'Some mysterious blocks.',
        collaborator: 'GaiaWindWave90',
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
        name: 'Cozmo',
        extensionId: 'cozmo',
        tags: ['cognimates', 'preload', 'new'],
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
        iconURL: tinkibotIconURL,
        insetIconURL: tinkibotInsetIconURL,
		collaborator: 'Tinkimo',
        description: 'Control one or more Tinkibots',
        featured: true,
        internetConnectionRequired: false
    },
	{
        name: 'Kori Assistant',
        extensionId: 'kori',
        collaborator: 'OpenAI',
        iconURL: koriIconURL,
        insetIconURL: koriInsetIconURL,
		connectionIconURL: koriConnectionIconURL,
        connectionSmallIconURL: koriConnectionSmallIconURL,
		connectingMessage: 'Connecting',
        tags: ['preload'],
        description: 'Experiment with Generative AI.',
        bluetoothRequired: true,
        internetConnectionRequired: true,
		launchPeripheralConnectionFlow: true,
		useAutoScan: false,
		helpLink: 'https://scratch.mit.edu/kori',
        featured: true
    },
	{
        name: 'UglyBot',
        extensionId: 'uglybot',
        collaborator: 'Junilab Inc.',
        iconURL: uglybotIconURL,
        insetIconURL: uglybotInsetIconURL,
        description: 'UglyBot with PotentiaMod',
        featured: true,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
		tags: ['preload'],
        useAutoScan: false,
        connectionIconURL: uglybotConnectionIconURL,
        connectionSmallIconURL: uglybotConnectionSmallIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'http://www.junilab.co.kr/sub/uglybot.php'
    },
    {
        name: 'Robodog',
        extensionId: 'robodog',
        collaborator: 'Junilab Inc.',
        iconURL: robodogIconURL,
        insetIconURL: robodogInsetIconURL,
        description: 'RoboDog with PotentiaMod',
        featured: true,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
		tags: ['preload'],
        useAutoScan: false,
        connectionIconURL: robodogConnectionIconURL,
        connectionSmallIconURL: robodogConnectionSmallIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'http://jcblock.co.kr'
    },
	{
        name: 'SenCu',
        extensionId: 'sencu',
        iconURL: sencuIconURL,
        description: 'Play with a SenCu Extension for PotentiaMod!',
		tags: ['preload'],
        featured: true,
        disabled: false,
    },
	{
        name: 'Body Blocks',
        extensionId: 'bodyblocks',
        iconURL: bodyblocksIconURL,
        insetIconURL: bodyblocksInsetIconURL,
		collaborator: 'Stephen Howell',
		tags: ['preload'],
        description: 'Control sprites with body movements.\nRequires Android phone app.',
        featured: true
    },
	{
        name: 'Ruby',
        extensionId: 'ruby',
        tags: ['preload', 'new'],
        iconURL: rubyIconURL,
        insetIconURL: rubyInsetIconURL,
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
        iconURL: require('../extensions/cognimates/Alexa_extension.png'),
		collaborator: 'Amazon',
        description: 'Talk to Alexa in PotentiaMod.',
        featured: true
    },
	{
        name: 'Ergo',
        extensionId: 'ergo',
        tags: ['cognimates', 'preload', 'new'],
        iconURL: require('../extensions/cognimates/Ergo_extension.png'),
		collaborator: 'Cognimates',
        description: 'Play with Ergo in PotentiaMod.',
        featured: true
    },
	{
        name: 'QR Code',
        extensionId: 'qrcode',
        tags: ['preload', 'new'],
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
        name: 'Utilites',
        tags: ['other', 'preload'],
        extensionId: 'utils',
        iconURL: utilsIcon,
        description: 'Utilites for Scratch',
        featured: true,
        collaborator: 'The_Mad_Punter'
    },
	{
        name: 'ShredSDK',
        tags: ['other', 'preload'],
        extensionId: 'shredsdk',
        iconURL: shredsdkIcon,
        description: 'A development kit for making good web games',
        featured: true,
        collaborator: 'The_Mad_Punter'
    },
	{
        name: 'GameUtils',
        tags: ['other', 'preload'],
        extensionId: 'gameutils',
        iconURL: gameutilsIcon,
        description: 'The Extension that Loads Sprites, costumes, etc.',
        featured: true,
        collaborator: 'showierdata9978'
    },
	{
        name: 'ScratchPro',
        extensionId: 'scratchpro',
		tags: ['preload', 'new'],
        iconURL: require('../extensions/scratchpro/illustration.svg'),
        insetIconURL: require('../extensions/scratchpro/small.svg'),
        collaborator: 'cuiJY',
        description:'Advanced blocks: HTTP, JSON, arrays, color, utilities.',
        featured: true,
        internetConnectionRequired: false
    },
	{
        name: 'KidsBoard',
        extensionId: 'kidsboard',
        collaborator: 'Nekoma Manufacturing',
        iconURL: kidsboardIconURL,
        insetIconURL: kidsboardInsetIconURL,
		tags: ['preload', 'new'],
        description: 'Connect KidsBoard via Bluetooth to operate the LEDs, buttons, speaker, and sensors.',
        featured: true,
        bluetoothRequired: true
    },
	{
        name: (
            <FormattedMessage
                defaultMessage="McRemote"
                description="Name for the 'McRemote' extension"
                id="gui.extension.mcremote.name"
            />
        ),
        extensionId: 'mcremote',
		tags: ['preload', 'new'],
        iconURL: mcremoteIconURL,
        insetIconURL: mcremoteIconURL,
        description: (
            <FormattedMessage
                defaultMessage={
                    'Control Minecraft from Scratch blocks. Full lightning can cause damage, fire, ' +
                    'lightning rod and copper reactions, events, and entity changes.'
                }
                description="Description for the 'McRemote' extension"
                id="gui.extension.mcremote.description"
            />
        ),
        featured: true
    },
	{
        name: 'EIM Messaging',
        extensionId: 'eim',
        iconURL: require('../extensions/eim/illustration.jpg'),
		insetIconURL: require('../extensions/eim/small.svg'),
        tags: ['preload', 'new'],
		collaborator: 'CodeLab',
        description: 'Everything is a mesage! Contains capabilities of all the other extensions.',
        featured: true
    },
	{
        name: 'Marty the Robot',
        extensionId: 'marty',
        collaborator: 'Robotical',
        iconURL: martyIconURL,
        insetIconURL: martyInsetIconURL,
        description: 'Play and program with Marty.',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: true
    },
	{
        name: 'Ohbot',
        extensionId: 'ohbot',
        iconURL: ohbotIconURL,
        insetIconURL: ohbotInsetIconURL,
		collaborator: 'Ohbot',
		tags: ['preload'],
        description: 'Control your Ohbot',
        featured: true
    },
	{
        name: 'Scratch Emo',
        extensionId: 'emo',
        collaborator: 'Yukai Engineering Inc.',
		tags: ['preload'],
        iconURL: emoBlockImage,
        insetIconURL: emoBlockInsertIconImage,
        description: 'Play with BOCCO emo!',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
    },
	{
        name: 'Face Emotion Sensing',
        extensionId: 'poseFace',
        tags: ['preload', 'new'],
        iconURL: require('../extensions/poseFace/pose-face.png'),
		insetIconURL: require('../extensions/poseFace/pose-face-small.svg'),
		collaborator: 'Curriulum',
        description: 'Sense face movement with the camera with added emotion detection.',
        featured: true
    },
	{
        name: 'Body Sensing',
        extensionId: 'poseBody',
        tags: ['preload', 'new'],
        iconURL: require('../extensions/poseBody/pose-body.png'),
		insetIconURL: require('../extensions/poseBody/pose-body-small.svg'),
		collaborator: 'Curriulum',
        description: 'Sense body position with the camera.',
        featured: true
    },
	{
        name: 'Hand Sensing',
        extensionId: 'poseHand',
        tags: ['preload', 'new'],
        iconURL: require('../extensions/poseHand/pose-hand.png'),
		insetIconURL: require('../extensions/poseHand/pose-hand-small-3.svg'),
		collaborator: 'Curriulum',
        description: 'Sense hand position with the camera.',
        featured: true
    },
	{
        name: 'Object Detection',
        extensionId: 'objectDetection',
		tags: ['preload', 'new'],
        iconURL: require('../extensions/objectDetection/objectdetection.png'),
		insetIconURL: require('../extensions/objectDetection/objectdetectionsmall.svg'),
        description: 'Detect and identify objects in the camera view.',
		collaborator: 'Curriulum',
        featured: true
    },
	{
        name: 'Teachable Machine',
        extensionId: 'teachableMachine',
		tags: ['preload', 'new'],
        iconURL: require('../extensions/teachableMachine/teachable-machine-blocks.png'),
		insetIconURL: require('../extensions/teachableMachine/teachable-machine-blocks-small.svg'),
        description: 'Use your Teachable Machine models in your Scratch project!',
		collaborator: 'Custom',
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
		tags: ['preload'],
        helpLink: 'http://echidna.es/'
    },
	{
        name: 'Magic Blue UU',
        extensionId: 'magicBlueUU',
        collaborator: 'PlusPlus',
        iconURL: magicBlueUUIconURL,
        insetIconURL: magicBlueUUInsetIconURL,
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
        iconURL: require('../extensions/cognimates/Hue_extension.png'),
		collaborator: 'Cognimates',
        description: 'Blocks used for changing and modifying lights.',
        featured: true
    },
	 {
        name: 'PlayData',
        extensionId: 'dataviewer',
		tags: ['preload', 'new'],
        collaborator: 'Cassia Fernandez and João Adriano Freitas',
        iconURL: require('../extensions/dataviewer/dataviewer.png'),
		insetIconURL: require('../extensions/dataviewer/dataviewer-small.svg'),
        description: 'Play with your data.',
        featured: true,
        disabled: false
    },
		{
        name: 'Twitter',
        extensionId: 'twitter',
        tags: ['cognimates', 'preload', 'new'],
        iconURL: require('../extensions/cognimates/twitter_ext.jpg'),
		collaborator: 'Twitter',
        description: 'Blocks made for Twitter posts.',
        featured: true
    },
	{
        name: 'Smart Lumies',
        extensionId: 'smartLumies',
        collaborator: 'PlusPlus',
        iconURL: smartLumiesIconURL,
        insetIconURL: smartLumiesInsetIconURL,
        description: 'Have fun with Smart Lumies Cube in PotentiaMod!',
		tags: ['preload'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: smartLumiesConnectionIconURL,
        connectionSmallIconURL: smartLumiesConnectionSmallIconURL,
        connectionTipIconURL: smartLumiesConnectionTipIconURL,
        connectingMessage: 'Have your Cube nearby.',
        helpLink: 'https://smartlumies.com'
    },
	{
        name: 'Feelings',
        extensionId: 'sentiment',
        tags: ['cognimates', 'preload', 'new'],
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
        iconURL: require('../extensions/cognimates/wemo_ext.png'),
		collaborator: 'Cognimates',
        description: 'Play with Wemo in PotentiaMod.',
        featured: true
    },
	{
        name: 'Vision Training',
        extensionId: 'vision',
        tags: ['cognimates', 'preload', 'new'],
        iconURL: require('../extensions/cognimates/vision_ext.png'),
		collaborator: 'Cognimates',
        description: 'Vision training.',
        featured: true
    },
	{
        name: 'Libra',
        collaborator: 'Clipteam',
        extensionId: 'libra',
        iconURL: libraImage,
        insetIconURL: libraInsetImage,
        description: 'Libra Redlist extension.',
        featured: true,
		tags: ['other', 'preload'],
    },
	{
        name: 'ClipCC Blocks',
        collaborator: 'Clipteam',
        extensionId: 'clipblocks',
        iconURL: 'https://github.com/SoilZhu/clipcc-gui/blob/master/src/lib/libraries/extensions/clipcc/CCUnknownExtension.jpg?raw=true',
		insetIconURL: 'https://raw.githubusercontent.com/SoilZhu/clipcc-gui/5005874fe09e4431c5c7b4c006fcfc80db4d0eb8/src/lib/libraries/extensions/clipcc/CCUnknownExtension.svg',
        description: 'Clip Blocks extension.',
        featured: true,
		tags: ['other', 'preload'],
    },
	{
        name: 'Zumi AI (with dongle)',
        extensionId: 'zumiAIS',
        collaborator: 'ROBOLINK',
        iconURL: esp32SerialIconURL,
        insetIconURL: esp32SerialInsetIconURL,
        description: (
            <FormattedMessage
                id='gui.extension.zumiAIS.description'
                defaultMessage='Zumi AI for Scratch 3 with Bluetooth'
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
		tags: ['preload'],
        connectionIconURL: esp32SerialConnectionIconURL,
        connectionSmallIconURL: esp32SerialConnectionSmallIconURL,
        connectingMessage: 'connecting...', //

        helpLink: 'https://your-custom-help-link.com'
    },
    {
        name: 'Zumi AI (with bluetooth)',
        extensionId: 'zumiAIB',
        collaborator: 'ROBOLINK',
        iconURL: esp32BluetoothIconURL,
        insetIconURL: esp32BluetoothInsetIconURL,
        description: (
            <FormattedMessage
                id='gui.extension.zumiAIB.description'
                defaultMessage='Zumi AI for Scratch 3 with Bluetooth'
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
		tags: ['preload'],
        connectionIconURL: esp32BluetoothConnectionIconURL,
        connectionSmallIconURL: esp32BluetoothConnectionSmallIconURL,
        connectingMessage: 'connecting...', // 👈

        helpLink: 'https://your-custom-help-link.com'
    },
	{
        name: 'LEGO Duplo Train',
        extensionId: 'duploTrain',
        collaborator: 'bricklife',
        iconURL: 'https://bricklife.com/scratch-gui/static/assets/12fd44910fedc5b99761e024ddf05c59.png',
        insetIconURL: 'https://bricklife.com/scratch-gui/static/assets/4e8df03eb146bd7f93b355c62450029b.svg',
        description: 'Build and control your train!',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: true

    },
{
        name: 'LEGO Powered Up',
        extensionId: 'poweredUp',
        collaborator: 'bricklife',
        iconURL: 'https://bricklife.com/scratch-gui/static/assets/27d60d6cf54cf80ce2bbb8493e43262e.png',
        insetIconURL: 'https://bricklife.com/scratch-gui/static/assets/9a7b1e04a4d5afda42d2d4bb2de61247.svg',
        description: 'Build with motors and sensors!',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: true
    },
	{
        name: 'LEGO SPIKE Prime',
        extensionId: 'spikePrime',
        collaborator: 'bricklife',
        iconURL: spikePrimeIconURL,
        insetIconURL: spikePrimeInsetIconURL,
        description: 'LEGO SPIKE Prime extension.',
		tags: ['preload'],
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: spikePrimeConnectionIconURL,
        connectionSmallIconURL: spikePrimeConnectionSmallIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://github.com/bricklife/scratch-lego-bluetooth-extensions'
    },
	{
    name: 'LEGO Mario',
    extensionId: 'legoMario',
    collaborator: 'bricklife',
    iconURL: require('../extensions/legomario/legomario.png'),
    insetIconURL: require('../extensions/legomario/legomario-small.svg'),
    description: 'Know what he\'s doing!',
	tags: ['preload', 'new'],
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
        name: 'PlayGo',
        extensionId: 'playgo',
        collaborator: 'tdrobotica',
        iconURL: playgoIconURL,
        insetIconURL: playgoInsetIconURL,
        description: 'Playgo Scratch extension',
		tags: ['preload'],
		internetConnectionRequired: true,
		bluetoothRequired: true,
        featured: true,        
    }, 
    {
        name: 'PlayIoT',
        extensionId: 'playiot',
        collaborator: 'tdrobotica',
        iconURL: playIoTIconURL,
        insetIconURL: playIoTInsetIconURL,
		description: 'PlayIoT Scratch extension',
		tags: ['preload'],
		internetConnectionRequired: true,
		bluetoothRequired: true,
        featured: true,        
    },
	{
        name: 'MatataBot',
        extensionId: 'matatabot',
        collaborator: 'matatalab',
        iconURL: matatabotIconURL,
        insetIconURL: matatabotInsetIconURL,
		tags: ['preload'],
        description: 'Connect your projects with the MatataBot.',
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: matatabotConnectionIconURL,
        connectionSmallIconURL: matatabotConnectionSmallIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://matatalab.com/'
    },
	{
        name: 'OneGpio Arduino',
        extensionId: 'onegpioArduino',
        collaborator: 'Mr. Y\'s Lab',
        iconURL: onegpioArduinoImage,
        insetIconURL: onegpioArduinoInsetIconURL,
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
        iconURL: onegpioRpiImage,
        insetIconURL: onegpioRpiInsetIconURL,
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
        iconURL: onegpioPicoboardImage,
        insetIconURL: onegpioPicoboardInsetIconURL,
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
        iconURL: onegpioCpxImage,
        insetIconURL: onegpioCpxInsetIconURL,
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
        iconURL: onegpioRoboHATImage,
        insetIconURL: onegpioRoboHATInsetIconURL,
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
        iconURL: onegpioRpiPicoImage,
        insetIconURL: onegpioRpiPicoInsetIconURL,
        description: 'onegpioRpiPico',
        tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    },
	{
        name: 'Future Board',
        extensionId: 'futureBoard',
        collaborator: 'PlusPlus',
        iconURL: futureBoardIconURL,
        insetIconURL: futureBoardInsetIconURL,
		tags: ['preload'],
        description: (
            <FormattedMessage
                defaultMessage='Future Board extension.'
                description='Description for the Future Board extension'
                id='gui.extension.futureBoard.description'
            />
        ),
        featured: true,
        disabled: false
    },
	 {
        name: 'ELLabs Extension',
        extensionId: 'ellabsextension',
        iconURL: ExtensionIconURL,
        insetIconURL: ExtensionInsetIconURL,
		collaborator: 'ishakboufatah',
        description: 'ELLabs Scratch extension',
		tags: ['preload'],
        featured: true,
        disabled: false
    },
	{
        name: 'AKARI Blocks',
        extensionId: 'akariblocks',
        collaborator: 'AKARI Groups',
        iconURL: akariBlocksImage,
        insetIconURL: akariBlocksButtonImage,
        description: 'AKARI control block',
		tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
    {
        name: 'AKARI Camera',
        extensionId: 'akaricamera',
        collaborator: 'AKARI Groups',
        iconURL: akariCameraImage,
        insetIconURL: akariCameraButtonImage,
        description: 'AKARI camera block',
		tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
    {
        name: 'AKARI Blocks(Simple)',
        extensionId: 'akariblockssimple',
        collaborator: 'AKARI Groups',
        iconURL: akariBlocksSimpleImage,
        insetIconURL: akariBlocksSimpleButtonImage,
        description: 'Simple Akari blocks.',
		tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
    {
        name: 'AKARI Camera(Simple)',
        extensionId: 'akaricamerasimple',
        collaborator: 'AKARI Groups',
        iconURL: akariCameraSimpleImage,
        insetIconURL: akariCameraSimpleButtonImage,
        description: 'Simple Akari camera blocks.',
		tags: ['preload'],
        featured: true,
        internetConnectionRequired: true,
        bluetoothRequired: false
    },
	//Champierre
	{
        name: 'ChatGPT2Scratch',
        extensionId: 'chatgpt2scratch',
        iconURL: chatgpt2scratchIconURL,
        insetIconURL: chatgpt2scratchInsetIconURL,
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
        iconURL: ml2scratchIconURL,
        insetIconURL: ml2scratchInsetIconURL,
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
        iconURL: tm2scratchIconURL,
        insetIconURL: tm2scratchInsetIconURL,
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
        iconURL: tmpose2scratchIconURL,
        insetIconURL: tmpose2scratchInsetIconURL,
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
        iconURL: facemesh2scratchIconURL,
        insetIconURL: facemesh2scratchInsetIconURL,
        collaborator: 'champierre',
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
        collaborator: 'champierre',
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
        iconURL: scratch2maqueenIconURL,
        insetIconURL: scratch2maqueenInsetIconURL,
        description: 'Control DFRobot Maqueen.',
        featured: true,
        collaborator: 'Vernier',
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
	
	//GvbvdxxMod Preloads
	{
        name: 'Roku',
        extensionId: 'roku',
        internetConnectionRequired: true,
        collaborator: 'Gvbvdxx',
        iconURL: roku,
		insetIconURL: rokuSmall,
        tags: ['gvbvdxxmod', 'preload'],
        description: 'Interact with your Roku tv via the GM2Helper software!',
        featured: true
    },
	{
        name: 'HTML5 Elements',
        extensionId: 'html5',
		insetIconURL: gm2HTML5Small,
        iconURL: gm2HTML5Large,
        description: 'Create HTMl5 elements. Display sprite costumes out of the stage!',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['gvbvdxxmod', 'preload']
    },
{
        name: 'Gvbvdxx Extras',
        extensionId: 'extra',
		iconURL: defaultExtensionIcon,
        description: 'Unfinished Gvbvdxx Mod Helper App.',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['gvbvdxxmod', 'preload']
    },
{
        name: 'Website API',
        extensionId: 'websites',
		iconURL: websitesBigIcon,
        insetIconURL: websitesSmallIcon,
        description: 'Website API',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['gvbvdxxmod', 'preload']
    },
{
        name: 'Websockets',
        extensionId: 'websocket',
        iconURL: wsbig,
        insetIconURL: wssmall,
        description: 'Connect to servers!',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['gvbvdxxmod', 'preload']
    },
	{
        name: 'NES Emulator',
        extensionId: 'nesemulator', // update reference once file names are updated
        tags: ['gvbvdxxmod', 'preload'],
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
        name: 'Sound Analyser',
        extensionId: 'sndanalyser',
        iconURL: sndanalyserBig,
        description: 'Read the information about sounds playing from the project.',
        featured: true,
		collaborator: 'Gvbvdxx',
        tags: ['gvbvdxxmod', 'preload']
    },
	{
        name: 'User Data',
        extensionId: 'userdata',
        iconURL: userdatabig,
        insetIconURL: userdatasmall,
        description: 'Get The User\'s Data',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['gvbvdxxmod', 'preload']
	},
	{
        name: 'Audio Context',
        extensionId: 'audioctx',
        iconURL: audioctxbig,
        insetIconURL: audioctxsmall,
        description: 'Play 8-bit sounds',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['gvbvdxxmod', 'preload']
	},
{
        name: 'Beepbox Synth',
        extensionId: 'beepboxsynth',
        iconURL: beepboxbig,
        insetIconURL: beepboxsmall,
        description: 'Play beepbox songs',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['gvbvdxxmod', 'preload']
	},
	 {
        name: 'Better Audio',
        extensionId: 'betteraudio',
        iconURL: betteraudioBigIcon,
        insetIconURL: betteraudioSmallIcon,
        description: 'etter Audio For Scratch',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['gvbvdxxmod', 'preload']
	},
	 {
        name: 'JS (GM2)',
        extensionId: 'dialogs',
        iconURL: jsDialogsBigIcon,
        insetIconURL: jsDialogsSmallIcon,
        description: 'JS Blocks',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['gvbvdxxmod', 'preload']
	},
    {
        name: 'speech4pc',
        extensionId: 'speech4pc',
        iconURL: speech4pcDialogsBigIcon,
        insetIconURL: speech4pcDialogsSmallIcon,
        description: 'Pc Version Of Text To Speech.',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['gvbvdxxmod', 'preload']
	},
	//PenguinMod Preloads
	{
        name: 'PenguinMod Runtime',
        extensionId: 'jgRuntime',
        iconURL: require('../extensions/penguinmod/extensions/runtime.svg'),
        description:'Blocks for modifying project data and settings from PenguinMod itself.',
        collaborator: 'PenguinMod',
        tags: ['pm', 'preload'],
		featured: true
    },
	 {
        name: 'Prism',
        extensionId: 'jgPrism',
        tags: ['pm', 'preload'],
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
        tags: ['pm', 'preload'],
		collaborator: 'PenguinMod',
		featured: true
    },
	{
        name: 'Scratch Authentication',
        extensionId: 'jgScratchAuthenticate',
        iconURL: jgScratchAuthExtensionIcon,
		tags: ['pm', 'preload'],
        description: "Interact with Scratch Authentication to prove the player is a real scratch user.",
        featured: true
    },
	{
        name: 'JSON (PM)',
        extensionId: 'jgJSON',
        iconURL: require('../extensions/penguinmod/extensions/json.png'),
        tags: ['pm', 'preload'],
		collaborator: 'PenguinMod',
        description: 'Blocks for handling JSON objects and Arrays.',
        featured: true
    },
	{
        name: 'Tweening',
        extensionId: 'jgTween',
        collaborator: 'easings.net, Arrow & GarboMuffin',
        description: 'Smoothly animating values using different easing functions and directions.',
        iconURL: require('../extensions/penguinmod/jgTween.svg'),
        tags: ['pm', 'tw', 'preload'],
        featured: true
    },
	{
        name: 'Storage',
        extensionId: 'jgStorage',
        iconURL: require('../extensions/penguinmod/jgStorage.svg'),
        tags: ['pm', 'preload'],
        description: 'Store data after PenguinMod has already been closed out. Basic Server Storage is also included.',
        collaborator: 'Fir & silvxrcat',
        featured: true
    },
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
        iconURL: ptIcon,
        description: (
            <FormattedMessage
                defaultMessage="Weird new blocks, with modifications by GaiaWindWave90."
                description="Description of the strange 'TurboWarp  Blocks' extension"
                id="tw.twExtension.description"
            />
        ),
        tags: ['tw'],
        featured: true
    },
	/*
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
        tags: ['bilup'],
        featured: true
    },
	{
        name: 'CCW Extension Loader',
        extensionId: 'ccw_extension',
        iconURL: require('../extensions/02engine/ccw.svg'),
        description: 'Load custom extensions from Cocrea World.',
        tags: ['ztengine'],
        featured: true
        // Not marked as incompatible with Scratch so that clicking on it doesn't show a prompt
    },
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
	 cocreaworld: {
        name: 'Cocrea World Extension Marketplace',
        href: 'https://assets.ccw.site/extensions/',
        iconURL: galleryIconCCW,
        tag: 'ccw'
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
        iconURL: 'https://com.bilup.org/static/assets/5b5e7dd645a0e3891de6e5d937cca6a6.svg',
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
    cocreaworld: {
        loading: createGalleryStatusItem('cocreaworld', 'Loading CCW extensions...'),
        more: createGalleryStatusItem('cocreaworld', 'See some extensions at the Cocrea World Extension Marketplace.'),
        error: createGalleryStatusItem('cocreaworld', 'Error loading CCW extensions.')
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
        iconURL: defaultExtensionIcon,
        tags: ['potentia', 'preload', 'dev'],
        description: 'A test extension to see if possible. For developers only.',
        featured: true
    },
	{
            name: 'Editor',
            href: 'https://potentiamod.github.io/online/editor.html',
            extensionId: 'gallery_potentiamodEditor',
            iconURL: galleryIconPT,
			tags: ['potentia', 'preload', 'dev'],
            description: 'Opens the editor with this tab as the parent, still with the library opened. For developers.',
            featured: true
        },
        {
            name: 'localhost:8601',
            href: 'http://localhost:8601',
            extensionId: 'gallery_potentiamodLocalhost8601',
            iconURL: defaultExtensionIcon,
			tags: ['potentia', 'preload', 'dev'],
            description: 'Opens localhost:8601 in a new tab with this tab as the parent. For developers',
            featured: true
        },
];
livetests.forEach(ext => {
        menuItems.push(ext);
    });
}


export default menuItems;