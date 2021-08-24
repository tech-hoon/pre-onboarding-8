import React from 'react';
import styled from 'styled-components';
import { TodoTypes } from './TodoTypes';

interface TodoItemProps {
  todoItem: TodoTypes;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todoItem: { taskName, creator, createdAt, updatedAt },
}) => {
  return (
    <Wrapper>
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
