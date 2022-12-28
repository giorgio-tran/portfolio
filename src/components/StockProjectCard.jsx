import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-link';
import Pill from './Pill';

const StockProjectCard = ({ project }) => (
  <div className="w-full py-10 grid md:grid-cols-6 md:gap-10">
    <div className="md:col-span-2 flex flex-auto pb-2">
      <img className="w-full h-full object-contain" alt="project" src={project.image} />
    </div>
    <div className="md:col-span-4 flex flex-col gap-3">
      <Link to={project.link} className="w-fit border-b-2 border-b-noire-black hover:border-b-2 hover:border-b-noire-beige">
        <h1 className="text-3xl">{project.title}</h1>
      </Link>
      <div className="flex gap-2 flex-wrap">
        {project.tech.map((data) => (<Pill data={data} />))}
      </div>
      <p className="text-xl">{project.description}</p>
    </div>
  </div>
);

StockProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    tech: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default StockProjectCard;
