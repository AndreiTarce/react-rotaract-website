import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Proiecte from './components/proiecte/Proiecte'
import Membri from './components/membri/Membri'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import React from 'react';

function App() {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Proiecte />
    <Membri />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
