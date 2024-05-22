import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { getVisibleContacts } from "../../helpers/getVisibleContacts";

import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <div className="sub-card">
      <div className={css.listParams}>
        <h2>Check contacts list</h2>
        <p>Length: {contacts.length}</p>
      </div>

      <ul className={css.contactsList}>
        {contacts.length ? (
          visibleContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))
        ) : (
          <p>No contacts found</p>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
