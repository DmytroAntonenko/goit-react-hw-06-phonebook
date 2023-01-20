import ContactForm from "./ContactForm";
import Filter from './Filter';
import ContactList from './ContactList';

  const App = () => {
     
  return (
    <div
      style={{
      border: '1px solid black',
      borderRadius: '4px',
      maxWidth: '320px',
      marginTop: '44px',
      margin: 'auto',
      padding: '12px'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )}

export default App;