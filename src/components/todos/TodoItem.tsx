import React from 'react';
import styled from 'styled-components';
import { DeleteButton, TodoTypes } from 'components';

interface TodoItemProps {
  status: string;
  todoItem: TodoTypes;
  handleTodoUpdate: () => void;
  handleTodoDelete: (taskID: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todoItem: { id, taskName, creator, createdAt, updatedAt },
  handleTodoUpdate,
  handleTodoDelete,
}) => {
  return (
    <Wrapper>
      <TaskName>{taskName}</TaskName>
      <DeleteButton taskID={id} handleTodoDelete={handleTodoDelete} />
      <p>{creator}</p>
      <p>생성일 {createdAt}</p>
      <p>수정일 {updatedAt}</p>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  border: 1px solid blue;
`;

const TaskName = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

export default TodoItem;
