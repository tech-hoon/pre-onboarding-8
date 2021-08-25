import React from 'react';
import styled from 'styled-components';

interface CreateButtonProps {
  status: string;
}

const CreateButton: React.FC<CreateButtonProps> = ({ status }) => {
  return (
    <ButtonWrapper>
      <ButtonStyled>+</ButtonStyled>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div``;
const ButtonStyled = styled.button``;

export default CreateButton;
