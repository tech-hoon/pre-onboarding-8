import React from 'react';
import styled from 'styled-components';

const CreateButton: React.FC = () => {
  return (
    <ButtonWrapper>
      <ButtonStyled>+</ButtonStyled>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div``;
const ButtonStyled = styled.button``;

export default CreateButton;
