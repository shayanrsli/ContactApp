import styles from "../components/Contacts.module.css"


type Contact = {
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
          {contacts.map((c, index) => (
            <li key={index} className={styles.item}>
              <span>
                {c.name} {c.lastName}
              </span>
              <span>
                {c.email} | {c.phone}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles.noContact}>No contact exists</h2>
      )}
    </div>
  );
}
