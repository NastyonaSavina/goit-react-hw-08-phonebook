import {  useDispatch, useSelector } from 'react-redux';

import { ContactItem } from '../../components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';
import { selectFilteredContacts } from '../../redux/contacts/filter/filter.selector';
import { fetchContacts } from 'redux/contacts/contacts/contacts.operations';
import { useEffect } from 'react';



const ContactsPage = () => {
     
    const filteredList = useSelector(selectFilteredContacts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
     


    return (
        <>
            <Filter />

            {filteredList.length === 0 ? (<p>No matches...</p>
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