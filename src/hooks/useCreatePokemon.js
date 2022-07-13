import { createPokemon } from '../services/post/createPokemon';
import { useDispatch } from 'react-redux';
import { setNewPokemon } from '../redux/pokemonSlice';

const useCreatePokemon = (pokemon) => {
  const dispatch = useDispatch();
  const setPokemon = async () => {
    console.log(pokemon);
    try {
      const response = await createPokemon(pokemon);
      console.log('this is gonna be dispatched', response);
      dispatch(setNewPokemon(response));
      //dispatch(hasSucced())
    } catch (error) {
      console.error(error);
    }
  };
  return { setPokemon };
};

export default useCreatePokemon;
