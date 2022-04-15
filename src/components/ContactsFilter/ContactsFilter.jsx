export const ContactsFilter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};
