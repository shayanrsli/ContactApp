import React, { useState } from 'react'
import ContactList from '../ContactsList'

type contact = {
    name : string,
    lastName : string,
    email: string,
    phone: string
}

const inputs = [
    {type : 'text'  , name: "name" , placeholder : 'name'},
    {type : 'text'  , name: "lastName" , placeholder : 'lastName'},
    {type : 'email'  , name: "email" , placeholder : 'email'},
    {type : 'number'  , name: "phone" , placeholder : 'phone'},
]

export default function Contacts () {

    const [contact , setContact] = useState<contact>({
        name: "",
        lastName:"",
        email:"",
        phone:""
    })
    const [contacts , setContacts] = useState<Array<contact>>([]);
    const [alert , setAlert] = useState<string>("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = event.target
        setContact((prev) => ({ ...prev, [name]: value }));
    }

    const addHandler = () => {

    if (contact.name.trim() === "" || contact.email.trim() === "" || contact.lastName.trim() === "" || contact.phone.trim() === "") {
        setAlert("Please fill in all fields");
        return;
    }
    setAlert("")

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
            {inputs.map((input , index) => (
                <input key={index} type={input.type} placeholder={input.placeholder} name={input.name} onChange={changeHandler} value={contact[input.name as keyof contact]} />
            ))}

            <button onClick={addHandler}>Add Contact</button>

            <div>{alert && <p>{alert}</p>}</div>

            <ContactList contacts={contacts} />
        </div>      
    </div>
  );
}