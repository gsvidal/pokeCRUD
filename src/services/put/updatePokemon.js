import axios from 'axios';
import { apiURL } from '../apiURL';

export const updatePokemon = async (pokemon, pokemonId) => {
  try {
    const response = await axios.put(`${apiURL}/${pokemonId}`, pokemon);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
