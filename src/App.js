import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Gallery from './components/pages/Gallery'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/gallery" component={Gallery} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
