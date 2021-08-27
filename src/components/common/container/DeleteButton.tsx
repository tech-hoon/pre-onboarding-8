import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

interface DeleteButtonProps {
  taskID: number;
  handleTodoDelete: (taskID: number) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ taskID, handleTodoDelete }): JSX.Element => {
  return (
    <Button onClick={() => handleTodoDelete(taskID)}>
      <IoMdClose />
    </Button>
  );
};

const Button = styled.button`
  font-size: 0.8em;
  color: ${({ theme }) => theme.color.ICON_COLOR};
`;

export default DeleteButton;
