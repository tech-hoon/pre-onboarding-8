import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TodoHeader, TodoList, CreateForm, TodoTypes } from 'components';

interface TodoContainerProps {
  status: string;
  items: TodoTypes[];
  todoItems: TodoTypes[];
  setItems: Dispatch<SetStateAction<TodoTypes[]>>;
  handleTodoCreate: (status: string, text: string, creator: string) => void;
  handleTodoDelete: (taskID: number) => void;
  handleTodoUpdate: (text: string, id: number) => void;
  handleTodoSort: (status: string) => void;
  handleTodoCreator: (creators: TodoTypes[], status: string) => void;
  handleTodoPosUpdate: (
    status: string,
    currentId: string | undefined,
    clickedId: string,
    insertPosition?: string,
  ) => void;
}

const TodoContainer: React.FC<TodoContainerProps> = ({
  status,
  items,
  todoItems,
  handleTodoCreate,
  handleTodoDelete,
  handleTodoUpdate,
  handleTodoSort,
  handleTodoCreator,

  handleTodoPosUpdate,
}) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  // const filterList = (value: TodoTypes[]) => {
  //   const result = value.map((val: TodoTypes) =>
  //     setItems((prev) => [
  //       ...prev.filter((todo: any) => todo.creator === val),
  //     ]),
  //   );
  //   return result.flat();
  // };

  return (
    <Wrapper>
      <TodoHeader
        todoItems={todoItems}
        status={status}
        setIsVisibleForm={setIsVisibleForm}
        handleTodoSort={handleTodoSort}
        handleTodoCreator={handleTodoCreator}
      />
      {isVisibleForm && (
        <CreateForm
          status={status}
          setIsVisibleForm={setIsVisibleForm}
          handleTodoCreate={handleTodoCreate}
        />
      )}
      <TodoList
        status={status}
        items={items}
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
