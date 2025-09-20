import React, { useState } from "react";
import ContactList from "./ContactsList";
import styles from "./Contacts.module.css";

type Contact = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
};

const inputs = [
  { type: "text", name: "name", placeholder: "Name" },
  { type: "text", name: "lastName", placeholder: "Last Name" },
  { type: "email", name: "email", placeholder: "Email" },
  { type: "number", name: "phone", placeholder: "Phone" },
];

export default function Contacts() {
  const [contact, setContact] = useState<Contact>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [alert, setAlert] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const addHandler = () => {
    if (
      contact.name.trim() === "" ||
      contact.email.trim() === "" ||
      contact.lastName.trim() === "" ||
      contact.phone.trim() === ""
    ) {
      setAlert("Please fill in all fields");
      return;
    }
    setAlert("");

    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            onChange={changeHandler}
            value={contact[input.name as keyof Contact]}
            className={styles.input}
          />
        ))}

        <button onClick={addHandler} className={styles.button}>
          Add Contact
        </button>

        {alert && <p className={styles.alert}>{alert}</p>}

        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}
