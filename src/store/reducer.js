import { contactsReducer } from './contacts/contactsSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { authorizationReducer } from './authorization/slice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
  blacklist: [''],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const persistConfigAuth = {
  key: 'token',
  storage,
  whitelist: ['token'],
  blacklist: ['user'],
};

const persistedReducerAuth = persistReducer(
  persistConfigAuth,
  authorizationReducer
);

export const reducer = {
  contacts: persistedReducer,
  authorization: persistedReducerAuth,
};
