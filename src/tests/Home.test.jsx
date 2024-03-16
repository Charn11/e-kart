import { render, screen } from '@testing-library/react';
import Header from '../components/header';
import { expect } from 'vitest';

describe('Home Screen', () => {
    it('renders homepage header', () => {
      render(<Header />);
      expect(screen.getByText('E-kart', 'Home', 'Shop')).toBeInTheDocument();
      expect(screen.getByRole('img', {  name: /cart/i})).toBeInTheDocument();
    });
    
    it('renders toggle theme button', async () => {
        render(<Header />);
        screen.debug();
        const element = screen.getByTestId("toggle");
        expect(element).toBeInTheDocument();
    });
  });