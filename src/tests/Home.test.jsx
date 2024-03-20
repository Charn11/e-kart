import { render, screen, act, fireEvent} from '@testing-library/react';
import Header from '../components/header';
import Slideshow from '../components/slideshow';
import Category from '../components/category';
import HomeFooter from '../components/homeFooter';
import { expect, it, vitest, afterEach, vi } from 'vitest';
import { ThemeContext, App } from '../App';

describe('Home Screen', () => {
    /*it('renders homepage header', () => {
      render(<Header></Header>)
      expect(screen.getByText('E-kart', 'Home', 'Shop')).toBeInTheDocument();
      expect(screen.getByRole('img', {  name: /cart/i})).toBeInTheDocument();
    });
    
    it('renders toggle theme button', async () => {
      render(<Header />);
      const element = screen.getByTestId("toggle");
      expect(element).toBeInTheDocument();
    });*/

    afterEach(() => {
      vitest.useRealTimers();
    });

    it("renders sildeshow and check arrow clicks", async () => {
      vitest.useFakeTimers();
      render(<Slideshow />);
      expect(screen.getByRole('img')).toBeInTheDocument();

      act(() => {
        vitest.advanceTimersByTime(5000);
      });
      expect(screen.getByRole('img', {name: "samsung QLED TV"})).toBeInTheDocument();
      expect(screen.getByTestId('left', 'right')).toBeInTheDocument();

      const right = screen.getByTestId('right');
      fireEvent.click(right);
      expect(screen.getByRole('img', {name: "White Gold Plated Princess"})).toBeInTheDocument();
      fireEvent.click(right);
      expect(screen.getByRole('img', {name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"})).toBeInTheDocument();
    })

    it("renders list elements at the bottom of slides", () => {
      render(<Slideshow />)
      const liArr = screen.getAllByRole('listitem');
      expect(liArr[0].style.backgroundColor).toBe("white");
      expect(liArr[1].style.backgroundColor).not.toBe("white");
    })

    it("check if categories are dispalyed", () => {
      render(<Category />)
      expect(screen.getAllByRole("img")).toHaveLength(4);
    })

    it("renders footer text", () => {
      render(<HomeFooter />)
      expect(screen.getByText("© 2024 E-kart. All rights reserved.")).toBeInTheDocument();
    })
  });