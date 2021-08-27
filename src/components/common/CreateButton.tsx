import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { BsPlus } from 'react-icons/bs';

interface CreateButtonProps {
  setIsVisibleForm: Dispatch<SetStateAction<boolean>>;
}

const CreateButton: React.FC<CreateButtonProps> = ({ setIsVisibleForm }) => {
  const handleButtonClick = () => {
    setIsVisibleForm((prevVisible) => !prevVisible);
  };

  return (
    <ButtonStyled onClick={handleButtonClick}>
      <BsPlus />
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  font-size: 1.2em;
  padding: 0px;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.ICON_COLOR};
`;

export default CreateButton;
