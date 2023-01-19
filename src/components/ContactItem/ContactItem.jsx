import ProtoTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import css from './ContactItem.module.css';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <span className={css.contact}>
        {name}: {number}
      </span>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: ProtoTypes.string.isRequired,
  number: ProtoTypes.string.isRequired,
  id: ProtoTypes.string.isRequired,
  onDelete: ProtoTypes.func,
};

export default ContactItem;