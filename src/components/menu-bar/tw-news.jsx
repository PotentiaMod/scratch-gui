import React from 'react';
import {isScratchDesktop} from '../../lib/isScratchDesktop';
import {hasChromium157FilePickerBug} from '../../lib/tw-file-system-access';
import CloseButton from '../close-button/close-button.jsx';
import styles from './tw-news.css';

const urlParams = new URLSearchParams(location.search);
const Local = String(window.location.href).startsWith(`http://localhost:`);
const LiveTests = urlParams.has('livetest');
const Secrets = urlParams.has('allpowerscombined');

// Set to true by the PotentiaMod Mirror workflow before compiling.
const mirrored = false;

const LOCAL_STORAGE_KEY = 'potentiamod:closedNews';

const NEWS_ITEMS = {
    beta: {
        id: 'potentiamod-beta',
        body: (
            <>
                You are currently on the development version of PotentiaMod. Do NOT use test extensions for your projects. Try visiting the normal version of {' '}
                <a href="https://potentiamod.github.io/" target="_blank" rel="noopener noreferrer">
                    potentiamod.github.io
                </a>.
            </>
        )
    },
    mirrored: {
        id: 'potentiamod-mirrored',
        body: (
            <>
                This is a mirror of PotentiaMod. To see the latest changes, try going to{' '}
                <a href="https://potentiamod.github.io/" target="_blank" rel="noopener noreferrer">
                    potentiamod.github.io
                </a>!
            </>
        )
    }
};

const newsAppliesToUser = () => hasChromium157FilePickerBug();

const FilePickerNewsBody = () => (
    <div className={styles.body}>
        <div>
            {/* eslint-disable-next-line max-len */}
            {'The latest version of Chrome and Edge has a bug that broke our open and save file dialogs.'}
        </div>
        <div>
            {/* eslint-disable-next-line max-len */}
            {'If you\'re affected, you can go to Settings → Expand → Projects → Force HTML File Picker to fix this issue.'}
        </div>
    </div>
);

const getCurrentNews = () => {
    if (mirrored === true) {
        return NEWS_ITEMS.mirrored;
    }

    if (LiveTests || Local) {
        return NEWS_ITEMS.beta;
    }

    return null;
};

const getIsClosedInLocalStorage = (newsId) => {
    try {
        return localStorage.getItem(LOCAL_STORAGE_KEY) === newsId;
    } catch (e) {
        return false;
    }
};

const markAsClosedInLocalStorage = (newsId) => {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, newsId);
    } catch (e) {
        // Ignore storage errors.
    }
};

class TWNews extends React.Component {
    constructor(props) {
        super(props);

        const news = getCurrentNews();
        const filePickerNewsApplies = newsAppliesToUser();

        this.state = {
            closed: news
                ? getIsClosedInLocalStorage(news.id)
                : getIsClosedInLocalStorage('chromium-file-pickers'),
            filePickerNewsApplies
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        const news = getCurrentNews();
        const newsId = news ? news.id : 'chromium-file-pickers';

        markAsClosedInLocalStorage(newsId);

        this.setState({
            closed: true
        }, () => {
            window.dispatchEvent(new Event('resize'));
        });
    }

    render() {
        const {hostname, protocol} = window.location;

        // Never show banners in Scratch Desktop or local files.
        if (isScratchDesktop() || protocol === 'file:') {
            return null;
        }

        const news = getCurrentNews();

        // Show the mirror or beta banner when applicable.
        if (news) {
            if (this.state.closed) {
                return null;
            }

            return (
                <div className={styles.news}>
                    <CloseButton
                        className={styles.closeButton}
                        onClick={this.handleClose}
                    />

                    <div className={styles.body}>
                        {news.body}
                    </div>
                </div>
            );
        }

        // Show the Chromium file picker warning only to affected users.
        if (this.state.filePickerNewsApplies) {
            if (this.state.closed) {
                return null;
            }

            return (
                <div className={styles.news}>
                    <CloseButton
                        className={styles.closeButton}
                        onClick={this.handleClose}
                    />

                    <FilePickerNewsBody />
                </div>
            );
        }

        // Other hosted pages are not official PotentiaMod pages.
        if (hostname !== 'potentiamod.github.io') {
            return (
                <div className={styles.news}>
                    <div className={styles.body}>
                        This page may be an unauthorized mod of PotentiaMod.{' '}
                        <a href="https://potentiamod.github.io/home">
                            <strong>Please go to potentiamod.github.io</strong>
                        </a>
                        {' '}to get a superpowerful Scratch mod.
                    </div>
                </div>
            );
        }

        return null;
    }
}

export default TWNews;
