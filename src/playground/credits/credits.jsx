import React from 'react';
import PropTypes from 'prop-types';
import render from '../app-target';
import styles from './credits.css';

import {APP_NAME} from '../../lib/brand';
import {applyGuiColors} from '../../lib/themes/guiHelpers';
import {detectTheme} from '../../lib/themes/themePersistance';
import UserData from './users';

import Header from '../../components/potentia-header/header.jsx';
import Footer from '../../components/potentia-footer/footer.jsx';

/* eslint-disable react/jsx-no-literals */

applyGuiColors(detectTheme());
document.documentElement.lang = 'en';

const User = ({image, text, href}) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={styles.user}
    >
        <img
            loading="lazy"
            className={styles.userImage}
            src={image}
            width="60"
            height="60"
        />
        <div className={styles.userInfo}>
            {text}
        </div>
    </a>
);
User.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    href: PropTypes.string
};

const UserList = ({users}) => (
    <div className={styles.users}>
        {users.map((data, index) => (
            <User
                key={index}
                {...data}
            />
        ))}
    </div>
);
UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
};

const Credits = () => (
    <main className={styles.main}>
	<Header />
            <h1>
                {APP_NAME} Credits
            </h1>
        <section>
            <p>
                The {APP_NAME} project is made possible by only one developer.
            </p>
        </section>
        {APP_NAME !== 'TurboWarp' && (
            // Be kind and considerate. Don't remove this :)
            <section>
                <h2>Forks and Code Usages</h2>
                <p>
                    {APP_NAME} is based on <a href="https://turbowarp.org/">TurboWarp</a>, which in turn is based on <a href="https://scratch.mit.edu/">Scratch</a>.
                </p>
				<p>
                    {APP_NAME}'s paint editor is forked from <a href="https://penguinmod.com/">PenguinMod</a>.
                </p>
				<p>
                    {APP_NAME}'s extension manager comes from <a href="https://nitrobolt.org/">NitroBolt</a>.
                </p>
				<p>
                    {APP_NAME}'s wallpaper and fonts feature comes from <a href="https://dashblocks.org">DashBlocks</a>.
                </p>
				<p>
			We've also included some codes taken from other open-source Scratch mods inside of {APP_NAME} as well.
            Here's a list of some other Scratch mods you should check out:
		     </p>
            <UserList users={UserData.codeUsedFrom} />
            </section>
        )}
        <section>
            <h2>Scratch</h2>
            <p>
                {APP_NAME} is based on the work of the <a href="https://scratch.mit.edu/credits">Scratch contributors</a> but is not endorsed by Scratch in any way when it was TurboWarp.
            </p>
            <p>
                <a href="https://scratch.mit.edu/donate">
                    Donate to support Scratch.
                </a>
            </p>
        </section>
        <section>
            <h2>Contributors</h2>
            <UserList users={UserData.contributors} />
        </section>
        <section>
            <h2>Addons</h2>
            <UserList users={UserData.addonDevelopers} />
        </section>
        <section>
            <h2>TurboWarp Extension Gallery</h2>
            <UserList users={UserData.extensionDevelopers} />
        </section>
        <section>
            <h2>Documentation</h2>
            <UserList users={UserData.docs} />
        </section>
        <section>
            <h2>Translators</h2>
            <p>
                More than 100 people have helped translate {APP_NAME} and its addons into many languages
                &mdash; far more than we could hope to list here.
            </p>
        </section>
		<Footer />
    </main>
);

render(<Credits />);
