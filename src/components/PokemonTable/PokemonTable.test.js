import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { PokemonTable } from './PokemonTable';
import { getPokemon } from '../../services/get/getPokemon';

describe('when PokemonTable is rendered', () => {
  beforeEach(() => {
    render(<PokemonTable />);
  });
  it('should exist 5 columns', () => {
    expect(screen.queryAllByTestId('th').length).toBe(5);
  });
  it("the 5 columns have to be labeled as: 'Nombre', 'Imagen', 'Ataque', 'Defensa' y 'Acciones'", () => {
    const headers = ['Nombre', 'Imagen', 'Ataque', 'Defensa', 'Acciones'];
    headers.map((header, i) =>
      expect(screen.queryAllByTestId('th')[i]).toHaveTextContent(headers[i])
    );
  });
  it('should fetch list of pokemons succesfully', async () => {
    const pokemonListAPI = await screen.getAllByTestId('row-list');
    expect(pokemonListAPI).not.toHaveLength(0);
  });
});
