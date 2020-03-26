import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Gallery from './components/pages/Gallery'
import ContactMe from './components/pages/ContactMe'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/gallery" component={Gallery} exact />
          <Route path="/contact_me" component={ContactMe} exact />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
