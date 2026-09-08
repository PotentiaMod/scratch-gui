import React from 'react';
import {FormattedMessage} from 'react-intl';
import {APP_NAME} from '../../brand';

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

// turbowarp, penguinmod & gallery icons
import twIcon from './tw/tw.svg';
import ptIcon from './tw/pt.png';
import TWgalleryIcon from './gallery/TWgallery.svg';
import rubyIcon from './snail-ide/ruby.png';
import galleryIcon from './gallery/gallery.png';
import returnIcon from './custom/return.svg';
import customExtensionIcon from './custom/custom.svg';
import customExtIcon from './custom/CustomEx.svg';
import customExtInsetIcon from './custom/CustomSmall.svg';
import turbowarpIcon from './penguinmod/extensions/turbowarp_icon.svg';
import gaiamodIcon from './gaiamod/gaiamod_icon.png';
import magicmodIcon from './gaiamod/magicmod_icon.png';
import nitroboltIcon from './gaiamod/nitrobolt_icon.svg';
import acidmodIcon from './gaiamod/acidmod_icon.svg';
import bilupIcon from './gaiamod/bilup_icon.svg';
import penguinmodIcon from './gaiamod/penguinmod_icon.png';
import arkideIcon from './arkide/arkide_icon.png';
import dinosaurmodIcon from './dinosaurmod/dinosaurmod_icon.png';
import snailideIcon from './snail-ide/snailide_icon.png';
import electramodIcon from './electramod/electramod_icon.png';
import astraeditorIcon from './gaiamod/astraeditor_icon.svg';
import zeroTwoEngineIcon from './gaiamod/zerotwoengine_icon.png';
import mistwarpIcon from './mistium/mistwarp_icon.svg';
import dashblocksIcon from './dashblocks/dashblocks_icon.png';
import ccwIcon from './gandi-ide/gandiidelogo.png';
import penguinmodLibraryExtensionIcon from './penguinmod/library.svg';
import sharkpoolGalleryIcon from './penguinmod/sharkpool-library.svg';

import ExtForgeIcon from './penguinmod/extforge.svg';

import DiscordIcon from './discord/icon.svg';
import DiscordRPCIcon from './discord/rpc.png';

import filesExtensionIcon from './penguinmod/extensions/files.svg';
import jgTailgatingExtensionIcon from './penguinmod/extensions/tailgating.png';
import jgRuntimeExtensionIcon from './penguinmod/extensions/runtime.svg';
import jgPrismExtensionIcon from './penguinmod/extensions/prism.png';
import jgDebuggingIcon from './penguinmod/extensions/debugging.svg';

import jwProtoExtensionIcon from './penguinmod/extensions/proto.svg';
import jwUniteExtensionIcon from './penguinmod/extensions/Unite.png';

import jwStructsExtensionIcon from './penguinmod/extensions/ooplogo.png';

import jwArrayExtensionThumb from './penguinmod/extensions/jwArray.svg';
import jwTargetsExtensionThumb from './penguinmod/extensions/jwTargets.svg';
import jwNumExtensionThumb from './penguinmod/extensions/jwNum.svg';
import jwColorExtensionThumb from './penguinmod/extensions/jwColor.svg';
import jwVectorExtensionThumb from './penguinmod/extensions/jwVector.svg';
import jwLambdaExtensionThumb from './penguinmod/extensions/jwLambda.svg';
import jwScopeExtensionThumb from './penguinmod/extensions/jwScope.svg';
import jwXMLExtensionIcon from './penguinmod/extensions/jwXML.svg';
import jwPointerExtensionThumb from './penguinmod/extensions/jwPointer.svg';
import jwIntExtensionThumb from './penguinmod/extensions/jwInt.svg';

import iygPerlinNoiseExtensionIcon from './penguinmod/extensions/perlinnoisebanner.png';

// thank yo godslayerakp for makin pmCamera :good:
import pmCameraExtensionIcon from './penguinmod/extensions/pmcamera_thumbnail.png';

// cl waw
// import cloudlinkThumb from './penguinmod/extensions/cloudlinkThumb.png';
import cloudlinkIcon from './penguinmod/extensions/cloudlinkIcon.svg';
import clfiveIcon from './cloudlink/cl5.svg';
import clomegaIcon from './cloudlink/clomega.svg';

// thx jeremey
import canvasExtensionBanner from './penguinmod/extensions/CanvasExtensionMenu.png';
import canvasExtensionIcon from './penguinmod/extensions/CanvasSmall.png';

// griffpatch stuff that hopefully we can keep pls plsplspl !!S!
import griffpatchPhysicsThumb from './penguinmod/extensions/griffpatch_physics.png';
import griffpatchPhysicsIcon from './penguinmod/extensions/griffpatch_physicsIcon.svg';

import gp from './penguinmod/extensions/gamepad.svg';
import clippingblending from './penguinmod/extensions/clippingblending.svg';

import pointerlockThumb from './penguinmod/extensions/pointerlock.png';
import cursorThumb from './penguinmod/extensions/cursor.svg';

// LilyMakesThings 
import lilyTempVariablesExtensionIcon from './penguinmod/orgtw/TempVariables2.svg';

// more icons so they arent just red when the extension color is not red
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

// import jgTweeningExtensionIcon from './penguinmod/extensions/tween.png';
import jgsilvxrcatInterfacesExtensionIcon from './penguinmod/extensions/interfaces2.png';

// 3D MAN WTF
import jg3dExtensionIcon from './penguinmod/extensions/3d.png';
import jg3dInsetExtensionIcon from './penguinmod/extensions/3dicon.png';
import jg3dVrExtensionIcon from './penguinmod/extensions/3dVr.png';
import jg3dVrInsetExtensionIcon from './penguinmod/extensions/3dVr_Inset.png';
import fr3dPhysicsExtensionIcon from './penguinmod/extensions/3d_physics.png';
import fr3dPhysicsInsetExtensionIcon from './penguinmod/extensions/3d_physics_icon_sized.png';

// virtal realty
import jgVrExtensionIcon from './penguinmod/extensions/vr_extension.png';

import theshovelCustomStylesIcon from './penguinmod/orgtw/CustomStyles.svg';
import theshovelCanvasEffectsIcon from './penguinmod/extensions/canvas_effects.svg';
import theshovelLzCompressIcon from './penguinmod/orgtw/lz-compress2.svg';
import theshovelColorPickerIcon from './penguinmod/orgtw/ColorPicker.svg';

// sharkpool
import sharkpoolPrintingIcon from './penguinmod/extensions/printing.svg';
import sharkpoolTuneIcon from './penguinmod/extensions/tuneShark.svg';
import sharkpoolMBPIcon from './penguinmod/extensions/myBlocksPlus.svg';
import sharkpoolBCIcon from './penguinmod/extensions/BetterComments.svg';
import sharkpoolPEIcon from './penguinmod/extensions/particleEngine.svg';
import jgScriptsExtensionIcon from './penguinmod/extensions/scripts.svg';
import sharkpoolLooksExpandedIcon from './penguinmod/extensions/looksExpanded.svg';
import spTurboSkinsIcon from './penguinmod/extensions/turboSkins.svg';
import spFontManagerIcon from './penguinmod/extensions/fontManager.svg';
import spSoundWaveIcon from './penguinmod/extensions/soundWaves.svg';
import spTempVarsIcon from './penguinmod/extensions/sp_tempVars.svg';

// events
import jgStorageExtensionIcon from './penguinmod/extensions/storage.png';
import jgTimersExtensionIcon from './penguinmod/extensions/multipletimers.png';
import jgAdvancedTextExtensionIcon from './penguinmod/extensions/advancedtext.png';

import jgJavascriptExtensionIcon from './penguinmod/extensions/javascript.png';
import jgPathfindingExtensionIcon from './penguinmod/extensions/pathfinding.png';
import jgAnimationExtensionIcon from './penguinmod/extensions/animation.png';

// category expansions
import pmMotionExpansionExtensionIcon from './penguinmod/extensions/motion_expanded.png';
import pmEventsExpansionExtensionIcon from './penguinmod/extensions/events_expanded.png';
import pmControlsExpansionExtensionIcon from './penguinmod/extensions/controls_expanded.png';
import pmSensingExpansionExtensionIcon from './penguinmod/extensions/sensing_expanded.png';
import pmOperatorsExpansionExtensionIcon from './penguinmod/extensions/operators_expanded.png';

// default icon if one is not made yet...
import defaultExtensionIcon from './penguinmod/extensions/placeholder.png';


// um...
import turboBuilderIcon from './gaiamod/turbobuilder.png';
import turboBuilderDevIcon from './gaiamod/turbobuilder-dev.png';
import silvxrcatOddMessagesExtensionIcon from './penguinmod/extensions/oddmessages.svg';

// dinosaurmod
import luaIcon from './dinosaurmod/lua.png';
import pythonIcon from './dinosaurmod/python.png';

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

//um
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

//AkariGroup
import akariBlocksImage from './akariBlocks/logo320.jpg';
import akariBlocksButtonImage from './akariBlocks/logo320_ex.jpg';
import akariCameraImage from './akariCamera/logo320.jpg';
import akariCameraButtonImage from './akariCamera/logo320_ex.jpg';
import akariBlocksSimpleImage from './akariBlocksSimple/logo320.jpg';
import akariBlocksSimpleButtonImage from './akariBlocksSimple/logo320_ex.jpg';
import akariCameraSimpleImage from './akariCameraSimple/logo320.jpg';
import akariCameraSimpleButtonImage from './akariCameraSimple/logo320_ex.jpg';

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


//by yj
import battleImage from './gitblock/battle.png';
import battleInsetImage from './gitblock/battle-small.svg';
import puzzleImage from './gitblock/puzzle.png';
import puzzleInsetImage from './gitblock/puzzle-small.svg';
import communityImage from './gitblock/community.png';
import communityInsetImage from './gitblock/community-small.svg';
import kinectImage from './gitblock/kinect.png';
import kinectInsetImage from './gitblock/kinect-small.svg';
import canvasIconURL from './gitblock/canvas.png';
import canvasInsetIconURL from './gitblock/canvas-small.svg';
import lazyAudioIconURL from './gitblock/lazy-audio.png';
import lazyAudioInsetIconURL from './gitblock/lazy-audio-small.svg';
import jsInsetIconURL from './gitblock/js-small.svg';

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

//166iwase-lgtm/taichan0123
import meshImage from './mesh/mesh.png';
import ledButtonImage from './led/led-small.png';
import brightnessButtonImage from './brightness/brightness-small.png';
import motionButtonImage from './motion/motion-small.png';
import gpioButtonImage from './gpio/gpio-small.png';

//garragames
import koriIconURL from './kori/kori.png';
import koriInsetIconURL from './kori/kori-small.svg';
import koriConnectionIconURL from './kori/kori-illustration.svg';
import koriConnectionSmallIconURL from './kori/kori-small.svg';

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

//gaiamod
import gaiaGPTThumb from './gaiamod/GaiaGPT.png';
import gaiaBlocksThumb from './gaiamod/GaiaUtilities.png';
import gaiaExGalleryThumb from './gaiamod/gallery.png';
import sailormoonThumb from './gaiamod/lolsailormoon.png';
import kittenbotThumb from './gaiamod/KittenBot.png';
import cocreaFetchThumb from './gaiamod/cocreaFetch.png';
import promptsThumb from './gaiamod/prompts.png';
import spinachThumb from './gaiamod/spinach.png';
import catsThumb from './gaiamod/CatFacts.png';
import AlexaThumb from './gaiamod/Alexa.png';
import penguinThumb from './gaiamod/PenguinAttack.png';
import scratchmegarepoThumb from './gaiamod/ScratchMegaRepo.png';
import snailIDEGalleryThumb from './gaiamod/snailIDEEXGallery.png';
import loremIpsumThumb from './gaiamod/LoremIpsumThumb.png';
import webcamThumb from './gaiamod/WebCamThumb.png';
import chatNioThumb from './gaiamod/ChatNio.png';
import mysteryThumb from './gaiamod/unknown.png';
import mysteryInsetIcon from './gaiamod/unknown-small.png';
import scratchUtilitiesIcon from './gaiamod/ScratchUtilities.png';
import turboWeatherIcon from './gaiamod/TurboWeather.png';
import wonderBlocksIcon from './gaiamod/WonderBlocks.png';
import catWithDonut from './gaiamod/DingDongDitch.svg';

import ampmodgalleryThumb from './gaiamod/AmpMod.svg';
import obgalleryIcon from './gaiamod/OmniBlocks.svg';

import shareImage from "./share/share.svg";

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

import libraImage from './libra/Libra.png';
import libraInsetImage from './libra/Libra-small.svg';

import learningmlIconURL from './learningml-texts/learningml.png';
import learningmlTextInsetIconURL from './learningml-texts/learningml-text-small.svg';
import learningmlImageInsetIconURL from './learningml-images/learningml-image-small.svg';
import learningmlNumericalInsetIconURL from './learningml-numerical/learningml-numerical-small.svg';

import echidnaIconURL from './echidna/echidna.png';
import echidnaInsetIconURL from './echidna/erizo.png';
import echidnaConnectionIconURL from './echidna/echidna-illustration.svg';
import echidnaConnectionSmallIconURL from './echidna/echidna-small.svg';

import shredsdkIcon from './shredsdk/shredsdk.svg'
import utilsIcon from './utils/utilites.svg';
import gameutilsIcon from './gameutils/gameutils.svg'

import edubotIconURL from "./edubot/edubot.png";
import edubotInsetIconURL from "./edubot/edubot-small.svg";
import edubotConnectionIconURL from "./edubot/edubot-illustration.svg";
import edubotConnectionSmallIconURL from "./edubot/edubot-small.svg";

import jikkoIconURL from "./jikko/jikko.png";
import jikkoInsetIconURL from "./jikko/jikko-small.svg";
import jikkoConnectionIconURL from "./jikko/jikko-illustration.svg";
import jikkoConnectionSmallIconURL from "./jikko/jikko-small.svg";

import lineBlockImage from './line/line.png';
import lineBlockButtonImage from './line/line-small.png';


// TurboWarp extensions
const twExtensions = [
    {
      extensionId: 'https://extensions.turbowarp.org/stretch.js',
      name: 'Stretch',
      description: 'Stretch sprites horizontally or vertically.',
      iconURL: 'https://extensions.turbowarp.org/images/stretch.svg',
      credits: 'GarboMuffin and TheStarWorld',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
     {
        name: 'GamePad',
        extensionId: 'Gamepad',
        tags: ['turbowarp', 'hardware'],
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        twDeveloper: 'GarboMuffin',
        iconURL: gp,
        description: 'Directly access gamepads instead of just mapping buttons to keys.',
        featured: true
    },
    {
        name: 'Physics',
        extensionId: 'https://extensions.turbowarp.org/box2d.js',
        tags: ['turbowarp'],
        extDeveloper: 'griffpatch',
        iconURL: griffpatchPhysicsThumb,
        insetIconURL: griffpatchPhysicsIcon,
        description: 'Box2D Physics extension created by Griffpatch.',
        customInsetColor: '#D9F0FF',
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/files.js',
      name: 'Files',
      description: 'Read and download files.',
      iconURL: 'https://extensions.turbowarp.org/images/files.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'Pointer Lock',
        extensionId: 'https://extensions.turbowarp.org/pointerlock.js',
        tags: ['turbowarp'],
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        iconURL: pointerlockThumb,
        description: (
            <FormattedMessage
                defaultMessage='A extension to lock the mouse cursor in the stage.'
                description='Scratch utilities'
                id='gui.extension.pointerlock.description'
            />
        ),
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: 'GarboMuffin'
    },
    {
        name: 'Mouse Cursor',
        extensionId: 'https://extensions.turbowarp.org/cursor.js',
        tags: ['turbowarp'],
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        iconURL: 'https://extensions.turbowarp.org/images/cursor.png',
        description: (
            <FormattedMessage
                defaultMessage='A extension to change what the mouse cursor looks like on the stage.'
                description='Scratch utilities'
                id='gui.extension.MouseCursor.description'
            />
        ),
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: 'GarboMuffin'
    },
    {
      extensionId: 'https://extensions.turbowarp.org/runtime-options.js',
      name: 'Runtime Options',
      description: 'Get and modify turbo mode, framerate, interpolation, clone limit, stage size, and more.',
      iconURL: 'https://extensions.turbowarp.org/images/runtime-options.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/fetch.js',
      name: 'Fetch',
      description: 'Make requests to the broader internet.',
      iconURL: 'https://extensions.turbowarp.org/images/fetch.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/text.js',
      name: 'Text',
      description: 'Manipulate characters and text.',
      iconURL: 'https://extensions.turbowarp.org/images/text.svg',
      credits: 'CST1229, BludIsAnLemon and Man-o-Valor',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/local-storage.js',
      name: 'Local Storage',
      description: 'Store data persistently. Like cookies, but better.',
      iconURL: 'https://extensions.turbowarp.org/images/local-storage.svg',
      credits: 'infernostars and GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/true-fantom/base.js',
      name: 'Base',
      description: 'Convert numbers between bases.',
      iconURL: 'https://extensions.turbowarp.org/images/true-fantom/base.svg',
      credits: 'TrueFantom',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/bitwise.js',
      name: 'Bitwise',
      description: 'Blocks that operate on the binary representation of numbers in computers.',
      iconURL: 'https://extensions.turbowarp.org/images/bitwise.svg',
      credits: 'TrueFantom',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Skyhigh173/bigint.js',
      name: 'BigInt',
      description: 'Math blocks that work on infinitely large integers (no decimals).',
      iconURL: 'https://extensions.turbowarp.org/images/Skyhigh173/bigint.svg',
      credits: 'Skyhigh173',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/utilities.js',
      name: 'Utilities',
      description: 'A bunch of interesting blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/utilities.svg',
      'original': 'Sheep_maker',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/sound.js',
      name: 'URL Playback',
      description: 'Play sounds from URLs. Previously called \'Sound\'.',
      iconURL: 'https://extensions.turbowarp.org/images/sound.svg',
      credits: 'softed and GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'Video',
        extensionId: 'https://extensions.turbowarp.org/Lily/Video.js',
        extDeveloper: 'LilyMakesThings, SharkPool, and Fath11',
        iconURL: 'https://extensions.turbowarp.org/images/Lily/Video.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp'],
        description: 'Play videos from URLs.',
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/iframe.js',
      name: 'Iframe',
      description: 'Display webpages or HTML over the stage.',
      iconURL: 'https://extensions.turbowarp.org/images/iframe.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Clay/htmlEncode.js',
      name: 'HTML Encode',
      description: 'Escape untrusted text to safely include in HTML.',
      iconURL: 'https://extensions.turbowarp.org/images/Clay/htmlEncode.svg',
      credits: 'clay-rip',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'Clipping and Blending',
        extensionId: 'https://extensions.turbowarp.org/Xeltalliv/clippingblending.js',
        iconURL: clippingblending,
        tags: ['turbowarp', 'graphics'],
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        description: 'Clipping outside of a specified rectangular area and additive color blending.',
        featured: true,
        twDeveloper: 'Vadik1'
    },
    {
      extensionId: 'https://extensions.turbowarp.org/clipboard.js',
      name: 'Clipboard',
      description: 'Read and write from the system clipboard.',
      iconURL: 'https://extensions.turbowarp.org/images/clipboard.svg',
      credits: 'tomyo-code, AdamMady and NamelessCat',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/obviousAlexC/penPlus.js',
      name: 'Pen Plus V7',
      description: 'Advanced rendering capabilities.',
      iconURL: 'https://extensions.turbowarp.org/images/obviousAlexC/penPlus.svg',
      credits: 'ObviousAlexC and Pen-Group',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/penplus.js',
      name: 'Pen Plus V5 (Old)',
      description: 'Replaced by Pen Plus V7.',
      iconURL: 'https://extensions.turbowarp.org/images/penplus.svg',
      credits: 'ObviousAlexC',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Xeltalliv/simple3D.js',
      name: 'Simple 3D',
      description: 'Make GPU accelerated 3D projects easily.',
      iconURL: 'https://extensions.turbowarp.org/images/Xeltalliv/simple3D.png',
      credits: 'Vadik1',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/Skins.js',
      name: 'Skins',
      description: 'Have your sprites render as other images or costumes.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/Skins.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/obviousAlexC/SensingPlus.js',
      name: 'Sensing Plus',
      description: 'An extension to the sensing category.',
      iconURL: 'https://extensions.turbowarp.org/images/obviousAlexC/SensingPlus.svg',
      credits: 'ObviousAlexC',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/CubesterYT/KeySimulation.js',
      name: 'Key Simulation',
      description: 'Simulate key presses and mouse clicks.',
      iconURL: 'https://extensions.turbowarp.org/images/CubesterYT/KeySimulation.svg',
      credits: 'CubesterYT',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'Clones+',
        extensionId: 'https://extensions.turbowarp.org/Lily/ClonesPlus.js',
        tags: ['turbowarp', 'categoryexpansion'],
        iconURL: 'https://extensions.turbowarp.org/images/Lily/ClonesPlus.svg',
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        description: 'Expansion of Scratch\'s clone features.',
        featured: true,
        twDeveloper: 'LilyMakesThings'
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/LooksPlus.js',
      name: 'Looks Plus',
      description: 'Expands upon the looks category, allowing you to show/hide, get costume data and edit SVG skins on sprites.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/LooksPlus.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/MoreEvents.js',
      name: 'More Events',
      description: 'Start your scripts in new ways.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/MoreEvents.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/ListTools.js',
      name: 'List Tools',
      description: 'An assortment of new ways to interact with lists.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/ListTools.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/veggiecan/mobilekeyboard.js',
      name: 'Mobile Keyboard',
      description: 'Show the keyboard on mobile devices and get the users input without showing any input modal.',
      iconURL: 'https://extensions.turbowarp.org/images/veggiecan/mobilekeyboard.svg',
      credits: 'veggiecan0419',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/NexusKitten/moremotion.js',
      name: 'More Motion',
      description: 'More motion-related blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/NexusKitten/moremotion.svg',
      credits: 'NamelessCat',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/CubesterYT/WindowControls.js',
      name: 'Window Controls',
      description: 'Move, resize, rename the window, enter fullscreen, get screen size, and more.',
      iconURL: 'https://extensions.turbowarp.org/images/CubesterYT/WindowControls.svg',
      credits: 'CubesterYT',
      'original': 'BlueDome77',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/veggiecan/browserfullscreen.js',
      name: 'Browser Fullscreen',
      description: 'Enter and exit fullscreen mode.',
      iconURL: 'https://extensions.turbowarp.org/images/veggiecan/browserfullscreen.svg',
      credits: 'Veggiecan0419',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/shreder95ua/resolution.js',
      name: 'Screen Resolution',
      description: 'Get the resolution of the primary screen.',
      iconURL: 'https://extensions.turbowarp.org/images/shreder95ua/resolution.svg',
      credits: 'shreder95ua',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/XmerOriginals/closecontrol.js',
      name: 'Ask Before Closing Tab',
      description: 'Show a prompt when someone tries to close the tab.',
      iconURL: 'https://extensions.turbowarp.org/images/XmerOriginals/closecontrol.svg',
      credits: 'XmerOriginals',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/navigator.js',
      name: 'Navigator',
      description: 'Details about the user\'s browser and operating system.',
      iconURL: 'https://extensions.turbowarp.org/images/navigator.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/battery.js',
      name: 'Battery',
      description: 'Access information about the battery of phones or laptops. May not work on all devices and browsers.',
      iconURL: 'https://extensions.turbowarp.org/images/battery.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/PwLDev/vibration.js',
      name: 'Vibration',
      description: 'Control the device\'s vibration. Only works on Chrome for Android.',
      iconURL: 'https://extensions.turbowarp.org/images/PwLDev/vibration.svg',
      credits: 'PwLDev',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/TheShovel/CustomStyles.js',
      name: 'Custom Styles',
      description: 'Customize the appearance of variable monitors and prompts in your project.',
      iconURL: 'https://extensions.turbowarp.org/images/TheShovel/CustomStyles.svg',
      credits: 'TheShovel',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/NexusKitten/controlcontrols.js',
      name: 'Control Controls',
      description: 'Show and hide the project\'s controls.',
      iconURL: 'https://extensions.turbowarp.org/images/NexusKitten/controlcontrols.svg',
      credits: 'NamelessCat',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/mdwalters/notifications.js',
      name: 'Notifications',
      description: 'Display notifications.',
      iconURL: 'https://extensions.turbowarp.org/images/mdwalters/notifications.svg',
      credits: 'mdwalters',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/XeroName/Deltatime.js',
      name: 'Delta Time',
      description: 'Precise delta timing blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/XeroName/Deltatime.svg',
      credits: 'XeroName',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/ar.js',
      name: 'Augmented Reality',
      description: 'Shows image from camera and performs motion tracking, allowing 3D projects to correctly overlay virtual objects on real world.',
      iconURL: 'https://extensions.turbowarp.org/images/ar.svg',
      credits: 'Vadik1',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true,
    },
    {
      extensionId: 'https://extensions.turbowarp.org/encoding.js',
      name: 'Encoding',
      description: 'Encode and decode strings into their unicode numbers, base 64, or URLs.',
      iconURL: 'https://extensions.turbowarp.org/images/encoding.svg',
      credits: '-SIPC-',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/SoundExpanded.js',
      name: 'Sound Expanded',
      description: 'Adds more sound-related blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/SoundExpanded.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'TurboWarp Temporary Variables',
        extensionId: 'lmsTempVars2',
        iconURL: lilyTempVariablesExtensionIcon,
        tags: ['turbowarp'],
        description: 'Create disposable runtime or thread variables.',
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        credits: 'LilyMakesThings',
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/MoreTimers.js',
      name: 'More Timers',
      description: 'Control several timers at once.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/MoreTimers.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/clouddata-ping.js',
      name: 'Ping Cloud Data',
      description: 'Determine whether a cloud variable server is probably up.',
      iconURL: 'https://extensions.turbowarp.org/images/clouddata-ping.svg',
      credits: 'GarboMuffin',
      'original': 'TheShovel',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'CloudLink',
        extensionId: 'https://extensions.penguinmod.com/extensions/MikeDev101/cloudlink.js',
        tags: ['turbowarp'],
        insetIconURL: cloudlinkIcon,
        iconURL: 'https://extensions.penguinmod.com/images/MikeDev101/cloudlink.svg',
        description: 'A powerful WebSocket extension for Scratch.',
        featured: true,
        extDeveloper: 'MikeDev',
        internetConnectionRequired: true
    },
    {
        name: 'Network',
        extensionId: 'https://extensions.turbowarp.org/true-fantom/network.js',
        extDeveloper: 'TrueFantom',
        iconURL: 'https://extensions.turbowarp.org/images/true-fantom/network.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp', 'datamgmt'],
        description: 'Various blocks for interacting with the network.',
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/true-fantom/math.js',
      name: 'Math',
      description: 'A lot of operators blocks, from exponentiation to trigonometric functions.',
      iconURL: 'https://extensions.turbowarp.org/images/true-fantom/math.svg',
      credits: 'TrueFantom',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/true-fantom/regexp.js',
      name: 'RegExp',
      description: 'Full interface for working with Regular Expressions.',
      iconURL: 'https://extensions.turbowarp.org/images/true-fantom/regexp.svg',
      credits: 'TrueFantom',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/true-fantom/couplers.js',
      name: 'Couplers',
      description: 'A few adapter blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/true-fantom/couplers.svg',
      credits: 'TrueFantom',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/DogeisCut/FormatNumbers.js',
      name: 'Format Numbers',
      description: 'Format large numbers into AD standard, fixed decimal, comma separated, or scientific notation.',
      iconURL: 'https://extensions.turbowarp.org/images/DogeisCut/FormatNumbers.png',
      credits: 'DogeisCut',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'All Menus',
        extensionId: 'https://extensions.penguinmod.com/extensions/Lily/AllMenus.js',
        iconURL: 'https://extensions.turbowarp.org/images/Lily/AllMenus.svg',
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp'],
        description: 'Every dropdown menu for each block, in one extension.',
        extDeveloper: 'LilyMakesThings',
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/HackedBlocks.js',
      name: 'Hidden Block Collection',
      description: 'Various \'hacked blocks\' that work in Scratch but are not visible in the palette.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/HackedBlocks.svg',
      credits: 'LilyMakesThings and pumpkinhasapatch',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/Cast.js',
      name: 'Cast',
      description: 'Convert values between types.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/Cast.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/-SIPC-/time.js',
      name: 'Time',
      description: 'Blocks for times, dates, and time zones.',
      iconURL: 'https://extensions.turbowarp.org/images/-SIPC-/time.svg',
      credits: '-SIPC- and SharkPool',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/-SIPC-/consoles.js',
      name: 'Consoles (TW)',
      description: 'Blocks that interact with the JavaScript console built in to your browser\'s developer tools.',
      iconURL: 'https://extensions.turbowarp.org/images/-SIPC-/consoles.svg',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
      credits: '-SIPC-',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/ZXMushroom63/searchApi.js',
      name: 'Search Params',
      description: 'Interact with URL search parameters: the part of the URL after a question mark.',
      iconURL: 'https://extensions.turbowarp.org/images/ZXMushroom63/searchApi.svg',
      credits: 'ZXMushroom63',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
   {
            name: 'ShovelUtils',
            extensionId: 'https://extensions.turbowarp.org/TheShovel/ShovelUtils.js',
            tags: ['turbowarp'],
            iconURL: 'https://extensions.turbowarp.org/images/TheShovel/ShovelUtils.png',
            insetIconURL: turbowarpIcon,
			customInsetColor: '#ff4d4d',
            description: 'A bunch of miscellaneous blocks.',
            featured: true,
            twDeveloper: 'TheShovel and Mio'
        },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/Assets.js',
      name: 'Asset Manager',
      description: 'Add, remove, and get data from various types of assets.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/Assets.svg',
      credits: 'LilyMakesThings and Mio',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/DNin/wake-lock.js',
      name: 'Wake Lock',
      description: 'Prevent the computer from falling asleep.',
      iconURL: 'https://extensions.turbowarp.org/images/DNin/wake-lock.svg',
      credits: 'D-ScratchNinja',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Skyhigh173/json.js',
      name: 'JSON (TW)',
      description: 'Handle JSON strings and arrays.',
      iconURL: 'https://extensions.turbowarp.org/images/Skyhigh173/json.svg',
      credits: 'Skyhigh173 and Mio',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/mbw/xml.js',
      name: 'XML (TW)',
      description: 'Create and extract values from XML.',
      iconURL: 'https://extensions.turbowarp.org/images/mbw/xml.svg',
      credits: 'mybearworld',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/numerical-encoding-2.js',
      name: 'Numerical Encoding V2',
      description: 'Encode strings as numbers for cloud variables. Not compatible with V1 due to using much more efficient format.',
      iconURL: 'https://extensions.turbowarp.org/images/numerical-encoding-2.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/cs2627883/numericalencoding.js',
      name: 'Numerical Encoding V1',
      description: 'Use V2 instead as it is more efficient. V1 only exists for compatibility reasons.',
      credits: 'cs2627883',
	  iconURL: 'https://extensions.turbowarp.org/images/unknown.svg',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/DT/cameracontrols.js',
      name: 'Camera V1',
      description: 'Move the visible part of the stage.',
      iconURL: 'https://extensions.turbowarp.org/images/DT/cameracontrols.svg',
      credits: 'DT',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/TheShovel/CanvasEffects.js',
      name: 'Canvas Effects (TW)',
      description: 'Apply visual effects to the entire stage.',
      iconURL: 'https://extensions.turbowarp.org/images/TheShovel/CanvasEffects.svg',
      credits: 'TheShovel and SharkPool',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Longboost/color_channels.js',
      name: 'RGB Channels',
      description: 'Only render or stamp certain RGB channels.',
      iconURL: 'https://extensions.turbowarp.org/images/Longboost/color_channels.svg',
      credits: 'Longboost',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'Zip',
        extensionId: 'https://extensions.turbowarp.org/CST1229/zip.js',
        iconURL: 'https://extensions.turbowarp.org/images/CST1229/zip.svg',
        insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp', 'datamgmt'],
        description: 'Create and edit .zip format files, including .sb3 files.',
        twDeveloper: 'CST1229',
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/CST1229/images.js',
      name: 'Images (TW)',
      description: 'Some blocks for working with images.',
      iconURL: 'https://extensions.turbowarp.org/images/CST1229/images.svg',
      'original': 'CST1229',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/0832/rxFS2.js',
      name: 'rxFS',
      description: 'Blocks for interacting with a virtual in-memory filesystem.',
      iconURL: 'https://extensions.turbowarp.org/images/0832/rxFS2.svg',
      credits: '0832',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/NexusKitten/sgrab.js',
      name: 'S-Grab',
      description: 'Get information about Scratch projects and Scratch users.',
      iconURL: 'https://extensions.turbowarp.org/images/NexusKitten/sgrab.svg',
      credits: 'NamelessCat',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/NOname-awa/graphics2d.js',
      name: 'Graphics 2D',
      description: 'Blocks to compute lengths, angles, and areas in two dimensions.',
      iconURL: 'https://extensions.turbowarp.org/images/NOname-awa/graphics2d.svg',
      credits: 'NOname-awa',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/NOname-awa/more-comparisons.js',
      name: 'More Comparisons',
      description: 'More comparison blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/NOname-awa/more-comparisons.svg',
      credits: 'NOname-awa',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'Tweening',
        extensionId: 'jgTween',
        credits: 'easings.net, Arrow & GarboMuffin',
        description: 'Smoothly animating values using different easing functions and directions.',
        iconURL: 'https://extensions.turbowarp.org/images/JeremyGamer13/tween.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp'],
        featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/rixxyx.js',
      name: 'RixxyX',
      description: 'Various utility blocks.',
      iconURL: 'https://extensions.turbowarp.org/images/rixxyx.svg',
      credits: 'RixTheTyrunt',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/lmsutils.js',
      name: 'Lily\'s Toolbox',
      description: 'Previously called LMS Utilities.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/lmsutils.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/qxsck/data-analysis.js',
      name: 'Data Analysis',
      description: 'Blocks to compute means, medians, maximums, minimums, variances, and modes.',
      iconURL: 'https://extensions.turbowarp.org/images/qxsck/data-analysis.svg',
      credits: 'qxsck',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/qxsck/var-and-list.js',
      name: 'Variable and list',
      description: 'More blocks related to variables and lists.',
      iconURL: 'https://extensions.turbowarp.org/images/qxsck/var-and-list.svg',
      credits: 'qxsck',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/vercte/dictionaries.js',
      name: 'Dictionaries',
      description: 'Use the power of dictionaries in your project.',
      iconURL: 'https://extensions.turbowarp.org/images/vercte/dictionaries.svg',
      credits: 'Vercte',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
        name: 'HTTP',
        extensionId: 'https://extensions.turbowarp.org/godslayerakp/http.js',
        iconURL: 'https://extensions.turbowarp.org/images/godslayerakp/http.svg',
        insetIconURL: turbowarpIcon,
        tags: ['turbowarp'],
        description: 'Comprehensive extension for interacting with external websites.',
        featured: true,
        internetConnectionRequired: true,
        customInsetColor: '#ff4d4d'
    },
    {
      extensionId: 'https://extensions.turbowarp.org/godslayerakp/ws.js',
      name: 'WebSocket',
      description: 'Manually connect to WebSocket servers.',
      iconURL: 'https://extensions.turbowarp.org/images/godslayerakp/ws.png',
      credits: 'RedMan13',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/CubesterYT/Webhooks.js',
      name: 'Webhooks',
      description: 'A modern, very capable Webhook extension.',
      iconURL: 'https://extensions.turbowarp.org/images/CubesterYT/Webhooks.svg',
      credits: 'CubesterYT',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/CommentBlocks.js',
      name: 'Comment Blocks',
      description: 'Annotate your scripts.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/CommentBlocks.svg',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/veggiecan/LongmanDictionary.js',
      name: 'Longman Dictionary',
      description: 'Get the definitions of words from the Longman Dictionary in your projects.',
      iconURL: 'https://extensions.turbowarp.org/images/veggiecan/LongmanDictionary.svg',
      credits: 'veggiecan0419',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Alestore/nfcwarp.js',
      name: 'NFCWarp',
      description: 'Allows reading data from NFC (NDEF) devices. Only works in Chrome on Android.',
      iconURL: 'https://extensions.turbowarp.org/images/Alestore/nfcwarp.svg',
      credits: 'Alestore Games',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/NishiOwO/dectalk.js',
      name: 'DECtalk Text to Speech',
      description: 'Text to speech powered by DECtalk. Does not use an internet connection, so it works offline. English only.',
      iconURL: 'https://extensions.turbowarp.org/images/NishiOwO/dectalk.png',
      credits: 'NishiOwO',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/steamworks.js',
      name: 'Steamworks',
      description: 'Connect your project to Steamworks APIs.',
      iconURL: 'https://extensions.turbowarp.org/images/unknown.svg',
      credits: 'GarboMuffin',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/itchio.js',
      name: 'itch.io',
      description: 'Blocks that interact with the itch.io website. Unofficial.',
      iconURL: 'https://extensions.turbowarp.org/images/itchio.svg',
      credits: 'softed',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
    {
      extensionId: 'https://extensions.turbowarp.org/gamejolt.js',
      name: 'Game Jolt',
      description: 'Blocks that allow games to interact with the GameJolt API. Unofficial.',
      iconURL: 'https://extensions.turbowarp.org/images/gamejolt.png',
      credits: 'softed',
	  tags: ['turbowarp'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
   {
        name: 'Newgrounds',
        extensionId: 'https://extensions.turbowarp.org/obviousAlexC/newgroundsIO.js',
        extDeveloper: 'ObviousAlexC',
        iconURL: 'https://extensions.turbowarp.org/images/obviousAlexC/newgroundsIO.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp', 'datamgmt'],
        description: 'Blocks that allow games to interact with the Newgrounds API.',
        featured: true
    },
	 {
        name: 'Dangerous, But Useful',
        extensionId: 'https://raw.githubusercontent.com/David-Orangemoon/Modified-Extension-Loader-Turbowarp/main/custom%20extensions/UpgradedDangerousBusUseful.js',
        iconURL: 'https://raw.githubusercontent.com/David-Orangemoon/Modified-Extension-Loader-Turbowarp/main/extendedGallery/Icons/DBU.svg',
		insetIconURL: turbowarpIcon,
		customInsetColor: '#ff4d4d',
        tags: ['turbowarp'],
        description: 'Dangerous Utility Blocks!',
		extDeveloper: 'ObviousAlexC',
        featured: true
		
    },
    {
      extensionId: 'https://extensions.turbowarp.org/Lily/McUtils.js',
      name: 'McUtils',
      description: 'Helpful utilities for any fast food employee.',
      iconURL: 'https://extensions.turbowarp.org/images/Lily/McUtils.png',
      credits: 'LilyMakesThings',
	  tags: ['turbowarp', 'jokes'],
      insetIconURL: turbowarpIcon,
      customInsetColor: '#ff4d4d',
	  featured: true
    },
	{
        name: (
            <FormattedMessage
                defaultMessage='TurboWarp Extension Gallery'
                description='Name of extensions.turbowarp.org in extension library'
                id='tw.extensionGallery.name'
                values={{
                    APP_NAME: 'TurboWarp'
                }}
            />
        ),
        href: 'https://extensions.turbowarp.org/',
        extensionId: 'special_turbowarpExtensionLibrary',
        iconURL: TWgalleryIcon,
        description: (
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage='We list many TurboWarp extensions here for convenience, but you can find even more on extensions.turbowarp.org.'
                description='Description of extensions.turbowarp.org in extension library'
                id='tw.extensionGallery.description'
            />
        ),
        tags: ['tw', 'turbowarp', 'library'],
        featured: true
    },
];

//Built-Ins
const builtIns = [
 {
        name: 'App Utilities',
        extensionId: 'appmaker',
        iconURL: appMakerIconURL,
		insetIconURL: appMakerInsetIconURL,
        credits: 'LibreKitten',
        tags: ['othermods'],
        description: 'Develop apps in PotentiaMod.',
        featured: true
    },
];

//Official Scratch
const scratch =[
	{
      extensionId: 'https://extensions.turbowarp.org/lab/video-sprites.js',
      name: 'Video Sprites',
      description: 'Replace sprites with a live video feed.',
	  iconURL: 'https://lab.scratch.mit.edu/static/assets/8bcbd3665e71d3c863c666b1b7ecad96.png',
	  tags: ['scratch'],
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
        customInsetColor: '#CF63CF',
        tags: ['scratch', 'noisemaker'],
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
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
        tags: ['scratch', 'graphics'],
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: 'Animated Text',
        extensionId: 'text',
        iconURL: 'https://extensions.turbowarp.org/images/lab/text.svg',
        insetIconURL: 'https://extensions.turbowarp.org/images/lab/text.svg',
        customInsetColor: '#9A66FF',
        tags: ['scratch'],
        description: 'Bring words to life.',
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
        customInsetColor: '#74BDDC',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: 'Face Sensing',
        extensionId: 'https://extensions.turbowarp.org/lab/face-sensing.js',
        iconURL: 'https://extensions.turbowarp.org/images/lab/face-sensing.svg',
		insetIconURL: 'https://nitrobolt.org/static/assets/e3a21b920ed4b4c2d9830ec68132c011.svg',
        tags: ['scratch', 'ai'],
        description: 'Sense faces with the camera.',
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
        credits: 'Google TTS',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        customInsetColor: '#9966FF',
        tags: ['scratch', 'noisemaker'],
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
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
        customInsetColor: '#5CB1D6',
        tags: ['scratch'],
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        customInsetColor: '#E64D00',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
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
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        customInsetColor: '#FFBF00',
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
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        customInsetColor: '#FFAB19',
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
        featured: true,
        tags: ['scratch', 'hardware'],
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        customInsetColor: '#FF6680',
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
        customInsetColor: '#4C97FF',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
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
    }
];


export {
	twExtensions,
	builtIns,
	scratch,
	}