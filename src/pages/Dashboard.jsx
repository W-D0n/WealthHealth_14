import styled from "styled-components";

import Sidebar from '../components/Sidebar';
import EmployeeTable from '../features/EmployeeTable';

/**
 * Datatable view of the Employee list
 * @returns {reactElement}
 */
const Dashboard = () => {

  return (
    <Container>
      <Sidebar />
      <EmployeeTable />
    </Container >
  )
};

export default Dashboard;

const Container = styled.div`
  display:flex;
  width:100%;
  height:100%;
  background-color:#DFE7E4;
`;