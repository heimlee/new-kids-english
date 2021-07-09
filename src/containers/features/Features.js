import React from 'react';

import './features.scss';

export const Features = () => {
  return(
    <section id="features" className="features-wrapper">
      <div className="features-container">
        <h1 className="features-title">What do we offer?</h1>
        <div className="features-items">
          <div className="features-item">
            <span className="features-item__icon">
              <i className="fas fa-child"></i>
            </span>
            <p>English for children from 2 years</p>
          </div>
          <div className="features-item">
            <span className="features-item__icon">
              <i className="far fa-surprise"></i>
            </span>
            <p>100% correct pronunciation</p>
          </div>
          <div className="features-item">
            <span className="features-item__icon">
              <i className="fas fa-user-graduate"></i>
            </span>
            <p>Lessons for adults</p>
          </div>
          <div className="features-item">
            <span className="features-item__icon">
              <i className="fas fa-flag-usa"></i>
            </span>
            <p>Skype conference with USA</p>
          </div>
        </div>
      </div>
    </section>
  );
};
