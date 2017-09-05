import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Header from './Header';
import Root from './Root';
import Counter from './Counter';

const CounterPage = (title) => (
  <Counter title={title} />
);

class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Header />
          </div>

          <div className="App-body">
            <Route path="/" exact component={ Root } />
            <Route path="/Counter1" component={ () => CounterPage("Counter 1") } />
            <Route path="/Counter2" component={ () => CounterPage("Counter 2") } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
