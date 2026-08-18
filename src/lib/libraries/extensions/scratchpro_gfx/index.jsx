import React from 'react';
import {FormattedMessage} from 'react-intl';

const iconURL = 'data:image/svg+xml;base64,' +
    'PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOCIgZmlsbD0iIzAwQkZBNiIvPjxyZWN0IHg9IjEzIiB5PSIxMyIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHJlY3QgeD0iMTMiIHk9IjEzIiB3aWR0aD0iNiIgaGVpZ2h0PSI2IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC44Ii8+PC9zdmc+';
const insetIconURL = 'data:image/svg+xml;base64,' +
    'PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOCIgZmlsbD0iIzAwQkZBNiIvPjxyZWN0IHg9IjEzIiB5PSIxMyIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHJlY3QgeD0iMTMiIHk9IjEzIiB3aWR0aD0iNiIgaGVpZ2h0PSI2IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC44Ii8+PC9zdmc+';

const Extension = {
    name: (
        <FormattedMessage
            defaultMessage="Pro Graphics"
            description="Graphics extension name"
            id="gui.extension.scratchpro_gfx.name"
        />
    ),
    extensionId: 'scratchpro_gfx',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="Canvas drawing, shapes, overlays & screen utilities."
            description="Graphics extension description"
            id="gui.extension.scratchpro_gfx.description"
        />
    ),
    featured: true,
    internetConnectionRequired: false
};

export default Extension;
