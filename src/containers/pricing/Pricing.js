import React from 'react';

import './pricing.scss';

export const Pricing = () => {
  return(
    <section id="pricing" className="pricing-wrapper">
      <div className="pricing-container">
        <h1 className="pricing-title">Pricing</h1>
        <div className="pricing-rows">
          <div className="single-package">
            <div className="single-package-title">"Smart Start" Pachage</div>
            <div className="single-package-price">
              <span className="single-price">50 &#8372; </span><span className="total-price">/ 150 &#8372;</span>
            </div>
            <div className="package-short-description">The best deal to try New Kids English: 3 different lessons only for 50 &#8372; each! Valid for 2 weeks.</div>
          </div>
          <div className="single-package">
            <div className="single-package-title">1 Lesson</div>
            <div className="single-package-price">
              <span className="single-price">100 &#8372;</span>
            </div>
          </div>
          <div className="single-package">
            <div className="single-package-title">5 Lessons</div>
            <div className="single-package-price">
              <span className="single-price">80 &#8372; </span><span className="total-price">/ 400 &#8372;</span>
            </div>
            <div className="package-short-description">Valid for 6 months. Each lessons only for 80 &#8372;!</div>
          </div>
          <div className="single-package">
            <div className="single-package-title">10 Lessons</div>
            <div className="single-package-price">
              <span className="single-price">70 &#8372; </span><span className="total-price">/ 700 &#8372;</span>
            </div>
            <div className="package-short-description">Valid for 6 months. Each lessons only for 70 &#8372;!</div>
          </div>
          <div className="single-package">
            <div className="single-package-title">25 Lessons</div>
            <div className="single-package-price">
              <span className="single-price">60 &#8372; </span><span className="total-price">/ 1500 &#8372;</span>
            </div>
            <div className="package-short-description">Valid for 6 months. Each lessons only for 60 &#8372;!</div>
          </div>
          <div className="single-package">
            <div className="single-package-title">50 Lessons</div>
            <div className="single-package-price">
              <span className="single-price">50 &#8372; </span><span className="total-price">/ 2500 &#8372;</span>
            </div>
            <div className="package-short-description">Valid for 6 months. Each lessons only for 50 &#8372;!</div>
          </div>
          <div className="single-package">
            <div className="single-package-title">I am Pro: 10 lessons for 15 days</div>
            <div className="single-package-price">
              <span className="single-price">40 &#8372; </span><span className="total-price">/ 400 &#8372;</span>
            </div>
            <div className="package-short-description">10 lessons to use for 15 days.</div>
          </div>
        </div>
      </div>
    </section>
  );
};
