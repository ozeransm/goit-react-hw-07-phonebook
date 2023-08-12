import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { addPhoneBook, deleteFromPhoneBook, fetchPhoneBook } from "./operations";

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
    filter: ""
    
}

export const reducerPhonebook = createSlice({
name: 'phonebook',
initialState,
reducers:{
    'filter': (state, {payload:{filter}}) => {
        state.filter = filter;        
    }
},
extraReducers: (builder)=>{
    builder
    .addCase(fetchPhoneBook.fulfilled, (state, action) => {
        state.contacts = [...action.payload];
    })
    .addCase(addPhoneBook.fulfilled, (state, action)=>{
        state.contacts.push(action.payload);
    })
    .addCase(deleteFromPhoneBook.fulfilled, (state, action)=>{
        state.contacts = state.contacts.filter((el)=>el.id!==action.payload.id)
    })
}
});

export const reducer = combineReducers({ book: reducerPhonebook.reducer });

export const { filter } = reducerPhonebook.actions;

