import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface CreateButtonProps {
  setIsVisibleForm: Dispatch<SetStateAction<boolean>>;
}

const CreateButton: React.FC<CreateButtonProps> = ({ setIsVisibleForm }) => {
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
const ButtonStyled = styled.button`
  font-size: 1em;
`;

export default CreateButton;
