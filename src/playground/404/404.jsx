import React from 'react';
import PropTypes from 'prop-types';
import render from '../app-target';
import styles from './404.css';

import {APP_NAME} from '../../lib/brand';
import {applyGuiColors} from '../../lib/themes/guiHelpers';
import {detectTheme} from '../../lib/themes/themePersistance';

import Header from '../../components/potentia-header/header.jsx';
import Footer from '../../components/potentia-footer/footer.jsx';

/* eslint-disable react/jsx-no-literals */

applyGuiColors(detectTheme());
document.documentElement.lang = 'en';

const FourOhFour = () => (
    <>
	<Header />
        <main className={styles.main}>
            <header className={styles.headerContainer}>
                <h1 className={styles.headerText}>
                    Sorry!
                </h1>
            </header>
            <section>
                <p>
                    We coudn't find what you're looking for.
                </p>
				                <p>
                    Do not fret, tho. There is a new page coming soon...
                </p>
                <h3 className={styles.headerText}>404</h3>
            </section>
			<Footer />
        </main>
    </>
);

render(<FourOhFour />);