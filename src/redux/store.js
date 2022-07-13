import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './pokemonSlice';
import loadingReducer from './loadingSlice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    loader: loadingReducer,
  },
});
