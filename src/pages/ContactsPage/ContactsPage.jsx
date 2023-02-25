import {  useSelector } from 'react-redux';

import { selectContacts } from '../../redux/contacts/contacts/contacts.selectors';
import { ContactItem } from '../../components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';
import { getFilteredList } from '../../redux/contacts/filter/filter.selector';



const ContactsPage = () => {

    // const filteredList = useSelector(selectContacts);
    
    const filteredList = useSelector(getFilteredList);


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