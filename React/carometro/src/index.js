import React from 'react';
import ReactDOM from 'react-dom';

import {
  Route,
  BrowserRouter as Router,
  Navigate,
  Routes
} from 'react-router-dom'

import './index.css';

import { parseJwt, usuarioAutenticado } from './services/auth';

import Login from './pages/login/login'
import Home from './pages/home/home'
import Adm from './pages/adm/adm'
import Aluno from './pages/aluno/aluno'


import reportWebVitals from './reportWebVitals';

const PermissaoAdm = ({children}) => {
  return(
    usuarioAutenticado() && parseJwt().role === '1' ?
      children: <Navigate to="/login"/>
  )
}

const PermissaoColab = ({children}) => {
  return(
    usuarioAutenticado() && parseJwt().role === '2' ?
      children: <Navigate to="/login"/>
  )
}

const routing = (
  <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='adm' element={<PermissaoAdm><Adm/></PermissaoAdm>}/>
        <Route path='home' element={<PermissaoColab><Home/></PermissaoColab>}/>
        <Route path='adm/home' element={<PermissaoAdm><Home/></PermissaoAdm>}/>
        <Route path='adm/aluno' element={<PermissaoAdm><Aluno/></PermissaoAdm>}/>
        <Route path='aluno' element={<PermissaoColab><Aluno/></PermissaoColab>}/>
        <Navigate to={Login}/>
      </Routes>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
