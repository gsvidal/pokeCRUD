import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = (props) => {
  const { type, onClick, disabled } = props;
  return (
    <button
      onClick={onClick}
      type='button'
      className={`button button--${disabled && 'disabled'}`}
      disabled={disabled}
    >
      <span className={`button__icon button__icon--${type}`}></span>
      <p className='button__text'>{props.children}</p>
    </button>
  );
};
Button.defaultProps = {
  type: 'header',
};

Button.propTypes = {
  type: PropTypes.string,
};
