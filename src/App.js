import './Styles/main.scss';

import { BrowserRouter } from 'react-router-dom';
import Container from './components/Navbar/Container';
import Footer from './components/Footer';
import LanguageContextProvider from './context//LanguageContext';
import React from 'react';
import Routing from './components/Routing';

function App() {

  return (
    <div className="app">
      <LanguageContextProvider>
        <BrowserRouter>
          <Container/>
          <Routing/>
          <Footer/>
        </BrowserRouter>
      </LanguageContextProvider>
    </div>
  );
}

export default App;