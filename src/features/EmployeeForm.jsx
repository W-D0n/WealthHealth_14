import { useState } from 'react';
import styled from 'styled-components';
import { FormikForm } from '../components/FormikForm';

import { Modal } from "wardi-kamal-component"

export default function EmployeeForm() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  }


  return (
    <Container>
      {/* <Form setModal={setIsOpen} /> */}
      <FormikForm setModal={setIsOpen} />

      {isOpen && (
        <Modal
          clickOutsideAction={handleClick}
          closeAction={handleClick}
          component={
            <p className='modal-text'>
              L'utilisateur a bien été enregistré !
            </p>
          }
        />
      )}

      {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
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
