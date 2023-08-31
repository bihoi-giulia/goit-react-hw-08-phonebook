import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const NavbarAuth = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button color="inherit" onClick={() => navigate('/login')}>
        Login
      </Button>
      <Button color="inherit" onClick={() => navigate('/register')}>
        register
      </Button>
    </>
  );
};

export default NavbarAuth;

// import css from './navbar-auth.module.css';

// const NavbarAuth = () => {
//   return (
//     <div>
//       <NavLink to="/register" className={css.link}>
//         Register
//       </NavLink>{' '}
//       |
//       <NavLink to="/login" className={css.link}>
//         Login
//       </NavLink>
//     </div>
//   );
// };

// export default NavbarAuth;
