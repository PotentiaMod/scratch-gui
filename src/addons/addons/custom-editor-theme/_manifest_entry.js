const manifest = {
  "editorOnly": true,
  "noTranslations": true,
  "name": "Custom editor theme",
  "description": "Customize colors used by the project editor. Multiple dark themes by different authors available. If you don't need dark mode but want to change the default colors you can select the \"Scratch's default colors\" preset and tweak it. There may be a slider next to the color input, which is opacity, with 100% indicating opacity and 0% indicating transparency.",
  "credits": [
    {
      "name": "Maximouse",
      "link": "https://scratch.mit.edu/users/Maximouse/"
    },
    {
      "name": "infinitytec",
      "link": "https://github.com/infinitytec"
    },
    {
      "name": "_nix",
      "link": "https://github.com/towerofnix"
    },
    {
      "name": "GarboMuffin",
      "link": "https://github.com/GarboMuffin"
    },
    {
      "name": "Clyain",
      "link": "https://github.com/Clyain"
    }
  ],
  "info": [
    {
      "type": "notice",
      "text": "Hovering the mouse over the preview image or the settings options allows you to view their corresponding options or previews interchangeably. The 5th button of menu bar (Advanced), the three tabs on the preview (Code, Costume, Sound), the stage full-screen button, the \"Add Extension\" button and some elements of the extension library are interactive.",
      "id": "tips"
    }
  ],
  "tags": [
    "theme","new","recommended"
  ],
  "customCssVariables": [
    {
      "name": "page-text",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "page"
        }
      }
    },
    {
      "name": "page-transparentText",
      "value": {
        "type": "textColor",
        "black": "rgba(87, 94, 117, 0.75)",
        "white": "rgba(255, 255, 255, 0.75)",
        "source": {
          "type": "settingValue",
          "settingId": "page"
        }
      }
    },
    {
      "name": "page-purpleText",
      "value": {
        "type": "textColor",
        "black": "#855cd6",
        "white": "#ccb3ff",
        "source": {
          "type": "settingValue",
          "settingId": "page"
        }
      }
    },
    {
      "name": "page-purpleIconFilter",
      "value": {
        "type": "recolorFilter",
        "source": {
          "type": "textColor",
          "black": "#855cd6",
          "white": "#ccb3ff",
          "source": {
            "type": "settingValue",
            "settingId": "page"
          }
        }
      }
    },
    {
      "name": "page-lightBlueText",
      "value": {
        "type": "textColor",
        "black": "#2e8eb8",
        "white": "#85c4e0",
        "source": {
          "type": "settingValue",
          "settingId": "page"
        }
      }
    },
    {
      "name": "page-pinkText",
      "value": {
        "type": "textColor",
        "black": "#ff3355",
        "white": "#ff99aa",
        "source": {
          "type": "settingValue",
          "settingId": "page"
        }
      }
    },
    {
      "name": "page-pinkIconFilter",
      "value": {
        "type": "recolorFilter",
        "source": {
          "type": "textColor",
          "black": "#ff3355",
          "white": "#ff99aa",
          "source": {
            "type": "settingValue",
            "settingId": "page"
          }
        }
      }
    },
    {
      "name": "page-tabHoverFilter",
      "value": {
        "type": "textColor",
        "black": "grayscale(100%)",
        "white": "brightness(0) invert(1) opacity(0.75)",
        "source": {
          "type": "settingValue",
          "settingId": "page"
        }
      }
    },
    {
      "name": "page-colorScheme",
      "value": {
        "type": "textColor",
        "black": "light",
        "white": "dark",
        "source": {
          "type": "settingValue",
          "settingId": "page"
        }
      }
    },
    {
      "name": "page-iconFilter",
      "value": {
        "type": "textColor",
        "black": "none",
        "white": "brightness(0) invert(1)",
        "source": {
          "type": "settingValue",
          "settingId": "page"
        }
      }
    },
    {
      "name": "accent-bgIconFilter",
      "value": {
        "type": "textColor",
        "black": "grayscale(1) brightness(0.7)",
        "white": "brightness(0) invert(1)",
        "source": {
          "type": "settingValue",
          "settingId": "accent"
        }
      }
    },
    {
      "name": "page-compactScrollbar",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "page"
        },
        "black": {
          "type": "multiply",
          "source": {
            "type": "settingValue",
            "settingId": "page"
          },
          "r": 0.83,
          "g": 0.83,
          "b": 0.83
        },
        "white": {
          "type": "brighten",
          "source": {
            "type": "settingValue",
            "settingId": "page"
          },
          "r": 0.87,
          "g": 0.87,
          "b": 0.87
        },
        "threshold": 110
      }
    },
    {
      "name": "page-loader",
      "value": {
        "type": "textColor",
        "black": "#4d97ff",
        "white": {
          "type": "settingValue",
          "settingId": "page"
        },
        "source": {
          "type": "settingValue",
          "settingId": "page"
        }
      }
    },
    {
      "name": "primary",
      "value": {
        "type": "settingValue",
        "settingId": "accentColor"
      }
    },
    {
      "name": "highlightText",
      "value": {
        "type": "settingValue",
        "settingId": "accentColor"
      }
    },
    {
      "name": "primary-text",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        }
      }
    },
    {
      "name": "primary-filter",
      "value": {
        "type": "textColor",
        "black": "brightness(0.4)",
        "white": "none",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        }
      }
    },
    {
      "name": "primary-filter2",
      "value": {
        "type": "textColor",
        "black": "none",
        "white": "brightness(0) invert(1)",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        }
      }
    },
    {
      "name": "primary-filter3",
      "value": {
        "type": "textColor",
        "black": "brightness(0) invert(0.4)",
        "white": "brightness(0) invert(1)",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        }
      }
    },
    {
      "name": "primary-bgIconFilter",
      "value": {
        "type": "textColor",
        "black": "grayscale(1) brightness(0.7)",
        "white": "brightness(0) invert(1)",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        }
      }
    },
    {
      "name": "primary-iconFilter",
      "value": {
        "type": "recolorFilter",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        }
      }
    },
    {
      "name": "primary-transparent35",
      "value": {
        "type": "multiply",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        },
        "a": 0.35
      }
    },
    {
      "name": "primary-transparent15",
      "value": {
        "type": "multiply",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        },
        "a": 0.15
      }
    },
    {
      "name": "primary-variant",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        },
        "black": {
          "type": "multiply",
          "source": {
            "type": "settingValue",
            "settingId": "accentColor"
          },
          "r": 0.85,
          "g": 0.85,
          "b": 0.85
        },
        "white": {
          "type": "brighten",
          "source": {
            "type": "settingValue",
            "settingId": "accentColor"
          },
          "r": 0.75,
          "g": 0.75,
          "b": 0.75
        },
        "threshold": 60
      }
    },
    {
      "name": "highlightText-iconFilter",
      "value": {
        "type": "recolorFilter",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        }
      }
    },
    {
      "name": "menuBar-text",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "menuBar"
        }
      }
    },
    {
      "name": "menuBar-transparentText",
      "value": {
        "type": "textColor",
        "black": "rgba(87, 94, 117, 0.25)",
        "white": "rgba(255, 255, 255, 0.25)",
        "source": {
          "type": "settingValue",
          "settingId": "menuBar"
        }
      }
    },
    {
      "name": "menuBar-dimText",
      "value": {
        "type": "textColor",
        "black": "rgba(87, 94, 117, 0.75)",
        "white": "rgba(255, 255, 255, 0.75)",
        "source": {
          "type": "settingValue",
          "settingId": "menuBar"
        }
      }
    },
    {
      "name": "menuBar-filter",
      "value": {
        "type": "textColor",
        "black": "brightness(0.4)",
        "white": "none",
        "source": {
          "type": "settingValue",
          "settingId": "menuBar"
        }
      }
    },
    {
      "name": "menuBar-border",
      "value": {
        "type": "textColor",
        "black": "rgba(0, 0, 0, 0.15)",
        "white": "rgba(255, 255, 255, 0.15)",
        "threshold": 60,
        "source": {
          "type": "settingValue",
          "settingId": "menuBar"
        }
      }
    },
    {
      "name": "popupHeader-text",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "popupHeader"
        }
      }
    },
    {
      "name": "popupHeader-filter",
      "value": {
        "type": "textColor",
        "black": "brightness(0.4)",
        "white": "none",
        "source": {
          "type": "settingValue",
          "settingId": "popupHeader"
        }
      }
    },
    {
      "name": "popupHeader-border",
      "value": {
        "type": "textColor",
        "black": "rgba(0, 0, 0, 0.15)",
        "white": "rgba(255, 255, 255, 0.15)",
        "threshold": 60,
        "source": {
          "type": "settingValue",
          "settingId": "popupHeader"
        }
      }
    },
    {
      "name": "tab-text",
      "value": {
        "type": "textColor",
        "black": "rgba(87, 94, 117, 0.75)",
        "white": "rgba(255, 255, 255, 0.75)",
        "source": {
          "type": "settingValue",
          "settingId": "tab"
        }
      }
    },
    {
      "name": "tab-filter",
      "value": {
        "type": "textColor",
        "black": "grayscale(100%)",
        "white": "brightness(0) invert(1) opacity(0.75)",
        "source": {
          "type": "settingValue",
          "settingId": "tab"
        }
      }
    },
    {
      "name": "selector-text",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "selector"
        }
      }
    },
    {
      "name": "selector-colorScheme",
      "value": {
        "type": "textColor",
        "black": "light",
        "white": "dark",
        "source": {
          "type": "settingValue",
          "settingId": "selector"
        },
        "threshold": 128
      }
    },
    {
      "name": "selector-compactScrollbar",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "selector"
        },
        "black": {
          "type": "multiply",
          "source": {
            "type": "settingValue",
            "settingId": "selector"
          },
          "r": 0.83,
          "g": 0.83,
          "b": 0.83
        },
        "white": {
          "type": "brighten",
          "source": {
            "type": "settingValue",
            "settingId": "selector"
          },
          "r": 0.87,
          "g": 0.87,
          "b": 0.87
        },
        "threshold": 110
      }
    },
    {
      "name": "selector2-text",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "selector2"
        }
      }
    },
    {
      "name": "selector2-filter",
      "value": {
        "type": "textColor",
        "black": "none",
        "white": "brightness(0) invert(1)",
        "source": {
          "type": "settingValue",
          "settingId": "selector2"
        }
      }
    },
    {
      "name": "selector2-colorScheme",
      "value": {
        "type": "textColor",
        "black": "light",
        "white": "dark",
        "source": {
          "type": "settingValue",
          "settingId": "selector2"
        },
        "threshold": 128
      }
    },
    {
      "name": "selector2-compactScrollbar",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "selector2"
        },
        "black": {
          "type": "multiply",
          "source": {
            "type": "settingValue",
            "settingId": "selector2"
          },
          "r": 0.83,
          "g": 0.83,
          "b": 0.83
        },
        "white": {
          "type": "brighten",
          "source": {
            "type": "settingValue",
            "settingId": "selector2"
          },
          "r": 0.87,
          "g": 0.87,
          "b": 0.87
        },
        "threshold": 110
      }
    },
    {
      "name": "selectorSelection-text",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "selectorSelection"
        }
      }
    },
    {
      "name": "selectorSelection-filter",
      "value": {
        "type": "textColor",
        "black": "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.15)",
        "white": "brightness(0) invert(1) drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.15)",
        "source": {
          "type": "settingValue",
          "settingId": "selectorSelection"
        }
      }
    },
    {
      "name": "accent-text",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "accent"
        }
      }
    },
    {
      "name": "accent-openFontDropdownText",
      "value": {
        "type": "textColor",
        "source": {
          "type": "alphaBlend",
          "opaqueSource": {
            "type": "settingValue",
            "settingId": "accent"
          },
          "transparentSource": {
            "type": "settingValue",
            "settingId": "border"
          }
        }
      }
    },
    {
      "name": "accent-formControlText",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "accent"
        },
        "threshold": 128
      }
    },
    {
      "name": "accent-filter",
      "value": {
        "type": "textColor",
        "black": "none",
        "white": "brightness(0) invert(1)",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        }
      }
    },
    {
      "name": "accent-desaturateFilter",
      "value": {
        "type": "textColor",
        "black": "grayscale(100%) opacity(0.5)",
        "white": "brightness(0) invert(1) opacity(0.3)",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        }
      }
    },
    {
      "name": "accent-invertedFilter",
      "value": {
        "type": "textColor",
        "black": "brightness(0.4)",
        "white": "none",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        }
      }
    },
    {
      "name": "accent-divider",
      "value": {
        "type": "textColor",
        "black": "rgba(0, 0, 0, 0.15)",
        "white": "rgba(255, 255, 255, 0.15)",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        }
      }
    },
    {
      "name": "accent-colorScheme",
      "value": {
        "type": "textColor",
        "black": "light",
        "white": "dark",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        },
        "threshold": 128
      }
    },
    {
      "name": "accent-gradient",
      "value": {
        "type": "multiply",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        },
        "r": 0.91,
        "g": 0.93,
        "b": 0.95
      }
    },
    {
      "name": "accent-gradient-opacity0",
      "value": {
        "type": "multiply",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        },
        "r": 0.91,
        "g": 0.93,
        "b": 0.95,
        "a": 0
      }
    },
    {
      "name": "accent-transparent75",
      "value": {
        "type": "multiply",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        },
        "a": 0.75
      }
    },
    {
      "name": "accent-paintEditorBackground",
      "value": {
        "type": "alphaBlend",
        "opaqueSource": {
          "type": "settingValue",
          "settingId": "accentColor"
        },
        "transparentSource": {
          "type": "multiply",
          "source": {
            "type": "textColor",
            "black": {
              "type": "makeHsv",
              "h": {
                "type": "settingValue",
                "settingId": "page"
              },
              "s": 1,
              "v": 0.67
            },
            "white": {
              "type": "makeHsv",
              "h": {
                "type": "settingValue",
                "settingId": "page"
              },
              "s": 0.5,
              "v": 1
            },
            "threshold": 112,
            "source": {
              "type": "settingValue",
              "settingId": "accentColor"
            }
          },
          "a": 0.15
        }
      }
    },
    {
      "name": "accent-paintEditorScrollbar",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        },
        "black": {
          "type": "multiply",
          "source": {
            "type": "settingValue",
            "settingId": "accentColor"
          },
          "r": 0.75,
          "g": 0.75,
          "b": 0.75,
          "a": 0.8
        },
        "white": {
          "type": "brighten",
          "source": {
            "type": "settingValue",
            "settingId": "accentColor"
          },
          "r": 0.8,
          "g": 0.8,
          "b": 0.8,
          "a": 0.8
        },
        "threshold": 110
      }
    },
    {
      "name": "accent-info",
      "value": {
        "type": "alphaBlend",
        "opaqueSource": {
          "type": "settingValue",
          "settingId": "accentColor"
        },
        "transparentSource": "#4d97ff26"
      }
    },
    {
      "name": "accent-success",
      "value": {
        "type": "alphaBlend",
        "opaqueSource": {
          "type": "settingValue",
          "settingId": "accentColor"
        },
        "transparentSource": "#08bd8c33"
      }
    },
    {
      "name": "accent-error",
      "value": {
        "type": "alphaBlend",
        "opaqueSource": {
          "type": "settingValue",
          "settingId": "accentColor"
        },
        "transparentSource": "#ff8c1a23"
      }
    },
    {
      "name": "accent-dropHighlight",
      "value": {
        "type": "alphaBlend",
        "opaqueSource": {
          "type": "settingValue",
          "settingId": "accentColor"
        },
        "transparentSource": "#4d97ffa8"
      }
    },
    {
      "name": "input-text",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "input"
        }
      }
    },
    {
      "name": "input-transparentText",
      "value": {
        "type": "textColor",
        "black": "rgba(87, 94, 117, 0.6)",
        "white": "rgba(255, 255, 255, 0.4)",
        "source": {
          "type": "settingValue",
          "settingId": "input"
        }
      }
    },
    {
      "name": "input-filter",
      "value": {
        "type": "textColor",
        "black": "none",
        "white": "brightness(0) invert(1)",
        "source": {
          "type": "settingValue",
          "settingId": "input"
        }
      }
    },
    {
      "name": "input-foregroundShadow",
      "value": {
        "type": "textColor",
        "black": "rgba(0, 0, 0, 0.15)",
        "white": "rgba(255, 255, 255, 0.15)",
        "threshold": 60,
        "source": {
          "type": "settingValue",
          "settingId": "input"
        }
      }
    },
    {
      "name": "input-divider",
      "value": {
        "type": "textColor",
        "black": "rgba(0, 0, 0, 0.15)",
        "white": "rgba(255, 255, 255, 0.15)",
        "source": {
          "type": "settingValue",
          "settingId": "accentColor"
        }
      }
    },
    {
      "name": "input-colorScheme",
      "value": {
        "type": "textColor",
        "black": "light",
        "white": "dark",
        "source": {
          "type": "settingValue",
          "settingId": "input"
        },
        "threshold": 128
      }
    },
    {
      "name": "input-transparent90",
      "value": {
        "type": "multiply",
        "source": {
          "type": "settingValue",
          "settingId": "input"
        },
        "a": 0.9
      }
    },
    {
      "name": "input-transparent75",
      "value": {
        "type": "multiply",
        "source": {
          "type": "settingValue",
          "settingId": "input"
        },
        "a": 0.75
      }
    },
    {
      "name": "input-transparent50",
      "value": {
        "type": "multiply",
        "source": {
          "type": "settingValue",
          "settingId": "input"
        },
        "a": 0.5
      }
    },
    {
      "name": "input-transparent25",
      "value": {
        "type": "multiply",
        "source": {
          "type": "settingValue",
          "settingId": "input"
        },
        "a": 0.25
      }
    },
    {
      "name": "workspace-scrollbar",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "workspace"
        },
        "black": {
          "type": "multiply",
          "source": {
            "type": "settingValue",
            "settingId": "workspace"
          },
          "r": 0.83,
          "g": 0.83,
          "b": 0.83
        },
        "white": {
          "type": "brighten",
          "source": {
            "type": "settingValue",
            "settingId": "workspace"
          },
          "r": 0.87,
          "g": 0.87,
          "b": 0.87
        },
        "threshold": 110
      }
    },
    {
      "name": "workspace-dots",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "workspace"
        },
        "black": {
          "type": "multiply",
          "source": {
            "type": "settingValue",
            "settingId": "workspace"
          },
          "r": 0.87,
          "g": 0.87,
          "b": 0.87
        },
        "white": {
          "type": "brighten",
          "source": {
            "type": "settingValue",
            "settingId": "workspace"
          },
          "r": 0.87,
          "g": 0.87,
          "b": 0.87
        }
      }
    },
    {
      "name": "workspace-insertionMarker",
      "value": {
        "type": "textColor",
        "black": "#000000",
        "source": {
          "type": "settingValue",
          "settingId": "workspace"
        }
      }
    },
    {
      "name": "categoryMenu-text",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "categoryMenu"
        }
      }
    },
    {
      "name": "categoryMenu-invertedFilter",
      "value": {
        "type": "textColor",
        "black": "brightness(0.4)",
        "white": "none",
        "source": {
          "type": "settingValue",
          "settingId": "categoryMenu"
        }
      }
    },
    {
      "name": "categoryMenu-selection",
      "value": {
        "type": "textColor",
        "black": "rgba(87, 124, 155, 0.13)",
        "white": "rgba(255, 255, 255, 0.05)",
        "source": {
          "type": "settingValue",
          "settingId": "categoryMenu"
        }
      }
    },
    {
      "name": "categoryMenu-hoverText",
      "value": {
        "type": "textColor",
        "black": "#3373cc",
        "white": "#80b5ff",
        "source": {
          "type": "settingValue",
          "settingId": "categoryMenu"
        }
      }
    },
    {
      "name": "palette-text",
      "value": {
        "type": "textColor",
        "source": {
          "type": "alphaBlend",
          "opaqueSource": {
            "type": "settingValue",
            "settingId": "workspace"
          },
          "transparentSource": {
            "type": "settingValue",
            "settingId": "palette"
          }
        }
      }
    },
    {
      "name": "palette-filter",
      "value": {
        "type": "textColor",
        "black": "none",
        "white": "brightness(0) invert(1)",
        "source": {
          "type": "alphaBlend",
          "opaqueSource": {
            "type": "settingValue",
            "settingId": "workspace"
          },
          "transparentSource": {
            "type": "settingValue",
            "settingId": "palette"
          }
        }
      }
    },
    {
      "name": "palette-scrollbar",
      "value": {
        "type": "textColor",
        "source": {
          "type": "alphaBlend",
          "opaqueSource": {
            "type": "settingValue",
            "settingId": "workspace"
          },
          "transparentSource": {
            "type": "settingValue",
            "settingId": "palette"
          }
        },
        "black": {
          "type": "multiply",
          "source": {
            "type": "alphaBlend",
            "opaqueSource": {
              "type": "settingValue",
              "settingId": "workspace"
            },
            "transparentSource": {
              "type": "settingValue",
              "settingId": "palette"
            }
          },
          "r": 0.83,
          "g": 0.83,
          "b": 0.83
        },
        "white": {
          "type": "brighten",
          "source": {
            "type": "alphaBlend",
            "opaqueSource": {
              "type": "settingValue",
              "settingId": "workspace"
            },
            "transparentSource": {
              "type": "settingValue",
              "settingId": "palette"
            }
          },
          "r": 0.91,
          "g": 0.91,
          "b": 0.91
        },
        "threshold": 110
      }
    }
  ],
  "userscripts": [
    {
      "url": "bubbles.js"
    },
    {
      "url": "theme-mode.js"
    },
    {
      "url": "paper.js"
    },
    {
      "url": "extension_icons.js"
    },
    {
      "url": "zoom_icons.js"
    },
    {
      "url": "paint_icons.js"
    },
    {
      "url": "dial.js"
    },
    {
      "url": "debugger.js"
    }
  ],
  "userstyles": [
    {
      "url": "experimental_editor.css"
    },
    {
      "url": "paper.css"
    },
    {
      "url": "stage.css",
      "if": {
        "settings": {
          "affectStage": true
        }
      }
    },
    {
      "url": "stage_compact_scrollbars.css",
      "if": {
        "settings": {
          "affectStage": true
        },
        "addonEnabled": [
          "editor-compact"
        ]
      }
    }
  ],
  "settings": [
    {
      "dynamic": true,
      "name": "Accent color",
      "id": "accentColor",
      "type": "color",
      "default": "#4d97ff"
    },
    {
      "dynamic": true,
      "name": "Page background",
      "id": "page",
      "type": "color",
      "default": "#111111"
    },
    {
      "dynamic": true,
      "name": "Menu bar background",
      "id": "menuBar",
      "type": "color",
      "default": "#202020"
    },
    {
      "dynamic": true,
      "name": "Popup backdrop color",
      "id": "popup",
      "type": "color",
      "default": "#000000aa",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "Active tab background",
      "id": "activeTab",
      "type": "color",
      "default": "#202020"
    },
    {
      "dynamic": true,
      "name": "Inactive tab background",
      "id": "tab",
      "type": "color",
      "default": "#151515"
    },
    {
      "dynamic": true,
      "name": "Sprite pane/Extension library background",
      "id": "selector",
      "type": "color",
      "default": "#202020"
    },
    {
      "dynamic": true,
      "name": "Costume/sound list background",
      "id": "selector2",
      "type": "color",
      "default": "#202020"
    },
    {
      "dynamic": true,
      "name": "Selected sprite/costume/sound background",
      "id": "selectorSelection",
      "type": "color",
      "default": "#111111"
    },
    {
      "dynamic": true,
      "name": "Accent background",
      "id": "accent",
      "type": "color",
      "default": "#151515"
    },
    {
      "dynamic": true,
      "name": "Input background",
      "id": "input",
      "type": "color",
      "default": "#202020"
    },
    {
      "dynamic": true,
      "name": "Code area background",
      "id": "workspace",
      "type": "color",
      "default": "#151515"
    },
    {
      "dynamic": true,
      "name": "Block category menu background",
      "id": "categoryMenu",
      "type": "color",
      "default": "#202020"
    },
    {
      "dynamic": true,
      "name": "Block palette background",
      "id": "palette",
      "type": "color",
      "default": "#202020cc",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "Full screen background",
      "id": "fullscreen",
      "type": "color",
      "default": "#000000"
    },
    {
      "dynamic": true,
      "name": "Full screen header background",
      "id": "stageHeader",
      "type": "color",
      "default": "#000000"
    },
    {
      "dynamic": true,
      "name": "Popup header color",
      "id": "popupHeader",
      "type": "color",
      "default": "#202020"
    },
    {
      "dynamic": true,
      "name": "Border color",
      "id": "border",
      "type": "color",
      "default": "#ffffff0d",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "Change the colors of variables, lists, speech bubbles, and answer inputs on the stage",
      "id": "affectStage",
      "type": "boolean",
      "default": false
    },
    {
      "dynamic": true,
      "name": "Dark mode",
      "id": "darkMode",
      "type": "boolean",
      "default": true
    }
  ],
  "presets": [
    {
      "name": "HyperMimic Dark",
      "id": "hm-dark",
      "description": "A dark theme based on a userscript by infinitytec",
      "values": {
        "darkMode": true,
        "page": "#111111",
        "accentColor": "#df7a16",
        "menuBar": "#202020",
        "popup": "#000000aa",
        "activeTab": "#202020",
        "tab": "#151515",
        "selector": "#202020",
        "selector2": "#202020",
        "selectorSelection": "#111111",
        "accent": "#151515",
        "input": "#202020",
        "workspace": "#151515",
        "categoryMenu": "#202020",
        "palette": "#202020cc",
        "fullscreen": "#000000",
        "stageHeader": "#000000",
        "border": "#ffffff0d",
        "popupHeader": "#333333",
      }
    },
    {
      "name": "HyperMimic Aurora",
      "id": "hm-aurora",
      "description": "A dark blue theme based on a userscript by infinitytec",
      "values": {
        "darkMode": true,
        "page": "#051638",
        "accentColor": "#4d97ff",
        "menuBar": "#2f4066",
        "popup": "#000000aa",
        "activeTab": "#2f4066",
        "tab": "#273552",
        "selector": "#2f4066",
        "selector2": "#2f4066",
        "selectorSelection": "#051638",
        "accent": "#273552",
        "input": "#2f4066",
        "workspace": "#273552",
        "categoryMenu": "#2f4066",
        "palette": "#2f4066cc",
        "fullscreen": "#051638",
        "stageHeader": "#051638",
        "border": "#00000026",
        "popupHeader": "#2F4066",
      }
    },
    {
      "name": "Dark Editor",
      "id": "darkEditor",
      "description": "A dark theme based on a userstyle by _nix",
      "values": {
        "darkMode": true,
        "page": "#2e2e2e",
        "accentColor": "#47566b",
        "menuBar": "#47566b",
        "popup": "#47566be6",
        "activeTab": "#878787",
        "tab": "#444444",
        "selector": "#333333",
        "selector2": "#333333",
        "selectorSelection": "#3a3a3a",
        "accent": "#333333",
        "input": "#444444",
        "workspace": "#444444",
        "categoryMenu": "#333333",
        "palette": "#222222cc",
        "fullscreen": "#222222",
        "stageHeader": "#222222",
        "border": "#111111",
        "popupHeader": "#47566B"

      }
    },
    {
      "name": "\"Experimental\" Dark",
      "id": "experimentalDark",
      "description": "A dark theme by Maximouse based on a userstyle. Not experimental",
      "values": {
        "darkMode": true,
        "page": "#2e3238",
        "accentColor": "#855cd6",
        "menuBar": "#855cd6",
        "popup": "#000000aa",
        "activeTab": "#282828",
        "tab": "#202020",
        "selector": "#292d32",
        "selector2": "#202020",
        "selectorSelection": "#282828",
        "accent": "#282828",
        "input": "#282828",
        "workspace": "#282828",
        "categoryMenu": "#282828",
        "palette": "#333333cc",
        "fullscreen": "#282828",
        "stageHeader": "#333333",
        "border": "#444444",
        "popupHeader": "#2E3238"
      }
    },
    {
      "name": "AstraEditor Deep Dark",
      "id": "ae-dark",
      "description": "A dark theme based on AstraEditor's deep dark mode.",
      "values": {
        "darkMode": true,
        "page": "#050505",
        "accentColor": "#0099FF",
        "menuBar": "#050505",
        "popup": "#111111aa",
        "activeTab": "#050505",
        "tab": "#101010",
        "selector": "#101010",
        "selector2": "#101010",
        "selectorSelection": "#050505",
        "accent": "#050505",
        "input": "#101010",
        "workspace": "#101010",
        "categoryMenu": "#050505",
        "palette": "#050505cc",
        "fullscreen": "#050505",
        "stageHeader": "#050505",
        "border": "#ffffff26",
        "popupHeader": "#050505"
      }
    },
    {
      "name": "AstraEditor Modern Light",
      "id": "ae-light",
      "description": "A dark theme based on AstraEditor's modern light mode.",
      "values": {
        "darkMode": false,
        "page": "#FAFDFF",
        "accentColor": "#0099FF",
        "menuBar": "#FAFDFF",
        "popup": "#a8a8a8cc",
        "activeTab": "#FFFFFF",
        "tab": "#FAFDFF",
        "selector": "#FAFDFF",
        "selector2": "#FAFDFF",
        "selectorSelection": "#FFFFFF",
        "accent": "#FFFFFF",
        "input": "#FFFFFF",
        "workspace": "#F9F9F9",
        "categoryMenu": "#FFFFFF",
        "palette": "#f9f9f9cc",
        "fullscreen": "#FFFFFF",
        "stageHeader": "#E8EDF1",
        "border": "#00000026",
        "popupHeader": "#FFFFFF"
      }
    },
    {
      "name": "TurboWarp Dark",
      "id": "tw-dark",
      "description": "A dark theme based on TurboWarp's dark mode.",
      "values": {
        "darkMode": true,
        "page": "#111111",
        "accentColor": "#ff4d4d",
        "menuBar": "#333333",
        "popup": "#333333aa",
        "activeTab": "#1e1e1e",
        "tab": "#2e2e2e",
        "selector": "#1e1e1e",
        "selector2": "#2e2e2e",
        "selectorSelection": "#111111",
        "accent": "#111111",
        "input": "#1e1e1e",
        "workspace": "#1e1e1e",
        "categoryMenu": "#111111",
        "palette": "#111111cc",
        "fullscreen": "#111111",
        "stageHeader": "#111111",
        "border": "#ffffff26",
        "popupHeader": "#333333"
      }
    },
    {
      "name": "Scratch 2.0",
      "id": "scratch2",
      "description": "A theme based on Scratch 2.0's colors.",
      "values": {
        "darkMode": false,
        "page": "#ffffffff",
        "accentColor": "#179fd7",
        "menuBar": "#9c9ea2ff",
        "popup": "#00000099",
        "activeTab": "#e6e8e8",
        "tab": "#f1f2f2ff",
        "selector": "#e6e8e8",
        "selector2": "#e6e8e8",
        "selectorSelection": "#d0d0d0ff",
        "accent": "#f2f2f2",
        "input": "#ffffffff",
        "workspace": "#dddedeff",
        "categoryMenu": "#e6e8e8ff",
        "palette": "#e6e8e8cc",
        "fullscreen": "#ffffffff",
        "stageHeader": "#e6e8e8",
        "border": "#d0d1d2",
        "popupHeader": "#9c9ea2"
      }
    },
    {
      "name": "Scratch 1.x",
      "id": "scratch1",
      "description": "A theme based on Scratch 1.x's colors.",
      "values": {
        "darkMode": false,
        "page": "#c0c3c6",
        "accentColor": "#5498c7",
        "menuBar": "#c0c3c6",
        "popup": "#00000099",
        "activeTab": "#b9d7e5",
        "tab": "#adadb5",
        "selector": "#6a6a6a",
        "selector2": "#7c8083",
        "selectorSelection": "#404143",
        "accent": "#959a9f",
        "input": "#5f6265",
        "workspace": "#7c8083",
        "categoryMenu": "#969a9f",
        "palette": "#7c8083cc",
        "fullscreen": "#000001",
        "stageHeader": "#000001",
        "border": "#0000006b",
        "popupHeader": "#c0c3c6"
      }
    },
    {
      "name": "Scratch's default colors",
      "id": "scratch",
      "description": "The colors normally used by Scratch",
      "values": {
        "darkMode": false,
        "page": "#e5f0ff",
        "accentColor": "#855cd6",
        "menuBar": "#855cd6",
        "popup": "#4d97ffe6",
        "activeTab": "#ffffff",
        "tab": "#d9e3f2",
        "selector": "#e9f1fc",
        "selector2": "#d9e3f2",
        "selectorSelection": "#ffffff",
        "accent": "#ffffff",
        "input": "#ffffff",
        "workspace": "#f9f9f9",
        "categoryMenu": "#ffffff",
        "palette": "#f9f9f9cc",
        "fullscreen": "#ffffff",
        "stageHeader": "#e8edf1",
        "border": "#00000026",
        "popupHeader": "#855cd6"
      }
    },
    {
      "name": "Scratch's default colors (blue)",
      "id": "scratch-blue",
      "description": "The colors originally used by Scratch 3.0",
      "values": {
        "darkMode": false,
        "page": "#e5f0ff",
        "accentColor": "#4d97ff",
        "menuBar": "#4d97ff",
        "popup": "#4d97ffe6",
        "activeTab": "#ffffff",
        "tab": "#d9e3f2",
        "selector": "#e9f1fc",
        "selector2": "#d9e3f2",
        "selectorSelection": "#ffffff",
        "accent": "#ffffff",
        "input": "#ffffff",
        "workspace": "#f9f9f9",
        "categoryMenu": "#ffffff",
        "palette": "#f9f9f9cc",
        "fullscreen": "#ffffff",
        "stageHeader": "#e8edf1",
        "border": "#00000026",
        "popupHeader": "#4D97FF"
      }
    }
  ],
  "dynamicDisable": true,
  "enabledByDefault": false
};
export default manifest;
