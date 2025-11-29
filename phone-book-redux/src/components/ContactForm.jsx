import { useSelector, useDispatch } from "react-redux";
import { addContacts } from "../features/contacts/contactsSlice";

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value;
        const phone = form.elements.phone.value;
        const exists = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
        if(exists){
            alert('Такий контакт вже існує');
            return            
        } dispatch(addContacts(name, phone));
        form.reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label> Name
                <input name="name" type="text" required/>
            </label>
            <label> Phone
                <input name="phone" type="tel" required/>
            </label>
            <button type="submit">Add contact</button>
        </form>
    )
}

export default ContactForm;