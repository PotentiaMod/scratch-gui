import classNames from 'classnames';
import React from 'react';
import {defineMessages, FormattedMessage, injectIntl, intlShape} from 'react-intl';
import logo from './logo.svg';
import gaiamod from './gaiamod-logo.svg';
import {APP_NAME, MOTTO} from '../../lib/brand.js';
import {APP_VERSION} from '../../lib/version.js';
import styles from './footer.css';
import Swal from 'sweetalert2';

const urlParams = new URLSearchParams(location.search);
const Local = String(window.location.href).startsWith(`http://localhost:`);
const LiveTests = urlParams.has('livetest');
const Secrets = urlParams.has('allpowerscombined');

//Taken from LibreKitten.
const hardRefresh = () => {
    const search = location.search.replace(/[?&]nocache=\d+/, '');
    location.replace(`${location.pathname + search + (search ? '&' : '?')}nocache=${Math.floor(Math.random() * 100000)}`);
};

const eraseData = async () => {
    if (confirm('Please be aware that this will reset all your local data, including the Restore Points and backpack. Are you sure you want to continue?')) {
        
        localStorage.clear();
        indexedDB.deleteDatabase('TW_RestorePoints');
        indexedDB.deleteDatabase('TW_Backpack');
        location.reload();
    }
};

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.inner}>
            <div className={styles.brand}>
                <img
                    width="70px"
                    src={logo}
                    alt="PotentiaMod"
                />
                <div>
				   <span className={styles.wordmark}>{APP_NAME}</span>
                    <p className={styles.tagline}>{MOTTO}</p>
                </div>
            </div>

            <div className={styles.columns}>
                <div className={styles.column}>
                    <span className={styles.columnTitle}>Website</span>
                    <a href="/editor.html">Editor</a>
                    <a href="/pot-desktop.html">PotentiaMod Desktop</a>
                    <a href="/packager">PotentiaMod Packager</a>
                    <a href="?livetest">Live Test</a>
					 <a
                        href="https://github.com/PotentiaMod"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.iconRow}
                    >
                        GitHub Source Code
                    </a>
                </div>
                <div className={styles.column}>
                    <span className={styles.columnTitle}>Community</span>
					<a href="/credits.html">Credits</a>
					<a href="/privacy.html">Privacy Policy</a>
                    <a
                        href="https://warp.mistium.com/users/GaiaKitty"
                        target="_blank"
                        rel="noreferrer"
                    >Report a bug</a>
                </div>
                <div className={styles.column}>
                    <span className={styles.columnTitle}>Donate</span>
					<a
                        href="https://github.com/sponsors/GarboMuffin"
                        target="_blank"
                        rel="noreferrer"
                    >Donate to TurboWarp</a>
					<a
                        href="https://www.scratchfoundation.org/donate"
                        target="_blank"
                        rel="noreferrer"
                    >Donate to Scratch</a>
                </div>
            </div>
        </div>
        <div className={styles.legal}>
            {APP_NAME} is a mod of TurboWarp and Scratch. Not affiliated with Scratch or the Scratch Foundation.
        </div>
       <div className={styles.legal} style={{textAlign: 'center'}}>
	   <p>
	   <a
                            href="https://gaiamod-main.github.io/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                            width="150px"
                            alt="GaiaMod"
                            src={gaiamod}
                            draggable={false}
                        />
							</a>
							<h4>
						<em>
                            <FormattedMessage
                                defaultMessage="Also, check out my first mod of PenguinMod, GaiaMod!"
                                description="Link on the main page to the GaiaMod page"
                                id="pot.projectrender.gaiamod"
                            />
							</em>
							</h4>
							</p>		
            <p className={styles.info}>
                Version: {APP_VERSION} | 
				<a
                    onClick={eraseData}
                    style={{color: 'red'}}
                >Erase data</a>
            </p>
        </div>
    </footer>
);

export default Footer;