import { getPokemon } from '../services/get/getPokemon';
import { getPokemonList } from '../redux/pokemonSlice';
import { hideLoader } from '../redux/loadingSlice';
import { useDispatch } from 'react-redux';

const useGetPokemon = () => {
  const dispatch = useDispatch();
  const fetchPokemonList = async () => {
    try {
      const response = await getPokemon();
      dispatch(getPokemonList(response));
      dispatch(hideLoader());
    } catch (error) {
      console.error(error);
    }
  };
  return { fetchPokemonList };
};

export default useGetPokemon;
