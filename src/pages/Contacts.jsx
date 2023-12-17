import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from 'components/ContactList/ContactList'
import { Filter } from 'components/Filter/Filter';
import { useAuth } from 'components/hooks';
import React from 'react'

export default function Contacts() {
  const { user  } = useAuth();
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Welcome {user.name} !</h1>
      <ContactForm/>
      <Filter/>
      <ContactList/>
      </div>
  )
}
