import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './03_utils/PrivateRoute';

import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
// import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

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
      <Route path='/register' exact component={Register}/>
      {/* <Route path='/login' exact component={Login}/> */}
      <PrivateRoute>
        <Route path='/dashboard' exact component={Dashboard}/>
      </PrivateRoute>
    </div>
  );
}

export default App;
