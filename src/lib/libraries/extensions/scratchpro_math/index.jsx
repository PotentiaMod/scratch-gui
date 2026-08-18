import React from 'react';
import {FormattedMessage} from 'react-intl';

const iconURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOCIgZmlsbD0iI0NGNjNDRiIvPjx0ZXh0IHg9IjIwIiB5PSIyNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtZmFtaWx5PSJBcmlhbCI+4oiRPC90ZXh0Pjwvc3ZnPg==';
const insetIconURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOCIgZmlsbD0iI0NGNjNDRiIvPjx0ZXh0IHg9IjIwIiB5PSIyNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtZmFtaWx5PSJBcmlhbCI+4oiRPC90ZXh0Pjwvc3ZnPg==';

const Extension = {
    name: (
        <FormattedMessage
            defaultMessage="Pro Math"
            description="Math category blocks"
            id="gui.extension.scratchpro_math.name"
        />
    ),
    extensionId: 'scratchpro_math',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="Advanced math, statistics, trigonometry & number theory"
            description="Math category blocks"
            id="gui.extension.scratchpro_math.description"
        />
    ),
    featured: true,
    internetConnectionRequired: false
};

export default Extension;
