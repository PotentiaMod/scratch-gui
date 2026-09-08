//Code is taken from LibreKitten.
import React from 'react';
import classNames from 'classnames';
import render from '../app-target';
import styles from '../../css/info-page.css';
import myStyles from './index.css';

import {applyGuiColors} from '../../lib/themes/guiHelpers';
import {detectTheme} from '../../lib/themes/themePersistance';

import Header from '../../components/potentia-header/header.jsx';
import Footer from '../../components/potentia-footer/footer.jsx';

/* eslint-disable react/jsx-no-literals */

applyGuiColors(detectTheme());
document.documentElement.lang = 'en';

const BRAND = 'PotententiaMod';
const SLOGAN = 'A Block-Based Coding That Goes EXTREME!';


const Index = () => (
    <>
        <Header />
        <main className={styles.main}>
            <div className={myStyles.notification}>
                <p>
                    <span>
                        ${BRAND} is a powerful free-to-use visual coding website/game engine based off of TurboWarp.
                    </span>
                    <a
                        href="/editor.html"
                        className={myStyles.notificationButton}
                    >
                        Try it!
                    </a>
                </p>
            </div>
            <header className={styles.headerContainer}>
                <h1 className={styles.headerText}>
                    {`${BRAND} - ${MOTTO}`}
                </h1>
                <p>
                    PotententiaMod is a <strong>beta</strong> block-based visual programming language based
                    on <a href="https://turbowarp.org/">TurboWarp</a>, that allows you to program things on the fly! You do things with PotententiaMod such as making apps or a program that controls your browser!
                </p>
            </header>
            <section id="prototype">
                <h2>WHAM! Make something.</h2>
                <p>
                    Using PotententiaMod, you can build programs that are capable of controlling the web in a way! It can even support AI and Internet of Things (such as robotics) in its arsenal!
                </p>
            </section>
            <section id="why">
                <h2>Why does PotententiaMod exist?</h2>
                <p>
                    Scratch is made for a userbase targeted to kids and teens. This means it doesn&apos;t cater to the more advanced users
                    of Scratch who like the simple block-based interface of Scratch and the easy to use primitive
                    blocks, but want more advanced features.
                </p>
                <p>
                    For the adult audiences, we have made a new block-based visual programming language called PotententiaMod.
                    It is a fork of TurboWarp, which itself was forked off Scratch.
                </p>
                <p>
                    PotententiaMod was created with the intention of containing more advanced features and accept
                    contributions written by the community, while still being for all ages.
                </p>
            </section>
            <section id="license">
                <h2>Truly free software; no open-core!</h2>
                <p>
                    The PotententiaMod editor is licensed under the GNU General Public License v3; and the runtime
                    is licensed under the Mozilla Public License v2.0.
                </p>
            </section>
            <Footer />
        </main>
    </>
);

render(<Index />);
