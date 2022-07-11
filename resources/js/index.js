import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import AppPay from './components/AppPay'


if (document.getElementById('gestaoassociados')) {
    ReactDOM.render(<App />, document.getElementById('gestaoassociados'));
}

if (document.getElementById('pagamento')) {
    ReactDOM.render(<AppPay />, document.getElementById('pagamento'));
}

/** if (document.getElementById('gestaoassociados')) {
    ReactDOM.render(<AppPay />, document.getElementById('gestaoassociados'));
}

*/