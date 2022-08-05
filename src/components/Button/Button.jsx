import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = (props) => {
  const { type, onClick, disabled, className } = props;
  return (
    <button
      onClick={onClick}
      type='button'
      className={`button ${disabled ? ' button--disabled' : ''} ${className}`}
      disabled={disabled}
    >
      <span className={`button__icon button__icon--${type}`}></span>
      <p className='button__text'>{props.children}</p>
    </button>
  );
};

Button.defaultProps = {
  type: 'header',
  disabled: false
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
