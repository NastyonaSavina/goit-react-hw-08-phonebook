import {  useDispatch, useSelector } from 'react-redux';

import { ContactItem } from '../../components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';
import { selectFilteredContacts } from '../../redux/contacts/filter/filter.selector';
import { fetchContacts } from 'redux/contacts/contacts/contacts.operations';
import { useEffect } from 'react';
import { selectAuthToken } from 'redux/auth/auth.selectors';



const ContactsPage = () => {
     
    const filteredList = useSelector(selectFilteredContacts);
    const token = useSelector(selectAuthToken);


    const dispatch = useDispatch();

    useEffect(() => {

        if (token) {
            dispatch(fetchContacts());
          }
    }, [dispatch, token]);
     


    return (
        <>
            <Filter />

            {filteredList.length === 0 ? (<p>Let's add something here!</p>
            ):(
                 <ul className="list-group">

            
                {filteredList.map(contact => (
                    <ContactItem key={contact.id} contact={contact} />
                )               
                )}
                </ul>
            ) }
        </>          
        
        
    )
}

export default ContactsPage;