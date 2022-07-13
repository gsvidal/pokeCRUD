import { deletePokemon } from '../services/delete/deletePokemon';
import { useDispatch } from 'react-redux';
import { setDeletePokemon } from '../redux/pokemonSlice';

const useDeletePokemon = (id) => {
  const dispatch = useDispatch();
  const removePokemon = async () => {
    console.log('its id', id);
    try {
      const responseId = await deletePokemon(id);
      console.log('this is gonna be dispatched after deleted', responseId);
      dispatch(setDeletePokemon({ id: responseId }));
    } catch (error) {
      console.error(error);
    }
  };
  return { removePokemon };
};

export default useDeletePokemon;
