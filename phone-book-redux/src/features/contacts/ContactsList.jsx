import { deleteContacts } from "./contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ContactsList.module.css";
import PropTypes from "prop-types";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filtered = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filtered.map(({ id, name, phone }) => (
        <li className={styles.item} key={id}>
          <h2 className={styles.text}>
            {name}: {phone}
          </h2>

          <button
            className={styles.deleteBtn}
            onClick={() => dispatch(deleteContacts(id))}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};

export default ContactList;
