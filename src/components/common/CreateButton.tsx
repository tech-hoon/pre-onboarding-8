import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface CreateButtonProps {
  status: string;
  setIsVisibleForm: Dispatch<SetStateAction<boolean>>;
}

const CreateButton: React.FC<CreateButtonProps> = ({
  status,
  setIsVisibleForm,
}) => {
  const handleButtonClick = () => {
    setIsVisibleForm((prevVisible) => !prevVisible);
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
