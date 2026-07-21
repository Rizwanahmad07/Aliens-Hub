import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Common/Container';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Project Details | Aliens Hub</title>
      </Helmet>
      <Container>
        <h1 className="text-4xl font-bold mb-6">Project Details</h1>
        <p>Details for project ID: {id}</p>
      </Container>
    </div>
  );
};
