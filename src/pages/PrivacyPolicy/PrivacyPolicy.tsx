import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Common/Container';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Privacy Policy | Aliens Hub</title>
      </Helmet>
      <Container>
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p>Your privacy matters...</p>
      </Container>
    </div>
  );
};
