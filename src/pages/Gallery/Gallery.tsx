import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Common/Container';

export const Gallery: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Gallery | Aliens Hub</title>
      </Helmet>
      <Container>
        <h1 className="text-4xl font-bold mb-6">Gallery</h1>
        <p>Our beautiful gallery...</p>
      </Container>
    </div>
  );
};
