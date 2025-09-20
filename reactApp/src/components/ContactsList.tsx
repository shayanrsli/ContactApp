import ContactItem from "./ContactItem";
import styles from "./Contacts.module.css";
import type { Contact } from "./Contacts";
import type { Dispatch, SetStateAction } from "react";

type ContactListProps = {
  contacts: Contact[];
  setContacts: Dispatch<SetStateAction<Contact[]>>;
};

export default function ContactList({ contacts, setContacts }: ContactListProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacts List</h2>
      {contacts.length ? (
        <ul className={styles.list}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              setContacts={setContacts}
            />
          ))}
        </ul>
      ) : (
        <h2 className={styles.noContact}>No contact exists</h2>
      )}
    </div>
  );
}
