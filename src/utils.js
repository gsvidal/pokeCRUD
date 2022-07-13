export const randomHP = () => {
  return Math.floor(Math.random() * 100);
};

export const randomPokemonType = () => {
  const pokemonTypes = [
    'grass',
    'fire',
    'ground',
    'flame',
    'electric',
    'water',
    'rock',
    'flying',
    'ice',
    'normal',
    'bug',
    'ghost',
    'fighting',
    'dragon',
    'psychic',
  ];
  return pokemonTypes[Math.floor(Math.random() * pokemonTypes.length)];
};
