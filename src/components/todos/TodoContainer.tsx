import { TodoTypes } from './TodoTypes';
import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import Form from 'components/common/Form';

interface TodoContainerProps {
  title: string;
  todoItems: TodoTypes[];
}

const TodoContainer: React.FC<TodoContainerProps> = ({ title, todoItems }) => {
  return (
    <Wrapper>
      <TodoHeader title={title} />
      <Form />
      <TodoList todoItems={todoItems} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default TodoContainer;
