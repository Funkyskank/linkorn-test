import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ClientsGrid from './components/ClientsGrid';
import NavBar from './components/NavBar';
import About from './components/AboutPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={ClientsGrid} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
