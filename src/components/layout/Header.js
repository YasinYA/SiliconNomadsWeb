import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Logo from '../../assets/images/logo.jpeg'

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
	  <img src={Logo} alt="Logo" />
        </div>
        Silicon Nomads
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#about">
          About
        </AnchorLink>
        <AnchorLink className="px-4" href="#programs">
          Programs
        </AnchorLink>
	<AnchorLink className="px-4" href="#events">
          Events
        </AnchorLink>
        <AnchorLink className="px-4" href="#contact">
          Contact
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
