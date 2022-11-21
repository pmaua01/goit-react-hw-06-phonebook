import PropTypes from 'prop-types';
import { ContactsList, ContactsItem, ContactsButton } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redax/contactSlice';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters);
  // console.log('contacts:', contacts);
  const dispatch = useDispatch();

  const handeleDelete = id => {
    dispatch(deleteContacts(id));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactsList>
      {visibleContacts.map(contact => {
        return (
          <ContactsItem key={contact.id}>
            {contact.name}:{contact.number}
            <ContactsButton
              id={contact.id}
              type="button"
              onClick={() => handeleDelete(contact.id)}
            >
              Delete
            </ContactsButton>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
