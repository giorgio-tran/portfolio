import React from 'react';
import PropTypes from 'prop-types';

const LinkNewTab = ({ link, text }) => (
  <a href={link} target="_blank" rel="noreferrer noopener">
    {text}
  </a>
);

LinkNewTab.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LinkNewTab;
