// import React from 'react';
// import { useFormik, FormikProvider, Form } from 'formik';
// import * as Yup from 'yup';
// import { TextInputLiveFeedback } from './InputFormik'
// import TextField from '@mui/material/TextField';


// const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// export const Formik = () => {

//   const formik = useFormik({
//     initialValues: {
//       id: null,
//       firstName: '',
//       lastName: '',
//       birthDate: null,
//       startDate: null,
//       street: '',
//       city: '',
//       states: '',
//       zipCode: '',
//       departments: '',
//     },
//     onSubmit: async (values) => {
//       await sleep(500);
//       alert(JSON.stringify(values, null, 2));
//     },
//     validationSchema: Yup.object().shape({
//       firstName: Yup
//         .string()
//         .min(2, 'Must be at least 2 characters')
//         .max(20, 'Must be less  than 20 characters')
//         .required('Username is required')
//         .matches(
//           /^[a-zA-Z0-9]+$/,
//           'Cannot contain special characters or spaces'
//         ),
//       lastName: Yup
//         .string()
//         .min(2, 'Must be at least 2 characters')
//         .max(20, 'Must be less  than 20 characters')
//         .required('Username is required')
//         .matches(
//           /^[a-zA-Z0-9]+$/,
//           'Cannot contain special characters or spaces'
//         ),
//       birthDate: Yup
//         .date(),
//       startDate: Yup
//         .date(),
//       street: Yup
//         .string()
//         .min(2, 'Must be at least 2 characters')
//         .max(20, 'Must be less  than 20 characters')
//         .required('Username is required')
//         .matches(
//           /^[a-zA-Z0-9]+$/,
//           'Cannot contain special characters or spaces'
//         ),
//       city: Yup
//         .string()
//         .min(2, 'Must be at least 2 characters')
//         .max(20, 'Must be less  than 20 characters')
//         .required('Username is required')
//         .matches(
//           /^[a-zA-Z0-9]+$/,
//           'Cannot contain special characters or spaces'
//         ),
//       states: Yup
//         .string()
//         .required('Username is required'),
//       zipCode: Yup
//         // .number()
//         .string()
//         .min(5, 'Must be 5 characters')
//         .max(5, 'Must be 5 characters')
//         .required('Username is required')
//         .matches(
//           /^[0-9]{5}$/,
//           'Cannot contain special characters or spaces'
//         ),
//       departments: Yup
//         .string()
//         .required('Username is required')
//     }),
//   });

//   return (
//     <FormikProvider value={formik}>
//       <Form onSubmit={formik.handleSubmit}>
//         <TextInputLiveFeedback
//           label="Username"
//           id="firstName"
//           name="firstName"
//           helpText="Must be 8-20 characters and cannot contain special characters."
//           type="text"
//         />
//         <TextField
//           label="Last Name"
//           name=""
//           value=""
//           onChange={formik.handleChange}
//           error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//           helperText={formik.touched.lastName && formik.errors.lastName}
//         />
//       </Form>
//     </FormikProvider>
//   );
// };