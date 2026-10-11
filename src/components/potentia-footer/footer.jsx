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
        indexedDB.deleteDatabase('p4-local-settings');
        indexedDB.deleteDatabase('p4-large-assets');
        indexedDB.deleteDatabase('tw:library-favorites:extensionLibrary');
        location.reload();
    }
};

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
		<center>
          <img
                    width="120px"
                    src={logo}
                    alt="PotentiaMod"
                />
                <span className={styles.logomark}>{APP_NAME}</span>
                    <p className={styles.slogan}>{MOTTO}</p>
					</center>
					
					<hr></hr>

            <div className={styles.footerColumns}>
                <div className={styles.footerSection}>
				<h2>Websites</h2>
				
                   <a href="editor.html">Editor</a>
                    <a href="?livetest">Live Test</a>
                    <a href="https://potentiamod.github.io/home">Homepage</a>
                    <a href="desktop.html">PotentiaMod Desktop</a>
                    <a href="https://potentiamod.github.io/packager">PotentiaMod Packager</a>
                    <a href="https://potentiamod.github.io/pot-extensions">PotentiaMod Extension Gallery</a>
                    <a href="https://gaiamod-main.github.io/GaiaMod-Packager">GaiaMod Packager</a>
					 <a
                        href="https://github.com/PotentiaMod"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.iconRow}
                    >
                        GitHub Source Code
                    </a>
					<a href="https://gaiawindwave90.github.io/GaiaMod">GaiaMod</a>
					<a href="https://gaiamod-main.github.io/">GaiaMod (Legacy)</a>
					<a href="https://gaiawindwave90.github.io/">Gaia Zone</a>
					
                </div>
                <div className={styles.footerSection}>
				<h2>Comunity</h2>
				
                    <a href="credits.html">Credits</a>
					<a href="privacy.html">Privacy Policy</a>
                    <a
                        href="https://www.facebook.com/CrystalMae1990/"
                        target="_blank"
                        rel="noreferrer"
                    >Report a bug</a>
					
                </div>
                <div className={styles.footerSection}>
				<h2>Donate</h2>
				
                    <a
                        href="https://penguinmod.com/donate"
                        target="_blank"
                        rel="noreferrer"
                    >Donate to PenguinMod</a>
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
			
			 <div className={styles.footerText}>
                <FormattedMessage
                    // eslint-disable-next-line max-len
                    defaultMessage="{APP_NAME} is not affiliated with Scratch, the Scratch Team, or the Scratch Foundation."
                    description="Disclaimer that TurboWarp is not connected to Scratch"
                    id="tw.footer.disclaimer"
                    values={{
                        APP_NAME
                    }}
                />
            </div>
			
           <hr></hr>
		   
            <div className={styles.footerText}>
                <FormattedMessage
                    // eslint-disable-next-line max-len
                    defaultMessage="Scratch is a project of the Scratch Foundation. It is available for free at {scratchDotOrg}."
                    description="A disclaimer that Scratch requires when referring to Scratch. {scratchDotOrg} is a link with text 'https://scratch.org/'"
                    id="tw.footer.scratchDisclaimer"
                    values={{
                        scratchDotOrg: (
                            <a
                                href="https://scratch.org/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {'https://scratch.org/'}
                            </a>
                        )
                    }}
                />
            </div>
			
			<hr></hr>
			
	<div className={styles.footerText} style={{textAlign: 'center'}}>
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
							</p>
							<p>
							<b>
						<em>
                            <FormattedMessage
                                defaultMessage="Also, check out my first mod of PenguinMod, GaiaMod!"
                                description="Link on the main page to the GaiaMod page"
                                id="pot.projectrender.gaiamod"
                            />
							</em>
							</b>
							</p>		
            <p className={styles.info}>
			{(LiveTests || Local) ? 'Dev.' : `v${APP_VERSION}`} | <a
                    onClick={eraseData}
                    style={{color: 'red'}}
                >Erase data</a>
            </p>
        </div>
			
        </div>
    </footer>
);

export default Footer;