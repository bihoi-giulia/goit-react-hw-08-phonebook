import { useSelector, useDispatch } from 'react-redux';
import {
  List,
  Box,
  ListItem,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

import { deleteContact } from 'redux/contacts/operations';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

// import css from 'components/Phonebook/phonebook.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContact = idForDelete => {
    dispatch(deleteContact(idForDelete));
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          p: 1,
          pt: 3,
        }}
      >
        Contacts
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: 450,
          bgcolor: 'background.paper',
          justifyContent: 'space-between',
          pl: 2,
        }}
      >
        <List>
          {contacts.map(({ id, name, number }) => (
            <ListItem key={id} disablePadding>
              <ListItemText sx={{ flexGrow: 1 }}>
                {name} {number}
              </ListItemText>
              <ListItemButton
                type="button"
                color=""
                onClick={() => onDeleteContact(id)}
                sx={{
                  p: 1,
                  justifyContent: 'right',
                  maxWidth: 110,
                }}
              >
                <Typography variant="subtitle2">Delete</Typography>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default ContactList;

// return (
//   <>
//     <h2 className={css.title}>Contacts</h2>
//     <ul className={css.buttonWrapper}>
//       {contacts.map(({ id, name, number }) => (
//         <li key={id} className={css.contact}>
//           <p className={css.text}>
//             {name} {number}
//           </p>
//           <button
//             type="button"
//             className={css.btnDel}
//             onClick={() => onDeleteContact(id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   </>
// );
