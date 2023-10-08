import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UsuarioCriar from './pages/Usuario Criar Conta'
import UsuarioLog from './pages/usuario log'
import Sports from './pages/sports'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
      <Route path='/' element={<Sports />}> </Route>
      <Route path='/criar' element={<UsuarioCriar />}> </Route>
      <Route path='/login' element={<UsuarioLog />}> </Route>
          

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
