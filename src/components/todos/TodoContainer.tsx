import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoHeader, TodoList, Form, TodoTypes } from 'components';

interface TodoContainerProps {
  status: string;
  todoItems: TodoTypes[];
  handleTodoCreate: (status: string, text: string, creator: string) => void;
  handleTodoDelete: (taskID: number) => void;
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
      <TodoHeader todoItems={todoItems} status={status} setIsVisibleForm={setIsVisibleForm} />
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
