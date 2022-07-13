import './TextInput.css';

export const TextInput = ({ label, inputProps, onChange, value }) => {
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
