import { TodoTypes } from './TodoTypes';
import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import Form from 'components/common/Form';

interface TodoContainerProps {
  status: string;
  todoItems: TodoTypes[];
}

const TodoContainer: React.FC<TodoContainerProps> = ({ status, todoItems }) => {
  return (
    <Wrapper>
      <TodoHeader status={status} />
      <Form />
      <TodoList todoItems={todoItems} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default TodoContainer;
