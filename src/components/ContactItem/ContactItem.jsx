import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts/contacts.operations';


export const ContactItem = ({ contact }) => {
    const { id, name, number } = contact;

    const dispatch = useDispatch();


    const handleDelete = () => dispatch(deleteContact(id));
         
     
    return (
         <li className="list-group-item d-flex justify-content-between align-items-center">
            <p className="m-0">{name} : {number} </p>
            <button type="button" className="btn btn-primary btn-sm" onClick={handleDelete}>Delete</button>
         </li>
        
        
       
        );
}

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired

        }).isRequired,
    
}