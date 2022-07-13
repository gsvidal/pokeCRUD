import './RangeInput.css';
import PropTypes from 'prop-types';

export const RangeInput = (props) => {
  const { label, inputProps, onChange, value } = props;
  return (
    <div className='range'>
      <label htmlFor={label} className='range__label'>
        {label}
      </label>
      <span className='range__middle-value'>{value}</span>
      <span className='range__limits'>0</span>
      <input
        id={label}
        className='range__input'
        {...inputProps}
        onChange={onChange}
        value={value}
        min='0'
        max='100'
      />
      <span className='range__limits'>100</span>
    </div>
  );
};

RangeInput.propTypes = {
  label: PropTypes.string.isRequired,
  inputProps: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
};
