import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Phonebook',
    link: '/contacts',
  },
  //   {
  //     id: nanoid(),
  //     text: 'Login',
  //     link: '/login',
  //   },
  //   {
  //     id: nanoid(),
  //     text: 'Register',
  //     link: '/register',
  //   },
];

export default items;
