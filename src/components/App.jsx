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

  addContact = name => {
    const contact = {
      id: (module.id = nanoid()),
      name,
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
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
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
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
