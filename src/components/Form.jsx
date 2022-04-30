// import { useState } from 'react'
// import { nanoid } from 'nanoid';

import { createTheme } from '@mui/material/styles';
import { FormLabel } from '@mui/material';
import { Box } from '@mui/system';

import Button from './Button';
import DateInput from './DateInput';
import MyTextField from './MyTextField';
import MySelect from './MySelect';

import { departments, states } from '../assets/data/mockData';

// import { addEmployee } from '../services/apiService';


const theme = createTheme({
  spacing: 2,
});

export default function Form({ setModal }) {
  // const [formValue, setFormValue] = useState({
  //   id: null,
  //   firstName: '',
  //   lastName: '',
  //   birthDate: null,
  //   startDate: null,
  //   street: '',
  //   city: '',
  //   states: '',
  //   zipCode: '',
  //   departments: '',
  // })
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [birthdate, setBirthdate] = useState('');
  // const [startDate, setStartDate] = useState('');
  // const [street, setStreet] = useState('');
  // const [city, setCity] = useState('');
  // const [zipcode, setZipcode] = useState('');
  // const [stateName, setStateName] = useState('');
  // const [department, setDepartment] = useState('');



  const resetForm = () => {
    sessionStorage.clear();
    localStorage.clear();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // submitForm()

  }
  return (
    <Box
      sx={{
        '& .MuiFormControl-root': {
          width: '100%',
          margin: theme.spacing(3)
        }
      }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{
          display: 'block',
          marginInline: 'center',
          marginBottom: '1rem'
        }}>
          <FormLabel component='legend' sx={{ marginInline: '2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Identity :</FormLabel>
          <MyTextField
            label='First Name'
            name='firstName'
            margin='dense'
          // value={values.firstName}
          // onChange={handleInputChange}
          />
          <MyTextField
            label='Last Name'
            name='lastName'
            margin='dense'
          // value={values.lastName}
          // onChange={handleInputChange}
          />
          <DateInput
            label='Birth Date'
            name='birthDate'
          // value={values.birthDate}
          // onChange={handleInputChange}
          />
        </Box>
        <Box>
          <FormLabel component='legend' sx={{ marginInline: '2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Address :</FormLabel>
          <Box sx={{
            display: 'block',
            flexDirection: 'row',
            marginBottom: '1rem'
          }}>
            <MyTextField
              label='Street'
              name='street'
            value={values.street}
            onChange={handleInputChange}
            />
            <MyTextField
              label='City'
              name='city'
            value={values.city}
            onChange={handleInputChange}
            />
            <MyTextField
              label='Zip code'
              name='zip'
            value={values.zip}
            onChange={handleInputChange}
            />
            <MySelect
              label='State'
              name='state'
              value={values.state}
              onChange={handleInputChange}
              options={states}
            />
          </Box>
        </Box>
        <Box>
          <FormLabel component='legend' sx={{ marginInline: '2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Role :</FormLabel>
          <DateInput
            label='startDate'
            name='startDate'
          // value={values.startDate}
          // onChange={handleInputChange}
          />
          <MySelect
            label='Department'
            name='department'
            // value={values.department}
            // onChange={handleInputChange}
            options={departments}
          />
        </Box>
        <Box>
          <Button
            text='Submit'
            type='Submit'
            size='small'
            // onClick={handleSubmit}
            onClick={(e) => setModal(true)}
            color='secondary'
          />
          <Button
            text='Reset'
            size='small'
            onClick={resetForm}
          />
        </Box>
      </form>
    </Box>
  )
};