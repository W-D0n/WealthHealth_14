import React, { useState } from 'react'
import { FormLabel } from '@mui/material'
import { Box } from '@mui/system';

import Button from './Button';
import DateInput from './DateInput';
import { MyTextField } from './MyTextField';
import MySelect from './MySelect';

import { departments, states } from '../assets/data/mockData';

import { Formik, Form } from 'formik'
import * as yup from "yup";
import { addEmployee } from '../services/apiService'
import { nanoid } from 'nanoid';


const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Must be at least 2 characters')
    .max(20, 'Must be less  than 20 characters')
    .defined('Required')
    .matches(
      /^[a-zA-Z]+$/,
      'Only letters are allowed'
    ),
  lastName: yup
    .string()
    .min(2, 'Must be at least 2 characters')
    .max(20, 'Must be less  than 20 characters')
    .defined('Required')
    .matches(
      /^[a-zA-Z]+$/,
      'Only letters are allowed'
    ),
  // birthDate: yup
  //   .string()
  //   .required('Date is required'),
  // startDate: yup
  //   .string()
  //   .required('Date is required')
  //   .defined('Required'),
  street: yup
    .string()
    .min(2, 'Must be at least 2 characters')
    .max(20, 'Must be less  than 20 characters')
    .defined('Required')
    .matches(
      /^[a-zA-Z]+$/,
      'Only letters are allowed'
    ),
  city: yup
    .string()
    .min(2, 'Must be at least 2 characters')
    .max(20, 'Must be less  than 20 characters')
    .defined('Required')
    .matches(
      /^[a-zA-Z]+$/,
      'Only letters are allowed'
    ),
  states: yup
    .string()
    .required('Required')
    .defined('Required'),
  zipCode: yup
    .number('Must be a number')
    .min(5, 'Must be 5 digits')
    .max(5, 'Must be 5 digits')
    .moreThan(1001, 'Cannot be less than 01001')
    .lessThan(99950, 'Cannot be more than 99950')
    .positive('Cannot be a negative number')
    .integer('Cannot be a negative number')
    .defined('Required'),
  departments: yup
    .string()
    .required('Required')
});


export const FormikForm = ({ setModal }) => {
  const initialFormValues = {
    id: nanoid(),
    firstName: '',
    lastName: '',
    birthDate: null,
    startDate: null,
    street: '',
    city: '',
    states: '',
    zipCode: '',
    departments: ''
  }

  return (
    <div>
      <Formik
        initialValues={initialFormValues}
        validationSchema={formSchema}
        validateOnChange={true}

        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            addEmployee(values)
            setSubmitting(false);
            resetForm();
            setModal(true);
          }, 500)
        }}
      >
        {/* "values" gives the current state of the form */}
        {({ values, errors, isSubmitting, handleChange }) => (
          <Form autoComplete='off'>
            <h1>Add an employee</h1>
            <Box sx={{ display: 'grid', gap: '1rem' }} >
              <FormLabel component='legend' sx={{ marginInline: '2rem', marginBottom: '1rem', fontSize: '1.4rem', fontWeight: 'bold' }}>Identity :</FormLabel>
              <MyTextField
                label='Firstname'
                name='firstName'
                type='input'
                onChange={handleChange} />
              <MyTextField
                label='Lastname'
                name='lastName'
                type='input'
                onChange={handleChange} />
            </Box>
            <DateInput
              label='Birth Date'
              name='birthDate'
              value={values.birthDate}
              onChange={handleChange}
            />
            <Box sx={{ marginBlock: '1rem' }} >
              <FormLabel component='legend' sx={{ marginInline: '2rem', marginBottom: '1rem', fontSize: '1.4rem', fontWeight: 'bold' }}>Address :</FormLabel>
              <MyTextField
                label='Street'
                name='street'
                value={values.street}
                onChange={handleChange}
              />
              <MyTextField
                label='City'
                name='city'
                value={values.city}
                onChange={handleChange}
              />
              <MyTextField
                label='Zip code'
                name='zipCode'
                value={values.zipCode}
                onChange={handleChange}
              />
              <MySelect
                label='State'
                name='states'
                value={values.states}
                onChange={handleChange}
                options={states}
              />
            </Box>
            <Box sx={{ marginBlock: '1rem' }} >
              <FormLabel component='legend' sx={{ marginInline: '2rem', marginBottom: '1rem', fontSize: '1.4rem', fontWeight: 'bold' }}>Role :</FormLabel>
              <DateInput
                label='Start Date'
                name='startDate'
                value={values.startDate}
                onChange={handleChange}
              />
              <MySelect
                label='Departments'
                name='departments'
                value={values.departments}
                onChange={handleChange}
                options={departments}
              />
            </Box>
            <div>
              <Button disabled={isSubmitting} type='submit' text='submit' />
              <Button type='reset' text='reset' size={"small"} />
            </div>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div >
  )
}

// Pour faire apparaitre la modal il faudra vérifier que la validation est ok, donc il y a la logique de isSubmitting et isValidating à prendre en compte
// Parser le zipcode en int et vérifier qu'il soit compris entre 01001 et 99950