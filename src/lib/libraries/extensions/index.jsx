import React from 'react';
import {FormattedMessage} from 'react-intl';
import {APP_NAME} from '../../brand';
import {
	twExtensions,
	builtIns,
	scratch,
	}
	from './extensionlist.js';

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

const urlParams = new URLSearchParams(location.search);
const IsLocal = String(window.location.href).startsWith(`http://localhost:`);
const IsLiveTests = urlParams.has('livetests');
const IsSecretExt = urlParams.has('shipguy');

const menuItems = [
   {
        name: 'Custom Extension',
        extensionId: 'custom_extension',
        iconURL: customExtensionIcon,
        description: 'Load custom extensions from URLs, files, or JavaScript source code.',
        tags: ['potentia'],
        featured: true
        // Not marked as incompatible with Scratch so that clicking on it doesn't show a prompt
    },
    {
        // not really an extension, but it's easiest to present it as one
        name: 'Custom Reporters',
        extensionId: 'procedures_enable_return',
        iconURL: returnIcon,
        description: 'Allow custom blocks to output values and be used as inputs.',
        tags: ['potentia'],
        featured: true
    },
   {
        name: 'PotentiaMod Blocks',
        extensionId: 'tw',
        iconURL: ptIcon,
        description: 'Weird new blocks. Replaced by sensing blocks.',
        tags: ['potentia'],
        featured: true
    },
{
        name: 'PotentiaMod Extension Bonanza',
        href: 'https://potentiamod.github.io/extensions/',
        extensionId: 'special_potentiamodExtensionLibrary',
        iconURL: galleryIcon,
        description: 'We list many extensions here for convenience, but you can find even more on potentiamod.github.io/extensions.',
        tags: ['potentia', 'library'],
        featured: true
    },
	{
            seperator: true
        }
];

//TurboWarp
twExtensions.forEach(ext => {
        menuItems.push(ext);
    });

//Built-Ins
builtIns.forEach(ext => {
        menuItems.push(ext);
    });
	
//Scratch
scratch.forEach(ext => {
        menuItems.push(ext);
    });
	
	export default menuItems;