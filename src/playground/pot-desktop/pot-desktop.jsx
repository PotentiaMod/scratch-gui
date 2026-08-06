import React from 'react';
import PropTypes from 'prop-types';
import render from '../app-target';
import styles from './pot-desktop.css';

import {APP_NAME} from '../../lib/brand';
import {APP_VERSION} from '../../lib/version.js';
import {applyGuiColors} from '../../lib/themes/guiHelpers';
import {detectTheme} from '../../lib/themes/themePersistance';

import Header from '../../components/potentia-header/header.jsx';
import Footer from '../../components/potentia-footer/footer.jsx';

import Button from '../../components/button/button.jsx';

/* eslint-disable react/jsx-no-literals */

const theme = detectTheme();
applyGuiColors(theme);
document.documentElement.lang = 'en';

const BRAND = 'PotententiaMod';
const SLOGAN = 'A Block-Based Coding That Goes EXTREME!';

import screenshotLight from './screencap-light.png';
import screenshotDark from './screencap-dark.png';

const RELEASES_DOWNLOAD_URL = `https://github.com/PotentiaMod/desktop/releases/download/${APP_VERSION}/`;

const openFile = (file) => {
        window.open(`${RELEASES_DOWNLOAD_URL}/${file}`, '_blank', 'noreferrer');
    };

const Desktop = () => (
<main className={styles.main}>
	<Header />
            <h1>
                {APP_NAME} Desktop
            </h1>
        <section>
                <p>PotentiaMod if it was a desktop app.</p>
                <img
                    className={styles.screenshot}
                    loading="lazy"
                    src={theme.isDark() ? screenshotDark : screenshotLight}
                />
            </section>
            <section>
                <h2>Install {APP_NAME} Desktop (v{APP_VERSION}):</h2>
            </section>
            <section>
                <h2>Windows 10 and later</h2>
                If a Windows SmartScreen alert appears, click "More info" then "Run anyways".
                <div className={styles.downloadList}>
                    <Button
                        className={styles.downloadButton}
                        onClick={() => openFile(`PotentiaMod-Setup-${APP_VERSION}-x64.exe`)}
                    >
                        Download installer (64-bit, recommended)
                    </Button>
                </div>
				</section>
               <section>
				<i>
                    This page is based on Dash's Desktop page.
                </i>
            </section>
		<Footer />
    </main>
);

render(<Desktop />);
