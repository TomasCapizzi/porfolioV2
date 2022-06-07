import './Styles/main.scss';

import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import LanguageContextProvider from './components/Languagecontext/LanguageContext';
import Navbar from './components/Navbar';
import React from 'react';
import Routing from './components/Routing';

function App() {

  return (
    <div className="app">
      <LanguageContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routing/>
          <Footer/>
        </BrowserRouter>
      </LanguageContextProvider>
    </div>
  );
}

export default App;