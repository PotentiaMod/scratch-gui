import {defineMessages, FormattedMessage, intlShape, injectIntl} from 'react-intl';
import PropTypes from 'prop-types';
import React, {useState, useRef, useEffect} from 'react';
import Modal from '../../containers/modal.jsx';
import styles from './settings-modal.css';
import Box from '../box/box.jsx';
import classNames from 'classnames';
import bindAll from 'lodash.bindall';
import AddonSettingsComponent from '../../addons/settings/settings.jsx';
import DocumentationLink from '../tw-documentation-link/documentation-link.jsx';
import FancyCheckbox from '../tw-fancy-checkbox/checkbox.jsx';
import Input from '../forms/input.jsx';
import BufferedInputHOC from '../forms/buffered-input-hoc.jsx';
import {onExportSettings} from '../../playground/addon-settings-pot.jsx';
import {connect} from 'react-redux';
import helpIcon from './help-icon.svg';
import swapIcon from './swap-icon.svg';
import {APP_NAME} from '../../lib/brand.js';
import {setUsername, setUsernameInvalid} from '../../reducers/tw.js';
import isScratchDesktop from '../../lib/isScratchDesktop.js';
import {generateRandomUsername} from '../../lib/tw-username.js';
import dropdownCaret from '../menu-bar/dropdown-caret.svg';
import DeleteButton from '../delete-button/delete-button.jsx';
import VM from 'scratch-vm';
import {setTheme} from '../../reducers/theme.js';
import {persistTheme, detectTheme} from '../../lib/themes/themePersistance.js';
import {GUI_CUSTOM, GUI_MAP, ACCENT_CUSTOM, ACCENT_MAP, ACCENT_GROUPS, AccentIcons, AccentOptions, Theme} from '../../lib/themes/index.js';

// Copied from Nyx IDE
const STAGE_SIZE_PRESETS = [
    {label: 'Square', width: 360, height: 360},
    {label: 'Standard', width: 480, height: 360},
	{label: 'Widescreen', width: 640, height: 360},
	{label: 'Ex. Thumbnail', width: 600, height: 300}
];

const messages = defineMessages({
    title: {
        defaultMessage: 'Settings',
        description: 'Title of editor settings modal',
        id: 'tw.editorSettings.title'
    },
    help: {
        defaultMessage: 'Click for help',
        description: 'Hover text of help icon in settings',
        id: 'tw.editorSettings.help'
    },
    general: {
        id: 'tw.editorSettings.generalSection',
        defaultMessage: 'General'
    },
    limits: {
        id: 'tw.editorSettings.limitsSection',
        defaultMessage: 'Limits'
    },
    optimization: {
        id: 'tw.editorSettings.optimizationSection',
        defaultMessage: 'Pptimization'
    },
    projectsize: {
        id: 'tw.editorSettings.projectsizeSection',
        defaultMessage: 'Project Size'
    },
    security: {
        id: 'tw.editorSettings.securitySection',
        defaultMessage: 'Security'
    },
    other: {
        id: 'tw.editorSettings.otherSection',
        defaultMessage: 'Other'
    },
    addons: {
        id: 'tw.editorSettings.addonsSection',
        defaultMessage: 'Addons'
    },
	danger: {
        id: 'tw.editorSettings.dangerSection',
        defaultMessage: 'Danger Zone!'
    },
	about: {
        id: 'tw.editorSettings.aboutSection',
        defaultMessage: 'About'
    }
});

const BufferedInput = BufferedInputHOC(Input);

const LearnMore = props => (
    <React.Fragment>
        {' '}
        <DocumentationLink {...props}>
            <FormattedMessage
                defaultMessage="Learn more."
                id="gui.alerts.cloudInfoLearnMore"
            />
        </DocumentationLink>
    </React.Fragment>
);

class UnwrappedSetting extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClickHelp'
        ]);
        this.state = {
            helpVisible: false
        };
    }
    componentDidUpdate (prevProps) {
        if (this.props.active && !prevProps.active) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
                helpVisible: true
            });
        }
    }
    handleClickHelp () {
        this.setState(prevState => ({
            helpVisible: !prevState.helpVisible
        }));
    }
    render () {
        return (
            <div
                className={classNames(styles.setting, {
                    [styles.active]: this.props.active
                })}
            >
                <div className={styles.label}>
                    {this.props.primary}
                    <button
                        className={styles.helpIcon}
                        onClick={this.handleClickHelp}
                        title={this.props.intl.formatMessage(messages.help)}
                    >
                        <img
                            src={helpIcon}
                            draggable={false}
                        />
                    </button>
                </div>
                {this.state.helpVisible && (
                    <div className={styles.detail}>
                        {this.props.help}
                        {this.props.slug && <LearnMore slug={this.props.slug} />}
                    </div>
                )}
                {this.props.secondary}
            </div>
        );
    }
}
UnwrappedSetting.propTypes = {
    intl: intlShape,
    active: PropTypes.bool,
    help: PropTypes.node,
    primary: PropTypes.node,
    secondary: PropTypes.node,
    slug: PropTypes.string
};
const Setting = injectIntl(UnwrappedSetting);

const BooleanSetting = ({value, onChange, label, ...props}) => (
    <Setting
        {...props}
        active={value}
        primary={
            <label className={styles.label}>
                <FancyCheckbox
                    className={styles.checkbox}
                    checked={value}
                    onChange={onChange}
                />
                {label}
            </label>
        }
    />
);
BooleanSetting.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
    label: PropTypes.node.isRequired
};

///////////////////////////////////////////
const HighQualityPen = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="High Quality Pen"
                description="High quality pen setting"
                id="tw.settingsModal.highQualityPen"
            />
        }
        help={
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Allows pen projects to render at higher resolutions and disables some coordinate rounding in the editor. Not all projects benefit from this setting and it may impact performance."
                description="High quality pen setting help"
                id="tw.settingsModal.highQualityPenHelp"
            />
        }
        slug="high-quality-pen"
    />
);

const CustomFPS = props => (
    <BooleanSetting
        value={props.framerate !== 30}
        onChange={props.onChange}
        label={
            <FormattedMessage
                defaultMessage="60 FPS (Custom FPS)"
                description="FPS setting"
                id="tw.settingsModal.fps"
            />
        }
        help={
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Runs scripts 60 times per second instead of 30. Most projects will not work properly with this enabled. You should try Interpolation with 60 FPS mode disabled if that is the case. {customFramerate}."
                description="FPS setting help"
                id="tw.settingsModal.fpsHelp"
                values={{
                    customFramerate: (
                        <a
                            onClick={props.onCustomizeFramerate}
                            tabIndex="0"
                        >
                            <FormattedMessage
                                defaultMessage="Click to use a framerate other than 30 or 60"
                                description="FPS settings help"
                                id="tw.settingsModal.fpsHelp.customFramerate"
                            />
                        </a>
                    )
                }}
            />
        }
        slug="custom-fps"
    />
);
CustomFPS.propTypes = {
    framerate: PropTypes.number,
    onChange: PropTypes.func,
    onCustomizeFramerate: PropTypes.func
};

const Interpolation = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Interpolation"
                description="Interpolation setting"
                id="tw.settingsModal.interpolation"
            />
        }
        help={
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Makes projects appear smoother by interpolating sprite motion. Interpolation should not be used on 3D projects, raytracers, pen projects, and laggy projects as interpolation will make them run slower without making them appear smoother."
                description="Interpolation setting help"
                id="tw.settingsModal.interpolationHelp"
            />
        }
        slug="interpolation"
    />
);

const InfiniteClones = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Infinite Clones"
                description="Infinite Clones setting"
                id="tw.settingsModal.infiniteClones"
            />
        }
        help={
            <FormattedMessage
                defaultMessage="Disables Scratch's 300 clone limit."
                description="Infinite Clones setting help"
                id="tw.settingsModal.infiniteClonesHelp"
            />
        }
        slug="infinite-clones"
    />
);

const RemoveFencing = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Remove Fencing"
                description="Remove Fencing setting"
                id="tw.settingsModal.removeFencing"
            />
        }
        help={
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Allows sprites to move offscreen, become as large or as small as they want, and makes touching blocks work offscreen."
                description="Remove Fencing setting help"
                id="tw.settingsModal.removeFencingHelp"
            />
        }
        slug="remove-fencing"
    />
);

const RemoveMiscLimits = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Remove Miscellaneous Limits"
                description="Remove Miscellaneous Limits setting"
                id="tw.settingsModal.removeMiscLimits"
            />
        }
        help={
            <FormattedMessage
                defaultMessage="Removes sound effect limits and pen size limits."
                description="Remove Miscellaneous Limits setting help"
                id="tw.settingsModal.removeMiscLimitsHelp"
            />
        }
        slug="remove-misc-limits"
    />
);

const WarpTimer = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Warp Timer"
                description="Warp Timer setting"
                id="tw.settingsModal.warpTimer"
            />
        }
        help={
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Makes scripts check if they are stuck in a long or infinite loop and run at a low framerate instead of getting stuck until the loop finishes. This fixes most crashes but has a significant performance impact, so it's only enabled by default in the editor."
                description="Warp Timer help"
                id="tw.settingsModal.warpTimerHelp"
            />
        }
        slug="warp-timer"
    />
);

const DisableCompiler = props => (
    <BooleanSetting
        {...props}
        label={
            <FormattedMessage
                defaultMessage="Disable Compiler"
                description="Disable Compiler setting"
                id="tw.settingsModal.disableCompiler"
            />
        }
        help={
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Disables the {APP_NAME} compiler. You may want to enable this while editing projects so that scripts update immediately. Otherwise, you should never enable this."
                description="Disable Compiler help"
                id="tw.settingsModal.disableCompilerHelp"
                values={{
                    APP_NAME
                }}
            />
        }
        slug="disable-compiler"
    />
);

class StageSizePresets extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, ['handleClick']);
    }
    handleClick (e) {
        this.props.onSelectPreset(Number(e.currentTarget.dataset.width), Number(e.currentTarget.dataset.height));
    }
    render () {
        const {stageWidth, stageHeight} = this.props;
        return (
            <div className={styles.stagePresets}>
                {STAGE_SIZE_PRESETS.map(preset => (
                    <button
                        key={preset.label}
                        type="button"
                        data-width={preset.width}
                        data-height={preset.height}
                        className={classNames(styles.stagePresetButton, {
                            [styles.stagePresetButtonActive]:
                                stageWidth === preset.width && stageHeight === preset.height
                        })}
                        onClick={this.handleClick}
                    >
                        {preset.label}
                    </button>
                ))}
            </div>
        );
    }
}
StageSizePresets.propTypes = {
    stageWidth: PropTypes.number,
    stageHeight: PropTypes.number,
    onSelectPreset: PropTypes.func.isRequired
};

const CustomStageSize = ({
    customStageSizeEnabled,
    stageWidth,
    onStageWidthChange,
    stageHeight,
    onStageHeightChange,
    onSelectStageSizePreset,
    onSwapStageSize
}) => (
    <Setting
        active={customStageSizeEnabled}
        primary={(
            <div className={styles.label}>
                <FormattedMessage
                    defaultMessage="Stage Size:"
                    description="Custom Stage Size option"
                    id="tw.settingsModal.customStageSize"
                />
            </div>
        )}
        secondary={
            <React.Fragment>
                <StageSizePresets
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                    onSelectPreset={onSelectStageSizePreset}
                />
                <div className={classNames(styles.label, styles.customStageSize)}>
                    <FormattedMessage
                        defaultMessage="Custom Stage Size:"
                        description="Custom Stage Size option"
                        id="tw.settingsModal.customStageSizeLabel"
                    />
                    <BufferedInput
                        value={stageWidth}
                        onSubmit={onStageWidthChange}
                        className={styles.customStageSizeInput}
                        type="number"
                        min="0"
                        max="1024"
                        step="1"
                    />
                    <span>{'×'}</span>
                    <BufferedInput
                        value={stageHeight}
                        onSubmit={onStageHeightChange}
                        className={styles.customStageSizeInput}
                        type="number"
                        min="0"
                        max="1024"
                        step="1"
                    />
                    <button
                        type="button"
                        className={styles.swapButton}
                        onClick={onSwapStageSize}
                        title="Swap width and height"
                    >
                        <img
                            src={swapIcon}
                            draggable={false}
                        />
                    </button>
                </div>
                {(stageWidth >= 1000 || stageHeight >= 1000) && (
                    <div className={styles.warning}>
                        <FormattedMessage
                            // eslint-disable-next-line max-len
                            defaultMessage="Using a custom stage size this large is not recommended! Instead, use a lower size with the same aspect ratio and let fullscreen mode upscale it to match the user's display."
                            description="Warning about using stages that are too large in settings modal"
                            id="tw.settingsModal.largeStageWarning"
                        />
                        <LearnMore slug="custom-stage-size" />
                    </div>
                )}
            </React.Fragment>
        }
        help={(
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="Changes the size of the PotentiaMod stage from its standard size to something else. Try widescreen. Very few projects will handle this properly."
                description="Custom Stage Size option"
                id="tw.settingsModal.customStageSizeHelp"
            />
        )}
        slug="custom-stage-size"
    />
);
CustomStageSize.propTypes = {
    customStageSizeEnabled: PropTypes.bool,
    stageWidth: PropTypes.number,
    onStageWidthChange: PropTypes.func,
    stageHeight: PropTypes.number,
    onStageHeightChange: PropTypes.func,
    onSelectStageSizePreset: PropTypes.func,
    onSwapStageSize: PropTypes.func
};

const StoreProjectOptions = ({onStoreProjectOptions}) => (
    <div className={styles.setting}>
        <div>
            <button
                onClick={onStoreProjectOptions}
                className={styles.button}
            >
                <FormattedMessage
                    defaultMessage="Store settings in project"
                    description="Button in settings modal"
                    id="tw.settingsModal.storeProjectOptions"
                />
            </button>
            <p>
                <FormattedMessage
                    // eslint-disable-next-line max-len
                    defaultMessage="Stores the selected settings in the project so they will be automatically applied when PotentiaMod loads this project. Warp timer and disable compiler will not be saved."
                    description="Help text for the store settings in project button"
                    id="tw.settingsModal.storeProjectOptionsHelp"
                />
            </p>
        </div>
    </div>
);
StoreProjectOptions.propTypes = {
    onStoreProjectOptions: PropTypes.func
};
///////////////////////////////////////////
const ProjectSizeTracker = ({ vm }) => {
    const [projectSize, setProjectSize] = React.useState(0);

    React.useEffect(() => {
        const calculateSize = () => {
    
    if (!vm || !vm.runtime) {
        return 0;
    }
            if (!vm || !vm.runtime) return 0;

            let totalSize = 0;
            const processedAssets = new Set();

            const getAssetSize = (asset) => {
                if (!asset) return 0;
                if (asset.size) return asset.size;
                if (asset.data) return asset.data.length || asset.data.byteLength || 0;
                return 0;
            };

            if (vm.runtime.targets) {
                vm.runtime.targets.forEach(target => {
                    if (target.sprite && target.sprite.costumes) {
                        target.sprite.costumes.forEach(costume => {
                            const assetId = costume.assetId || costume.md5;
                            if (assetId && !processedAssets.has(assetId)) {
                                processedAssets.add(assetId);
                                totalSize += getAssetSize(costume.asset);
                            }
                        });
                    }

                    if (target.sprite && target.sprite.sounds) {
                        target.sprite.sounds.forEach(sound => {
                            const assetId = sound.assetId || sound.md5;
                            if (assetId && !processedAssets.has(assetId)) {
                                processedAssets.add(assetId);
                                totalSize += getAssetSize(sound.asset);
                            }
                        });
                    }
                });
            }

            const scriptEstimate = vm.runtime.targets ? vm.runtime.targets.length * 5000 : 10000;
            totalSize += scriptEstimate;

            return totalSize;
        };

        const updateSize = () => {
            const size = calculateSize();
            setProjectSize(size);
        };

        updateSize();
        const interval = setInterval(updateSize, 2000);

        return () => clearInterval(interval);
    }, [vm]);

    const formatBytes = (bytes) => {
        if (bytes === 0) return '0 B';
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    const UPLOAD_LIMIT = 64 * 1024 * 1024;
    const percentage = Math.min((projectSize / UPLOAD_LIMIT) * 100, 100);
    const isNearLimit = percentage > 80 && percentage <= 100;
    const isOverLimit = projectSize > UPLOAD_LIMIT;

    let barClass = styles.projectSizeBarSafe;
    if (isOverLimit) {
        barClass = styles.projectSizeBarDanger;
    } else if (isNearLimit) {
        barClass = styles.projectSizeBarWarning;
    }

    return (
        <div className={styles.projectSizeContainer}>
            <div className={styles.projectSizeHeader}>
                <span>
                    <FormattedMessage
                        defaultMessage="Project Size"
                        description="Project size tracker header"
                        id="tw.settingsModal.projectSize"
                    />
                </span>
                <span className={styles.projectSizeValue}>
                    {formatBytes(projectSize)}
                </span>
            </div>

            <div className={styles.projectSizeBarContainer}>
                <div
                    className={classNames(styles.projectSizeBar, barClass)}
                    style={{ width: `${percentage}%` }}
                >
                    {percentage > 15 && `${percentage.toFixed(1)}%`}
                </div>
            </div>
                <FormattedMessage
                    defaultMessage="This is a tracker to make sure that your project stays under the upload limit for the PotentiaMod/Scratch web."
                    description="Project size tracker header"
                    id="tw.settingsModal.sizedisc"
                />
            <div className={styles.projectSizeInfo}>
                <FormattedMessage
                    defaultMessage="Upload limit for Scratch: {limit}"
                    description="Upload limit info"
                    id="tw.settingsModal.uploadLimit"
                    values={{
                        limit: formatBytes(UPLOAD_LIMIT)
                    }}
                />
            </div>

            {isOverLimit && (
                <div className={styles.projectSizeDangerText}>
                    <FormattedMessage
                        defaultMessage=" Your project is over the 64MB upload limit. You won't be able to upload this project to the PotentiaMod/Scratch website until you reduce its size by removing unused costumes or sounds."
                        description="Over limit warning"
                        id="tw.settingsModal.overLimitWarning"
                    />
                </div>
            )}

            {isNearLimit && !isOverLimit && (
                <div className={styles.projectSizeWarningText}>
                    <FormattedMessage
                        defaultMessage=" Your project is approaching the 64MB upload limit! Consider removing unused assets to stay under the limit."
                        description="Near limit warning"
                        id="tw.settingsModal.nearLimitWarning"
                    />
                </div>
            )}
        </div>
    );
};

ProjectSizeTracker.propTypes = {
    vm: PropTypes.instanceOf(VM).isRequired
};
///////////////////////////////////////////

const Section = ({title, children}) => {
    const [expanded, setExpanded] = useState(true);
    return (
        <div className={styles.section}>
            <div
                className={styles.sectionTitle}
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => setExpanded(e => !e)}
            >
                <span>{title}</span>
                <button className={styles.sectionDropdownCaret}>
                    <img
                        className={classNames(styles.collapseArrow, {
                            [styles.collapseArrowExpanded]: expanded
                        })}
                        src={dropdownCaret}
                        draggable={false}
                    />
                </button>
                <div className={styles.sectionDivider} />
            </div>
            {expanded && (
                <div className={styles.sectionBody}>
                    {children}
                </div>
            )}
        </div>
    );
};
Section.propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node
};

const CollapsibleSetting = ({label, help, children}) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Setting
            help={help}
            primary={
                <button
                    className={classNames(styles.label, styles.collapseButton)}
                    onClick={() => setExpanded(e => !e)}
                >
                    {label}
                    <img
                        className={classNames(styles.collapseArrow, {
                            [styles.collapseArrowExpanded]: expanded
                        })}
                        src={dropdownCaret}
                    />
                </button>
            }
            secondary={
                expanded && children
            }
        />
    );
};
CollapsibleSetting.propTypes = {
    label: PropTypes.node.isRequired,
    help: PropTypes.node,
    children: PropTypes.node
};


const EditorSettingsModal = props => {
    const [selectedSectionIndex, setSelectedSectionIndex] = useState(props.activeTab ?? 0);
    const [windchimeOptOut, setWindchimeOptOut] = useState(localStorage.getItem('tw:windchime_opt_out') === 'true');
    const [dirty, setDirty] = useState(false);

    const sections = [
        {
            title: messages.general,
            content: <Box>
                <Section
                    title={<FormattedMessage
                        id="tw.editorSettings.personal"
                        defaultMessage="Personal"
                    />}
                >
                    {props.usernameInvalid && <p className={classNames(styles.helpText, styles.mustChange)}>
                        <FormattedMessage
                        // eslint-disable-next-line max-len
                            defaultMessage="Sorry, the cloud variable server thinks your username may be unsafe. Please change it to something else or {resetIt}."
                            id="tw.editorSettings.username.mustChange"
                            values={{
                                resetIt: (
                                    <a
                                        className={styles.resetLink}
                                        // eslint-disable-next-line react/jsx-no-bind
                                        onClick={() => props.onSetUsername(isScratchDesktop() ? 'player' : generateRandomUsername())}
                                    >
                                        <FormattedMessage
                                            defaultMessage="reset it (recommended)"
                                            description="link to reset username"
                                            id="tw.editorSettings.username.mustChange.resetIt"
                                        />
                                    </a>
                                )
                            }}
                        />
                    </p>}
					
                    <Setting
                        primary={(
                            <div className={classNames(styles.label, styles.customStageSize)}>
                                <FormattedMessage
                                    defaultMessage="Username:"
                                    id="tw.editorSettings.username"
                                />
                                <BufferedInput
                                    value={props.username}
                                    // eslint-disable-next-line react/jsx-no-bind
                                    onSubmit={value => {
                                        props.onSetUsername(value);
                                    }}
                                    type="text"
                                    pattern="[a-zA-Z0-9_\-]*"
                                    maxLength="20"
                                    spellCheck="false"
                                />
                            </div>
                        )}
                        help={<>
                            <p>
                                <FormattedMessage
                                    id="tw.editorSettings.usernameHelp"
                                    defaultMessage="This value will be stored in your browser's storage. It may be logged when you interact with projects that contain cloud variables. It will also be used for Live Collaboration."
                                />
                            </p>
							
                            <p>
                                <FormattedMessage
                                    id="tw.editorSettings.usernameHelp2"
                                    defaultMessage="Values that do not correspond to a valid Scratch account will typically be rejected by the cloud variable server. We recommend leaving it as-is or changing it to your Scratch username."
                                />
                            </p>
                        </>}
                    />
					</Section>
					
                    <Box>
                        <BooleanSetting
                            value={!windchimeOptOut}
                            label={<FormattedMessage
                                id="tw.editorSettings.viewCounter"
                                defaultMessage="Allow counting my views"
                            />}
                            help={<>
                                <FormattedMessage
                                    id="tw.editorSettings.viewCounterHelp"
                                    defaultMessage="When you start a project that is loaded from Scratch, this may be logged so that a view counter can be incremented over time. Views are anonymous and can not be tied back to any user."
                                /> <a
                                    href="/privacy.html"
                                    target="_blank"
                                >
                                    <FormattedMessage
                                        id="tw.editorSettings.viewCounterPrivacyLink"
                                        defaultMessage="Privacy policy"
                                    />
                                </a>
                            </>}
                            // eslint-disable-next-line react/jsx-no-bind
                            onChange={e => {
                                localStorage.setItem('tw:windchime_opt_out', !e.target.checked);
                                setWindchimeOptOut(!e.target.checked);
                            }}
                        />
                    </Box>
					
					 <Box>
                       <CustomFPS
                                framerate={props.framerate}
                                onChange={props.onFramerateChange}
                                onCustomizeFramerate={props.onCustomizeFramerate}
                            />
                            <HighQualityPen
                                value={props.highQualityPen}
                                onChange={props.onHighQualityPenChange}
                            />
                    </Box>
					
            </Box>
        },
		{
            title: messages.limits,
            content: <Box>
                <InfiniteClones
                                    value={props.infiniteClones}
                                    onChange={props.onInfiniteClonesChange}
                                />
                                <RemoveFencing
                                    value={props.removeFencing}
                                    onChange={props.onRemoveFencingChange}
                                />
                                <RemoveMiscLimits
                                    value={props.removeLimits}
                                    onChange={props.onRemoveLimitsChange}
                                />
                                <WarpTimer
                                    value={props.warpTimer}
                                    onChange={props.onWarpTimerChange}
                                />
            </Box>
        },
		{
            title: messages.addons,
            content: <AddonSettingsComponent
                // eslint-disable-next-line react/jsx-no-bind
                onDirty={d => setDirty(d)}
                onExportSettings={onExportSettings}
            />,
            escaped: true
        },
		{
            title: messages.danger,
            content: <Box>
			{!props.isEmbedded && (
                                <CustomStageSize
                                    {...props}
                                />
                            )}
                <DisableCompiler
                value={props.disableCompiler}
                onChange={props.onDisableCompilerChange}
            />
            {!props.isEmbedded && (
                <StoreProjectOptions
                    {...props}
                />
            )}
            </Box>
        },
		{
            title: messages.projectsize,
            content: <Box>
			<ProjectSizeTracker vm={props.vm} />
            </Box>
        }

   ];

    return (
        <Modal
            className={styles.modalContent}
            onRequestClose={props.onClose}
            contentLabel={props.intl.formatMessage(messages.title)}
            id="editorSettingsModal"
        >
            <Box className={styles.body}>
                <div className={styles.topicList}>
                    <div className={styles.navigation}>
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className={classNames(styles.topicItem, {
                                    [styles.active]: selectedSectionIndex === index
                                })}
                                // eslint-disable-next-line react/jsx-no-bind
                                onClick={() => setSelectedSectionIndex(index)}
                            >
                                {section.icon &&
                                    <img
                                        src={section.icon}
                                        width="20"
                                        height="20"
                                    />
                                }
                                <FormattedMessage
                                    {...section.title}
                                />
                            </div>
                        ))}
                    </div>
                    {dirty && (
                        <button
                            className={classNames(styles.button, styles.dirtyButton)}
                            // eslint-disable-next-line react/jsx-handler-names
                            onClick={() => location.reload()}
                        >
                            <FormattedMessage
                                id="tw.editorSettings.dirty"
                                defaultMessage="Refresh to apply settings"
                            />
                        </button>
                    )}
                </div>
                {sections[selectedSectionIndex].escaped ?
                    <div
                        className={classNames(
                            styles.content,
                            styles.escaped
                        )}
                    >
                        {sections[selectedSectionIndex].content}
                    </div> :
                    <div className={styles.content}>
                        <h1><FormattedMessage {...sections[selectedSectionIndex].title} /></h1>
                        {sections[selectedSectionIndex].content}
                    </div>
                }
            </Box>
        </Modal>
    );
};

EditorSettingsModal.propTypes = {
    intl: intlShape,
    // eslint-disable-next-line react/no-unused-prop-types
    isRtl: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onSetUsername: PropTypes.func,
    preferences: PropTypes.object.isRequired,
    onSetPreference: PropTypes.func.isRequired,
    vm: PropTypes.object,
    username: PropTypes.string,
    usernameInvalid: PropTypes.bool,
    activeTab: PropTypes.number
};

EditorSettingsModal.defaultProps = {
};

const mapStateToProps = state => ({
    username: state.scratchGui.tw.username,
    usernameInvalid: state.scratchGui.tw.usernameInvalid,
    activeTab: state.scratchGui.modals.editorSettingsModalTab,
    preferences: state.scratchGui.preferences,
    vm: state.scratchGui.vm
});

const mapDispatchToProps = dispatch => ({
    onSetPreference: (key, value) => dispatch(setPreference(key, value)),
    onSetUsername: username => {
        dispatch(setUsername(username));
        dispatch(setUsernameInvalid(false));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(EditorSettingsModal));
