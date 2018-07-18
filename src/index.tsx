import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';

async function startApp() {
  if (window.goTenna) {
    const GOTENNA_APP_TOKEN = 'MY_TOKEN'; // TODO: Insert your token
    await window.goTenna.setApplicationToken(GOTENNA_APP_TOKEN);
  }
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
