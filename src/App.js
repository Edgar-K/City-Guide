import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

//Import Pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';


  class App extends Component {
    render() {
      return (
        <div>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/details" component={Details} />
            <Route path="/not-found-page" component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      );
    }

  }

export default App;


