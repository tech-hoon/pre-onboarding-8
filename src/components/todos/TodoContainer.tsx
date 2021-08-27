import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoHeader, TodoList, CreateForm, TodoTypes } from 'components';

interface TodoContainerProps {
  status: string;
  todoItems: TodoTypes[];
  handleTodoCreate: (status: string, text: string, creator: string) => void;
  handleTodoDelete: (taskID: number) => void;
  handleTodoUpdate: (text: string, id: number) => void;
  handleTodoSort: (status: string) => void;
  handleTodoCreator: (creators: string[], status: string) => void;
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
  handleTodoSort,
  handleTodoCreator,
  handleTodoPosUpdate,
}) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [selectCreator, setSelectCreator] = useState<string[]>([]);
  const [selectFilter, setSelectFilter] = useState({ date: false, creator: false });
  const handleVisibleForm = () => {
    setIsVisibleForm((prevVisible) => !prevVisible);
  };

  const onCreatorNameCheckedHandler = (checked: boolean, value: string) => {
    if (checked) {
      setSelectCreator([...selectCreator, value]);
    } else {
      setSelectCreator(selectCreator.filter((check) => check !== value));
    }
  };

  const handleFilterd = (creators: string[]) => {
    const result: TodoTypes[][] = [];
    creators.forEach((creator) => {
      const data = todoItems.filter((item: any) => item.creator === creator);
      result.push(data);
    });
    console.log('result', result.flat());
  };

  return (
    <Wrapper>
      <TodoHeader
        todoItems={todoItems}
        status={status}
        selectCreator={selectCreator}
        handleVisibleForm={handleVisibleForm}
        handleTodoSort={handleTodoSort}
        handleFilterd={handleFilterd}
        handleTodoCreator={handleTodoCreator}
        onCreatorNameCheckedHandler={onCreatorNameCheckedHandler}
        setSelectFilter={setSelectFilter}
        selectFilter={selectFilter}
      />
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
