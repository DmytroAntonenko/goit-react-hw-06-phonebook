import { useState } from 'react';
import shortid from 'shortid';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from '../../redux/contactsSlice';

import css from './ContactForm.module.css';

const ContactForm = () => {   
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = event => {
    const {name, value} = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;
      default:
        return;
    }  
    };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const isExistContact = contacts.find((contact) => name === contact.name);
    if (isExistContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact(form.name.value, form.number.value));
    setName('');
    setNumber('');
  };


    return(
        <form onSubmit={handleSubmit}>
      <label className={css.form__label} htmlFor={nameInputId}>
        <input
          className={css.form__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          id={nameInputId}
        />
      </label>
      <label className={css.form__label} htmlFor={numberInputId}>
        <input
          className={css.form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          id={numberInputId}
        />
      </label>
      <button type="submit">Add contact</button>  
     </form>
    )
};

export default ContactForm;