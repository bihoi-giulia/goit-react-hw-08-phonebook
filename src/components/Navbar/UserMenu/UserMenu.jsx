import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button } from '@mui/material';

import { logout } from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const { email } = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Typography variant="h7" component="div">
        {email}
      </Typography>
      <Button color="inherit" variant="h6" sx={{ pt: 1 }} onClick={onLogout}>
        Logout
      </Button>
    </>
  );
};

export default UserMenu;

// const UserMenu = () => {
//   const { email } = useSelector(getUser);

//   const dispatch = useDispatch();

//   const onLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <div>
//       {email}, <button onClick={onLogout}>Logout</button>
//     </div>
//   );
// };

// export default UserMenu;
