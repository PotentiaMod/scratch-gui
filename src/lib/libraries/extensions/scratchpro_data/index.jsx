import React from 'react';
import {FormattedMessage} from 'react-intl';

const iconURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOCIgZmlsbD0iI0ZGOEMxQSIvPjx0ZXh0IHg9IjIwIiB5PSIyNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtZmFtaWx5PSJBcmlhbCI+IzwvdGV4dD48L3N2Zz4=';
const insetIconURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOCIgZmlsbD0iI0ZGOEMxQSIvPjx0ZXh0IHg9IjIwIiB5PSIyNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtZmFtaWx5PSJBcmlhbCI+IzwvdGV4dD48L3N2Zz4=';

const Extension = {
    name: (
        <FormattedMessage
            defaultMessage="Pro Data"
            description="Data category blocks"
            id="gui.extension.scratchpro_data.name"
        />
    ),
    extensionId: 'scratchpro_data',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="Arrays, dictionaries, JSON & data structures"
            description="Data category blocks"
            id="gui.extension.scratchpro_data.description"
        />
    ),
    featured: true,
    internetConnectionRequired: false
};

export default Extension;
