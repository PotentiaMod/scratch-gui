      /* ------------------------- Tabs ------------------------- */
	  
      function openSetting(evt, settingName) {
      var i, tabcontent, tablinks;
      
	  tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      document.getElementById(settingName).style.display = "block";
      evt.currentTarget.className += " active";
}
	  
	  
      /* ------------------------- Settings ------------------------- */

      const THEME_KEY = "tw:theme";
      const CUSTOM_PROJECT_KEY = "potentiamod:customDefaultProject";
      const GPT_ENABLED_KEY = "potentiamod:gptEnabled";
      const PIP_ENABLED_KEY = "potentiamod:pipEnabled";

      /* ------------------------- Block Style ------------------------- */
      const blockStyleSelect = document.getElementById("block-style-select");

      function getBlockStyle() {
        const theme = readTheme();

        if (!theme || typeof theme.blocks !== "string") {
          return "original";
        }

        if (theme.blocks === "high-contrast") return "high-contrast";
        if (theme.blocks === "dark") return "dark";

        return "original";
      }

      function setBlockStyle(style) {
        updateTheme(theme => {
          if (style === "original") {
            delete theme.blocks;
            return;
          }

          theme.blocks = style;
        });
      }

      function loadBlockStyle() {
        if (!blockStyleSelect) return;

        blockStyleSelect.value = getBlockStyle();
      }

      if (blockStyleSelect) {
        blockStyleSelect.addEventListener("change", () => {
          setBlockStyle(blockStyleSelect.value);
        });
      }

      /* ------------------------- AI ------------------------- */
      const gptEnabledToggle = document.getElementById("gpt-enabled-toggle");

      function getGptEnabled() {
        return localStorage.getItem(GPT_ENABLED_KEY) !== "false";
      }

      function loadGptEnabled() {
        if (!gptEnabledToggle) return;

        gptEnabledToggle.checked = getGptEnabled();
        applySettingsAccent();
      }

      function setGptEnabled(enabled) {
        localStorage.setItem(GPT_ENABLED_KEY, enabled ? "true" : "false");
        loadGptEnabled();
      }

      if (gptEnabledToggle) {
        gptEnabledToggle.addEventListener("change", () => {
          setGptEnabled(gptEnabledToggle.checked);
        });
      }

      /* ------------------------- Picture in Picture ------------------------- */
      const pipEnabledToggle = document.getElementById("pip-enabled-toggle");

      function getPipEnabled() {
        // Enabled by default. Only the literal string "false" disables PiP.
        return localStorage.getItem(PIP_ENABLED_KEY) !== "false";
      }

      function loadPipEnabled() {
        if (!pipEnabledToggle) return;

        pipEnabledToggle.checked = getPipEnabled();
        applySettingsAccent();
      }

      function setPipEnabled(enabled) {
        localStorage.setItem(
          PIP_ENABLED_KEY,
          enabled ? "true" : "false"
        );

        loadPipEnabled();
      }

      if (pipEnabledToggle) {
        pipEnabledToggle.addEventListener("change", () => {
          setPipEnabled(pipEnabledToggle.checked);
        });
      }

      /* ------------------------- Custom Default Project ------------------------- */
      const customProjectToggle = document.getElementById("custom-project-toggle");
      const customProjectOptions = document.getElementById("custom-project-options");
      const customProjectId = document.getElementById("custom-project-id");

      function updateCustomProjectVisibility() {
        if (!customProjectOptions || !customProjectToggle) return;

        customProjectOptions.classList.toggle(
          "collapsed",
          !customProjectToggle.checked
        );
      }

      function loadCustomProject() {
        if (!customProjectToggle || !customProjectId) return;

        const saved = localStorage.getItem(CUSTOM_PROJECT_KEY);

        if (saved) {
          customProjectToggle.checked = true;
          customProjectId.value = saved;
        } else {
          customProjectToggle.checked = false;
          customProjectId.value = "";
        }

        updateCustomProjectVisibility();
      }

      if (customProjectToggle) {
        customProjectToggle.addEventListener("change", () => {
          if (customProjectToggle.checked) {
            if (customProjectId.value.trim()) {
              localStorage.setItem(
                CUSTOM_PROJECT_KEY,
                customProjectId.value
              );
            }
          } else {
            localStorage.removeItem(CUSTOM_PROJECT_KEY);
          }

          updateCustomProjectVisibility();
          applySettingsAccent();
        });
      }

      if (customProjectId) {
        customProjectId.addEventListener("input", () => {
          const numbersOnly = customProjectId.value.replace(/\D/g, "");

          customProjectId.value = numbersOnly;

          if (customProjectToggle.checked) {
            if (numbersOnly) {
              localStorage.setItem(CUSTOM_PROJECT_KEY, numbersOnly);
            } else {
              localStorage.removeItem(CUSTOM_PROJECT_KEY);
            }
          }
        });
      }

      document.querySelectorAll(".preset-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.id;

          if (customProjectId) {
            customProjectId.value = id;
          }

          if (customProjectToggle) {
            customProjectToggle.checked = true;
          }

          localStorage.setItem(CUSTOM_PROJECT_KEY, id);

          updateCustomProjectVisibility();
          applySettingsAccent();
        });
      });

      /* ------------------------- Navigation ------------------------- */
      const navButtons = document.querySelectorAll(".nav-button[data-page]");
      const pages = document.querySelectorAll(".page");

      function showPage(pageName, updateHash = true) {
        const validPages = ["general", "labs", "about"];

        if (!validPages.includes(pageName)) {
          pageName = "general";
        }

        navButtons.forEach(button => {
          button.classList.toggle(
            "active",
            button.dataset.page === pageName
          );
        });

        pages.forEach(page => {
          page.style.display =
            page.id === "page-" + pageName ? "" : "none";
        });

        if (updateHash) {
          history.replaceState(null, "", "#" + pageName);
        }

        applySettingsAccent();
      }

      function loadPageFromHash() {
        const hash = window.location.hash.slice(1).toLowerCase();

        if (["general", "labs", "about"].includes(hash)) {
          showPage(hash, false);
        } else {
          history.replaceState(null, "", "#general");
          showPage("general", false);
        }
      }

      navButtons.forEach(button => {
        button.addEventListener("click", () => {
          showPage(button.dataset.page);
        });
      });

      window.addEventListener("hashchange", loadPageFromHash);

      /* ------------------------- Storage Sync ------------------------- */
      window.addEventListener("storage", event => {
        if (event.key === THEME_KEY) {
          loadBlockStyle();
        }

        if (event.key === CUSTOM_PROJECT_KEY) {
          loadCustomProject();
        }

        if (event.key === GPT_ENABLED_KEY) {
          loadGptEnabled();
        }

        if (event.key === PIP_ENABLED_KEY || event.key === null) {
          loadPipEnabled();
        }
      });

      /* ------------------------- Navigation Position ------------------------- */
      const NAV_POSITION_KEY = "potentiamod:navPos";
      const navPositionSelect = document.getElementById("nav-position-select");

      function getNavPosition() {
        try {
          const saved = localStorage.getItem(NAV_POSITION_KEY);

          return ["Left", "Middle", "Right"].includes(saved)
            ? saved
            : "Middle";
        } catch {
          return "Middle";
        }
      }

      function loadNavPosition() {
        if (!navPositionSelect) return;

        navPositionSelect.value = getNavPosition();
      }

      function setNavPosition(position) {
        if (!["Left", "Middle", "Right"].includes(position)) {
          position = "Left";
        }

        try {
          localStorage.setItem(NAV_POSITION_KEY, position);
        } catch (error) {
          console.error("Could not save navigation position:", error);
        }

        loadNavPosition();
      }

      if (navPositionSelect) {
        navPositionSelect.addEventListener("change", () => {
          setNavPosition(navPositionSelect.value);
        });
      }

      /* ------------------------- Start ------------------------- */
      loadBlockStyle();
      loadCustomProject();
      loadGptEnabled();
      loadPipEnabled();
      loadNavPosition();
      loadPageFromHash();