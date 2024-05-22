export const getVisibleContacts = (contacts, filter) => {
  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.name.toLowerCase());
  });
};
