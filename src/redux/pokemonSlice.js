import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getPokemonList: (state, action) => (state = action.payload),
    setNewPokemon: (state, action) => {
      state.push(action.payload);
    },
    setEditedPokemon: (state, action) => {
      const { id, name, image } = action.payload;
      const pokemonToEdit = state.find((pokemon) => pokemon.id === id);
      if (pokemonToEdit) {
        pokemonToEdit.name = name;
        pokemonToEdit.image = image;
      }
    },
    setDeletePokemon: (state, action) => {
      const { id } = action.payload;
      console.log(state);
      const pokemonToDelete = state.find((pokemon) => pokemon.id === id);
      if (pokemonToDelete) {
        return state.filter((pokemon) => pokemon.id !== id);
      }
    },
  },
});

export const {
  getPokemonList,
  setNewPokemon,
  setEditedPokemon,
  setDeletePokemon,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
