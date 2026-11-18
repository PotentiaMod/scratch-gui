import makeToolboxXML from '../../lib/make-toolbox-xml';

const staticMyBlocksXML = `
<category name="%{BKY_CATEGORY_MYBLOCKS}" id="myBlocks" colour="#FF6680" secondaryColour="#D94F6C">
    <block type="procedures_call">
        <mutation proccode="my block"></mutation>
    </block>
</category>`;

export default function buildPreviewToolboxXML() {
    return makeToolboxXML(false, false, 'preview-target', [
        {id: 'procedures', xml: staticMyBlocksXML}
    ]);
}
