import { textColor, alphaBlend } from "../../libraries/common/cs/text-color.esm.js";

const XLINK_NS = "http://www.w3.org/1999/xlink";
const iconSelector = ".blocklyZoom > image";

// Unicode-safe base64 (btoa only handles Latin-1)
const toBase64 = (str) => btoa(unescape(encodeURIComponent(str)));
const fromBase64 = (b64) => decodeURIComponent(escape(atob(b64)));

const isDataUri = (s) => typeof s === "string" && s.startsWith("data:");

const decodeDataUri = (uri) => {
  const comma = uri.indexOf(",");
  const meta = uri.slice(5, comma); // after "data:"
  const data = uri.slice(comma + 1);
  if (meta.includes("base64")) return fromBase64(data);
  return decodeURIComponent(data);
};

export default async function ({ addon, console }) {
  const recolorSvg = (svg) => {
    const backgroundColor = alphaBlend(addon.settings.get("workspace"), addon.settings.get("palette"));
    const foregroundColor = textColor(backgroundColor);
    return svg
      .replace(/#ffffff|#fff|white/gi, "%background%")
      .replace(/#575e75|#231f20|#000000|#000|black/gi, "%text%")
      .replace(/%background%/g, backgroundColor)
      .replace(/%text%/g, foregroundColor);
  };

  const updateIcon = async (icon) => {
    let svg;
    if (icon.saOriginalSvg) {
      // already fetched the original once; reuse it
      svg = icon.saOriginalSvg;
    } else {
      const href = icon.getAttributeNS(XLINK_NS, "href");
      if (isDataUri(href)) {
        // Already a data URI but we lost the cached original (e.g. node reused).
        // Decode it so we still have a base to (re)color from. fetch() on a
        // data: URL throws in some browsers, so never fetch a data URI.
        svg = icon.saOriginalSvg = decodeDataUri(href);
      } else {
        try {
          // Resolve relative paths against the document base (fetch of a bare
          // relative path can 404 depending on the current page URL).
          const abs = new URL(href, location.href).href;
          svg = icon.saOriginalSvg = await (await fetch(abs)).text();
        } catch (err) {
          // Leave the icon as-is; it will be retried on the next trigger
          // (observer / settings change / theme toggle).
          console.warn("custom-editor-theme: failed to fetch zoom icon", href, err);
          return;
        }
      }
    }
    const out = addon.self.disabled ? svg : recolorSvg(svg);
    icon.setAttributeNS(XLINK_NS, "xlink:href", `data:image/svg+xml;base64,${toBase64(out)}`);
  };

  let scheduled = false;
  const updateAllIcons = () => {
    for (let icon of document.querySelectorAll(iconSelector)) updateIcon(icon);
  };
  const scheduleUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    Promise.resolve().then(() => {
      scheduled = false;
      updateAllIcons();
    });
  };

  // Blockly sets the static xlink:href on each zoom <image> at creation (and may
  // reset it on workspace re-inject). An attributes-only observer on xlink:href
  // catches both creation and any later reset, regardless of tab / theme timing.
  // (Creation already fires an attribute mutation, so we don't need childList,
  // which would otherwise scan every block-insertion mutation.)
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.target.matches && m.target.matches(iconSelector)) {
        scheduleUpdate();
        return;
      }
    }
  });
  observer.observe(document.documentElement, {
    subtree: true,
    attributes: true,
    attributeFilter: ["xlink:href"],
  });

  // Recolor existing icons when the editor theme / color mode / player toggles.
  addon.tab.redux.addEventListener("statechanged", (e) => {
    const type = e.detail?.action?.type;
    if (
      type === "scratch-gui/settings/SET_COLOR_MODE" ||
      type === "scratch-gui/settings/SET_THEME" ||
      type === "scratch-gui/mode/SET_PLAYER"
    ) {
      scheduleUpdate();
    }
  });

  addon.settings.addEventListener("change", updateAllIcons);
  addon.self.addEventListener("disabled", updateAllIcons);
  addon.self.addEventListener("reenabled", updateAllIcons);

  // Initial pass (icons may already exist).
  updateAllIcons();
}
