import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/contacts.selectors';


export const selectedFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectedFilter],
  (items, filter) => {

      if (filter === '') {
          return items;
        } else {
           const normalizedFilter = filter.toLowerCase();
            return items.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter)
    ); 
      }
    
  }
);