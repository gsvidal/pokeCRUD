import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useGetPokemon from '../../hooks/useGetPokemon';
import useDeletePokemon from '../../hooks/useDeletePokemon';
import './PokemonTable.css';

export const PokemonTable = (props) => {
  const {
    setShowForm,
    setFormStatus,
    setEditPokemonId,
    setShowSuccess,
    searchValue,
  } = props;
  const { fetchPokemonList } = useGetPokemon();
  const pokemons = useSelector((store) => store.pokemons);
  const { isLoading } = useSelector((store) => store.loader);
  console.log(isLoading);
  const [pokemonIdToDelete, setPokemonIdToDelete] = useState('');

  const { removePokemon } = useDeletePokemon(pokemonIdToDelete);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const handleEditPokemon = (id) => {
    setShowForm(true);
    setFormStatus('edit');
    setEditPokemonId(id);
  };

  pokemonIdToDelete !== '' && removePokemon();

  console.log('lista de pokemon para la tabla:', pokemons);

  const pokemonsFiltered = pokemons.filter((pokemon) =>
    pokemon.name.includes(searchValue.toLocaleLowerCase())
  );

  // useEffect(() => {
  //   setShowSuccess(true);
  //   setTimeout(() => {
  //     setShowSuccess(false);
  //   }, 5000);
  // }, [pokemons]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <table className='table'>
        <thead className='table__head'>
          <tr className='table__row'>
            <th data-testid='th' className='table__header'>
              Nombre
            </th>
            <th data-testid='th' className='table__header'>
              Imagen
            </th>
            <th data-testid='th' className='table__header'>
              Ataque
            </th>
            <th data-testid='th' className='table__header'>
              Defensa
            </th>
            <th data-testid='th' className='table__header'>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {pokemons.length !== 0 ? (
            pokemonsFiltered.map((pokemon) => (
              <tr
                className='table__row'
                data-testid='row-list'
                key={pokemon.id}
              >
                <td className='table__data'>{pokemon.name}</td>
                <td className='table__data table__img'>
                  <img src={pokemon.image} alt='Ivisaur"s pic' width='30' />
                </td>
                <td className='table__data'>{pokemon.attack}</td>
                <td className='table__data'>{pokemon.defense}</td>
                <td className='table__data table__icons'>
                  <span
                    className='table__action table__action--edit'
                    onClick={() => handleEditPokemon(pokemon.id)}
                  ></span>
                  <span
                    className='table__action table__action--delete'
                    onClick={() => setPokemonIdToDelete(pokemon.id)}
                  ></span>
                </td>
              </tr>
            ))
          ) : (
            <tr className='table__row' data-testid='row-empty-list'>
              <td className='table__no-data' colSpan='5'>
                <span className='table__no-data-icon'></span>
                <p>Aún no tienes ningún pokemon, atrápalos ya!</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
};

PokemonTable.propTypes = {};
