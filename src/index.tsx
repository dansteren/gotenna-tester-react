import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const startApp = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

if(!window.cordova) {
  startApp()
} else {
  document.addEventListener('deviceready', startApp)
}
