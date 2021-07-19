import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';

export const HeaderSocial = () => {
  return(
    <div className="header-social">
      <a className="instagram" href="https://www.instagram.com/new_kids_english/" title="New Kids English in Instagram" target="_blank" rel="noreferrer">
        <InstagramIcon fontSize="large" />
        <p className="instagram-title">Our Instagram</p>
      </a>
    </div>
  );
};
