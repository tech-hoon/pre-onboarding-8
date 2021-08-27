import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TodoHeader, TodoList, InputForm, TodoTypes } from 'components';

interface TodoContainerProps {
  status: string;
  todoItems: TodoTypes[];
  setItems: Dispatch<SetStateAction<TodoTypes[]>>;
  handleTodoCreate: (status: string, text: string, creator: string) => void;
  handleTodoDelete: (taskID: number) => void;
  handleTodoUpdate: () => void;
  handleTodoSort: (status: string) => void;
  handleTodoCreator: (creators: TodoTypes[], status: string) => void;
}

const TodoContainer: React.FC<TodoContainerProps> = ({
  status,
  todoItems,
  handleTodoCreate,
  handleTodoDelete,
  handleTodoUpdate,
  handleTodoSort,
  handleTodoCreator,
}) => {
  //인풋창visible
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
        status={status}
        todoItems={todoItems}
        setIsVisibleForm={setIsVisibleForm}
        handleTodoSort={handleTodoSort}
        handleTodoCreator={handleTodoCreator}
      />
      {isVisibleForm && (
        <InputForm
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
