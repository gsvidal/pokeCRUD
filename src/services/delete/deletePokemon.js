import axios from 'axios';
import { apiURL } from '../apiURL';

export const deletePokemon = async (pokemonId) => {
  try {
    axios.delete(`${apiURL}/${pokemonId}`);
    return pokemonId;
  } catch (error) {
    console.error(error);
  }
};
