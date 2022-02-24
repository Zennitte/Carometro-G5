import React from 'react';
import ReactDOM from 'react-dom';

import {
  Route,
  BrowserRouter as Router,
  Navigate,
  Routes
} from 'react-router-dom'

import './index.css';

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Routes>
      </Routes>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
