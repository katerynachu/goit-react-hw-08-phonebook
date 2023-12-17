import React, { useEffect } from 'react';
import { List, ListItem, Wrapper } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../redux/contactsActions';
import { selectShowContacts, selectError, selectIsLoading } from 'components/redux/selectors';
import Loader from 'components/Loader/Loader';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const show = useSelector(selectShowContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = (contactId) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      dispatch(deleteContact(contactId));
    }
  };
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Wrapper>
        <p>Error: {error}</p>
      </Wrapper>
    );
  }

  if (show.length === 0) {
    return (
      <Wrapper>
        <p>No contacts found.</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <List>
        {show.map((contact) => (
          <ListItem key={contact.id}>
            {contact.name} : {contact.number}
            <Button onClick={() => handleDeleteContact(contact.id)} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};


