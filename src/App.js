import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

import './css/index.css';

function App() {
  return (
    <div className="app">
      <Route path='/' exact>
        <Nav/>
        <Main/>
        <About/>
        <Footer/>
      </Route>
      <Route path='/login' exact>
        <Login/>
      </Route>
      <Route path='/register' exact>
        <Register/>
      </Route>
    </div>
  );
}

export default App;
