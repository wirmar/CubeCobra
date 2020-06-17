import React from 'react';
import ReactDOM from 'react-dom';

import HelpPage from 'pages/HelpPage';

const wrapper = document.getElementById('react-root');
if (wrapper) {
  ReactDOM.render(<HelpPage />, wrapper);
}
