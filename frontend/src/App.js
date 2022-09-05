import './App.scss';
import Header from './components/layout/Header';
import React from 'react';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactMe from './pages/ContactMe';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="ContactMe" element={<ContactMe />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="Blog" element={<Blog />} />
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
