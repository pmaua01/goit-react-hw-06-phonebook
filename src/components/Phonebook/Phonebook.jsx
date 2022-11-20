import React from 'react';
import { useState } from 'react';
import {
  FormPhoneBook,
  FormLabel,
  FormInput,
  FormButton,
} from './Phonebook.styled';

import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redax/contactSlice';

export const Phonebook = () => {
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = e => {
    // const numberContact = { name, number };
    e.preventDefault();
    for (const element of contacts) {
      if (element.name.toLowerCase() === name.toLowerCase()) {
        alert(`${element.name} is alrady in contacts`);
        return;
      }
    }
    dispatch(addContacts(name, number));
    setName('');
    setNumber('');
  };

  return (
    <FormPhoneBook onSubmit={onSubmit}>
      <FormLabel>
        Name:
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChangeInput}
        />
      </FormLabel>
      <FormLabel>
        Number:
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onChangeInput}
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </FormPhoneBook>
  );
};
