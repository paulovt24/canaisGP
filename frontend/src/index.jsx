import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';



import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastrar from './pages/cadastrar';
import Consultar from './pages/consultar';
import Login from './pages/login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/consultar' element={<Consultar />}  />
        <Route path='/cadastrar' element={<Cadastrar />}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
