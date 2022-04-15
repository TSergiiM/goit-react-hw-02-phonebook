export const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name }) => (
      <li key={id}>
        <p>{name}</p>
        <button onClick={() => onDeleteContact(id)}>remove</button>
      </li>
    ))}
  </ul>
);
