import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Npc from './components/Npc';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Npc generationMethod="simple" />, document.getElementById('root'));
registerServiceWorker();
