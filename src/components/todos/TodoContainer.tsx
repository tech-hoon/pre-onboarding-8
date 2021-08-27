import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoHeader, TodoList, CreateForm, TodoTypes } from 'components';

interface TodoContainerProps {
  status: string;
  todoItems: TodoTypes[];
  handleTodoCreate: (status: string, text: string, creator: string) => void;
  handleTodoDelete: (taskID: number) => void;
  handleTodoUpdate: (text: string, id: number) => void;
  handleTodoPosUpdate: (
    status: string,
    currentId: string | undefined,
    clickedId: string,
    insertPosition?: string,
  ) => void;
}

const TodoContainer: React.FC<TodoContainerProps> = ({
  status,
  todoItems,
  handleTodoCreate,
  handleTodoDelete,
  handleTodoUpdate,
  handleTodoPosUpdate,
}) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const handleVisibleForm = () => {
    setIsVisibleForm((prevVisible) => !prevVisible);
  };

  return (
    <Wrapper>
      <TodoHeader todoItems={todoItems} status={status} handleVisibleForm={handleVisibleForm} />
      {isVisibleForm && (
        <CreateForm
          status={status}
          handleVisibleForm={handleVisibleForm}
          handleTodoCreate={handleTodoCreate}
        />
      )}
      <TodoList
        status={status}
        todoItems={todoItems}
        handleTodoDelete={handleTodoDelete}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoPosUpdate={handleTodoPosUpdate}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default TodoContainer;
