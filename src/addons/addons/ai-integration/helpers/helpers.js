import blockDefinitions from "./blockDefinitions.js";
import potentia from "./potentia.svg";

export default class helpers {
    constructor() {
    }
    static PotentiaD = "<div class=fire><div class=fire-left><div class=main-fire></div><div class=particle-fire></div></div><div class=fire-center><div class=main-fire></div><div class=particle-fire></div></div><div class=fire-right><div class=main-fire></div><div class=particle-fire></div></div><div class=fire-bottom><div class=main-fire></div></div></div>";
    static closePopup() {
        if (document.getElementById("popupParentDiv") == null) return;
        document.getElementById("popupParentDiv").style.display = 'none';
        document.getElementById("popupParentDiv").style.zIndex = -999999;
        document.AI_INTEGRATION.popupOpen = false;
    }
    static currentSpriteName() {
        return vm.runtime.getEditingTarget().sprite.name;
    }
    static workspaceVariables(includeBroadcast = false, workspace) {
        var allVariables = workspace.getAllVariables(); // Get all variables
        var lists = allVariables.filter(variable => variable.type === "list");
        var listNames = lists.map(list => list.name);
        var variables = allVariables.filter(variable => variable.type === "");
        var variableNames = variables.map(variable => variable.name);
        if (includeBroadcast) {
            var broadcastNames = workspace.getAllVariables().filter(variable => variable.type === "broadcast_msg").map(variable => variable.name);
            return [listNames, variableNames, broadcastNames];
        }
        return [listNames, variableNames];
    }
    static getCustomBlockNames(xmlString) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");

        const result = [];

        // Find all blocks of type 'procedures_definition'
        const blocks = xmlDoc.getElementsByTagName("block");

        for (let block of blocks) {
            if (block.getAttribute("type") === "procedures_definition") {
                const blockId = block.getAttribute("id");

                // Find all mutations related to this block
                const mutations = block.getElementsByTagName("mutation");

                for (let mutation of mutations) {
                    if (mutation.hasAttribute("proccode")) {
                        result.push({
                            blockId: blockId,
                            customBlockName: mutation.getAttribute("proccode")
                        });
                    }
                }
            }
        }

        return result;
    }
    static updateAIModels(geminiKey, openrouterKey) {
        if (document.getElementById('AI_Selector_select') == null) return;
        for (var i of document.AI_INTEGRATION.AIModels) {
            const canUse = !(i.API_KEY_TYPE == "gemini" && geminiKey == "" || i.API_KEY_TYPE == "openrouter" && openrouterKey == "");

            var option = document.createElement('option');
            option.value = i.id;
            option.text = i.display_name + (canUse ? "" : " (API Key Required)");
            if (i.default && canUse) {
                option.selected = true;
            }
            if (!canUse) {
                option.disabled = true;
            }
            document.getElementById('AI_Selector_select').appendChild(option);

        }
        document.getElementById('infoAboutAIModels').addEventListener('click', () => {
            ScratchBlocks.prompt(`<p>Each AI model has its own advantages and disadvantages</p><ul><li><strong>Gemini 2.5 Pro</strong> (requires Gemini API key): Excellent at explaining code but frequently makes mistakes when writing it.</li><li><strong>Gemini 2.5 Flash (recommended)</strong> (requires Gemini API key): The most tested model for writing code, offering reliable performance.</li><li><strong>Deepseek R1</strong> (requires OpenRouter API key): Poor at writing code but excels at explaining and analyzing issues. However, it has a very slow response time.</li><li><strong>Deepseek V3</strong> (requires OpenRouter API key): sometimes the best model for writing code (either really good or terrible, basically your luck), but limited to 200 messages per day.</li></ul><br><p>if you don't know what you are doing you should probably stick to the Gemini models (preferably 2.0 flash) as they are way faster and are more tested</p>`, null, function () { }, "AI Models", ScratchBlocks.BROADCAST_MESSAGE_VARIABLE_TYPE, true);
            setTimeout(() => {
                document.querySelector(".ReactModal__Content--after-open").style.width = "700px";
            }, 100);
        });
    }
    static fetchWithTimeout(url, options = {}, timeout = 5000) {
        const controller = new AbortController();
        const signal = controller.signal;
        const fetchPromise = fetch(url, { ...options, signal });

        // Set timeout to abort fetch
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        return fetchPromise
            .finally(() => clearTimeout(timeoutId));
    }
    static disableCodeChunkAttachment() {
        document.getElementById('Context_Selector_select').value = '0';
        document.getElementById('Context_Selector_select').style.width = "26px";
        document.getElementById('Context_Selector_select').children[0].disabled = true;
        document.getElementById('Context_Selector_select').children.innerText = "Code Chunk";
    }
    static messageErrorOccured(messageContents, session) {
        if (!session) {
            console.error("messageErrorOccured called without a session.");
            return;
        }
        session.chatHistory.push({ "role": "user", "message": messageContents });
        session.isBlabbering = false;
    }

    static isFirstRequest = true;
    static readWithTimeout(reader) {
        const FIRST_TIMEOUT_MS = 60000;
        const DEFAULT_TIMEOUT_MS = 5000;
        const timeout = this.isFirstRequest ? FIRST_TIMEOUT_MS : DEFAULT_TIMEOUT_MS;
        this.isFirstRequest = false;

        return Promise.race([
            reader.read(),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Read operation timed out")), timeout)
            ),
        ]);
    }
    static returnEntireProjectAsXML(addon) {
        //create new XML document
        const xmlDoc = document.implementation.createDocument("", "", null);

        // Create a root element
        const rootElement = xmlDoc.createElement("project");
        xmlDoc.appendChild(rootElement);

        for (var x of addon.tab.redux.state.scratchGui.vm.runtime.targets) {
            // Create a child element with text content
            const childElement = xmlDoc.createElement("sprite");
            //add sprite name as attribute
            childElement.setAttribute("name", x.getName());
            childElement.innerHTML = x.blocks.toXML();
            rootElement.appendChild(childElement);
        }
        // Serialize XML to string
        const serializer = new XMLSerializer();
        const xmlString = serializer.serializeToString(xmlDoc);

        return xmlString;
    }
    static APIKeyRequiredModal() {
        const div = document.createElement('div');
        div.className = 'container';
        div.id = 'torchyPopup';
        div.style.zIndex = 509;
        div.style.position = 'absolute';
        const divWidth = 452;
        const divHeight = 302;
        const viewportWidth = window.innerWidth;
        const viewportHeight = document.documentElement.clientHeight;
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const tolerance = 10;
        let newLeft = document.AI_INTEGRATION.X_COORDINATE;
        let newTop = document.AI_INTEGRATION.Y_COORDINATE;
        if (newLeft < tolerance) newLeft = tolerance;
        if (newTop < scrollY + tolerance) newTop = scrollY + tolerance;
        if (newLeft + divWidth > viewportWidth - tolerance) newLeft = viewportWidth - divWidth - tolerance;
        if (newTop + divHeight > scrollY + viewportHeight - tolerance) newTop = scrollY + viewportHeight - divHeight - tolerance;
        div.style.left = `${newLeft}px`;
        div.style.top = `${newTop}px`;
        div.style.width = `450px`;
        div.style.height = `300px`;
        div.innerHTML = `<div class="content no_api_key" id="chat_content">
          <div class="a"><svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="size-6" stroke="currentColor" stroke-width="1.5" id="closePopup">
                    <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
      </div><div class="b">
              <div class="c">
                  <img src={Potentia}/>
              </div>
              <p class="d">To use Potentia, please add your API key in the <span id="addonsPage">addons page</span></p></div>  
      </div>`;
        document.body.appendChild(div);
        document.getElementById('closePopup').addEventListener('click', () => {
            document.getElementById('torchyPopup').remove();
            document.AI_INTEGRATION.popupOpen = false;
        });
        document.getElementById('addonsPage').addEventListener('click', () => {
            window.parent.postMessage({ type: "block-compiler-action", action: "addonsPage"}, "*");
        });
    }
    static generateExtensionDefinitions(runtime) {
        const definitions = [];
        if (!runtime || !runtime._blockInfo) return definitions;

        // Core categories that are already covered by blockDefinitions.js
        const ignoredCategories = ['motion', 'looks', 'sound', 'events', 'control', 'sensing', 'operators', 'data', 'myBlocks', 'procedures'];

        for (const category of runtime._blockInfo) {
            if (ignoredCategories.includes(category.id)) continue;

            for (const block of category.blocks) {
                // Skip separators, buttons, etc.
                if (typeof block !== 'object' || !block.info || !block.json) continue;
                const info = block.info;
                if (info.hideFromPalette){
                    console.log("skipping block", info.opcode, "reason: hidden from pallete");
                    continue;
                }
                // Map BlockType to Torchy shape
                let shape = "stack";
                if (info.blockType === "reporter") shape = "reporter";
                else if (info.blockType === "boolean") shape = "boolean";
                else if (info.blockType === "hat" || info.blockType === "event") shape = "hat";
                else if (info.blockType === "conditional" || info.blockType === "loop") shape = "c-block";

                // Construct ID (Extension blocks usually follow extensionId_opcode)
                // However, runtime._blockInfo often stores just the opcode in info.opcode, 
                // while json.type has the full ID.
                const id = block.json.type; 

                // Parse text and arguments to build spec and input list
                const argsMap = info.arguments || {};
                const inputs = [];
                const xmlArgs = [];
                
                let argCounter = 1;
                
                // Replace [ARG_NAME] with %1, %2, etc.
                let spec = info.text.replace(/\[([^\]]+)\]/g, (match, argName) => {
                    const argDef = argsMap[argName] || {};
                    let typeCode = "%s"; // Default string
                    let shadowType = "text"; 
                    let fieldName = "TEXT";
                    let variableType = null;

                    // Determine type based on argument definition
                    if (argDef.type === "number") { 
                        typeCode = "%n"; 
                        shadowType = "math_number"; 
                        fieldName = "NUM";
                    } else if (argDef.type === "angle") { 
                        typeCode = "%n"; 
                        shadowType = "math_angle"; 
                        fieldName = "NUM";
                    } else if (argDef.type === "color") { 
                        typeCode = "%c"; 
                        shadowType = "colour_picker"; 
                        fieldName = "COLOUR";
                    } else if (argDef.type === "boolean") {
                        typeCode = "%b";
                        shadowType = null; // Boolean inputs usually don't have shadows in extensions context unless specialized
                    } else if (argDef.menu) {
                        typeCode = `%m.${argDef.menu}`;
                        // Extension menus usually follow this ID pattern
                        shadowType = `${category.id}_menu_${argDef.menu}`; 
                        fieldName = argDef.menu;
                    }

                    inputs.push(typeCode);

                    // Build XML arg definition
                    const xmlArg = {
                        name: argName,
                        shadow: shadowType,
                        field: fieldName,
                        default: argDef.defaultValue !== undefined ? argDef.defaultValue : ""
                    };
                    
                    if (variableType) xmlArg.variableType = variableType;
                    
                    xmlArgs.push(xmlArg);

                    return `%${argCounter++}`;
                });

                const isConflict = blockDefinitions.some(
                    (def) => def.spec === spec && def.inputs.length === inputs.length
                );
        
                if (isConflict) {
                    spec = `${category.id} ${spec}`;
                }

                console.log("pushing block:",{
                    id: id,
                    spec: spec,
                    inputs: inputs,
                    shape: shape,
                    category: category.id,
                    xml: {
                        args: xmlArgs
                    }
                })
                definitions.push({
                    id: id,
                    spec: spec,
                    inputs: inputs,
                    shape: shape,
                    category: category.id,
                    xml: {
                        args: xmlArgs
                    }
                });
            }
        }
        return definitions;
    }
}