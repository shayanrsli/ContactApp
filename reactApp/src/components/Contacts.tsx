import React, { useState } from 'react'
import ContactList from '../ContactsList'

type contact = {
    name : string,
    lastName : string,
    email: string,
    phone: string
}

export default function Contacts () {

    const [contact , setContact] = useState<contact>({
        name: "",
        lastName:"",
        email:"",
        phone:""
    })
    const [contacts , setContacts] = useState<Array<contact>>([])

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = event.target
        setContact((prev) => ({ ...prev, [name]: value }));
    }

    const addHandler = () => {
        setContacts((contacts) => [...contacts, contact]);
        console.log(contacts);
        setContact({
        name: "",
        lastName:"",
        email:"",
        phone:""
    })   
    }

  return (
    <div>
        <div>
            <input type='text' name='name' placeholder='name'  value={contact.name} onChange={changeHandler}/>
            <input type='text' name='lastName' placeholder='Last Name' value={contact.lastName}  onChange={changeHandler}/>
            <input type='text' name='email' placeholder='Email' value={contact.email} onChange={changeHandler} />
            <input type='text' name='phone' placeholder='Phone' value={contact.phone} onChange={changeHandler}/>
            <button onClick={addHandler}>Add Contact</button>
            <ContactList contacts={contacts} />
        </div>      
    </div>
  );
}