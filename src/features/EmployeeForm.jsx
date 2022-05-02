import { useState } from 'react';
import styled from 'styled-components';
import { FormikForm } from '../components/FormikForm';

import { Modal } from "wardi-kamal-component" // npm modal component

export default function EmployeeForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <FormikForm setModal={setIsOpen} />

      {isOpen && (
        <Modal
          setModal={setIsOpen}
          component={
            <p className='modal-text'>
              L'utilisateur a bien été enregistré !
            </p>
          }
        />
      )}
    </Container >
  )
};

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  margin:3rem;
`;
