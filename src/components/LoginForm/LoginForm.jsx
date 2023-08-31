import { useDispatch } from 'react-redux';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import { useState } from 'react';

import { login } from 'redux/auth/auth-operations';
import css from './LoginForm.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
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
      login({
        email: state.email,
        password: state.password,
      })
    );
    form.reset();
  };

  // return (
  //   <Box
  //     component="form"
  //     sx={{
  //       '& .MuiTextField-root': { m: 1, width: 400 },
  //     }}
  //     onSubmit={handleSubmit}
  //     noValidate
  //     autoComplete="off"
  //   >
  //     <label className={css.label}>
  //       Email
  //       <input
  //         type="email"
  //         name="email"
  //         required
  //         value={state.email}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <label className={css.label}>
  //       Password
  //       <input
  //         type="password"
  //         name="password"
  //         required
  //         value={state.password}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     {/* <div>
  //       <TextField
  //         id="outlined-email-input"
  //         label="email"
  //         type="email"
  //         name="email"
  //         required
  //         value={state.email}
  //         onChange={handleChange}
  //       />
  //     </div>
  //     <div>
  //       {' '}
  //       <TextField
  //         id="outlined-password-input"
  //         label="Password"
  //         type="password"
  //         name="password"
  //         required
  //         value={state.password}
  //         onChange={handleChange}
  //         autoComplete="current-password"
  //       />
  //     </div> */}
  //     <Button type="submit" sx={{ mt: 2 }}>
  //       Log In
  //     </Button>
  //   </Box>
  // );

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
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
        Log In
      </Button>
      {/* <button type="submit">Log In</button> */}
    </form>
  );
};
