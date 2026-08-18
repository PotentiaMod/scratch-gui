import React from 'react';
import {FormattedMessage} from 'react-intl';

const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNBNjYzRkYiLz48dGV4dCB4PSI0NCIgeT0iNTYiIGZvbnQtc2l6ZT0iNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiI+4pa2PC90ZXh0Pjwvc3ZnPg==';
const insetIconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNBNjYzRkYiLz48dGV4dCB4PSI0NCIgeT0iNTYiIGZvbnQtc2l6ZT0iNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiI+4pa2PC90ZXh0Pjwvc3ZnPg==';

const Extension = {
    name: (<FormattedMessage defaultMessage="Pro Game" description="scratchpro_game" id="gui.extension.scratchpro_game.name" />),
    extensionId: 'scratchpro_game',
    iconURL, insetIconURL,
    description: (<FormattedMessage defaultMessage="Pathfinding, tilemaps, particles, easing & game utilities." description="scratchpro_game" id="gui.extension.scratchpro_game.description" />),
    featured: true,
    internetConnectionRequired: false
};
export default Extension;
