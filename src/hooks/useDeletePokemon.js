import { deletePokemon } from '../services/delete/deletePokemon';
import { useDispatch } from 'react-redux';
import { setDeletePokemon } from '../redux/pokemonSlice';
import { deleteSuccess } from '../redux/successSlice';
import { afterDeleteSuccess } from '../redux/successSlice';

const useDeletePokemon = (id) => {
  const dispatch = useDispatch();
  const removePokemon = async () => {
    try {
      const responseId = await deletePokemon(id);
      dispatch(setDeletePokemon({ id: responseId }));
      dispatch(deleteSuccess());
      setTimeout(() => {
        dispatch(afterDeleteSuccess());
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  };
  return { removePokemon };
};

export default useDeletePokemon;
