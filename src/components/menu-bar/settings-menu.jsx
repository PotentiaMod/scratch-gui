import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';

import LanguageMenu from './language-menu.jsx';
import MenuBarMenu from './menu-bar-menu.jsx';
import {MenuItem, MenuSection} from '../menu/menu.jsx';
import MenuLabel from './tw-menu-label.jsx';
import TWAccentThemeMenu from './tw-theme-accent.jsx';
import TWGuiThemeMenu from './tw-theme-gui.jsx';
import TWWallpaperThemeMenu from './tw-theme-wallpaper.jsx';
import TWFontThemeMenu from './tw-theme-font.jsx';
import TWMenuBarAlignMenu from './tw-menubar-align.jsx';
import TWBlocksThemeMenu from './tw-theme-blocks.jsx';
import TWDesktopSettings from './tw-desktop-settings.jsx';
import TWGoIcon from './tw-go-icon.jsx';
import InstallPWA from './install-pwa.jsx';
import {APP_NAME, MOTTO} from '../../lib/brand.js';
import {APP_VERSION} from '../../lib/version.js';
import {closeSettingsMenu} from '../../reducers/menus.js';
import {openTipsLibrary, openExtensionManagerModal, openSettingsModal, openRestorePointModal, openCustomExtensionModal} from '../../reducers/modals';

import {Palette, Expand, FilePen, PencilRuler, TriangleAlert, ChevronDown, Info, Shuffle,
    FilePlusCorner, Wrench, Upload, RefreshCcw, ClockPlus, Package, FileInput,
    Save, ArchiveRestore, UserPen, Cloud, Settings, PackagePlus, Puzzle,
    Bookmark, GitBranch, FileCog, Bug, Database, Undo, Redo, Handshake} from 'lucide-react';

import menuBarStyles from './menu-bar.css';
import styles from './settings-menu.css';

import dropdownCaret from './dropdown-caret.svg';
import settingsIcon from './icon--settings.svg';

const SettingsMenu = ({
    canChangeLanguage,
    canChangeTheme,
    isRtl,
    onClickDesktopSettings,
    onOpenCustomSettings,
    onOpenAltCustomSettings,
	onClickSettings,
    onRequestClose,
    onRequestOpen,
    settingsMenuOpen,
	onSetDefaultProject,
    onRestoreDefaultProject
}) => (
    <MenuLabel
        open={settingsMenuOpen}
        onOpen={onRequestOpen}
        onClose={onRequestClose}
    >
        <Settings
                                    width={20}
                                    height={20}
                                    size={20}
                                />
        <span className={styles.dropdownLabel}>
            <FormattedMessage
                defaultMessage="Settings"
                description="Settings menu"
                id="gui.menuBar.settings"
            />
        </span>
        <ChevronDown size={8} />
        <MenuBarMenu
            className={menuBarStyles.menuBarMenu}
            open={settingsMenuOpen}
            place={isRtl ? 'left' : 'right'}
        >
            <MenuSection>
                {canChangeLanguage && <LanguageMenu onRequestCloseSettings={onRequestClose} />}
                {canChangeTheme && (
                    <React.Fragment>
                         <TWGuiThemeMenu/>
                         <TWBlocksThemeMenu onOpenCustomSettings={onOpenCustomSettings} />
                         <TWAccentThemeMenu />
                    </React.Fragment>
                )}
            </MenuSection>
				<MenuSection>
                <MenuItem>
                    <div
                        className={styles.option}
                        onClick={onClickSettings}
                    >
                        <Wrench
                          width={20}
                           height={20}
                           size={20}
                           />
                        <FormattedMessage
                            defaultMessage="Editor Settings"
                            description="Settings menu"
                            id="gui.menuBar.editorSettings"
                        />
                    </div>
                </MenuItem>
				<MenuItem>
                            <div
                                className={styles.option}
                                // eslint-disable-next-line react/jsx-no-bind
                                onClick={() => {
                                    window.location.href =
                                        '/settings';
                                    onRequestClose();
                                }}
                            >
                                <Expand
                                    width={20}
                                    height={20}
                                    size={20}
                                />
                                <span className={styles.submenuLabel}>
                                    <FormattedMessage
                                        defaultMessage="Expand"
                                        description="Menu item to open more settings"
                                        id="tw.moreSettings"
                                    />
                                </span>
                            </div>
                        </MenuItem>
            </MenuSection>
			
			<MenuSection>
			{onClickDesktopSettings && <TWDesktopSettings onClick={onClickDesktopSettings} />}
               <InstallPWA />
			   <div className={`${styles.option} ${styles.disabled}`}>
                                    <span className={styles.submenuLabel}>
                                        {APP_NAME} v{APP_VERSION}
                                    </span>
                                </div>
                </MenuSection>
        </MenuBarMenu>
    </MenuLabel>
);

SettingsMenu.propTypes = {
    canChangeLanguage: PropTypes.bool,
    canChangeTheme: PropTypes.bool,
    isRtl: PropTypes.bool,
    onClickDesktopSettings: PropTypes.func,
    onOpenCustomSettings: PropTypes.func,
	onClickSettings: PropTypes.func,
    onRequestClose: PropTypes.func,
    onRequestOpen: PropTypes.func,
    settingsMenuOpen: PropTypes.bool,
	onSetDefaultProject: PropTypes.func,
    onRestoreDefaultProject: PropTypes.func
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    onClickSettings: () => {
        dispatch(openSettingsModal());
        dispatch(closeSettingsMenu());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsMenu);
