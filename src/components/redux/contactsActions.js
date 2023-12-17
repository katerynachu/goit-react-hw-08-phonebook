
import axios from 'axios';
import toast from 'react-hot-toast';

import { createAsyncThunk } from '@reduxjs/toolkit';
const notify = name => toast(`Contact ${name} is already in contacts`);

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    const currentState = thunkAPI.getState();

    const existingContact = currentState.contacts.items.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      notify(existingContact.name);
      return thunkAPI.rejectWithValue({
        error: 'Duplicate contact',
        existingContact: existingContact,
        message: 'Contact with the same name already exists',
      });
    }

    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);




export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}
);










