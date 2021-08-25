import { TodoTypes } from './TodoTypes';
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import Form from 'components/common/Form';

interface TodoContainerProps {
  status: string;
  todoItems: TodoTypes[];
}

const TodoContainer: React.FC<TodoContainerProps> = ({ status, todoItems }) => {
  const [clickedContainer, setClickedContainer] = useState<string>();

  const handleFormOpen = (target: string) => {
    setClickedContainer(clickedContainer ? '' : target);
  };

  return (
    <Wrapper>
      <TodoHeader status={status} handleFormOpen={handleFormOpen} />
      {clickedContainer && status && <Form />}
      <TodoList todoItems={todoItems} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default TodoContainer;
