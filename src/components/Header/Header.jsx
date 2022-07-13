import PropTypes from 'prop-types';
import { SearchBar } from '../SearchBar';
import { Button } from '../Button';
import './Header.css';

export const Header = (props) => {
  const {
    setShowForm,
    setFormStatus,
    searchValue,
    setSearchValue,
    isEmptyList,
  } = props;
  const handleShowForm = () => {
    setShowForm(true);
    setFormStatus('new');
  };
  return (
    <section className='header'>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Button
        type='new'
        onClick={handleShowForm}
        className={isEmptyList ? 'button-empty-table' : ''}
      >
        Nuevo
      </Button>
    </section>
  );
};

Header.propTypes = {
  setShowForm: PropTypes.func,
  setFormStatus: PropTypes.func,
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  isEmptyList: PropTypes.bool,
};
