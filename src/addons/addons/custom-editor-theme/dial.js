import { textColor, multiply, alphaBlend } from "../../libraries/common/cs/text-color.esm.js";

const iconSelector = "img[class*='dial_']";

// src/lib/tw-recolor/build.js emits `data:image/svg+xml;,<url-encoded>` -- NOT base64. Matching
// only the base64 form here silently skipped every dial icon (the face and the handle), which is
// why they kept their hard-coded #855cd6 instead of following the accent colour. Both forms are
// accepted, since older builds/other loaders do use base64.
const parseSvgDataUri = (uri) => {
  if (typeof uri !== "string" || !uri.startsWith("data:image/svg+xml")) return null;
  const comma = uri.indexOf(",");
  if (comma === -1) return null;
  const meta = uri.slice(5, comma);
  const data = uri.slice(comma + 1);
  try {
    return meta.indexOf("base64") !== -1 ? atob(data) : decodeURIComponent(data);
  } catch (e) {
    return null;
  }
};

export default async function ({ addon, console }) {
  const accent = () => addon.settings.get("accentColor");

  // What the GUI's tw-recolor loader already substituted for the original #855cd6 when it built
  // the src we are looking at: the GUI THEME's accent (e.g. `hsl(30, 100%, 65%)`), not ours. That
  // is the whole bug -- by the time this script sees an icon the purple is gone, so replacing
  // #855cd6 alone is a no-op and the face/handle keep the GUI theme's colour while the gauge
  // (painted in CSS) follows the addon accent. The dial came out two-coloured.
  const guiPrimary = () => (window.Recolor && window.Recolor.primary) || "";

  const recolorSvg = (svg, alreadyBaked) => {
    let out = svg;
    // Remap whatever accent the src currently carries -- the loader's, plus what we substituted on
    // a previous pass (so changing the setting more than once keeps working). Plain split/join:
    // these colours are things like `hsl(30, 100%, 65%)` and contain regex metacharacters.
    for (const color of [alreadyBaked, guiPrimary()]) {
      if (color && color.length > 3) out = out.split(color).join("%primary1%");
    }
    return out
      .replace(/#855cd6/gi, "%primary1%")
      .replace(/#a071fe/gi, "%primary2%")
      .replace(/#ccb3ff/gi, "%primary3%")
      .replace(/#ffffff|#fff|white/gi, "%white%")
      .replace(/#000000|#000|black/gi, "%black%")
      .replace(/%primary1%/g, accent())
      .replace(/%primary2%/g, alphaBlend(addon.settings.get("input"), multiply(accent(), { a: 0.7 })))
      .replace(/%primary3%/g, alphaBlend(addon.settings.get("input"), multiply(accent(), { a: 0.375 })))
      .replace(/%white%/g, textColor(accent()))
      .replace(/%black%/g, textColor(addon.settings.get("input"), "black"));
  };

  const updateIcon = (icon) => {
    let svg;
    if (icon.saOriginalSvg) svg = icon.saOriginalSvg;
    else {
      const decoded = parseSvgDataUri(icon.src);
      if (!decoded) return;
      svg = icon.saOriginalSvg = decoded;
    }
    if (addon.self.disabled) {
      icon.saBakedPrimary = "";
    } else {
      svg = recolorSvg(svg, icon.saBakedPrimary);
      icon.saBakedPrimary = accent();
    }
    try {
      icon.src = `data:image/svg+xml;base64,${btoa(svg)}`;
    } catch (e) {
      console.warn("custom-editor-theme: could not re-encode the dial icon", e);
    }
  };

  const updateAllIcons = () => {
    for (let icon of document.querySelectorAll(iconSelector)) updateIcon(icon);
  };

  addon.settings.addEventListener("change", updateAllIcons);
  addon.self.addEventListener("disabled", updateAllIcons);
  addon.self.addEventListener("reenabled", updateAllIcons);

  while (true) {
    const icon = await addon.tab.waitForElement(iconSelector, {
      markAsSeen: true,
      reduxCondition: (state) => !state.scratchGui.mode.isPlayerOnly,
    });
    updateIcon(icon);
  }
}
