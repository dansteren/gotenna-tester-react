import * as React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import ConnectedGoTenna from './components/ConnectedGoTenna';
import HomePage from './components/HomePage';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <HashRouter>
        <>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/connected" component={ConnectedGoTenna} />
        </>
      </HashRouter>
    );
  }
}

export default App;
