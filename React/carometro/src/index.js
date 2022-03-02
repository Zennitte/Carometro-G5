import React from 'react';
import ReactDOM from 'react-dom';

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom'

import './index.css';

import { parseJwt, usuarioAutenticado } from './services/auth';

import Login from './pages/login/login'
import Home from './pages/home/home'
import Adm from './pages/adm/adm'
import Aluno from './pages/aluno/aluno'


import reportWebVitals from './reportWebVitals';

const PermissaoAdm = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '1' ? (
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);

const PermissaoColab = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '2' ? (
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);


const routing = (
  <Router>
    <div>
    <Switch>
        <Route exact path="/" component = {Login}/>
        <Route path ="/login" component ={Login}/>
        <PermissaoAdm path = "/adm" component = {Adm}/>
        <PermissaoAdm path = "/adm/home" component={Home}/>
        {/* <PermissaoColab path = "/home" component={Home}/> */}
        <Route path = "/home" component={Home}/>
        <PermissaoAdm path = "/adm/aluno" component={Aluno}/>
        <PermissaoColab path = "/aluno" component={Aluno}/>
        <Redirect to={Login}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
