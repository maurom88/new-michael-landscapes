import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import ContactMe from './components/pages/ContactMe'
import GalleryMain from './components/pages/galleries/GalleryMain'
import GalleryForest from './components/pages/galleries/GalleryForest'
import GalleryLake from './components/pages/galleries/GalleryLake'
import GalleryNightSky from './components/pages/galleries/GalleryNightSky'
import GalleryMountain from './components/pages/galleries/GalleryMountain'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact_me" component={ContactMe} exact />
          <Route path="/galleries" component={GalleryMain} exact />
          <Route path="/galleries/forest" component={GalleryForest} exact />
          <Route path="/galleries/lake" component={GalleryLake} exact />
          <Route path="/galleries/nightSky" component={GalleryNightSky} exact />
          <Route path="/galleries/mountain" component={GalleryMountain} exact />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
