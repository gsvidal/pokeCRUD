import { updatePokemon } from '../services/put/updatePokemon';
import { useDispatch } from 'react-redux';
import { setEditedPokemon } from '../redux/pokemonSlice';
import { updateSuccess } from '../redux/successSlice';
import { afterUpdateSuccess } from '../redux/successSlice';

const useUpdatePokemon = (pokemon, id) => {
  const dispatch = useDispatch();
  const editPokemon = async () => {
    try {
      const response = await updatePokemon(pokemon, id);
      dispatch(setEditedPokemon(response));
      dispatch(updateSuccess());
      setTimeout(() => {
        dispatch(afterUpdateSuccess());
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  };
  return { editPokemon };
};

export default useUpdatePokemon;
