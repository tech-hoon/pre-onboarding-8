import React from 'react';
import styled from 'styled-components';

interface CreateButtonProps {
  status: string;
  handleFormOpen: (status: string) => void;
}

const CreateButton: React.FC<CreateButtonProps> = ({ status, handleFormOpen }) => {
  return (
    <ButtonWrapper>
      <ButtonStyled onClick={() => handleFormOpen(status)}>+</ButtonStyled>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div``;
const ButtonStyled = styled.button``;

export default CreateButton;
