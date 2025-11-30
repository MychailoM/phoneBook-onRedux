import ContactForm from "./components/ContactForm";
import Filter from "./features/filter/Filter";
import ContactList from "./features/contacts/ContactsList";
import "./App.css"

export const App = () => {
  return (
    <div className="window">
      <div>
        <ContactForm />
        <Filter />
      </div>
      <ContactList />
    </div>
  );
};
