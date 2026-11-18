export default async function ({ addon, console }) {
  // The GUI exposes window.twSetGuiTheme (set by TWThemeManagerHOC) so this addon
  // can control the editor's dark/light mode once the GUI theme toggle is disabled.

  // Native form controls (radio/checkbox) in modals (new variable / list / block)
  // follow the root `color-scheme`. TWThemeManagerHOC only re-applies GUI colors
  // when the redux theme actually *changes*; if its guard short-circuits (e.g. the
  // redux gui already equals the target), applyGuiColors() never runs and the root
  // color-scheme stays stale -> modals keep a dark control background even after
  // dark mode is turned off. Force the root color-scheme in sync with darkMode so
  // the native controls always match the toggle, regardless of redux timing.
  const syncRootColorScheme = (dark) => {
    const scheme = dark ? "dark" : "light";
    const root = document.documentElement;
    root.style.setProperty("--color-scheme", scheme);
    root.style.setProperty("color-scheme", scheme);
  };

  let tries = 0;
  const applyMode = () => {
    const dark = !!addon.settings.get("darkMode");
    syncRootColorScheme(dark);
    if (typeof window.twSetGuiTheme !== "function") {
      // The theme bridge may not be mounted yet (e.g. settings preview); retry briefly.
      if (tries++ < 100) setTimeout(applyMode, 100);
      return;
    }
    window.twSetGuiTheme(dark ? "dark" : "light");
  };
  applyMode();
  addon.settings.addEventListener("change", applyMode);
  addon.self.addEventListener("reenabled", applyMode);
}
