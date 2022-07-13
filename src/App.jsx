import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { PokemonTable } from './components/PokemonTable';
import { PokemonForm } from './components/PokemonForm';
import { Toaster } from './components/Toaster';
import { useSelector } from 'react-redux';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [editPokemonId, setEditPokemonId] = useState(-1);
  const [searchValue, setSearchValue] = useState('');
  const [isEmptyList, setIsEmptyList] = useState(false);

  const { hasCreationSucceed, hasUpdateSucceed, hasDeleteSucceed } =
    useSelector((store) => store.success);

  return (
    <div className='App'>
      <Header
        setShowForm={setShowForm}
        setFormStatus={setFormStatus}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isEmptyList={isEmptyList}
      />
      <PokemonTable
        setEditPokemonId={setEditPokemonId}
        showForm={showForm}
        setShowForm={setShowForm}
        setFormStatus={setFormStatus}
        searchValue={searchValue}
        setIsEmptyList={setIsEmptyList}
      />
      {showForm && (
        <PokemonForm
          setShowForm={setShowForm}
          formStatus={formStatus}
          editPokemonId={editPokemonId}
        />
      )}
      {hasCreationSucceed && <Toaster type='new' />}
      {hasUpdateSucceed && <Toaster type='update' />}
      {hasDeleteSucceed && <Toaster type='delete' />}
    </div>
  );
}

export default App;
