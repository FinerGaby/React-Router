import React, { Component } from 'react';
import './App.css';
import './baseCSS/reset.css';
import Header from './components/Header/HeaderChild';
import CustomerContainer from './containers/CustomerContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer';
import CustomerPortafolio from './containers/CustomerPortafolio';
import CustomersPortafolio from './containers/CustomersPortafolio';
import AboutPrincipal from './components/About/AboutPrincipal';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={CustomerContainer} />
      <Route exact path="/portafolio" component={CustomerPortafolio} />
      <Route exact path="/about" component={AboutPrincipal} />
      <Route path="/portafolio/:textoPortafolio" 
      render={props => <CustomersPortafolio textoPortafolio={props.match.params.textoPortafolio} />} />
      </Switch>
      <Footer />
      </div>
  </Router>
    );
  }
}

export default App;
