import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactList';
import { ContactForm } from './Form/ContactForm';
// import { ContactsFilter } from './ContactsFilter/ContactsFilter';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
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

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.text.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        <label htmlFor="">
          Filter
          <input
            type="text"
            value={filter}
            onChange={this.changeFilter}
          ></input>
        </label>
        {/* <ContactsFilter value={filter} onChange={this.changeFilter} /> */}
        <ContactForm onSubmit={this.addContact} />
      </div>
    );
  }
}
