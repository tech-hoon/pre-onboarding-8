import React from 'react';
import styled from 'styled-components';
import { BsPlus } from 'react-icons/bs';

interface CreateButtonProps {
  handleVisibleForm: () => void;
}

const CreateButton: React.FC<CreateButtonProps> = ({ handleVisibleForm }): JSX.Element => {
  const handleButtonClick = () => {
    handleVisibleForm();
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

  color: ${({ theme }) => theme.color.ICON_COLOR};
`;

export default CreateButton;
