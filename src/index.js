import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Npc from './Npc';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Npc generationMethod="simple" />, document.getElementById('root'));
registerServiceWorker();
