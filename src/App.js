import React from 'react';
import {Navbar} from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home.js';
import Products from './components/pages/products.js';
import Services from './components/pages/services.js';
import SignUp from './components/pages/signUp.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/services' component={Services}/>
            <Route path='/products' component={Products}/>
            <Route path='/signup' component={SignUp}/>
            {/*
            */}
          </Switch>
      </Router>
    </>
  );
}

export default App;
