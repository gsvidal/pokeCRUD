import './TextInput.css';
import PropTypes from 'prop-types';

export const TextInput = (props) => {
  const { label, inputProps, onChange, value } = props;
  return (
    <div className='text'>
      <label className='text__label' htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        className='text__input'
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  inputProps: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
