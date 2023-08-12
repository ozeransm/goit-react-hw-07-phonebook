import { useEffect } from "react";
import css from "./App.module.css";
import { Contacts } from "./Contacts";
import { FindContact } from "./FindContact";
import { Form } from "./Form";
import { useDispatch } from "react-redux";
import { fetchPhoneBook } from "../redux/operations";



export const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
  
    dispatch(fetchPhoneBook());
  },[dispatch])
  return (
    
    <div className={css.common}>
      <h1>Phonebook</h1>
      <Form/>
      <h2>Contacts</h2>
      <FindContact />
      <Contacts/>
    </div> 
     
  );
};
