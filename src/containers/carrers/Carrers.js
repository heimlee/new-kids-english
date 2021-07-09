import React from 'react';

import './carrers.scss';

export const Carrers = () => {
  return(
    <section id="carrers" className="carrers-wrapper">
      <div className="carrers-container">
        <h1 className="carrers-title">Carrers at New Kids English</h1>
        <div className="vacancy">
          <h3 className="vacancy-type">We need teachers:</h3>
          <div className="vacancy-item">
            <span className="vacancy-item__icon">
              <i className="fas fa-chalkboard-teacher"></i>
            </span>
            <p>English teacher for children</p>
          </div>
          <div className="vacancy-item">
            <span className="vacancy-item__icon">
              <i className="fas fa-chalkboard-teacher"></i>
            </span>
            <p>English teacher for adults</p>
          </div>
        </div>
        <div className="carrers-contact">
          <div className="carrers-text">If you want to work with us, then contact us:</div>
          <div className="contact">
            <i className="fas fa-phone-alt"></i>
            <p className="contact-value">+38(067)-10-01-580</p>
          </div>
          <div className="contact">
            <i className="far fa-envelope"></i>
            <p className="contact-value">newkidsenglish@gmail.com</p>
          </div>
        </div>

      </div>
    </section>
  );
};
