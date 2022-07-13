import axios from 'axios';
// import { pokemonListAdapter } from '../../adapters/pokemonListAdapter';
import { apiURL } from '../apiURL';

export const getPokemon = async () => {
  const response = await axios.get(`${apiURL}/?idAuthor=24`);
  const data = await response.data;
  console.log(data);
  return data;
};
