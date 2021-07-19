import React from 'react';

import { ModalWindow } from './components/modalWindow/ModalWindow';
import { HeaderSocial } from './components/headerSocial/HeaderSocial';

import './header.scss';

export const Header = () => {
  return(
    <header className="header">
      <div className="header-nav">
        <div className="header-nav__links">
          <ModalWindow />
          <a href="/#" className="header-nav__logo" title="Home">New Kids English</a>
          <a href="/#features" className="header-nav__link" title="What do we offer?">Our Features</a>
          <a href="/#pricing" className="header-nav__link" title="Price">Pricing</a>
          <a href="/#about-us" className="header-nav__link" title="About Us">About Us</a>
          <a href="/#carrers" className="header-nav__link" title="Carrers at New Kids English">Carrers</a>
        </div>
        <HeaderSocial />
      </div>
    </header>
  );
};
