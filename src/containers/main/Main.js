import React from 'react';

import './main.scss';

export const Main = () => {
  return(
    <main className="main-wrapper">
      <div className="main-container">
        <div className="main-acrticle">
          <div className="main-title">Welcome to New Kids English Training Center</div>
          <p className="main-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam suscipit quas, sint assumenda itaque tenetur voluptate nesciunt possimus molestias aspernatur. Eos assumenda dolor magnam itaque necessitatibus totam dicta? Illo, quia.
          Neque ad dolorum at, nostrum exercitationem possimus odio hic alias blanditiis. Numquam laborum commodi labore unde fuga, minus eos, pariatur quasi dolore harum placeat sequi ullam corrupti voluptas tenetur quaerat!
          Corporis amet dolorum earum aliquid adipisci totam doloremque atque rerum, asperiores neque accusamus quibusdam libero illum voluptate necessitatibus sunt voluptatem repudiandae excepturi optio vitae officiis modi fugit. Expedita, mollitia dolorem?</p>
        </div>
        <div className="main-presentation">
          <div className="contacts">
            <div className="contact">
              <i className="fas fa-map-marker-alt"></i>
              <p className="contact-value">Teatralna St, 18, Kovel'</p>
            </div>
            <div className="contact">
              <i className="fas fa-phone-alt"></i>
              <p className="contact-value">+38(067)-10-01-580</p>
            </div>
            <div className="contact">
              <i className="far fa-envelope"></i>
              <p className="contact-value">newkidsenglish@gmail.com</p>
            </div>
            <div className="contact">
              <i className="fas fa-hourglass-half"></i>
              <p className="contact-value">10:00 - 19:00</p>
            </div>
          </div>
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.1023143131592!2d24.704981516300894!3d51.21719083970065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47243bf54255e10b%3A0xa53180823a2a1f38!2sNew%20Kids%20English!5e0!3m2!1sen!2sua!4v1618841560074!5m2!1sen!2sua" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    </main>
  );
};
