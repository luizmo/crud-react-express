import React, { Component, Fragment } from 'react';
import { Navigation } from './components';
class App extends Component {
  render() {
    return (
      <Fragment>
        <main className="App">
          <Navigation />
        </main>
      </Fragment>
    );
  }
}

export default App;
