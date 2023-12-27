// import css from './registerPage.module.css';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { registerThank } from 'store/authorization/thank';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const register = user => {
    dispatch(registerThank(user));
    console.log(user);
  };

  return <RegisterForm register={register} />;
};

export default RegisterPage;
