import React from 'react';
import styled from 'styled-components';

interface CreateButtonProps {
  handleVisibleForm: () => void;
}

const CreateButton: React.FC<CreateButtonProps> = ({ handleVisibleForm }): JSX.Element => {
  const handleButtonClick = () => {
    handleVisibleForm();
  };

  return (
    <ButtonWrapper>
      <ButtonStyled onClick={handleButtonClick}>+</ButtonStyled>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div``;
const ButtonStyled = styled.button``;

export default CreateButton;
