import { Link } from 'react-router-dom';
import css from './ErrorBackEnd.module.css';

const ErrorBackEnd = ({ errorBackEnd }) => {
  return (
    <div className={css.overlay}>
      <h1 className={css.overlayTitleError}>
        Ups! Error:{' '}
        <span className={css.overlayTitleErrorRed}>{errorBackEnd}</span>
      </h1>
      <div className={css.overlayLinks}>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default ErrorBackEnd;
