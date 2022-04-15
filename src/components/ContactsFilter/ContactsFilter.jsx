import PropTypes from 'prop-types';
export const ContactsFilter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
