// import css from './registerPage.module.css';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThank } from 'store/authorization/thank';

const RegisterPage = () => {
  const isAuthorization = useSelector(state => state.authorization.token);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const register = user => {
    dispatch(registerThank(user));
  };

  useEffect(() => {
    isAuthorization && navigate('/');
  }, [isAuthorization, navigate]);

  return <RegisterForm register={register} />;
};

export default RegisterPage;
