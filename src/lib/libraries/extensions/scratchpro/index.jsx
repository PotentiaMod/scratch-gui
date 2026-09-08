import React from 'react';
import {FormattedMessage} from 'react-intl';

const scratchproIconURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOCIgZmlsbD0iIzRDNzkwRiIvPjx0ZXh0IHg9IjIwIiB5PSIyNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiPlA8L3RleHQ+PC9zdmc+';
const scratchproInsetIconURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI5IiBmaWxsPSIjNEM3OTBGIi8+PHRleHQgeD0iMTAiIHk9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI5IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtd2VpZ2h0PSJib2xkIj5QPC90ZXh0Pjwvc3ZnPg==';

const ScratchProExtension = {
    name: (
        <FormattedMessage
            defaultMessage="ScratchPro"
            description="Name for the ScratchPro extension"
            id="gui.extension.scratchpro.name"
        />
    ),
    extensionId: 'scratchpro',
    iconURL: scratchproIconURL,
    insetIconURL: scratchproInsetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="Advanced blocks: HTTP, JSON, arrays, color, utilities."
            description="Description for the ScratchPro extension"
            id="gui.extension.scratchpro.description"
        />
    ),
    featured: true,
    internetConnectionRequired: false
};

export default ScratchProExtension;
