// import { addEmployeeRequest, saveEmployee } from '../services/apiService'

/**
 * @function Validation Form's inputs validation
 */
// Validation du formulaire
// const Validation = () => {

//   if(!isValidate){
//     console.error('error')
//   }
// };
export default function submitForm({ opt, e, isFormValid }) {

  if (isFormValid) {
    const employeeData = {
      firstName: opt.firstName,
      lastName: opt.lastName,
      birthdate: opt.birthdate,
      startDate: opt.startDate,
      street: opt.street,
      city: opt.city,
      zipcode: opt.zipcode,
      stateName: opt.stateName,
      department: opt.department,
    }

    // saveEmployee(employeeData) // directly with apiService
  } else {
    console.log('error')
  }
  e.preventDefault();
  e.stopPropagation();
}