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

import roboboImage from './robobo/robobo.png';
import roboboInsetImage from './robobo/robobo-small.svg';

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
import shareImage from "./share/share.svg";
import lineBlockImage from './line/line.png';
import lineBlockButtonImage from './line/line-small.png';

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

// Open Webserial...
import chartImage from "./chart/chart.png";
import chartInsetIconURL from "./chart/chart-small.png";
import stockInfoImage from "./stockInfo/stockInfo.png";
import stockInfoInsetIconURL from "./stockInfo/stockInfo-small.png";
import googleMapImage from "./googleMap/googleMap.png";
import googleMapInsetIconURL from "./googleMap/googleMap-small.png";
import dataMiningImage from "./dataMining/dataMining.png";
import dataMiningInsetIconURL from "./dataMining/dataMining-small.png";
import dataProcessingImage from "./dataProcessing/dataProcessing.png";
import dataProcessingInsetIconURL from "./dataProcessing/dataProcessing-small.png";
import voicetotextImage from "./voicetotext/voicetotext.png";
import voicetotextInsetIconURL from "./voicetotext/voicetotext.svg";
import urltxtImage from "./urltxt/urltxt.png";
import urltxtInsetIconURL from "./urltxt/clound-small.png";
import rwGoogleImage from "./rwgoogle/rwgoogle.png";
import rwGoogleInsetIconURL from "./rwgoogle/clound-small.png";
import linenotifyImage from "./linenotify/linenotify.svg";
import linenotifyInsetIconURL from "./linenotify/linenotify_small.svg";
import telegrambotImage from "./telegrambot/telegrambot.svg";
import telegrambotInsetIconURL from "./telegrambot/telegrambot_small.svg";
import pushnotifyapiImage from "./pushnotifyapi/pushnotifyapi.svg";
import pushnotifyapiInsetIconURL from "./pushnotifyapi/pushnotifyapi_small.png";
import openaiImage from "./openai/openai.png";
import openaiInsetIconURL from "./openai/openai-small.svg";
import geminiImage from "./gemini/gemini.png";
import geminiInsetIconURL from "./gemini/gemini-small.svg";
import davinciImage from "./davinci/davinci.png";
import davinciInsetIconURL from "./davinci/davinci-small.png";
import llmstudioImage from "./llmstudio/llmstudio.svg";
import llmstudioInsetIconURL from "./llmstudio/llmstudio-small.png";
import textSentimentImage from "./textSentiment/textSentiment.png";
import textSentimentInsetIconURL from "./textSentiment/textSentiment-small.png";
import faceExpressionRecogintionImage from "./faceExpressionRecogintion/faceExpressionRecogintion.png";
import faceExpressionRecogintionIconURL from "./faceExpressionRecogintion/faceExpressionRecogintion-small.png";

//For fun!
import sailormoonThumb from './gaiamod/lolsailormoon.png'

//builders
import kittenbotThumb from './extension-builders/KittenBot.png';
import turboBuilderIcon from './extension-builders/turbobuilder.png';
import turboBuilderDevIcon from './extension-builders/turbobuilder-dev.png';
import extForgeIcon from './extension-builders/extforge.svg';
import penguinBuilderIcon from './extension-builders/penguinbuilder.png';
import dinoBuilderIcon from './extension-builders/dinobuilder.png';
import electraBuilderIcon from './extension-builders/ElectraBuilder.svg';
import electraBuilderInsetIcon from './extension-builders/ElectraBuilder-small.png';
import extCreateIcon from './extension-builders/ExtCreate.svg';
import extCreateInsetIcon from './extension-builders/ExtCreate-small.svg';
import gaiaExtEditorIcon from './extension-builders/GaiaExtEditor.svg';
import gaiaExtEditorInsetIcon from './extension-builders/GaiaExtEditor-small.svg';

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
import hcIconURL from './hc/hc.svg';
import hcInsetIconURL from './hc/hc-small.svg';
import snapIconURL from './snap/snap.svg'
import snapInsetIconURL from './snap/snap-small.svg'


import ptIcon from './tw/tw.svg';
import TWgalleryIcon from './gallery/TWgallery.svg';
import returnIcon from './custom/return.svg';
import customExtensionIcon from './custom/custom.svg';
import customExtIcon from './custom/CustomEx.svg';
import customExtInsetIcon from './custom/CustomSmall.svg';
import customURLIcon from './custom/customURL.svg';
import galleryIconRuby from './gallery/ruby.png';
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
import ampmodgalleryThumb from './gaiamod/AmpMod.svg';
import obgalleryIcon from './gaiamod/OmniBlocks.svg';
import SCIcon from './icons/scratch.svg';
import PMIcon from './icons/penguinmod.svg';


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
        // not really an extension, but it's easiest to present it as one
        name: (
            <FormattedMessage
                defaultMessage="Custom Reporters"
                description="Name of custom reporters extension"
                id="tw.customReporters.name"
            />
        ),
        extensionId: 'procedures_enable_return',
        iconURL: returnIcon,
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
        iconURL: tinkibotIconURL,
        insetIconURL: tinkibotInsetIconURL,
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
    iconURL: googleMapImage,
    insetIconURL: googleMapInsetIconURL,
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
    iconURL: rwGoogleImage,
    insetIconURL: rwGoogleInsetIconURL,
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
    iconURL: linenotifyImage,
    insetIconURL: linenotifyInsetIconURL,
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
        iconURL: kidsboardIconURL,
        insetIconURL: kidsboardInsetIconURL,
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
        name: 'Line',
        extensionId: 'line',
        collaborator: 'Ankurugranpa',
        iconURL: lineBlockImage,
        insetIconURL: lineBlockButtonImage,
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
    iconURL: textSentimentImage,
    insetIconURL: textSentimentInsetIconURL,
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
        iconURL: hcIconURL,
        insetIconURL: hcInsetIconURL,
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
        iconURL: snapIconURL,
        insetIconURL: snapInsetIconURL,
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
        iconURL: roboboImage,
        insetIconURL: roboboInsetImage,
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
        name: 'Ada Browser',
        tags: ['adacraft', 'preload'],
        extensionId: 'adabrowser',
        iconURL: 'https://www.adacraft.org/studio/static/assets/40998229311219c2117265d5e4bd9745.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/f1fe0bbe960a0d60c783b111c84b837e.svg',
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
        name: 'User Data',
        extensionId: 'userdata',
        iconURL: userdatabig,
        insetIconURL: userdatasmall,
        description: 'Get The User\'s Data',
        featured: true,
        collaborator: 'Gvbvdxx',
        tags: ['gvbvdxxmod', 'preload']
	},
	//PenguinMod Preloads
	{
        name: 'PenguinMod Runtime',
        extensionId: 'jgRuntime',
        iconURL: require('../extensions/penguinmod/extensions/runtime.svg'),
		insetIconURL: PMIcon,
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
		insetIconURL: PMIcon,
		collaborator: 'PenguinMod',
        description: 'Blocks for specific use-cases or major convenience.',
        featured: true
    },
	 {
        name: 'Motion Expansion',
        extensionId: 'pmMotionExpansion',
        iconURL: require('../extensions/penguinmod/extensions/motion_expanded.png'),
		insetIconURL: PMIcon,
        description: 'More small motion blocks for movement or collision.',
        tags: ['pm', 'preload'],
		collaborator: 'PenguinMod',
		featured: true
    },
	{
        name: 'Scratch Authentication',
        extensionId: 'jgScratchAuthenticate',
        iconURL: require('./penguinmod/extensions/scratchauth2.svg'),
		insetIconURL: PMIcon,
		collaborator: 'PenguinMod',
		tags: ['pm', 'preload'],
        description: "Interact with Scratch Authentication to prove the player is a real scratch user.",
        featured: true
    },
	//Builders
	{
        name: 'KittenBot Extension Maker',
        href: 'https://kittenbot.github.io/scratch3-extension/',
        extensionId: 'kittenBotExtensionMaker',
        iconURL: kittenbotThumb,
        description: 'Create extensions with KittenBot!',
        tags: ['other', 'builders'],
        featured: true
    },
	{
        name: 'GaiaMod Extension Editor',
        href: 'https://gaiamod-main.github.io/Extension-Editor/',
        extensionId: 'GMExtEditor',
        iconURL: gaiaExtEditorIcon,
		insetIconURL: gaiaExtEditorInsetIcon,
        description: 'Either create or edit extensions with a modfication of Astra Editor Extension Editor.',
        tags: ['gaia', 'builders'],
        isNew: true,
        featured: true,
    },
    {
        name: 'ExtForge',
        href: 'https://jwklong.github.io/extforge',
        extensionId: 'extforge',
        iconURL: extForgeIcon,
        description: 'Create extensions with a block-based UI.',
        collaborator: 'jwklong',
        tags: ['pm', 'builders'],
        featured: true
    },
    {
        name: 'TurboBuilder',
        href: 'https://turbobuilder.vercel.app/',
        extensionId: 'turboBuilder',
        iconURL: turboBuilderIcon,
        description: 'Create your own amazing extensions using a scratch-based UI!',
        collaborator: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['tw', 'builders'],
        featured: true
    },
	//More Ext Galleries besides ones
	{
        name: 'Former VM Extension Collection',
        href: 'https://gaiawindwave90.github.io/VM-to-JS-Extensions/?originPot=true',
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
        iconURL: ptIcon,
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
        iconURL: galleryIconPT,
        tag: 'potentia'
    },
	 gaiamod: {
        name: 'GaiaMod Extension Gallery',
        href: 'https://gaiawindwave90.github.io/gm-extensions/',
        iconURL: galleryIconGM,
        tag: 'gaia'
    },
    turbowarp: {
        name: 'TurboWarp Extension Gallery',
        href: 'https://extensions.turbowarp.org/',
        iconURL: galleryIconTW,
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
        iconURL: defaultExtensionIcon,
        tags: ['potentia', 'preload', 'dev'],
        description: 'A test extension to see if possible. For developers only.',
        featured: true
    },
	{
            name: 'Editor',
            href: 'https://potentiamod.github.io/editor.html',
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
		 {
        name: 'TurboBuilder - Dev Branch',
        href: 'https://dev-turbobuilder.vercel.app/',
        extensionId: 'turboBuilderDev',
        iconURL: turboBuilderDevIcon,
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