import { render, screen, fireEvent } from '@testing-library/react';
import { expect, it, vitest } from 'vitest';
import Router from '../router';

describe('Home Screen', () => {

    it('renders  header, slide, categories and footer components', () => {
      const { container } = render(<Router />);
      const link = screen.getByRole('link', {name: /home/i})
      expect(link.textContent).toMatch('HOME');

      const matches = container.querySelectorAll('img');
      expect(matches).toHaveLength(6);
      matches.forEach((m) => {
        expect(m).toBeInTheDocument();
      });

      expect(screen.getByText(/categories/i)).toBeInTheDocument();
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    })

    it('on click of cart open cart popup',() => {
      const { container } = render(<Router />);
      const cart = screen.getByAltText('cart')
      fireEvent.click(cart);
      expect(screen.getByText(/Price/)).toBeInTheDocument();
    })

    it('renders products according to category when click on category in home', async () => {
      const mockedData = [{
        category: "men's clothing", description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1, image: "fake.jpg", price: 109.95, rating: {count: 120, rate: 3.9}, 
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" 
      }];

      vitest.spyOn(global, 'fetch').mockResolvedValue({
        json: vitest.fn().mockResolvedValue(mockedData)
      });

      render(<Router></Router>);
      const men = screen.getByAltText("men's clothing");
      fireEvent.click(men);
      expect(await screen.findByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')).toBeInTheDocument()
    })

    it('when click on shop link opens shop page', () => {
      render(<Router></Router>);
      const shop = screen.getByRole('link', {name: /shop/i})
      fireEvent.click(shop)
      expect(screen.getByText('Choose Category:')).toBeInTheDocument();
    })

  });