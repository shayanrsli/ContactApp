import styles from "../components/Contacts.module.css";
import ContactItem from "./ContactItem";

export type Contact = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
};

type ContactListProps = {
  contacts: Contact[];
};

export default function ContactList({ contacts }: ContactListProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacts List</h2>
      {contacts.length ? (
        <ul className={styles.list}>
          {contacts.map((contact, index) => (
            <ContactItem key={index} contact={contact} index={index} />
          ))}
        </ul>
      ) : (
        <h2 className={styles.noContact}>No contact exists</h2>
      )}
    </div>
  );
}
