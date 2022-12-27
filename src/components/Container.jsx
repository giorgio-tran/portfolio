/* eslint-disable react/prop-types */
import React from 'react';

const Container = ({ children }) => (
  <div className="w-full max-w-screen-xl flex flex-col align-middle mx-auto px-5 py-10">
    { children }
  </div>
);

export default Container;
