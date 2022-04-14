export const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, text }) => (
      <li key={id}>
        <p>{text}</p>
        <button onClick={() => onDeleteContact(id)}>remove</button>
      </li>
    ))}
  </ul>
);
