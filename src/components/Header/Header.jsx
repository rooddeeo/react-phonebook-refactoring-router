import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authorizationSelect } from 'store/authorization/selectors';
import { logoutThank } from 'store/authorization/thanks';

const Header = () => {
  const isAuthorization = useSelector(authorizationSelect);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutThank());
  };
  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <ul className={css.headerList}>
          <li className={css.headerListItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          {isAuthorization ? (
            <>
              <li className={css.headerListItem}>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
              <li className={css.headerListItem}>
                <button className={css.headerListItemBtn} onClick={handleClick}>
                  {isAuthorization ? 'LogOut' : 'LogIn'}
                </button>
              </li>
            </>
          ) : (
            <>
              <li className={css.headerListItem}>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className={css.headerListItem}>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
