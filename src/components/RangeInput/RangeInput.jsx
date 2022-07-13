import './RangeInput.css';

export const RangeInput = ({ label, inputProps, onChange, value }) => {
  return (
    <div className='range'>
      <label htmlFor={label} className='range__label'>
        {label}
      </label>
      <span>0</span>
      <input
        id={label}
        className='range__input'
        {...inputProps}
        onChange={onChange}
        value={value}
        min='0'
        max='100'
      />
      <span>100</span>
    </div>
  );
};
