
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contacts/contacts.slice';
import { authReducer } from './auth/auth.slice';
import { filtersReducer } from './contacts/filter/filter.slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,

// }

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts:contactsReducer,
    filter: filtersReducer,
   
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

     



export const persistor = persistStore(store);
