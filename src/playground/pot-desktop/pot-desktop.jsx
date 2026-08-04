//Code is taken from DashBlocks.
import React from 'react';
import classNames from 'classnames';
import render from '../app-target';
import styles from '../../css/info-page.css';
import myStyles from './pot-desktop.css';

import {applyGuiColors} from '../../lib/themes/guiHelpers';
import {detectTheme} from '../../lib/themes/themePersistance';

import Header from '../../components/potentia-header/header.jsx';
import Footer from '../../components/potentia-footer/footer.jsx';

import screenshotLight from './screencap-light.png';
import screenshotDark from './screencap-dark.png';

const RELEASE_VERSION = '1.19.0';
const VERSION_IN_FILENAME = '1.19.0';
const RELEASES_DOWNLOAD_URL = `https://github.com/PotentiaMod/desktop/releases/download/v${RELEASE_VERSION}`;

/* eslint-disable react/jsx-no-literals */

applyGuiColors(detectTheme());
document.documentElement.lang = 'en';

const BRAND = 'PotententiaMod';
const SLOGAN = 'A Block-Based Coding That Goes EXTREME!';


const POTDesktop = () => {
    const openFile = (file) => {
        window.open(`${RELEASES_DOWNLOAD_URL}/${file}`, '_blank', 'noreferrer');
    };
    
    return (
        <main className={styles.main}>
            <Header />
            <header className={styles.headerContainer}>
                <h1 className={styles.headerText}>
                    {APP_NAME} Desktop!
                </h1>
            </header>
            <section>
                <p>PotentiaMod if it as a desktop app.</p>
                <img
                    className={styles.screenshot}
                    loading="lazy"
                    src={theme.isDark() ? screenshotDark : screenshotLight}
                />
            </section>
            <section>
                <h2>Install {APP_NAME} Desktop (v{RELEASE_VERSION}):</h2>
            </section>
            <section>
                <h2>Windows 10 and later</h2>
                If a Windows SmartScreen alert appears, click "More info" then "Run anyways".
                <div className={styles.downloadList}>
                    <Button
                        className={styles.downloadButton}
                        onClick={() => openFile(`PotentiaMod-Setup-${VERSION_IN_FILENAME}-x64.exe`)}
                    >
                        Download installer (64-bit, recommended)
                    </Button>
                    <Button
                        className={styles.downloadButton}
                        onClick={() => openFile(`PotententiaMod-Setup-${VERSION_IN_FILENAME}-ia32.exe`)}
                    >
                        32-bit
                    </Button>
                    <Button
                        className={styles.downloadButton}
                        onClick={() => openFile(`PotententiaMod-Setup-${VERSION_IN_FILENAME}-arm64.exe`)}
                    >
                        ARM 64-bit
                    </Button>
                    <Button
                        className={styles.downloadButton}
                        onClick={() => openFile(`PotententiaMod.Portable.${VERSION_IN_FILENAME}.x64.exe`)}
                    >
                        Download portable (64-bit)
                    </Button>
                </div>
            </section>
            <Footer />
        </main>
    );
};

const WrappedDesktop = AppStateHOC(POTDesktop);

render(<WrappedDesktop />);