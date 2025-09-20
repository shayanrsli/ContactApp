import type { Contact } from "./ContactsList";
import styles from "./Contacts.module.css"

type ContactItemProps = {
  contact: Contact;
  index: number;
};


export default function ContactItem ({contact , index} : ContactItemProps) {
  return (
    <div>
                  <li key={index} className={styles.item}>
              <span>
                {contact.name} {contact.lastName}
              </span>
              <span>
                {contact.email} | {contact.phone}
              </span>
            </li>
    </div>
  );
}
