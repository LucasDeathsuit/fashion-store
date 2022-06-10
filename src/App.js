import React from 'react'
import Home from './components/Pages/Home';
import Atendimento from './components/Pages/Atendimento'
import Carrinho from './components/Pages/Carrinho'
import { Router } from '@reach/router'

export default function App() {
  return (
    <Router basename="/fashion-store">
      <Home path='/' />
      <Atendimento path='/atendimento' />
      <Carrinho path='/carrinho' />
    </Router>
  );
}
