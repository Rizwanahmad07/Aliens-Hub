import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Common/Container';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-32 pb-16 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <Helmet>
        <title>404 - Not Found | Aliens Hub</title>
      </Helmet>
      <Container>
        <h1 className="text-6xl font-bold mb-4 text-[var(--color-primary)]">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--color-primary)] hover:bg-blue-800 transition-colors duration-300"
        >
          Return Home
        </Link>
      </Container>
    </div>
  );
};
