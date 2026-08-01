import { fileURLToPath } from "node:url";
import pathUtil from 'node:path';
import fs from 'node:fs';
import readline from 'node:readline';
import {imageSizeFromFile} from 'image-size/fromFile';
import {parseFile as getSoundMetadata} from 'music-metadata';

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathUtil.dirname(__filename);

const METADATA_PROPS_ORDER = [
    'name',
    'tags',
    'bitmapResolution',
    'dataFormat',
    'rotationCenterX',
    'rotationCenterY',
    'sampleCount',
    'rate'
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * @param {string} title
 * @returns {Promise<string>}
 */
const prompt = title => new Promise((resolve) => rl.question(`${title} `, answer => resolve(answer)));

/**
 * @param {string} path
 * @returns {boolean}
 */
const isDirectorySync = path => {
    try {
        const stat = fs.statSync(path);
        return stat.isDirectory();
    } catch (e) {
        if (e.code === 'ENOENT') {
            return false;
        }
        throw e;
    }
};

/**
 * @param {string} type
 */
const genMetadata4AssetsOfType = async type => {
    console.log(`Generating metadata for assets in Dash ${type} library...`);

    const assetsDirectory = pathUtil.join(__dirname, `../${type}`);
    if (!isDirectorySync(assetsDirectory)) {
        console.log(`Skipping ${type}; could not find ${type}.`);
        return;
    }

    const assetsFiles = fs.readdirSync(assetsDirectory)
        .filter(name => pathUtil.extname(name) !== '.json');
    for (const assetFile of assetsFiles) {
        const assetFilename = pathUtil.parse(assetFile).name;
        const metadataFile = pathUtil.join(assetsDirectory, `${assetFilename}.json`);
        let rawMetadata;
        try {
            rawMetadata = fs.readFileSync(metadataFile);
        } catch (_) {
            rawMetadata = '{}';
        }
        let jsonMetadata;
        try {
            jsonMetadata = JSON.parse(rawMetadata);
        } catch (_) {
            throw new Error(`Invaild metadata of ${assetFilename} (${type}).`);
        }

        let changed = false;
        if (!('name' in jsonMetadata)) {
            changed = true;
            jsonMetadata.name =
                await prompt(`${assetFilename} (${type}): Enter the asset name... (empty for filename)`) || assetFilename;
        }
        if (!('tags' in jsonMetadata)) {
            changed = true;
            const tagsString = await prompt(`${assetFilename} (${type}): Enter the tags separated by commas...`);
            jsonMetadata.tags = tagsString.length
                ? new Set(tagsString.split(',')).values().toArray()
                : [];
        }
        switch (type) {
            case 'backdrops':
            case 'costumes': {
                const dimensions = await imageSizeFromFile(pathUtil.join(assetsDirectory, assetFile));

                if (!('bitmapResolution' in jsonMetadata)) {
                    changed = true;
                    if (pathUtil.extname(assetFile) === '.svg') {
                        jsonMetadata.bitmapResolution = 1;
                    } else {
                        const answer =
                            await prompt(`${assetFilename} (${type}): Enter the bitmap resolution... (empty for auto-calculated)`);
                        jsonMetadata.bitmapResolution = answer
                            ? parseFloat(answer)
                            : Math.max(1, Math.min(
                                dimensions.width / 480,
                                dimensions.height / 360
                            ));
                    }
                }
                if (!('dataFormat' in jsonMetadata)) {
                    changed = true;
                    jsonMetadata.dataFormat = pathUtil.extname(assetFile).slice(1).toLowerCase();
                }
                if (!('rotationCenterX' in jsonMetadata)) {
                    changed = true;
                    const answer =
                        await prompt(`${assetFilename} (${type}): Enter X of the rotation center... (empty for centered)`);
                    jsonMetadata.rotationCenterX = answer
                        ? parseFloat(answer)
                        : dimensions.width / 2;
                }
                if (!('rotationCenterY' in jsonMetadata)) {
                    changed = true;
                    const answer =
                        await prompt(`${assetFilename} (${type}): Enter Y of the rotation center... (empty for centered)`);
                    jsonMetadata.rotationCenterY = answer
                        ? parseFloat(answer)
                        : dimensions.height / 2;
                }
                break;
            }
            case 'sounds': {
                const {format: formatMetadata} =
                    await getSoundMetadata(pathUtil.join(assetsDirectory, assetFile));

                if (!('dataFormat' in jsonMetadata)) {
                    changed = true;
                    jsonMetadata.dataFormat = '';
                }
                if (!('sampleCount' in jsonMetadata)) {
                    changed = true;
                    jsonMetadata.sampleCount = formatMetadata.numberOfSamples ??
                        // Fallback method of getting sample count
                        Math.round(formatMetadata.sampleRate * formatMetadata.duration);
                }
                if (!('rate' in jsonMetadata)) {
                    changed = true;
                    jsonMetadata.rate = formatMetadata.sampleRate;
                }
                break;
            }
        }

        // Write/rewrite metadata and log result only if it changed
        if (changed) {
            // Normalize order of metadata props
            jsonMetadata = Object.fromEntries(Object.entries(jsonMetadata).sort(
                ([prop1], [prop2]) => METADATA_PROPS_ORDER.indexOf(prop1) - METADATA_PROPS_ORDER.indexOf(prop2)
            ));
            console.log(`Metadata result of ${assetFilename} (${type}):`, jsonMetadata);
            fs.writeFileSync(metadataFile, JSON.stringify(jsonMetadata, null, 4));
        }
    }
};

const genMetadata4Everything = async () => {
    try {
        await genMetadata4AssetsOfType('backdrops');
        await genMetadata4AssetsOfType('costumes');
        await genMetadata4AssetsOfType('sounds');
        rl.close();
    } catch (e) {
        console.error(e);
        rl.close();
        process.exit(1);
    }
};

genMetadata4Everything();
