import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';

describe('when the Header component is mounted', () => {
  beforeEach(() => {
    render(<Header />);
  });
  it('must be a create button ( + Nuevo )', () => {
    expect(screen.getByRole('button', { name: /nuevo/i })).toBeInTheDocument();
  });
});
