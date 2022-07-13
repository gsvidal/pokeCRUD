import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { PokemonTable } from './components/PokemonTable';
import { PokemonForm } from './components/PokemonForm';
import { SuccessToaster } from './components/SuccessToaster';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [editPokemonId, setEditPokemonId] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='App'>
      <Header
        setShowForm={setShowForm}
        setFormStatus={setFormStatus}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <PokemonTable
        setEditPokemonId={setEditPokemonId}
        setShowForm={setShowForm}
        setFormStatus={setFormStatus}
        setShowSuccess={setShowSuccess}
        searchValue={searchValue}
      />
      {showForm && (
        <PokemonForm
          setShowForm={setShowForm}
          formStatus={formStatus}
          editPokemonId={editPokemonId}
        />
      )}
      {showSuccess && <SuccessToaster />}
    </div>
  );
}

export default App;
