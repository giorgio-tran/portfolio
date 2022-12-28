import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children, site, github }) => (
  <header className="flex justify-between w-full pb-8">
    <h1 className="text-3xl md:text-6xl flex flex-col justify-end"> { children } </h1>
    <div className="flex flex-col justify-end">
      <a href={site} target="_blank" rel="noopener noreferrer">Project Site &rarr;</a>
      <a href={github} target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Header;
