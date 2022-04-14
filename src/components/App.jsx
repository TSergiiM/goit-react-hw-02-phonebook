import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactList';
import { ContactForm } from './Form/ContactForm';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', text: 'qqqqqq' },
      { id: 'id-2', text: 'aaaaaa' },
      { id: 'id-3', text: 'zzzzzz' },
    ],
    filter: '',
  };

  addContact = text => {
    const contact = {
      id: (module.id = nanoid()),
      text,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
        <ContactsFilter value={filter} onChange={this.changeFilter} />
        <ContactForm onSubmit={this.addContact} />
      </div>
    );
  }
}
