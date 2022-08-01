import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useGetPokemon from '../../hooks/useGetPokemon';
import useDeletePokemon from '../../hooks/useDeletePokemon';
import './PokemonTable.css';
import { Loader } from '../Loader';

export const PokemonTable = (props) => {
  const {
    showForm,
    setShowForm,
    setFormStatus,
    setEditPokemonId,
    searchValue,
    setIsEmptyList,
  } = props;

  const [pokemonIdToDelete, setPokemonIdToDelete] = useState('');

  const pokemons = useSelector((store) => store.pokemons);
  const { isLoading } = useSelector((store) => store.loader);

  const { fetchPokemonList } = useGetPokemon();
  const { removePokemon } = useDeletePokemon(pokemonIdToDelete);

  const [showImage, setShowImage] = useState(false);
  const [pokemonIndexImage, setPokemonIndexImage] = useState(-1)

  const handleShowImage = (index) => {
    setPokemonIndexImage(index);
    setShowImage(showImage => !showImage);
  }

  // useEffect(() => {
  //   console.log(pokemonIndexImage);
    
  // }, [pokemonIndexImage])

  useEffect(() => {
    fetchPokemonList();
  }, []);

  useEffect(() => {
    if (pokemons.length === 0) {
      setIsEmptyList(true);
    } else {
      setIsEmptyList(false);
    }
  }, [pokemons]);

  const handleEditPokemon = (id) => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
      setFormStatus('edit');
      setEditPokemonId(id);
    }
  };

  useEffect(() => {
    if (pokemonIdToDelete) {
      removePokemon();
    }
  }, [pokemonIdToDelete]);

  const pokemonsFiltered = pokemons.filter((pokemon) =>
    pokemon.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  if (isLoading) {
    return <Loader />;
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
          {pokemons.length === 0 || pokemonsFiltered.length === 0 ? (
            <tr className='table__row' data-testid='row-empty-list'>
              <td className='table__no-data' colSpan='5'>
                <span className='table__no-data-icon'></span>
                {pokemons.length === 0 && (
                  <p>
                    Aún no tienes ningún pokemon, <strong>atrápalos ya!</strong>
                  </p>
                )}
                {pokemons.length !== 0 && pokemonsFiltered.length === 0 && (
                  <p>
                    No tienes ningún pokemon que coincida con tu{' '}
                    <span className='table__no-data-msg'>
                      criterio de busqueda
                    </span>
                  </p>
                )}
              </td>
            </tr>
          ) : (
            pokemonsFiltered.map((pokemon,i, arr) => (
              <tr
                className='table__row'
                data-testid='row-list'
                key={pokemon.id}
              >
                <td className='table__data'>{pokemon.name}</td>
                <td className='table__data table__img'>
                  <img
                    src={pokemon.image}
                    alt={`${pokemon.name}'s pic`}
                    width='43'
                    onClick={() =>  handleShowImage(i)}
                  />
                  {showImage &&
                    <section className='table__modal'>
                      <figure className='table__modal-img-container'>
                       <figcaption>{arr[pokemonIndexImage].name}</figcaption> 
                        <img className='table__modal-img' src={arr[pokemonIndexImage].image} alt={`${arr[pokemonIndexImage].name}'s pic`} width="100" height="100" />
                        <span className='table__modal-icon' onClick={() => handleShowImage(pokemonIndexImage)}></span>
                      </figure>
                    </section>
                  }
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
          )}
        </tbody>
      </table>
    );
  }
};

PokemonTable.propTypes = {
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func,
  setFormStatus: PropTypes.func,
  setEditPokemonId: PropTypes.func,
  searchValue: PropTypes.string,
  setIsEmptyList: PropTypes.func,
};
