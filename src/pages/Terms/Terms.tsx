import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Common/Container';

export const Terms: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Terms & Conditions | Aliens Hub</title>
      </Helmet>
      <Container>
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
        <p>Terms of service...</p>
      </Container>
    </div>
  );
};
