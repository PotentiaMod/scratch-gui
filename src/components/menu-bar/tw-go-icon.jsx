import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import {MenuItem, Submenu} from '../menu/menu.jsx';
import TWRenderRecoloredImage from '../../lib/tw-recolor/render.jsx';

import {
    GO_ICON_PLAY,
    GO_ICON_FLAG,
    GO_ICON_ARROW,
    getGoIcon,
    getGoIconImage,
    setGoIcon,
    applyGoIcon
} from '../../lib/go-icon';

import {
    openGoIconMenu,
    goIconMenuOpen,
    closeSettingsMenu
} from '../../reducers/menus.js';

import styles from './settings-menu.css';

import check from './check.svg';
import dropdownCaret from './dropdown-caret.svg';

const isFileProtocol = () =>
    typeof window !== 'undefined' &&
    window.location.protocol === 'file:';

const GoIconPreview = props => (
    <TWRenderRecoloredImage
        src={props.icon}
        draggable={false}
        width={20}
        height={20}
        alt=""
        style={{
            width: 20,
            height: 20,
            objectFit: 'contain',
            background: 'transparent',
            borderRadius: 0,
            filter: 'brightness(0) invert(1)'
        }}
    />
);

GoIconPreview.propTypes = {
    icon: PropTypes.string
};

const GoIconMenuItem = props => (
    <MenuItem onClick={props.onClick}>
        <div className={styles.option}>
            <TWRenderRecoloredImage
                className={classNames(styles.check, {
                    [styles.selected]: props.isSelected
                })}
                width={15}
                height={12}
                src={check}
                draggable={false}
                alt=""
            />

            <GoIconPreview icon={props.icon} />

            <span>{props.label}</span>
        </div>
    </MenuItem>
);

GoIconMenuItem.propTypes = {
    icon: PropTypes.string,
    isSelected: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func
};

const TWGoIcon = ({
    isOpen,
    isRtl,
    onChangeGoIcon,
    onOpen,
    goIcon
}) => {
    if (isFileProtocol()) {
        return null;
    }

    return (
        <MenuItem expanded={isOpen}>
            <div
                className={styles.option}
                onClick={onOpen}
            >
                <GoIconPreview
                    icon={getGoIconImage(goIcon)}
                />

                <span className={styles.submenuLabel}>
                    Go Icon
                </span>

                <img
                    className={styles.expandCaret}
                    src={dropdownCaret}
                    draggable={false}
                    alt=""
                />
            </div>

            <Submenu place={isRtl ? 'left' : 'right'}>
                <GoIconMenuItem
                    icon={getGoIconImage(GO_ICON_PLAY)}
                    label="Play Button (default)"
                    isSelected={goIcon === GO_ICON_PLAY}
                    onClick={() =>
                        onChangeGoIcon(GO_ICON_PLAY)
                    }
                />

                <GoIconMenuItem
                    icon={getGoIconImage(GO_ICON_FLAG)}
                    label="Flag"
                    isSelected={goIcon === GO_ICON_FLAG}
                    onClick={() =>
                        onChangeGoIcon(GO_ICON_FLAG)
                    }
                />

                <GoIconMenuItem
                    icon={getGoIconImage(GO_ICON_ARROW)}
                    label="Arrow"
                    isSelected={goIcon === GO_ICON_ARROW}
                    onClick={() =>
                        onChangeGoIcon(GO_ICON_ARROW)
                    }
                />

            </Submenu>
        </MenuItem>
    );
};

TWGoIcon.propTypes = {
    isOpen: PropTypes.bool,
    isRtl: PropTypes.bool,
    onChangeGoIcon: PropTypes.func,
    onOpen: PropTypes.func,
    goIcon: PropTypes.string
};

const mapStateToProps = state => ({
    isOpen: goIconMenuOpen(state),
    isRtl: state.locales.isRtl,
    goIcon: getGoIcon()
});

const mapDispatchToProps = dispatch => ({
    onChangeGoIcon: mode => {
        if (
            mode !== GO_ICON_PLAY &&
            mode !== GO_ICON_FLAG &&
            mode !== GO_ICON_ARROW
        ) {
            return;
        }

        setGoIcon(mode);
        applyGoIcon(mode);

        dispatch(closeSettingsMenu());
    },

    onOpen: () => dispatch(openGoIconMenu())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TWGoIcon);
