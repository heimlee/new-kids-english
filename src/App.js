import React from 'react';

import { Header } from './containers/header/Header';
import { Main } from './containers/main/Main';
import { Features } from './containers/features/Features';
import { Pricing } from './containers/pricing/Pricing';
import { AboutUs } from './containers/aboutUs/AboutUs';
import { Carrers } from './containers/carrers/Carrers';
import { Footer } from './containers/footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Features />
      <Pricing />
      <AboutUs />
      <Carrers />
      <Footer />
    </div>
  );
}

export default App;
