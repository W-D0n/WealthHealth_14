import styled from "styled-components";
import Sidebar from '../components/Sidebar';
import EmployeeForm from '../features/EmployeeForm';

/**
 * @returns {reactElement}
 */
const AddEmployee = () => {
  return (
    <Container>
      <Sidebar />
      <EmployeeForm />
    </Container>
  )
};
export default AddEmployee;

const Container = styled.div`
  display:flex;
  width:100%;
  height:100%;
  background-color:#DFE7E4;
`;