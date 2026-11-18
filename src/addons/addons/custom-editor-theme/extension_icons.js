// Adapted from ScratchAddons' editor-dark-mode addon for HyperMimic's addon system.
// Changes:
//  - updateAllBlocks now comes from ../custom-block-shape/update-all-blocks.js (HyperMimic signature: (vm, workspace, blockly))
//  - reloadToolbox recolors existing category icons in place (no full workspace reload,
//    which is how HyperMimic's old-style scratch-blocks toolbox works)
//  - addon.self.dir asset loading replaced with addon.self.getResource()

import { textColor } from "../../libraries/common/cs/text-color.esm.js";
import { updateAllBlocks } from "../custom-block-shape/update-all-blocks.js";

const dataUriRegex = new RegExp("^data:image/svg\\+xml;base64,([A-Za-z0-9+/=]*)$");

export default async function ({ addon, console }) {
  const Blockly = await addon.tab.traps.getBlockly();

  const recolorIcon = (iconUri, extensionId) => {
    if (addon.self.disabled || !iconUri) return iconUri;

    if (extensionId === "translate") {
      if (iconUri.startsWith("data:image/png")) return iconUri; // not in high contrast mode
      return textColor(addon.settings.get("categoryMenu"), iconUri, addon.self.getResource("/assets/translate_white.svg"));
    }

    if (!["music", "videoSensing", "faceSensing", "text2speech"].includes(extensionId)) return iconUri;
    const match = dataUriRegex.exec(iconUri);
    if (match) {
      const oldSvg = atob(match[1]);
      const newColor = textColor(addon.settings.get("categoryMenu"));
      const newHighContrastColor = textColor(addon.settings.get("categoryMenu"), "#000000", "#ffffff");
      const newSvg = oldSvg
        .replace(/#575e75|#4d4d4d/gi, "%text%")
        .replace(/#000000|#000|black|#231f20/gi, "%highContrastText%")
        .replace(/%text%/g, newColor)
        .replace(/%highContrastText%/g, newHighContrastColor);
      return `data:image/svg+xml;base64,${btoa(newSvg)}`;
    }
  };

  if (Blockly.registry) {
    // new Blockly
    const ScratchContinuousCategory = Blockly.registry.getClass(
      Blockly.registry.Type.TOOLBOX_ITEM,
      Blockly.ToolboxCategory.registrationName
    );
    const oldCategoryCreateIconDom = ScratchContinuousCategory.prototype.createIconDom_;
    ScratchContinuousCategory.prototype.createIconDom_ = function () {
      const oldIconUri = this.iconURI;
      this.iconURI = recolorIcon(oldIconUri, this.getId());
      const iconElement = oldCategoryCreateIconDom.call(this);
      this.iconURI = oldIconUri;
      return iconElement;
    };
  } else {
    const oldCategoryCreateDom = Blockly.Toolbox.Category.prototype.createDom;
    Blockly.Toolbox.Category.prototype.createDom = function () {
      this.iconURI_ = recolorIcon(this.iconURI_, this.id_);
      oldCategoryCreateDom.call(this);
    };
  }

  const reloadToolbox = () => {
    const workspace = addon.tab.traps.getWorkspace();
    const categoryMenu = workspace?.getToolbox?.()?.categoryMenu_;
    if (!categoryMenu || !categoryMenu.categories_) {
      // Fall back to a full block refresh if the toolbox isn't directly accessible
      updateAllBlocks(addon.tab.traps.vm, workspace, Blockly);
      return;
    }
    for (const category of categoryMenu.categories_) {
      // Keep the original icon URI so we can recolor repeatedly
      if (!category.saOriginalIconURI_) category.saOriginalIconURI_ = category.iconURI_;
      const recolored = recolorIcon(category.saOriginalIconURI_, category.id_);
      category.iconURI_ = recolored;
      if (recolored && category.bubble_) {
        category.bubble_.style.backgroundImage = "url(" + recolored + ")";
      }
    }
  };
  reloadToolbox();
  addon.settings.addEventListener("change", reloadToolbox);
  addon.self.addEventListener("disabled", reloadToolbox);
  addon.self.addEventListener("reenabled", reloadToolbox);
}
