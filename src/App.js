import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
      </div>
    );
  }
}

export default App;
