import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SearchBar } from './SearchBar';

describe('when SearchBar is rendered', () => {
  it('the title has to be shown within the component', () => {
    render(<SearchBar />);

    expect(
      screen.getByRole('heading', { name: /listado de pokemon/i })
    ).toBeInTheDocument();
  });

  it('the search input has to be shown within the component', () => {
    render(<SearchBar />);

    expect(screen.getByPlaceholderText(/buscar/i)).toBeInTheDocument();
  });
});
