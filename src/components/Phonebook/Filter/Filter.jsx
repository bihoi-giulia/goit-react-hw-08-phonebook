import { useSelector, useDispatch } from 'react-redux';
import { TextField, Box } from '@mui/material';

import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

// import css from 'components/Phonebook/phonebook.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: 400 },
        }}
        // onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div>
          {' '}
          <TextField
            id="outlined-filter-input"
            label="Find a contact by name"
            type="text"
            name="filter"
            required
            value={filter}
            onChange={handleChange}
          />
        </div>
      </Box>
      {/* <form className={css.buttonWrapper}>
        <label className={css.text}>
          Find a contact by name
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={filter}
            onChange={handleChange}
          />
        </label>
      </form> */}
    </>
  );
};

export default Filter;

// return (
//   <>
//     <form className={css.buttonWrapper}>
//       <label className={css.text}>
//         Find a contact by name
//         <input
//           type="text"
//           name="filter"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={filter}
//           onChange={handleChange}
//         />
//       </label>
//     </form>
//   </>
// );
