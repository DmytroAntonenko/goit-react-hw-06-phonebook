import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts-actions';

import css from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';


const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  const filteredContacts = contacts.filter(contact =>
    // console.log(contact.name.toString().toLowerCase())
  contact.name.toString().toLowerCase().includes(filter.toLowerCase())
  );

  return (
  <ul className={css.contact__list}>
    {filteredContacts.map(({ id, name, number }) => (
      <li key={id} className={css.contact__item}>
        <ContactItem name={name} number={number} id={id} />
      </li>
    ))}
  </ul>
  )
};

export default ContactList;