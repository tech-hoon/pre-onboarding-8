import React from 'react';
import styled from 'styled-components';
import { Todo } from './TodoTypes';
interface TodoItemProps {
  item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  return (
    <Wrapper>
      <p>{item.taskName}</p>
      <p>{item.creator}</p>
    </Wrapper>
  );
};

export default TodoItem;

const Wrapper = styled.li`
  border: 1px solid blue;
`;
