// Plugin preview/operation page (a standalone playground page)
// The operation panel on the left directly reads from and writes to the `SettingsStore` singleton (sharing the same store instance used by the actual editor),
// while the preview section on the right reuses the shared component `src/addons/preview/preview.jsx` (the same component is also embedded within the settings page).
// Stolen from HyperMimic.

import React from 'react';
import render from './app-target.js';
import SettingsStore from '../addons/settings-store-singleton.js';
import addons from '../addons/generated/addon-manifests.js';
import AddonPreview from '../addons/preview/preview.jsx';
import {detectTheme} from '../lib/themes/themePersistance.js';
import {applyGuiColors} from '../lib/themes/guiHelpers.js';
import './addon-preview.css';

// Inject theme-color CSS variables (such as `--looks-secondary`) so that preview highlights align with the accent theme color.
applyGuiColors(detectTheme());

const ADDON_TABS = [
    {id: 'custom-editor-theme', label: 'Custom editor theme'},
    {id: 'custom-block-text', label: 'Custom block text'},
    {id: 'custom-block-shape', label: 'Custom block shape'}
];

const SETTING_LABELS = {
    // custom-editor-theme
    page: 'Page Background',
    accentColor: 'Accent Color',
    darkMode: 'Dark Mode',
    menuBar: 'Menu Bar',
    popup: 'Pop-up Background',
    activeTab: 'Active Tab Background',
    tab: 'Inactive Tab Background',
    selector: 'Character Area Background',
    selector2: 'Background for Costumes/Sounds List',
    selectorSelection: 'Background of selected item',
    accent: 'Accent Background',
    input: 'Input Background',
    workspace: 'Workspace',
    categoryMenu: 'Category Menu',
    palette: 'Palette',
    fullscreen: 'Fullscreen Background',
    stageHeader: 'Stage Header',
    border: 'Border',
    affectPaper: 'Costume Editor Background',
    affectStage: 'Stage Editor Background',
    // custom-block-text
    size: 'Size (%)',
    bold: 'Bold',
    shadow: 'Shadow',
    // custom-block-shape
    paddingSize: 'Padding (50-200%)',
    cornerSize: 'Corner (0-300%)',
    notchSize: 'Notch (0-150%)'
};

const defaultOf = (addonId, id) => {
    const def = addons[addonId].settings.find(s => s.id === id);
    return def ? def.default : '';
};

class PreviewApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeAddon: 'custom-editor-theme',
            settings: {},
            enabled: false,
            hoveredSettingId: null,
            activeTab: 'code',
            fullScreen: false
        };
        this.onStoreChange = this.onStoreChange.bind(this);
    }

    refresh() {
        const addonId = this.state.activeAddon;
        const settings = {};
        for (const setting of addons[addonId].settings) {
            settings[setting.id] = SettingsStore.getAddonSetting(addonId, setting.id);
        }
        this.setState({
            settings,
            enabled: SettingsStore.getAddonEnabled(addonId)
        });
    }

    onStoreChange(e) {
        if (e.detail && e.detail.addonId && e.detail.addonId !== this.state.activeAddon) return;
        this.refresh();
    }

    componentDidMount() {
        this.refresh();
        SettingsStore.addEventListener('setting-changed', this.onStoreChange);
        SettingsStore.addEventListener('addon-changed', this.onStoreChange);
    }

    componentWillUnmount() {
        SettingsStore.removeEventListener('setting-changed', this.onStoreChange);
        SettingsStore.removeEventListener('addon-changed', this.onStoreChange);
    }

    switchAddon(addonId) {
        this.setState({activeAddon: addonId, hoveredSettingId: null, activeTab: 'code', fullScreen: false}, () => this.refresh());
    }

    setSetting(id, value) {
        SettingsStore.setAddonSetting(this.state.activeAddon, id, value);
        this.refresh();
    }

    handleColorChange(id, e) {
        const picked = e.target.value; // #rrggbb
        // Preserve the configured alpha channel (e.g., semi-transparent borders) to prevent the loss of transparency after a color change.
        const current = this.state.settings[id] !== undefined ? this.state.settings[id] : defaultOf(this.state.activeAddon, id);
        const alpha = current && current.length === 9 ? current.slice(7) : '';
        this.setSetting(id, picked + alpha);
    }

    applyPreset(presetId) {
        SettingsStore.applyAddonPreset(this.state.activeAddon, presetId);
        this.refresh();
    }

    toggleEnabled() {
        SettingsStore.setAddonEnabled(this.state.activeAddon, !this.state.enabled);
        this.refresh();
    }

    render() {
        const {activeAddon, settings, enabled, hoveredSettingId, activeTab, fullScreen} = this.state;
        const manifest = addons[activeAddon];

        const renderSetting = setting => {
            const value = settings[setting.id] !== undefined ? settings[setting.id] : defaultOf(activeAddon, setting.id);
            return (
                <div
                    key={setting.id}
                    className="apv-setting-row"
                    onMouseEnter={() => this.setState({hoveredSettingId: setting.id})}
                    onMouseLeave={() => this.setState({hoveredSettingId: null})}
                >
                    <span className="apv-setting-name">
                        {SETTING_LABELS[setting.id] || setting.name}
                    </span>
                    {setting.type === 'color' ? (
                        <input
                            type="color"
                            className="apv-color"
                            value={String(value).slice(0, 7)}
                            onChange={e => this.handleColorChange(setting.id, e)}
                        />
                    ) : setting.type === 'boolean' ? (
                        <input
                            type="checkbox"
                            checked={Boolean(value)}
                            onChange={e => this.setSetting(setting.id, e.target.checked)}
                        />
                    ) : setting.type === 'integer' || setting.type === 'positive_integer' ? (
                        <span className="apv-integer">
                            <input
                                type="range"
                                min={setting.min}
                                max={setting.max}
                                step="1"
                                value={Number(value)}
                                onChange={e => this.setSetting(setting.id, Number(e.target.value))}
                            />
                            <span className="apv-integer-value">{value}</span>
                        </span>
                    ) : null}
                </div>
            );
        };

        return (
            <div className="apv-app">
                <header className="apv-header">
                    <div className="apv-title-wrap">
                        <span className="apv-title">{manifest.name}</span>
                        <span className="apv-subtitle">{activeAddon} · Preview and Operations</span>
                    </div>
                    <label className="apv-enable">
                        <input
                            type="checkbox"
                            checked={enabled}
                            onChange={this.toggleEnabled.bind(this)}
                        />
                        <span>Enable addon</span>
                    </label>
                </header>
                <nav className="apv-addon-tabs">
                    {ADDON_TABS.map(tab => (
                        <button
                            key={tab.id}
                            className={`apv-addon-tab${activeAddon === tab.id ? ' apv-addon-tab-active' : ''}`}
                            onClick={() => this.switchAddon(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
                <div className="apv-body-row">
                    <aside className="apv-panel">
                        <section className="apv-section">
                            <h3 className="apv-section-title">Preset</h3>
                            {(manifest.presets || []).map(preset => (
                                <button
                                    key={preset.id}
                                    className="apv-preset-btn"
                                    title={preset.description}
                                    onClick={() => this.applyPreset(preset.id)}
                                >
                                    {preset.name}
                                </button>
                            ))}
                        </section>
                        <section className="apv-section">
                            <h3 className="apv-section-title">Setup</h3>
                            {(manifest.settings || []).map(renderSetting)}
                        </section>
                    </aside>
                    <main className="apv-preview-wrap">
                        <AddonPreview
                            addonId={activeAddon}
                            settings={settings}
                            hoveredSettingId={hoveredSettingId}
                            previewProps={{
                                onAreaHover: id => this.setState({hoveredSettingId: id})
                            }}
                        />
                        <p className="apv-hint">
                            Tip: Hovering the mouse over a setting item on the left will highlight the corresponding area in the preview; clicking on a preset or changing a setting will take effect immediately (it shares the same storage as the actual editor).
                        </p>
                    </main>
                </div>
            </div>
        );
    }
}

render(<PreviewApp />);