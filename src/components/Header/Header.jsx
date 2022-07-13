import PropTypes from 'prop-types';
import { SearchBar } from '../SearchBar';
import { Button } from '../Button';
import './Header.css';

export const Header = (props) => {
  const { setShowForm, setFormStatus, searchValue, setSearchValue } = props;
  const handleShowForm = () => {
    setShowForm(true);
    setFormStatus('new');
  };
  return (
    <section className='header'>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Button type='new' onClick={handleShowForm}>
        Nuevo
      </Button>
    </section>
  );
};

Header.propTypes = {};
