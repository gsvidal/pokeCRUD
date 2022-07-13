import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './pokemonSlice';
import loadingReducer from './loadingSlice';
import successReducer from './successSlice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    loader: loadingReducer,
    success: successReducer,
  },
});
