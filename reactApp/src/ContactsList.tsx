type Contact = {
    name : string;
    lastName :string;
    email: string;
    phone: string;
}

type ContactListProps = {
    contacts: Contact[];
}


export default function ContactList ({contacts}: ContactListProps) {
    return (
    <div>
      <h2>Contacts List</h2>
      <ul>
        {contacts.map((c, index) => (
          <li key={index}>
            {c.name} {c.lastName} - {c.email} - {c.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
