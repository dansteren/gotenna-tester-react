import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'typeface-roboto';
import App from './App';
import './index.css';

async function startApp() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

async function initializeGotenna() {
  const GOTENNA_APP_TOKEN = 'MY_TOKEN'; // TODO: Insert your token
  await gotenna.setApplicationToken(GOTENNA_APP_TOKEN)
}

if(!window.cordova) {
  startApp()
} else {
  document.addEventListener('deviceready', async () => {
    await initializeGotenna()
    startApp()
  })
}
