import { useState, useEffect } from 'react';
import './PokemonForm.css';
import { TextInput } from '../TextInput';
import { RangeInput } from '../RangeInput';
import { Button } from '../Button';
import useCreatePokemon from '../../hooks/useCreatePokemon';
import useUpdatePokemon from '../../hooks/useUpdatePokemon';
import { useSelector } from 'react-redux';
import { randomHP } from '../../utils';
import { randomPokemonType } from '../../utils';
import PropTypes from 'prop-types';

export const PokemonForm = (props) => {
  const { setShowForm, formStatus, editPokemonId } = props;

  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

  const pokemons = useSelector((store) => store.pokemons);
  const pokemonToEdit = pokemons.filter(
    (pokemon) => pokemon.id === editPokemonId
  )[0];

  const [values, setValues] = useState({
    name: formStatus === 'new' ? '' : pokemonToEdit?.name,
    image: formStatus === 'new' ? '' : pokemonToEdit?.image,
    attack: formStatus === 'new' ? 50 : pokemonToEdit?.attack,
    defense: formStatus === 'new' ? 50 : pokemonToEdit?.defense,
    hp: formStatus === 'new' ? randomHP() : pokemonToEdit?.hp,
    type: formStatus === 'new' ? randomPokemonType() : pokemonToEdit?.type,
  });

  const { setPokemon } = useCreatePokemon({
    name: values.name,
    image: values.image,
    attack: values.attack,
    defense: values.defense,
    hp: values.hp,
    type: values.type,
    idAuthor: 24,
  });

  const { editPokemon } = useUpdatePokemon(
    {
      name: values.name,
      image: values.image,
      attack: values.attack,
      defense: values.defense,
      hp: values.hp,
      type: values.type,
      idAuthor: 24,
    },
    pokemonToEdit?.id
  );

  useEffect(() => {
    if (values.name !== '' && values.image !== '') {
      setSaveButtonDisabled(false);
    } else {
      setSaveButtonDisabled(true);
    }
  }, [values.name, values.image]);

  const handleSavePokemon = () => {
    //Custom hooks for new/editing pokemons
    formStatus === 'new' ? setPokemon() : editPokemon();
    setShowForm(false);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const title =
    formStatus === 'new' ? 'Nuevo' : formStatus === 'edit' && 'Editar';
  const edit = formStatus !== 'new' ? 'edición' : '';

  return (
    <div className='pokemon-form'>
      <h2 className='pokemon-form__title'>{title} Pokemon</h2>
      <div className='inputs-container'>
        <div className='text-inputs'>
          <TextInput
            label='Nombre:'
            value={values.name}
            onChange={(e) => {
              setValues({ ...values, name: e.target.value });
            }}
            inputProps={{ type: 'text', placeholder: 'Nombre de tu pokemon' }}
          />
          <TextInput
            label='Imagen:'
            value={values.image}
            onChange={(e) => setValues({ ...values, image: e.target.value })}
            inputProps={{ type: 'text', placeholder: 'Url de tu pokemon' }}
          />
        </div>
        <div className='range-inputs'>
          <RangeInput
            label='Ataque:'
            value={values.attack}
            onChange={(e) =>
              setValues({ ...values, attack: Number(e.target.value) })
            }
            inputProps={{ type: 'range' }}
          />
          <RangeInput
            label='Defensa:'
            value={values.defense}
            onChange={(e) =>
              setValues({ ...values, defense: Number(e.target.value) })
            }
            inputProps={{ type: 'range' }}
          />
        </div>
      </div>
      <div className='buttons-container'>
        <Button
          type='save'
          onClick={handleSavePokemon}
          disabled={saveButtonDisabled}
        >{`Guardar ${edit}`}</Button>
        <Button
          type='cancel'
          onClick={handleCloseForm}
        >{`Cancelar ${edit}`}</Button>
      </div>
    </div>
  );
};

PokemonForm.propTypes = {
  setShowForm: PropTypes.func,
  formStatus: PropTypes.string,
  editPokemonId: PropTypes.number,
};
