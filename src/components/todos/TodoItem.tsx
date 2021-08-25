import React from 'react';
import styled from 'styled-components';
import { TodoTypes } from 'components';

interface TodoItemProps {
  status: string;
  todoItem: TodoTypes;
  handleTodoUpdate: () => void;
  handleTodoDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todoItem: { taskName, creator, createdAt, updatedAt },
  status,
  handleTodoUpdate,
  handleTodoDelete,
}) => {
  return (
    <Wrapper
      onClick={() => {
        console.log(`"${status}" 컨테이너`);
      }}
    >
      <TaskName>{taskName}</TaskName>
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
