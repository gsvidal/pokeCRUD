import { createPokemon } from '../services/post/createPokemon';
import { useDispatch } from 'react-redux';
import { setNewPokemon } from '../redux/pokemonSlice';
import { creationSuccess } from '../redux/successSlice';
import { afterCreationSuccess } from '../redux/successSlice';

const useCreatePokemon = (pokemon) => {
  const dispatch = useDispatch();
  const setPokemon = async () => {
    try {
      const response = await createPokemon(pokemon);
      dispatch(setNewPokemon(response));
      dispatch(creationSuccess());
      setTimeout(() => {
        dispatch(afterCreationSuccess());
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  };
  return { setPokemon };
};

export default useCreatePokemon;
