import React, { useEffect,lazy , Suspense} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import { useDispatch} from 'react-redux';



import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import { refreshUser } from 'redux/auth/auth.operations';
import { PublicRoute } from './AuthRouts/PublicRoute';
import { PrivateRoute } from './AuthRouts/PrivateRoute';

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const AddContactPage = lazy(() => import('../pages/AddContactPage/AddContactPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));





export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
          <Suspense fallback={<p>Loading...</p>}>

            <Routes>
            <Route path="" element={<HomePage />} />
            
            <Route path="" element={<PublicRoute />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
            
            <Route path="" element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/add-contact" element={<AddContactPage />} />
            </Route>
            <Route path="*" element={<Navigate to="" />} />

            </Routes>
          </Suspense> 
        </Layout>
      
      
    </>
    

  );
  
  
};


