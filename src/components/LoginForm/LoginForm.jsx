import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <div className={css.loginForm}>
      <form onSubmit={handleSubmit}>
        <div className={css.loginBlock}>
          <label className={css.loginFormLable}>Email address</label>
          <input
            className={css.loginInputForm}
            type="email"
            name="email"
            // value={name}
            // onChange={handleChange}
            //pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.loginFormLable}>Password</label>
          <input
            className={css.loginInputForm}
            type="password"
            name="password"
            // value={password}
            // onChange={handleChange}
            //pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.loginBtn} type="submit">
            Login
          </button>
        </div>
        <div className={css.loginLinks}>
          <Link to="/register">Registration</Link>
          <Link to="/">Home</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
