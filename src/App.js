import React, { Component } from 'react';
import './App.css';
import './baseCSS/reset.css';
import Header from './components/Header/HeaderChild';
import CustomerContainer from './containers/CustomerContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Portafolio from './components/Portafolio';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={CustomerContainer} />
      <Route exact path="/portafolio" component={Portafolio} />
      </Switch>
      <Footer />
      </div>
  </Router>
    );
  }
}

export default App;
