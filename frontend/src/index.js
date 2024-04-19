import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Kontaktid from './pages/kontaktid';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/kontaktid" element={<Kontaktid />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)
