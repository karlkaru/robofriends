import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/containers/App';
import * as serviceWorker from './src/serviceWorker';
import 'tachyons';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
