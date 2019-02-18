import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

// Componente do Project
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Servicos from './components/Servicos'
import Portifolio from './components/Portifolio'
import Price from './components/Price'
import Contact from './components/Contact'
import Admin from './Admin/Admin'
import Login from './Admin/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route path='/' exact component={About} />
          <Route path='/services' component={Servicos} />
          <Route path='/portfolio' component={Portifolio} />
          <Route path='/pricing' component={Price} />
          <Route path='/contact' component={Contact} />

          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
