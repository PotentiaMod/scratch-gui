import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import Box from '../box/box.jsx';
import styles from './blocks.css';

const BlocksComponent = props => {
    const {
        containerRef,
        dragOver,
        gridVisible,
        preferences,
        ...componentProps
    } = props;
    return (
        <Box
            className={classNames(styles.blocks, {
                [styles.dragOver]: dragOver,
				[styles['hide-grid']]: gridVisible == false
            })}
            {...componentProps}
            componentRef={containerRef}
        />
    );
};
BlocksComponent.propTypes = {
    containerRef: PropTypes.func,
    dragOver: PropTypes.bool,
    gridVisible: PropTypes.bool,
    preferences: PropTypes.bool,
};

const mapStateToProps = state => ({
	preferences: state.scratchGui.preferences
});

export default BlocksComponent;
