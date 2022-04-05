import React from 'react';
import Header from './Header';
import ContactList from './ContactList';
//import ContactCard from './ContactCard';
import AddConatct from './AddContact';
import './App.css';

function App() {
  const contacts = [
    {'id': 1,'name':'Kabir', 'email':'Syed@email.com'},
    {'id': 2,'name':'Syed', 'email' :'jawa42@email.com'}
  ]
  return (
    <div>Hello World
      <Header />
      <AddConatct /><br></br>
      <ContactList contacts={contacts} /><br></br>
      {/* <ContactCard /> */}
    </div>
    
  
  );
}

export default App;