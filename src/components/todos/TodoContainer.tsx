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

  const sortTodoHandle = (
    a: { createdAt: string | number | Date },
    b: { createdAt: string | number | Date },
  ) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB > dateA ? 1 : -1;
  };

  const filterList = (value: any) => {
    console.log(todoItems.sort(sortTodoHandle));
    let res;
    for (const name of value) {
      res = todoItems.filter((item) => item.creator === name);
      console.log('value', res);
    }
    console.log('res', res);
  };

  return (
    <Wrapper>
      <TodoHeader
        status={status}
        setIsVisibleForm={setIsVisibleForm}
        todoItems={todoItems}
        val={filterList}
        sortTodo={sortTodoHandle}
      />
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
        val={filterList}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default TodoContainer;
