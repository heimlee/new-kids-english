import React from 'react';

import { Header } from './containers/header/Header';
import { Main } from './containers/main/Main';


import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

export default App;
