import React from 'react';
import PropTypes from 'prop-types';
import Pill from './Pill';

const ProjectCard = ({ project }) => (
  <div className="w-full py-4 flex gap-10">
    <div className="h-64 w-64">
      <img className="w-full h-full object-contain" alt="project" src={project.image} />
    </div>
    <div className="flex flex-col justify-center gap-3">
      <h1 className="text-3xl">{project.title}</h1>
      <div className="flex gap-2 flex-wrap">
        {project.tech.map((data) => (<Pill data={data} />))}
      </div>
      <p className="text-xl">{project.description}</p>
    </div>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    tech: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
