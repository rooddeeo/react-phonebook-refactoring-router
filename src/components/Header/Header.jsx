import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import css from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authorizationSelect } from 'store/authorization/selectors';
import { authorizationReducer } from 'store/authorization/authorizationSlice';

const Header = () => {
  const isAuthorization = useSelector(authorizationSelect);
  const navigate = useNavigate();
  const dispatch = useDispatch;
  const handleClick = () => {
    isAuthorization ? dispatch(authorizationReducer()) : navigate('/login');
  };
  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <ul className={css.headerList}>
          <li className={css.headerListItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={css.headerListItem}>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li className={css.headerListItem}>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li className={css.headerListItem}>
            <button className={css.headerListItemBtn} onClick={handleClick}>
              {isAuthorization ? 'LogOut' : 'LogIn'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
