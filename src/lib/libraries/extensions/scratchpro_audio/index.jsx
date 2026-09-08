import React from 'react';
import {FormattedMessage} from 'react-intl';

const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNGRjRENEQiLz48dGV4dCB4PSI0MCIgeT0iNTUiIGZvbnQtc2l6ZT0iNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiI+4pmqPC90ZXh0Pjwvc3ZnPg==';
const insetIconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNGRjRENEQiLz48dGV4dCB4PSI0MCIgeT0iNTUiIGZvbnQtc2l6ZT0iNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiI+4pmqPC90ZXh0Pjwvc3ZnPg==';

const Extension = {
    name: (<FormattedMessage defaultMessage="Pro Audio" description="scratchpro_audio" id="gui.extension.scratchpro_audio.name" />),
    extensionId: 'scratchpro_audio',
    iconURL, insetIconURL,
    description: (<FormattedMessage defaultMessage="Audio synthesis, oscillators, effects & Web Audio API." description="scratchpro_audio" id="gui.extension.scratchpro_audio.description" />),
    featured: true,
    internetConnectionRequired: false
};
export default Extension;
