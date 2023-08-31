import { useDispatch } from 'react-redux';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';

import { signup } from 'redux/auth/auth-operations';
import css from './RegisterForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signup({
        name: state.name,
        email: state.email,
        password: state.password,
      })
    );
    form.reset();
  };

  //   return (
  //     <Box
  //       component="form"
  //       sx={{
  //         '& .MuiTextField-root': { m: 1, width: 400 },
  //       }}
  //       onSubmit={handleSubmit}
  //       noValidate
  //       autoComplete="off"
  //     >
  //        <div>
  //         <TextField
  //           id="outlined-name-input"
  //           label="name"
  //           type="text"
  //           name="name"
  //           required
  //           value={state.name}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <TextField
  //           id="outlined-email-input"
  //           label="email"
  //           type="email"
  //           name="email"
  //           required
  //           value={state.email}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         {' '}
  //         <TextField
  //           id="outlined-password-input"
  //           label="Password"
  //           type="password"
  //           name="password"
  //           required
  //           value={state.password}
  //           onChange={handleChange}
  //           autoComplete="current-password"
  //         />
  //       </div>
  //       <Button type="submit" sx={{ mt: 2 }}>
  //         Register
  //       </Button>
  //     </Box>
  //   );
  // };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input
          type="text"
          name="name"
          required
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          required
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          required
          value={state.password}
          onChange={handleChange}
        />
      </label>
      <Button type="submit" sx={{ mt: 2 }}>
        Register
      </Button>
      {/* <button type="submit">Register</button> */}
    </form>
  );
};
