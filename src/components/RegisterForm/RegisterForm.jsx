import { Link } from 'react-router-dom';
import css from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';

const RegisterForm = ({ register }) => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(register(newUser));
  };
  return (
    <div className={css.registerForm}>
      <form onSubmit={handleSubmit}>
        <div className={css.registerBlock}>
          <label className={css.registerFormLable}>User Name</label>
          <input
            className={css.registerInputForm}
            type="text"
            name="name"
            // value={name}
            // onChange={handleChange}
            //pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.registerFormLable}>Email address</label>
          <input
            className={css.registerInputForm}
            type="email"
            name="email"
            // value={name}
            // onChange={handleChange}
            //pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.registerFormLable}>Password</label>
          <input
            className={css.registerInputForm}
            type="password"
            name="password"
            // value={password}
            // onChange={handleChange}
            //pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.registerBtn} type="submit">
            Registration
          </button>
        </div>
        <div className={css.registerLinks}>
          <Link to="/login">Login</Link>
          <Link to="/">Home</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
