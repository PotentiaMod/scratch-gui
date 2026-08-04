//Stolen from LibreKitten
import classNames from 'classnames';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {defineMessages, FormattedMessage, injectIntl, intlShape} from 'react-intl';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import bowser from 'bowser';
import React from 'react';

import Button from '../button/button.jsx';

import styles from './header.css';

import logo from '../menu-bar/potentiamod-logo.svg';

import {APP_NAME} from '../../lib/brand.js';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.mainGroup}>
            <a
                href="/"
                className={classNames(styles.headerItem)}
            >
                 <img
                            src={logo}
                            alt="PotentiaMod"
                            className={styles.homeLogo}
                        />
                        <span className={styles.homeWordmark}>
                            {'PotentiaMod'}
                        </span>
            </a>
            <a
                href="/editor.html"
                className={classNames(styles.headerItem, styles.hoverable)}
            >
                Create
            </a>
            <a
                href="/credits.html"
                className={classNames(styles.headerItem, styles.hoverable)}
            >
                Credits
            </a>
            <div className={styles.headerItem}>
                <a
                    className={styles.feedbackLink}
                    href="https://github.com/PotentiaMod/potentiamod.github.io/issues"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {/* todo: icon */}
                    <Button className={styles.feedbackButton}>
                        <FormattedMessage
                            defaultMessage="{APP_NAME} issues and bugs"
                            description="Button to give feedback in the menu bar"
                            id="tw.GHissues"
                            values={{
                                APP_NAME
                            }}
                        />
                    </Button>
                </a>
            </div>
        </div>
    </div>
);

export default Header;