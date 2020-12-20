import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mb-8 text-gray-800">
    <section className="mx-auto my-20 py-24 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Contact Us</h3>
      <div className="flex flex-col sm:flex-row lg:px-24">
        <div className="w-full sm:w-1/3">
	  <p className="mt-8 font-light">
            Email: <a href="mailto:contact@siliconnomads.com">contact@siliconnomads.com</a>
	  </p>
        </div>
        <div className="w-full sm:w-1/3">
	  <p className="mt-8 font-light">
            Phone: <a href="tel:+252633053881"> +252633053881 </a> / <a href="tel:+252636076483">+252636076483</a>
	  </p>
        </div>
        <div className="w-full sm:w-1/3">
	  <p className="mt-8 font-light">
            Address: Barkulan, Hargiesa Somaliland.
	  </p>
        </div>
      </div>
    </section>
    <div className="flex sm:flex-row -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">Silicon nomads are a group of young people hailing from Somaliland (The Jewel of Horn of Africa).</p>
      </div>
      <div className="flex-1 px-3"></div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://facebook.com/siliconnomads" target="blank">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/siliconnomads" target="blank">Twitter</a>
          </li>
          <li>
            <a href="https://Instagram.com/siliconnomads" target="blank">Instagram</a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <p>Built with <span style={{ color: 'red' }}>&hearts;</span> @ <a href="https://teckave.com">Teckave</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;
