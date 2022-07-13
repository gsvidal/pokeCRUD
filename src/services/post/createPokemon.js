import axios from 'axios';
import { apiURL } from '../apiURL';

export const createPokemon = async (pokemon) => {
  try {
    const response = await axios.post(`${apiURL}/?idAuthor=24`, pokemon);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
