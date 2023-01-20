
import shortid from 'shortid';
import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, {payload}) {
        state.push(payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: shortid.generate(),
          },
        };
      },
    },
    deleteContact(state, {payload}) {
      const index = state.findIndex(({id}) => id === payload);
      state.splice(index, 1);
      // state.filter({ id } => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;