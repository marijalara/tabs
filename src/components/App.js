import React from 'react';
import Navbar from './Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Header from './Header';

const App = () => {
    return (
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/projects' exact element={<Projects />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
      </Router>
    )
}

export default App
