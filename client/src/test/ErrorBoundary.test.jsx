import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../components/utils/ErrorBoundary';

/**
 * ErrorBoundary Component Tests
 * Ensures error handling works correctly
 */
describe('ErrorBoundary', () => {
  // Test component that throws an error
  const ThrowError = () => {
    throw new Error('Test error');
  };

  const GoodComponent = () => <div>Working Component</div>;

  it('should render children when there is no error', () => {
    render(
      <BrowserRouter>
        <ErrorBoundary>
          <GoodComponent />
        </ErrorBoundary>
      </BrowserRouter>
    );

    expect(screen.getByText('Working Component')).toBeInTheDocument();
  });

  it('should render error UI when child component throws', () => {
    // Suppress console.error for this test
    const consoleError = console.error;
    console.error = () => {};

    render(
      <BrowserRouter>
        <ErrorBoundary>
          <ThrowError />
        </ErrorBoundary>
      </BrowserRouter>
    );

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    expect(screen.getByText(/Try Again/i)).toBeInTheDocument();

    // Restore console.error
    console.error = consoleError;
  });
});
