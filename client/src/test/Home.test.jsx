import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

/**
 * Home Page Tests
 * Basic rendering and content tests
 */
describe('Home Page', () => {
  it('should render the home page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Check if hero section renders
    expect(screen.getByText(/Transform Your/i)).toBeInTheDocument();
  });

  it('should have navigation links', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Check for CTA buttons
    const serviceLinks = screen.getAllByText(/services/i);
    expect(serviceLinks.length).toBeGreaterThan(0);
  });
});
