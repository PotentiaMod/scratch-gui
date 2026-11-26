import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import classNames from 'classnames';
import log from '../../lib/log';
import styles from './example-projects.css';

import chronometer from '!arraybuffer-loader!./examples/ChronometerNoah.pot';
import thumbChronometer from './examples/chronometer.png';

import adBlock from '!arraybuffer-loader!./examples/AdblockDetection.pot';
import thumbAdblock from './examples/adblock.png';

import potBlocks from '!arraybuffer-loader!./examples/POTExtBlocks.pot';
import thumbPOTBlocks from './examples/potblocks.png';

const EXAMPLE_PROJECTS = [
    {
        id: 'chronometer',
        title: 'Chronometer Example',
        thumbnail: thumbChronometer,
        data: chronometer
    },
	{
        id: 'adBlock',
        title: 'AdBlock Detection',
        thumbnail: thumbAdblock,
        data: adBlock
    },
	{
        id: 'potBlocks',
        title: 'PotentiaMod Blocks and Extensions',
        thumbnail: thumbPOTBlocks,
        data: potBlocks
    }
];

class ExampleProjects extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleSelect'
        ]);
        this.state = {
            loading: false
        };
    }
    handleSelect (project) {
        if (this.state.loading) return;
        if (this.props.projectChanged) {
            // eslint-disable-next-line no-alert
            const ok = confirm(
                'This will replace the current project without saving. Continue?'
            );
            if (!ok) return;
        }
        this.setState({loading: true});
        const vm = this.props.vm;
        vm.quit();
        vm.loadProject(project.data)
            .then(() => {
                this.props.onSetProjectTitle(project.title);
                vm.renderer.draw();
            })
            .catch(error => {
                log.error(error);
            })
            .then(() => {
                this.setState({loading: false});
            });
    }
    render () {
        return (
		<center>
            <div className={styles.container}>
                <div className={styles.header}>
                    <FormattedMessage
                        defaultMessage="Example Projects"
                        description="Title of the Example Projects section."
                        id="tw.exampleProjects.title"
                    />
                </div>
                <div className={styles.grid}>
                    {EXAMPLE_PROJECTS.map(project => (
                        <div
                            key={project.id}
                            className={classNames(styles.card, {
                                [styles.disabled]: this.state.loading
                            })}
                            onClick={() => this.handleSelect(project)}
                        >
                            <img
                                className={styles.thumbnail}
                                src={project.thumbnail}
                                draggable={false}
                            />
                            <div className={styles.cardTitle}>
                                {project.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
		</center>
        );
    }
}

ExampleProjects.propTypes = {
    vm: PropTypes.shape({
        quit: PropTypes.func,
        loadProject: PropTypes.func,
        renderer: PropTypes.shape({
            draw: PropTypes.func
        })
    }),
    projectChanged: PropTypes.bool,
    onSetProjectTitle: PropTypes.func
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm,
    projectChanged: state.scratchGui.projectChanged
});

const mapDispatchToProps = dispatch => ({
    onSetProjectTitle: title => dispatch(require('../../reducers/project-title').setProjectTitle(title))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExampleProjects);
