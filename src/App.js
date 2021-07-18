import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Inicio from './components/pags/Nav-Inicio';
import Servicios from './components/pags/Nav-Servicios';
import Contactanos from './components/pags/Nav-Contactanos';
import Metodología from './components/pags/Nav-Metodologia';
import Nosotros from './components/pags/Nav-Nosotros';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component = {Inicio} />
        <Route path='/Servicios' exact component = {Servicios} />
        <Route path='/Contactanos' exact component = {Contactanos} />
        <Route path='/Metodología' exact component = {Metodología} />
        <Route path='/Nosotros' exact component = {Nosotros} />
      </Switch>
    
    </Router>
    </>
  );
}

export default App;
