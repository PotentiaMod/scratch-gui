import React from 'react';
import {isScratchDesktop} from '../../lib/isScratchDesktop';
import CloseButton from '../close-button/close-button.jsx';
import styles from './tw-news.css';

const urlParams = new URLSearchParams(location.search);
const Local = String(window.location.href).startsWith(`http://localhost:`);
const LiveTest = urlParams.has('livetest');
const Secrets = urlParams.has('allpowerscombined');

// Set to true by the PotentiaMod Mirror workflow before compiling.
const mirrored = false;

const LOCAL_STORAGE_KEY = 'potentiamod:closedNews';

const NEWS_ITEMS = {
    test: {
        id: 'potentiamod-test',
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

const getCurrentNews = () => {
    if (mirrored === true && hostname === 'potentiamod.github.io/mirror') {
        return NEWS_ITEMS.mirrored;
    }

    if (LiveTest || Local)  {
        return NEWS_ITEMS.test;
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

        this.state = {
            closed: news ? getIsClosedInLocalStorage(news.id) : false
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        const news = getCurrentNews();

        if (!news) return;

        markAsClosedInLocalStorage(news.id);

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

        // Show the mirror or test banner when applicable.
        const news = getCurrentNews();

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


    }
}

export default TWNews;