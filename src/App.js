import React from 'react';

import { Header } from './containers/header/Header';
import { Main } from './containers/main/Main';
import { Features } from './containers/features/Features';


import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Features />
    </div>
  );
}

export default App;
