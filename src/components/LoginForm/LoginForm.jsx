import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { loginThank } from 'store/authorization/thanks';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const login = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(loginThank(login));
  };
  return (
    <div className={css.loginForm}>
      <form onSubmit={handleSubmit}>
        <div className={css.loginBlock}>
          <label className={css.loginFormLable}>Email Address:</label>
          <input
            className={css.loginInputForm}
            type="email"
            name="email"
            pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
            title="Email must contain the '@' symbol as well as a period. For example mango@gmail.com"
            required
          />
          <label className={css.loginFormLable}>Password:</label>
          <input
            className={css.loginInputForm}
            type="password"
            name="password"
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
