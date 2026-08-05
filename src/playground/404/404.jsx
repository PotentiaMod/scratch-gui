import React from 'react';
import PropTypes from 'prop-types';
import render from '../app-target';
import styles from './404.css';

import {APP_NAME} from '../../lib/brand';
import {applyGuiColors} from '../../lib/themes/guiHelpers';
import {detectTheme} from '../../lib/themes/themePersistance';

import Header from '../../components/potentia-header/header.jsx';
import Footer from '../../components/potentia-footer/footer.jsx';

import potentia from './sad-potentia.svg';

/* eslint-disable react/jsx-no-literals */

applyGuiColors(detectTheme());
document.documentElement.lang = 'en';

const FourOhFour = () => (
	<main className={styles.main}>
	<Header />
	<center>
            <h1>
                Sorry!
            </h1>
        <section>
            <p>
                    We coudn't find what you're looking for.
                </p>
				                <p>
                    Do not fret, tho. There is a new page coming soon...
                </p>
				<img
                    src={potentia}
                    alt="A sad purple-colored alien dragon."
                />
                <h3 className={styles.headerText}>404</h3>
				<i>
                    This page is based on LibreKitten's 404 page.
                </i>
        </section>
		</center>
		<Footer />
    </main>
);

render(<FourOhFour />);