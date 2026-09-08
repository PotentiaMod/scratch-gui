import React from 'react';
import {FormattedMessage} from 'react-intl';

const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMwMENDOTkiLz48dGV4dCB4PSI0MCIgeT0iNTUiIGZvbnQtc2l6ZT0iMzYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiI+8J+UkjwvdGV4dD48L3N2Zz4=';
const insetIconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMwMENDOTkiLz48dGV4dCB4PSI0MCIgeT0iNTUiIGZvbnQtc2l6ZT0iMzYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiI+8J+UkjwvdGV4dD48L3N2Zz4=';

const Extension = {
    name: (<FormattedMessage defaultMessage="Pro Crypto" description="scratchpro_crypto" id="gui.extension.scratchpro_crypto.name" />),
    extensionId: 'scratchpro_crypto',
    iconURL, insetIconURL,
    description: (<FormattedMessage defaultMessage="Encryption, hashing, compression & steganography." description="scratchpro_crypto" id="gui.extension.scratchpro_crypto.description" />),
    featured: true,
    internetConnectionRequired: false
};
export default Extension;
