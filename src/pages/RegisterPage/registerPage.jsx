// import css from './registerPage.module.css';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authorizationSelect } from 'store/authorization/selectors';

const RegisterPage = () => {
  const isAuthorization = useSelector(authorizationSelect);
  const navigate = useNavigate();

  useEffect(() => {
    isAuthorization && navigate('/');
  }, [isAuthorization, navigate]);

  return <RegisterForm />;
};

export default RegisterPage;
