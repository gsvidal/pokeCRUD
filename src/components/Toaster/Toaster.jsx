import './Toaster.css';
import PropTypes from 'prop-types';

export const Toaster = (props) => {
  const { type } = props;
  const text =
    type === 'new' ? 'creado' : type === 'update' ? 'editado' : 'borrado';
  return (
    <p
      className={`toaster toaster--${type}`}
    >{`Pokemon ${text} exitosamente!`}</p>
  );
};

Toaster.propTypes = {
  type: PropTypes.string,
};
