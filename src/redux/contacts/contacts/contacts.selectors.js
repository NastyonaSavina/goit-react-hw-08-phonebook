import { createSelector } from '@reduxjs/toolkit';


export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectedFilter = state => state.contacts.filter;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectedFilter],
  (contacts, { filter }) => {

      if (filter === '') {
          return contacts;
        } else {
           const normalizedFilter = filter.toLowerCase();
            return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter)
    ); 
      }
    
  }
);