import React, { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TodoItem, TodoTypes } from 'components';
import { getInsertPlace, appendChild, insertChild } from 'utils/dragNdrop';
interface TodoListProps {
  status: string;
  items: TodoTypes[];
  setItems: Dispatch<SetStateAction<TodoTypes[]>>;
  todoItems: TodoTypes[];
  handleTodoUpdate: () => void;
  handleTodoDelete: (taskID: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  status,
  items,
  setItems,
  todoItems,
  handleTodoDelete,
  handleTodoUpdate,
}) => {
  useEffect(() => console.log(items), [items]);
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    //기존클릭한카드
    const card = JSON.parse(e.dataTransfer.getData('card'));
    const clickedCard = card ? document.getElementById(`card${card.id}`) : null;
    if (!clickedCard) return;
    //새로운 position
    const currentCard = target.closest('.card');
    const currentCardID = Number(currentCard?.id.replace(/[a-zA-Z]/g, ''));

    //새로운 position 이동
    const insertPosition = getInsertPlace(e);
    if (target === target.closest('.cardlist'))
      setItems((items) => appendChild(items.slice(), status, card));
    else
      setItems((items) => insertChild(items.slice(), status, card, insertPosition, currentCardID));
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

export default TodoList;

const Wrapper = styled.ul`
  background-color: grey;
  padding: 10px;
  height: 500px;
  overflow-y: scroll;
`;
