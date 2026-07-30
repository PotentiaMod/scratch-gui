import React from 'react';
import {FormattedMessage, injectIntl, intlShape, defineMessages} from 'react-intl';
import {connect} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import styles from './loader.css';
import logo from './logo.svg';
import {getIsLoadingWithId} from '../../reducers/project-state';
import topBlock from './top-block.svg';
import middleBlock from './middle-block.svg';
import bottomBlock from './bottom-block.svg';
import TWRenderRecoloredImage from '../../lib/tw-recolor/render.jsx';

const mainMessages = {
    'gui.loader.headline': (
        <FormattedMessage
            defaultMessage="Loading Project"
            description="Main loading message"
            id="gui.loader.headline"
        />
    ),
    'gui.loader.creating': (
        <FormattedMessage
            defaultMessage="Creating Project"
            description="Main creating message"
            id="gui.loader.creating"
        />
    )
};

const messages = defineMessages({
    projectData: {
        defaultMessage: 'Loading project …',
        description: 'Appears when loading project data, but not assets yet',
        id: 'tw.loader.projectData'
    },
    downloadingAssets: {
        defaultMessage: 'Downloading assets ({complete}/{total}) …',
        description: 'Appears when loading project assets from a project on a remote website',
        id: 'tw.loader.downloadingAssets'
    },
    loadingAssets: {
        defaultMessage: 'Loading assets ({complete}/{total}) …',
        description: 'Appears when loading project assets from a project file on the user\'s computer',
        id: 'tw.loader.loadingAssets'
    }
});

const randomMessages = [
        "Coloring the blocks...",
        "Loading extensions...",
        "Making costumes...",
		"The default character sprite is a dragon named Potentia.",
        "Restoring the sprites...",
        "Listening to the sounds...",
        "Setting up broadcasts...",
        "Admiring the fonts...",
        "Watching the birds fly...",
        "Herding dragons...",
        "Smashing bricks...",
        "Smashing cats...",
        "Inflating Neros...",
        "old macdonald had a freaking farm lol",
        "Keeping an eye on Potentia...",
        "Fixing errors...",
		"Face blemishes like pimples and moles and warts would always faint at spinach, right?",
		"I LOVE SNAIL IDE!",
		"EVERYONE THERE'S A SPINACH HURRICANE COMING TOWARDS US!",
        "Coming up with ideas...",
		"Knock knock. Who's there?",
	    "I still think of this when I see UNCLE SUCKER!! lol!",
		"Caution: A virus has been detected.",
        "Every website recieves your IP address.",
		"PotentiaMod does not have an article on Wikipedia.",
        "Harder, Better, Faster, Stronger",
        "Waiting for the load to finish...",
        "PotentiaMod is based off the source code of TurboWarp, which is based off Scratch. Scratchception!",
        "Fun fact: Dragons look chill, but they're actually not, they're planning WORLD DOMINATION.",
        "Every copy of PotentiaMod is personalized",
        "You can create your own PotentiaMod extensions to add new powerful blocks using JavaScript!",
        "Making new features...",
        "STOP! HAMMER TIME!",
        "POTENTIAMAX LOL",
        "Will Milhouse and I will be living like high school dropouts living off Uncle Sucker?",
        "Welcome to PotentiaMod!",
		"Did you know? The",
        "Maybe in another universe, PotentiaMod is based on GaiaMod",
        "Like you calling people \"trolls\"? Listen here.",
		"Potentia's preparing for your arrival. Run.",
		"With PotentiaMod, we got a new Scratch experience.",
        "Ampmod, OmniBlocks and LibreKitten are all nerds lol",
        "Implementing new round blocks...",
        "WHOOPS! There Goes Our EDITOR!",
        "Potentia will hate you if you say that PotentiaMod is a rip-off of GaiaMod and Dash.",
        "Truth: Cats rule, dogs drool",
		"Shades of Gaia trying to put her random access humor on this loader.",
        "You are too slow. Try again.",
		"Guess again, nerd!",
		"PotentiaMod is in beta, so there may be bugs and breaking changes.",
        "Check out my first Scratch Mod, <a href='https://gaiamod-main.github.io/'>GaiaMod</a>!",
        "Simply the Best",
		"Potentia is reading this message",
        "Evil Kumquats beware! The project you are loading uses Kumquat Anti-Cheat.",
        "Patting the cat blocks...",
        "GaiaMod and PotentiaMod are the duo of Scratch mods.",
        "Deleting Kiwi Farms... (trying to)",
        "*You found the \"67\"*",
        "GIANT LAVA FARM!",
        "say (Gotcha!) for (5) seconds",
		"No, Walmart don't have Scratch! OK?",
        "Format C: complete!",
        "Crashing prod...",
        "License has expired!",
        "SyntaxError: Unexpected token",
        "Searching for an answer on Stack Overflow...",
        "Watching dragon videos...",
        "Investigating the algorithms...",
        "AHOY! SPINACH!!",
        "Dave the magical cheese wizard.",
        "Changing profile picture...",
        "Writing new profile description...",
		"I LOVE PENGUINMOD!",
        "Firing projects...",
        "Searching a project to feature...",
        "Fact: 07/17/2026 is Potentia's birthday"
];

class LoaderComponent extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleAssetProgress',
            'handleProjectLoaded',
            'barInnerRef',
            'messageRef',
            'randomMessageRef',
            'updateRandomMessage'
        ]);
        this.barInnerEl = null;
        this.messageEl = null;
        this.randomMessageEl = null;
        this.ignoreProgress = false;
        this.randomMessageInterval = null;
        this.lastRandomMessageIndex = -1;
    }
    componentDidMount () {
        this.handleAssetProgress(
            this.props.vm.runtime.finishedAssetRequests,
            this.props.vm.runtime.totalAssetRequests
        );
        this.props.vm.on('ASSET_PROGRESS', this.handleAssetProgress);
        this.props.vm.runtime.on('PROJECT_LOADED', this.handleProjectLoaded);
        this.updateRandomMessage();
        this.randomMessageInterval = setInterval(this.updateRandomMessage, 3000);
    }
    componentWillUnmount () {
        this.props.vm.off('ASSET_PROGRESS', this.handleAssetProgress);
        this.props.vm.runtime.off('PROJECT_LOADED', this.handleProjectLoaded);
        clearInterval(this.randomMessageInterval);
    }
    updateRandomMessage () {
        if (this.randomMessageEl) {
            this.randomMessageEl.classList.remove(styles.randomMessageSlideIn);
            void this.randomMessageEl.offsetWidth; // Trigger reflow
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * randomMessages.length);
            } while (randomIndex === this.lastRandomMessageIndex);
            this.lastRandomMessageIndex = randomIndex;
            const randomFact = randomMessages[randomIndex];
            this.randomMessageEl.textContent = randomFact;
            this.randomMessageEl.classList.add(styles.randomMessageSlideIn);
            this.randomMessageEl.classList.add(styles.randomMessageRoulette);
        }
    }
    handleAssetProgress (finished, total) {
        if (this.ignoreProgress || !this.barInnerEl || !this.messageEl) {
            return;
        }

        if (total === 0) {
            // Started loading a new project.
            this.barInnerEl.style.width = '0';
            this.messageEl.textContent = this.props.intl.formatMessage(messages.projectData);
        } else {
            this.barInnerEl.style.width = `${finished / total * 100}%`;
            const message = this.props.isRemote ? messages.downloadingAssets : messages.loadingAssets;
            this.messageEl.textContent = this.props.intl.formatMessage(message, {
                complete: finished,
                total
            });
        }
    }
    handleProjectLoaded () {
        if (this.ignoreProgress || !this.barInnerEl || !this.messageEl) {
            return;
        }

        this.ignoreProgress = true;
        this.props.vm.runtime.resetProgress();
    }
    barInnerRef (barInner) {
        this.barInnerEl = barInner;
    }
    messageRef (message) {
        this.messageEl = message;
    }
    randomMessageRef (randomMessage) {
        this.randomMessageEl = randomMessage;
    }
    render () {
        return (
            <div
            className={classNames(styles.background, {
                [styles.fullscreen]: this.props.isFullScreen
            })}
            >
            
            <div className={styles.container}>
                <div className={styles.blockAnimation}>
                        <img src={logo} />
                    </div>
                <div className={styles.title}>
                {mainMessages[this.props.messageId]}
                </div>
               <div
                className={styles.tips}
                ref={this.randomMessageRef}
                />
                <div
                className={styles.message}
                ref={this.messageRef}
                />

                <div className={styles.barOuter}>
                <div
                    className={styles.barInner}
                    ref={this.barInnerRef}
                />
                </div>
				
				<a
                            className={styles.githubCta}
                            href="https://gaiamod-main.github.io/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                            width="100px"
                            src="https://gaiamod-main.github.io/static/assets/fe83d13c2f5884449a3d7cad9a0e4778.png"
                            draggable={false}
                        />
                            <FormattedMessage
                                defaultMessage="🢀 Also, check out GaiaMod!"
                                description="Link on the loading screen to the GaiaMod page"
                                id="pot.loader.gaiamod"
                            />
							</a>
            </div>
            </div>
        );
    }
}

LoaderComponent.propTypes = {
    intl: intlShape,
    isFullScreen: PropTypes.bool,
    isRemote: PropTypes.bool,
    messageId: PropTypes.string,
    vm: PropTypes.shape({
        on: PropTypes.func,
        off: PropTypes.func,
        runtime: PropTypes.shape({
            totalAssetRequests: PropTypes.number,
            finishedAssetRequests: PropTypes.number,
            resetProgress: PropTypes.func,
            on: PropTypes.func,
            off: PropTypes.func
        })
    })
};
LoaderComponent.defaultProps = {
    isFullScreen: false,
    messageId: 'gui.loader.headline'
};

const mapStateToProps = state => ({
    isRemote: getIsLoadingWithId(state.scratchGui.projectState.loadingState),
    vm: state.scratchGui.vm
});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(LoaderComponent));