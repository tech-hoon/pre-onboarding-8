import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import todoItems from 'utils/data.json';
import { Todo } from './TodoTypes';

const TodoList: React.FC = () => {
  return (
    <Wrapper>
      {todoItems.map((todo: Todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  border: 1px solid red;
`;
