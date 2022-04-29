import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import { tableHeaders } from '../assets/data/mockData';
import { getEmployeeRequest } from '../services/apiService';
import { createGlobalState } from 'react-hooks-global-state';

// MUI filter component
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
}
export default function EmployeeTable() {
  const [pageSize, setPageSize] = useState(5);
  // State Management logic
  const { setGlobalState, useGlobalState } = createGlobalState({ employeesList: [] });
  const [list] = useGlobalState('employeesList')

  useEffect(() => {
    getEmployeeRequest().then(
      data => {
        setGlobalState('employeesList', data)
      }
    )
  }, [setGlobalState])

  return (
    <Container>
      <DataGrid style={{ height: '300', width: '100%' }}
        rows={list}
        // rows={currentEmployeesList}
        columns={tableHeaders}
        disableColumnMenu
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        components={{ Toolbar: CustomToolbar }}
      />
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  height:26rem;
  margin-block: 5rem;
  margin-inline:3rem;
`;