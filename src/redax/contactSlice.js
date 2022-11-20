import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsState = [
  { name: 'Mikhaylo', number: '545454', id: 'pLlGa8aSiJtx06X-W38gk' },
];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return { payload: { name, number, id: nanoid() } };
      },
    },

    deleteContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
