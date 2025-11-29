import ContactForm from "./components/ContactForm";
import Filter from "./features/filter/Filter";
import ContactList from "./features/contacts/ContactsList";


export const App = () => {
  return(
    <div>
      <h1>Книга контактів</h1>

      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  )
}
