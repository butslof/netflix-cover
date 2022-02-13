import React from 'react';
import Home from './components/pages/Home';
import Watch from './components/pages/Watch';
import { Routes, Route} from "react-router-dom";
import './App.css';

export default () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="watch/:type/:id/" element={<Watch />} />
      </Routes>
    </div>
  );

} 