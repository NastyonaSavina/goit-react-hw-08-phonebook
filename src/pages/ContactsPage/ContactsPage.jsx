import {  useSelector } from 'react-redux';

import { selectFilteredContacts } from '../../redux/selectors';
import { ContactItem } from '../../components/ContactItem/ContactItem';



const ContactsPage = () => {

const filteredList = useSelector(selectFilteredContacts);

    return (
        <ul className="list-group">
        
            {filteredList.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
            )               
            )}
        </ul>
    )
}

export default ContactsPage;