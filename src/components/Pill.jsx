import React from 'react';
import PropTypes from 'prop-types';

const Pill = ({ data }) => (
  <div className="h-fit w-fit px-4 py-0.5 rounded-md bg-noire-black text-noire-beige border border-noire-beige">{data}</div>
);

Pill.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Pill;
