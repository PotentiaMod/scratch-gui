import React from 'react';
import PropTypes from 'prop-types';
import render from '../app-target';
import styles from './pot-desktop.css';

import {APP_NAME, MOTTO} from '../../lib/brand.js';
import {APP_VERSION, DESKTOP_VERSION} from '../../lib/version.js';
import {applyGuiColors} from '../../lib/themes/guiHelpers';
import {detectTheme} from '../../lib/themes/themePersistance';

import Header from '../../components/potentia-header/header.jsx';
import Footer from '../../components/potentia-footer/footer.jsx';

import Button from '../../components/button/button.jsx';

/* eslint-disable react/jsx-no-literals */

const theme = detectTheme();
applyGuiColors(theme);
document.documentElement.lang = 'en';


import screenshotLight from './screencap-light.png';
import screenshotDark from './screencap-dark.png';

const RELEASES_DOWNLOAD_URL = `https://github.com/PotentiaMod/desktop/releases/download/v${DESKTOP_VERSION}/`;
const DESKTOP_REPO_URL = 'https://github.com/PotentiaMod/desktop/';
const DESKTOP_RELEASE_URL = `https://github.com/PotentiaMod/desktop/releases/tag/v${DESKTOP_VERSION}`;

const openFile = (file) => {
        window.open(`${RELEASES_DOWNLOAD_URL}/${file}`, '_blank', 'noreferrer');
    };
	
// Android's user agent also contains "Linux", so it has to be ruled out first.
const detectPlatform = () => {
    if (typeof navigator === 'undefined') {
        return 'unknown';
    }
    const ua = navigator.userAgent || '';
    if (/android/i.test(ua)) {
        return 'unknown';
    }
    if (/windows/i.test(ua)) {
        return 'windows';
    }
    if (/linux/i.test(ua)) {
        return 'linux';
    }
    return 'unknown';
};

const Desktop = () => (
<main className={styles.main}>
	<Header />
            <h1>
                {APP_NAME} Desktop
            </h1>
        <section>
                <p>{APP_NAME} as a desktop app. {MOTTO}</p>
                <img
                    className={styles.screenshot}
                    loading="lazy"
                    src={theme.isDark() ? screenshotDark : screenshotLight}
                />
            </section>
            <section>
                <h2>Install {APP_NAME} Desktop (v{DESKTOP_VERSION}):</h2>
            </section>
            <section>
                <h2>Windows 10 and later</h2>
                <p>If a Windows SmartScreen alert appears, click "More info" then "Run anyways".</p>
                <div className={styles.downloadList}>
                    <Button
                        className={styles.downloadButton}
                        onClick={() => openFile(`PotentiaMod-Setup-${DESKTOP_VERSION}-x64.exe`)}
                    >
                        Download installer (64-bit, recommended)
                    </Button>
                    <Button
                        className={styles.downloadButton}
                        onClick={() => openFile(`PotentiaMod.Portable.${DESKTOP_VERSION}.x64.exe`)}
                    >
                        Download portable (64-bit)
                    </Button>
                </div>
				 </section>
				 <section>
                <h2>Linux</h2>
                <div className={styles.downloadList}>
                    <Button
                        className={styles.downloadButton}
                        onClick={() => openFile(`PotentiaMod-linux-x86_64-${DESKTOP_VERSION}.AppImage`)}
                    >
                        Download .AppImage
                    </Button>
                </div>
				 </section>
				 <section>
				<a
                    className={styles.allDownloadsLink}
                    href={DESKTOP_RELEASE_URL}
                    target="_blank"
                    rel="noreferrer"
                >
                    {'View all download options on GitHub'}
                </a>
            </section>
				<section>
				<i>
                    This page is based on Dash and Nyx IDE's Desktop page.
                </i>
            </section>
		<Footer />
    </main>
);

render(<Desktop />);
