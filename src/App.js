import React from 'react'
import Home from './components/Pages/Home';
import Atendimento from './components/Pages/Atendimento'
import Carrinho from './components/Pages/Carrinho'
import Avalienos from './components/Pages/Avalienos';
import { Router } from '@reach/router'
import CategoryItems from './components/Pages/CategoryItems';
import Administrativo from './components/Pages/Administrativo';

export default function App() {
  return (
    <Router basepath='/fashion-store/'>
      <Home path='/' exact/>
      <Avalienos path='avalie-nos'/>
      <Atendimento path='/atendimento' />
      <Carrinho path='/carrinho' />
      <CategoryItems path='/:clothCategory' />
      <Administrativo path='/administrative' />
    </Router>
  );
}
