import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import RenderApp from './App';
import './App.css';
import './Helpers.css';

ReactDOM.render(<RenderApp />, document.getElementById('root'));

registerServiceWorker();
