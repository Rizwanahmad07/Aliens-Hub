import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Common/Container';
import projectsData from '../../data/projects.json';
import { Breadcrumb } from '../../components/Common/Breadcrumb';

export const Projects: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Our Projects | Aliens Hub</title>
      </Helmet>
      <Container>
        <div className="mb-8">
          <Breadcrumb items={[{ label: 'Projects' }]} />
        </div>
        <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <div key={project.id} className="border rounded-lg p-4">
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p>{project.location}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
