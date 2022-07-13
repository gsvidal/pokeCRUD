import { updatePokemon } from '../services/put/updatePokemon';
import { useDispatch } from 'react-redux';
import { setEditedPokemon } from '../redux/pokemonSlice';

const useUpdatePokemon = (pokemon, id) => {
  const dispatch = useDispatch();
  const editPokemon = async () => {
    try {
      const response = await updatePokemon(pokemon, id);
      console.log('this is gonna be dispatched updated', response);
      dispatch(setEditedPokemon(response));
    } catch (error) {
      console.error(error);
    }
  };
  return { editPokemon };
};

export default useUpdatePokemon;
