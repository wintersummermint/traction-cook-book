import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { renderApp } from './App';

ReactDOM.render(renderApp(), document.getElementById('root'));

registerServiceWorker();
