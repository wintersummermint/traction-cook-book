import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { renderApp } from './App';
import './App.css';
import './Helpers.css';

ReactDOM.render(renderApp(), document.getElementById('root'));

registerServiceWorker();
