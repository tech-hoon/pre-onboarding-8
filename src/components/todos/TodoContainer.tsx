import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TodoHeader, TodoList, CreateForm, TodoTypes } from 'components';

interface TodoContainerProps {
  status: string;
  setItems: Dispatch<SetStateAction<TodoTypes[]>>;
  todoItems: TodoTypes[];
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
    if (checked) {
      setSelectCreator([...selectCreator, value]);
    } else {
      setSelectCreator(selectCreator.filter((check) => check !== value));
    }
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
        todoItems={todoItems}
        status={status}
        selectCreator={selectCreator}
        handleVisibleForm={handleVisibleForm}
        handleTodoSort={handleTodoSort}
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
        handleFilterdCreator={handleFilterdCreator}
        setSelectFilter={setSelectFilter}
        selectFilter={selectFilter}
        selectCreator={selectCreator}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default TodoContainer;
