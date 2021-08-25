import React, { useState } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import Form from 'components/common/Form';
import { TodoTypes } from 'components/todos/TodoTypes';

interface TodoContainerProps {
  status: string;
  todoItems: TodoTypes[];
  handleTodoCreate: () => void;
  handleTodoDelete: () => void;
  handleTodoUpdate: () => void;
}

const TodoContainer: React.FC<TodoContainerProps> = ({
  status,
  todoItems,
  handleTodoCreate,
  handleTodoDelete,
  handleTodoUpdate,
}) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  return (
    <Wrapper>
      <TodoHeader status={status} setIsVisibleForm={setIsVisibleForm} />
      {isVisibleForm && (
        <Form
          status={status}
          setIsVisibleForm={setIsVisibleForm}
          handleTodoCreate={handleTodoCreate}
        />
      )}
      <TodoList
        status={status}
        todoItems={todoItems}
        handleTodoDelete={handleTodoDelete}
        handleTodoUpdate={handleTodoUpdate}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default TodoContainer;
