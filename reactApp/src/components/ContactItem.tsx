import styles from "./Contacts.module.css";
import type { Contact } from "./Contacts";
import type { Dispatch, SetStateAction } from "react";

type ContactItemProps = {
  contact: Contact;
  setContacts: Dispatch<SetStateAction<Contact[]>>;
};

export default function ContactItem({ contact, setContacts }: ContactItemProps) {
  const deleteHandler = (id: number) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <li className={styles.item}>
      <span>
        {contact.name} {contact.lastName}
      </span>
      <span>
        {contact.email} | {contact.phone}
      </span>
      <button
        onClick={() => deleteHandler(contact.id)}
          className={styles.deleteBtn}
      >
        Delete
      </button>
    </li>
  );
}
