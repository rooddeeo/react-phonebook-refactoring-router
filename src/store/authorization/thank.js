import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactNew } from 'store/contacts/operations';

export const registerThank = createAsyncThunk('contacts/operations', contact =>
  addContactNew(contact)
);
