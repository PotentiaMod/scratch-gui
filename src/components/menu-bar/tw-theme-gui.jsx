import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage, defineMessages} from 'react-intl';
import {connect} from 'react-redux';

import check from './check.svg';
import dropdownCaret from './dropdown-caret.svg';
import {MenuItem, MenuSection, Submenu} from '../menu/menu.jsx';
import {GUI_MAP, GuiIcons, GuiOptions, Theme} from '../../lib/themes/index.js';
import {openGuiMenu, guiMenuOpen, closeSettingsMenu} from '../../reducers/menus.js';
import {setTheme} from '../../reducers/theme.js';
import {persistTheme} from '../../lib/themes/themePersistance.js';
import lightModeIcon from './tw-sun.svg';
import darkModeIcon from './tw-moon.svg';
import midnightModeIcon from './tw-star.svg';
import styles from './settings-menu.css';

const ThemeIcon = props => (
        <img
            src={GuiIcons[props.id]}
            draggable={false}
            // Image is decorative
            alt=""
        />
);

ThemeIcon.propTypes = {
    id: PropTypes.string
};

const GuiMenuItem = props => (
    <MenuItem onClick={props.onClick}>
        <div className={styles.option}>
            <img
                className={classNames(styles.check, {[styles.selected]: props.isSelected})}
                width={15}
                height={12}
                src={check}
                draggable={false}
            />
            <ThemeIcon id={props.id} />
            <FormattedMessage {...GuiOptions[props.id]} />
        </div>
    </MenuItem>
);

GuiMenuItem.propTypes = {
    id: PropTypes.string,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func
};

const GuiThemeMenu = ({
    isOpen,
    isRtl,
    onChangeTheme,
    onOpenCustomSettings,
    onOpen,
    theme,
}) => (
<MenuItem expanded={isOpen}>
            <div
                className={styles.option}
                onClick={onOpen}
            >
                <ThemeIcon
                    id={theme.gui}
                />
                <span>
                    <FormattedMessage
                        defaultMessage="Theme"
                        description="Label for menu to choose a GUI theme color"
                        id="tw.menuBar.gui"
                    />
                </span>
                <img
                    className={styles.expandCaret}
                    src={dropdownCaret}
                    draggable={false}
                />
            </div>
            <Submenu place={isRtl ? 'left' : 'right'}>
                {Object.keys(GuiOptions).map(item => (
                    <GuiMenuItem
                        key={item}
                        id={item}
                        isSelected={theme.gui === item}
                        // eslint-disable-next-line react/jsx-no-bind
                        onClick={() => onChangeTheme(theme.set('gui', item))}
                    />
                ))}
            </Submenu>
        </MenuItem>
);

GuiThemeMenu.propTypes = {
    isOpen: PropTypes.bool,
    isRtl: PropTypes.bool,
    onChangeTheme: PropTypes.func,
    onOpen: PropTypes.func,
    theme: PropTypes.instanceOf(Theme)
};

const mapStateToProps = state => ({
    isOpen: guiMenuOpen(state),
    isRtl: state.locales.isRtl,
    theme: state.scratchGui.theme.theme
});

const mapDispatchToProps = dispatch => ({
    onChangeTheme: theme => {
        dispatch(setTheme(theme));
        dispatch(closeSettingsMenu());
        persistTheme(theme);
    },
    onOpen: () => dispatch(openGuiMenu())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GuiThemeMenu);