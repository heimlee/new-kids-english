import React from 'react';

import './footer.scss';

export const Footer = () => {
  let d = new Date();
  let year = d.getFullYear();

  return(
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contacts">
          <div className="footer-contact">
            <span className="footer-contact__icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <p>Teatralna St, 18, Kovel'</p>
          </div>
          <div className="footer-contact">
            <span className="footer-contact__icon">
              <i className="fas fa-phone-alt"></i>
            </span>
            <p>+38(067)-10-01-580</p>
          </div>
          <div className="footer-contact">
            <span className="footer-contact__icon">
              <i className="far fa-envelope"></i>
            </span>
            <p>newkidsenglish@gmail.com</p>
          </div>
        </div>
        <div className="copyright">
          <span className="copyright-icon">
            <i className="far fa-copyright"></i>
          </span>
          <p>{year}</p>
        </div>
      </div>
    </footer>
  );
};
