import React from 'react';
import styled from 'styled-components';

interface DeleteButtonProps {
  taskID: number;
  handleTodoDelete: (taskID: number) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ taskID, handleTodoDelete }) => {
  return (
    <Wrapper>
      <Button onClick={() => handleTodoDelete(taskID)}>x</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Button = styled.button`
  font-size: 1em;
`;

export default DeleteButton;
