import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}