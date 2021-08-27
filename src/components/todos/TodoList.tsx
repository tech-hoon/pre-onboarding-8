import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoItem, TodoTypes } from 'components';
interface TodoListProps {
  status: string;
  todoItems: TodoTypes[];
  handleTodoUpdate: () => void;
  handleTodoDelete: (taskID: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  status,
  todoItems,
  handleTodoDelete,
  handleTodoUpdate,
}) => {
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const card_id = e.dataTransfer.getData('card');

    const currentCard = target.closest('.card');
    const currentColumn = target.closest('.cardlist');
    const clickedCard = card_id ? document.getElementById(card_id) : null;

    if (!clickedCard) return;
    if (target === currentColumn) currentColumn.appendChild(clickedCard);
    else currentCard?.insertAdjacentElement(getInsertPlace(e), clickedCard);
  };

  const handleDragOverOnColumn = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const getInsertPlace = (e: React.DragEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const itemCard = target.closest('.card');
    if (!itemCard) return 'afterend';

    const placeInfo = itemCard?.getBoundingClientRect();
    const placeY = placeInfo.bottom - e.clientY;
    const targetHeight = placeInfo.bottom - placeInfo.top;
    const insertPlace = placeY > targetHeight / 2 ? 'beforebegin' : 'afterend';

    return insertPlace;
  };
  return (
    <Wrapper className="cardlist" onDragOver={handleDragOverOnColumn} onDrop={handleDrop}>
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
  padding: 4px;
  height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
