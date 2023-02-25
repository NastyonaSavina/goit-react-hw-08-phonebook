import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/contacts.selectors';


const selectFilter = state => state.contacts.filter;

export const getFilteredList = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);