import React, { useEffect,lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';


import styles from './App.module.css';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from './ContactItem/ContactList';
import { Filter} from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const AddContactPage = lazy(() => import('../pages/AddContactPage/AddContactPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));





export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter basename="goit-react-hw-08-phonebook">
        <Layout>
          <Routes>
            <Route path="" element={<HomePage />} />

            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="add-contact" element={<AddContactPage />} />
            <Route path="contacts" element={<ContactsPage />} />


        </Routes>
          {/* <h1>Phonebook</h1>
        <ContactForm />
        {isLoading && !error && <b> Request in progress...</b>}

        <h2>Contacts</h2>
          <Filter />
          <ContactList />  */}
      
     
        </Layout>
      </BrowserRouter>
      
      
    </>
    

  );
  
  
};


