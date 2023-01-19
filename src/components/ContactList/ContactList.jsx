import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import css from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';


const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(({name}) =>
  name.toLowerCase().includes(normalizedFilter)
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