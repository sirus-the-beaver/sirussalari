import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}