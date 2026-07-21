import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Common/Container';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Contact Us | Aliens Hub</title>
      </Helmet>
      <Container>
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p>Get in touch with us...</p>
      </Container>
    </div>
  );
};
