import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts } from "addContact";
import { deleteContacts } from "deleteContact";
import { fetchContacts } from "fetchContacts";

export const fetchPhoneBook = createAsyncThunk(
    'phonebook/fetchContacts',
    async () => {
      const response = await fetchContacts();
      return response.data;
    }
  )
export const addPhoneBook = createAsyncThunk(
    'phonebook/addContacts',
    async ({name, number}, thunkApi ) => {
        const response = await addContacts(name, number);
        return response.data;
    }
)
export const deleteFromPhoneBook = createAsyncThunk(
    'phonebook/deleteContacts',
    async (id, thunkApi ) => {
        const response = await deleteContacts(id);
        return response.data;
    }
)