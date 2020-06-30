import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
     <Header/>
     <Form/>
     <Section/>
     <Footer/>
    </div>
  );
}

export default App;
