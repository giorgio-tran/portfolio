/* eslint-disable react/prop-types */
import { Link } from 'gatsby-link';
import React from 'react';

const Container = ({ children }) => (
  <div className="w-full max-w-screen-md flex flex-col align-middle mx-auto px-5 py-10">
    { children }
    <div className="text-right pt-20">
      <Link to="/">Giorgio Tran &copy; 2023</Link>
    </div>
  </div>
);

export default Container;
