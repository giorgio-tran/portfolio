/* eslint-disable react/prop-types */
import React from 'react';

const Container = ({ children }) => (
  <div className="w-full max-w-screen-md flex flex-col align-middle mx-auto px-5 py-10">
    { children }
    <div className="text-right pt-20">
      Giorgio Tran &copy; 2022
    </div>
  </div>
);

export default Container;
