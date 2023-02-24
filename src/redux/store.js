import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth.slice";
import { contactsReducer } from "./contacts.slice";
import { filtersReducer } from "./filter.slice";


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    auth:authReducer,
  },
});
