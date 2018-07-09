import * as React from 'react';
import './App.css';

class App extends React.Component<{}, {}> {
  public constructor(props: {}) {
    super(props);
    if (window.goTenna) {
      const GOTENNA_APP_TOKEN = 'HAIOXh0GGVREXwZZBggfRAIMRU5HUlgDBBJaDxlRXhIDHAcDRFZVSg0cDA0DQg5L';
      window.goTenna.setApplicationToken(GOTENNA_APP_TOKEN);
    }
  }
  public render() {
    return (
      <div className="app">
        <div className="navbar">GoTennaSDKExample</div>
        <button className="button-block">SCAN FOR NEW GOTENNA</button>
        <button className="button-block">SCAN FOR PREVIOUSLY USED GOTENNA</button>
      </div>
    );
  }
}

export default App;
