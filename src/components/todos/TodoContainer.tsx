import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TodoHeader, TodoList, CreateForm, TodoTypes } from 'components';

interface TodoContainerProps {
  status: string;
  setItems: Dispatch<SetStateAction<TodoTypes[]>>;
  todoItems: TodoTypes[];
  currentStatus: string;
  filterCreatorItems: TodoTypes[];
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
  currentStatus,
  filterCreatorItems,
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
  const caseSwitchList = () => {
    switch (currentStatus === status) {
      case filterCreatorItems.length > 0:
        filterCreatorItems;
        break;
      case filterCreatorItems.length > 0:
        filterCreatorItems;
        break;
      default:
        todoItems;
    }
    return todoItems;
  };

  return (
    <Wrapper>
      <TodoHeader
        todoItems={
          currentStatus === status && filterCreatorItems.length > 0 ? filterCreatorItems : todoItems
        }
        status={status}
        selectCreator={selectCreator}
        handleVisibleForm={handleVisibleForm}
        handleTodoSort={handleTodoSort}
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
        todoItems={
          currentStatus === status && filterCreatorItems.length > 0 ? filterCreatorItems : todoItems
        }
        handleTodoDelete={handleTodoDelete}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoPosUpdate={handleTodoPosUpdate}
        setSelectFilter={setSelectFilter}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default TodoContainer;
