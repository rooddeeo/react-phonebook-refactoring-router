import { contactsReducer } from './contacts/contactsSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { authorizationReducer } from './authorization/authorizationSlice';

const persistConfigAuth = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducerAuth = persistReducer(
  persistConfigAuth,
  authorizationReducer
);

export const reducer = {
  contacts: contactsReducer,
  authorization: persistedReducerAuth,
};
