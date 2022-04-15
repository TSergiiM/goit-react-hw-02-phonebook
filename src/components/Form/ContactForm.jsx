import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    message: '',
  };
  handleChange = event => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Phonebook</h1>
        <label htmlFor="name">
          Name
          <input
            value={this.state.message}
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
