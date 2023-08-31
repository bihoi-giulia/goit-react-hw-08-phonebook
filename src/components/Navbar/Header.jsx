import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Button } from '@mui/material';

import { isUserLogin } from 'redux/auth/auth-selectors';
// import items from './items';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';

// import css from './navbar.module.css';

function Header() {
  const isLogin = useSelector(isUserLogin);
  const navigate = useNavigate();

  //   const elements = items.map(({ id, text, link }) => (
  //     <li key={id}>
  //       <NavLink className={css.link} to={link}>
  //         {text}
  //       </NavLink>
  //     </li>
  //   ));

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, justifyContent: 'left' }}
            color="inherit"
            onClick={() => navigate('/contacts')}
          >
            PHONEBOOK
          </Button>
          {!isLogin && <NavbarAuth />}
          {isLogin && <UserMenu />}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
