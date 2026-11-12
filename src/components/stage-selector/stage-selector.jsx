import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, intlShape, injectIntl, FormattedMessage} from 'react-intl';

import Box from '../box/box.jsx';
import ActionMenu from '../action-menu/action-menu.jsx';
import styles from './stage-selector.css';
import {isRtl} from '@turbowarp/scratch-l10n';

import backdropIcon from '../action-menu/icon--backdrop.svg';
import fileUploadIcon from '../action-menu/icon--file-upload.svg';
import paintIcon from '../action-menu/icon--paint.svg';
import surpriseIcon from '../action-menu/icon--surprise.svg';
import searchIcon from '../action-menu/icon--search.svg';
import {Upload, Paintbrush, Shuffle, Search} from 'lucide-react';

const messages = defineMessages({
    addBackdropFromLibrary: {
        id: 'gui.spriteSelector.addBackdropFromLibrary',
        description: 'Button to add a stage in the target pane from library',
        defaultMessage: 'Choose a Backdrop'
    },
    addBackdropFromPaint: {
        id: 'gui.stageSelector.addBackdropFromPaint',
        description: 'Button to add a stage in the target pane from paint',
        defaultMessage: 'Paint'
    },
    addBackdropFromSurprise: {
        id: 'gui.stageSelector.addBackdropFromSurprise',
        description: 'Button to add a random stage in the target pane',
        defaultMessage: 'Random'
    },
    addBackdropFromFile: {
        id: 'gui.stageSelector.addBackdropFromFile',
        description: 'Button to add a stage in the target pane from file',
        defaultMessage: 'Upload Backdrop'
    }
});

const StageSelector = props => {
    const {
        backdropCount,
        containerRef,
        dragOver,
        fileInputRef,
        intl,
        selected,
        raised,
        receivedBlocks,
        url,
        onBackdropFileUploadClick,
        onBackdropFileUpload,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onNewBackdropClick,
        onSurpriseBackdropClick,
        onEmptyBackdropClick,
        ...componentProps
    } = props;
    return (
        <Box
            className={classNames(styles.stageSelector, {
                [styles.isSelected]: selected,
                [styles.raised]: raised || dragOver,
                [styles.receivedBlocks]: receivedBlocks
            })}
            componentRef={containerRef}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...componentProps}
        >
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <FormattedMessage
                        defaultMessage="Stage"
                        description="Label for the stage in the stage selector"
                        id="gui.stageSelector.stage"
                    />
                </div>
            </div>
            {url ? (
                <img
                    className={styles.costumeCanvas}
                    src={url}
                    draggable={false}
                />
            ) : null}
            <div className={styles.label}>
                <FormattedMessage
                    defaultMessage="Backdrops"
                    description="Label for the backdrops in the stage selector"
                    id="gui.stageSelector.backdrops"
                />
            </div>
            <div className={styles.count}>{backdropCount}</div>
            <ActionMenu
                className={styles.addButton}
                img={backdropIcon}
                moreButtons={[
                    {
                        title: 'Upload Backdrop',
                        img: fileUploadIcon,
                        onClick: onBackdropFileUploadClick,
                        fileAccept: '.svg, .png, .bmp, .jpg, .jpeg, .jfif, .webp, .gif, .avif',
                        fileChange: onBackdropFileUpload,
                        fileInput: fileInputRef,
                        fileMultiple: true
                    }, {
                        title: 'Random',
                        img: surpriseIcon,
                        onClick: onSurpriseBackdropClick

                    }, {
                        title: 'Paint',
                        img: paintIcon,
                        onClick: onEmptyBackdropClick
                    }, {
                        title: 'Choose a Backdrop',
                        img: searchIcon,
                        onClick: onNewBackdropClick
                    }
                ]}
                title={'Choose a Backdrop'}
                tooltipPlace={isRtl(intl.locale) ? 'right' : 'left'}
                onClick={onNewBackdropClick}
            />
        </Box>
    );
};

StageSelector.propTypes = {
    backdropCount: PropTypes.number.isRequired,
    containerRef: PropTypes.func,
    dragOver: PropTypes.bool,
    fileInputRef: PropTypes.func,
    intl: intlShape.isRequired,
    onBackdropFileUpload: PropTypes.func,
    onBackdropFileUploadClick: PropTypes.func,
    onClick: PropTypes.func,
    onEmptyBackdropClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onNewBackdropClick: PropTypes.func,
    onSurpriseBackdropClick: PropTypes.func,
    raised: PropTypes.bool.isRequired,
    receivedBlocks: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
    url: PropTypes.string
};

export default injectIntl(StageSelector);
