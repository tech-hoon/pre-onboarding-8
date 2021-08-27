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
  handleTodoPosUpdate,
}) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [selectCreator, setSelectCreator] = useState<string[]>([]);
  const [selectFilter, setSelectFilter] = useState({ date: false, creator: false });
  const handleVisibleForm = () => {
    setIsVisibleForm((prevVisible) => !prevVisible);
  };

  const onCreatorNameCheckedHandler = (checked: boolean, value: string) => {
    checked
      ? setSelectCreator([...selectCreator, value])
      : setSelectCreator(selectCreator.filter((check) => check !== value));
  };

  const handleFilterdCreator = (creators: string[]) => {
    const result: TodoTypes[][] = [];
    creators.forEach((creator) => {
      const data = todoItems.filter((item: TodoTypes) => item.creator === creator);
      result.push(data);
    });
    return result.flat();
  };

  return (
    <Wrapper>
      <TodoHeader
        {...{
          status,
          todoItems,
          selectCreator,
          handleVisibleForm,
          handleTodoSort,
          onCreatorNameCheckedHandler,
          setSelectFilter,
          selectFilter,
        }}
      />
      {isVisibleForm && (
        <CreateForm
          status={status}
          handleVisibleForm={handleVisibleForm}
          handleTodoCreate={handleTodoCreate}
        />
      )}
      <TodoList
        {...{
          status,
          todoItems,
          selectCreator,
          handleTodoDelete,
          handleTodoUpdate,
          handleTodoPosUpdate,
          handleFilterdCreator,
          selectFilter,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default TodoContainer;
