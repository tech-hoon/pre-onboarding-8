import React, { useState } from 'react';
import { TodoTypes } from './TodoTypes';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import Form from 'components/common/Form';

interface TodoContainerProps {
  status: string;
  todoItems: TodoTypes[];
}

const TodoContainer: React.FC<TodoContainerProps> = ({ status, todoItems }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  return (
    <Wrapper>
      <TodoHeader status={status} setIsVisibleForm={setIsVisibleForm} />
      {isVisibleForm && (
        <Form status={status} setIsVisibleForm={setIsVisibleForm} />
      )}
      <TodoList todoItems={todoItems} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default TodoContainer;
