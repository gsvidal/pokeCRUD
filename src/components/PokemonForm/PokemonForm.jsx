import { useState, useEffect } from 'react';
import './PokemonForm.css';
import { TextInput } from '../TextInput';
import { RangeInput } from '../RangeInput';
import { Button } from '../Button';
import useCreatePokemon from '../../hooks/useCreatePokemon';
import useUpdatePokemon from '../../hooks/useUpdatePokemon';
import { useSelector } from 'react-redux';

export const PokemonForm = (props) => {
  const { setShowForm, formStatus, editPokemonId } = props;

  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

  const pokemons = useSelector((store) => store.pokemons);
  const pokemonToEdit = pokemons.filter(
    (pokemon) => pokemon.id === editPokemonId
  )[0];
  // console.log(pokemonToEdit);
  // console.log(formStatus);

  const [values, setValues] = useState({
    name: formStatus === 'new' ? '' : pokemonToEdit.name,
    image: formStatus === 'new' ? '' : pokemonToEdit.image,
  });

  const { setPokemon } = useCreatePokemon({
    name: values.name,
    image: values.image,
    attack: 43,
    defense: 33,
    hp: 54,
    type: 'plant',
    idAuthor: 24,
  });

  const { editPokemon } = useUpdatePokemon(
    {
      name: values.name,
      image: values.image,
      attack: 43,
      defense: 33,
      hp: 54,
      type: 'plant',
      idAuthor: 24,
    },
    pokemonToEdit?.id
  );

  console.log(formStatus);

  useEffect(() => {
    if (values.name !== '' && values.image !== '') {
      setSaveButtonDisabled(false);
    } else {
      setSaveButtonDisabled(true);
    }
  }, [values.name, values.image]);

  const handleSavePokemon = () => {
    setValues({ name: '', image: '' });
    //Custom hooks for new/editing pokemons
    formStatus === 'new' ? setPokemon() : editPokemon();
    setShowForm(false);

    console.log(values);
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
            onChange={(e) => setValues({ ...values, name: e.target.value })}
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
            onChange={(e) => setValues({ ...values, attack: e.target.value })}
            inputProps={{ type: 'range' }}
          />
          <RangeInput
            label='Defensa:'
            value={values.defense}
            onChange={(e) => setValues({ ...values, defense: e.target.value })}
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

export default PokemonForm;
