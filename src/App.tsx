import * as React from 'react';
import { HashRouter, Link, Route } from 'react-router-dom'
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
          <Link to="/connected">Go to connected</Link>
        </>
      </HashRouter>
    );
  }
}

export default App;
