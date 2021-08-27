import React, { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TodoItem, TodoTypes } from 'components';
import { getInsertPlace } from 'utils/dragNdrop';
interface TodoListProps {
  status: string;
  todoItems: TodoTypes[];
  handleTodoUpdate: (text: string, id: number) => void;
  handleTodoDelete: (taskID: number) => void;
  handleTodoPosUpdate: (
    status: string,
    currentId: string | undefined,
    clickedId: string,
    insertPosition?: string,
  ) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  status,
  todoItems,
  handleTodoDelete,
  handleTodoUpdate,
  handleTodoPosUpdate,
}) => {
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const clickedCardID = JSON.parse(e.dataTransfer.getData('card')).id;
    const currentCard = target.closest('.card');
    const insertPosition = getInsertPlace(currentCard, e.clientY);

    handleTodoPosUpdate(status, currentCard?.id, clickedCardID, insertPosition);
  };

  const handleDragOverOnColumn = (e: React.DragEvent<HTMLElement>) => e.preventDefault();

  return (
    <Wrapper
      className={`cardlist ${status}`}
      onDragOver={handleDragOverOnColumn}
      onDrop={handleDrop}
    >
      {todoItems.map((todoItem, i) => (
        <TodoItem
          key={i}
          status={status}
          todoItem={todoItem}
          handleTodoUpdate={handleTodoUpdate}
          handleTodoDelete={handleTodoDelete}
        />
      ))}
    </Wrapper>
  );
};

export default React.memo(TodoList);

const Wrapper = styled.ul`
  padding: 4px;
  height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
