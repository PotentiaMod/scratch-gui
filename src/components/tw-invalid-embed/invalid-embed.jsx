import React from 'react';
import styles from './invalid-embed.css';
import {APP_NAME} from '../../lib/brand';

// Note that when this component is used, the rest of scratch-gui is not being run, so don't
// use redux, themes, translations, etc.

// We also can't be certain that the iframe sandbox will let us open up links, so make sure
// all the links can be manually visited if necessary.

const InvalidEmbed = () => (
    <div className={styles.container}>
        <h1>{`${APP_NAME} Embed Failed! 8(`}</h1>
        <p>
            {'See '}
            <a
                href="https://https://potentiamod.github.io/docs/embedding"
                target="_blank"
                rel="noreferrer"
            >
                {'docs.turbowarp.org/embedding'}
            </a>
            {/* eslint-disable-next-line max-len */}
            {' for more information. You need to replace the iframe src with the embed page:'}
        </p>
        <p className={styles.code}>
            {'https://potentiamod.github.io/embed.html#project'}
        </p>
        <p>
            {'Here\'s an example of a full iframe to embed a project:'}
        </p>
        <p className={styles.code}>
            {`<iframe src="https://potentiamod.github.io/embed.html#60917032" width="482" height="412" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>`}
        </p>
        <p>
            {'If you are seeing this page even though you aren\'t embedding anything, let us know on '}
            <a
                href="https://www.facebook.com/CrystalMae1990/"
                target="_blank"
                rel="noreferrer"
            >
                {'facebook.com/CrystalMae1990'}
            </a>
            {'.'}
        </p>
    </div>
);

export default InvalidEmbed;