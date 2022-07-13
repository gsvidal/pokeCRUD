import PropTypes from 'prop-types';
import './SearchBar.css';

export const SearchBar = (props) => {
  const { searchValue, setSearchValue } = props;

  const handleSearchValue = (value) => {
    setSearchValue(value)
  }

  return (
    <section className='searchbar'>
      <h1 className='searchbar__title'>Listado de Pokemon</h1>
      <label htmlFor='search'>
        <span className='searchbar__icon'></span>
      </label>
      <input
        id='search'
        type='text'
        placeholder='Buscar'
        className='searchbar__input'
        onChange={(e)=> handleSearchValue(e.target.value)}
        value={searchValue}
      />
    </section>
  );
};

SearchBar.propTypes = {};
