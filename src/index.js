import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import RenderApp from './App';
import './App.css';
import './Helpers.css';
import './mediaQueries.css';
import './datetime.css';

ReactDOM.render(<RenderApp />, document.getElementById('root'));

registerServiceWorker();
