import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Common/Container';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>About Us | Aliens Hub</title>
      </Helmet>
      <Container>
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p>Information about Aliens Hub...</p>
      </Container>
    </div>
  );
};
