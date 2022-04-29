import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";

const collectionRef = collection(db, 'employees');

/**
* Request which get a list of Employee
* @memberof apiService
* @function getEmployee Get a list of Employee from firebase
* @returns {object} - api response
*/
export const getEmployeeRequest = async () => {
  try {
    const listSnapshot = await getDocs(collectionRef);
    const response = listSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }))
    return response;
  } catch (err) {
    console.error(err.messsage)
  }
};
/**
 * Request wich add an employee to Firestore
 * @memberof apiService
 * @function addEmployee Get a list of Employee from firebase
 * @returns {object} - api response
 */
export const addEmployee = async (submitEmployeeData) => {
  // Add a new employee entry to the Firebase database.
  try {
    await addDoc(collectionRef, submitEmployeeData);
  }
  catch (error) {
    console.error('Error writing new message to Firebase Database', error);
  }
}