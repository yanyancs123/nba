import '../styles/App.css';
import {TopBar} from './TopBar';
import {Main} from './Main';
import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TopBar />
        <Main />
      </div>
    );
  }
}

export default App;
