import store from "../../app/store";
import { deleteContacts } from "./contactsSlice";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const filtered = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filtered.map(({ id, name, phone }) => (
        <li key={id}>
          <h2>
            {name}: {phone}
          </h2>
          <button onClick={() => dispatch(deleteContacts(id))}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
