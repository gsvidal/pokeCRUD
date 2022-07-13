import axios from 'axios';
import { apiURL } from '../apiURL';

export const deletePokemon = async (pokemonId) => {
  try {
    const response = await axios.delete(`${apiURL}/${pokemonId}`);
    console.log('this is what returns after delete', pokemonId);
    return pokemonId;
  } catch (error) {
    console.error(error);
  }
};
