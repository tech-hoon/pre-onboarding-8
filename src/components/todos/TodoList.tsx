import React, { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TodoItem, TodoTypes } from 'components';
interface TodoListProps {
  status: string;
  items: TodoTypes[];
  setItems: Dispatch<SetStateAction<TodoTypes[]>>;
  todoItems: TodoTypes[];
  handleTodoUpdate: () => void;
  handleTodoDelete: (taskID: number) => void;
}
interface afterElement {
  offset: number;
  element?: Element;
}

const TodoList: React.FC<TodoListProps> = ({
  status,
  items,
  todoItems,
  handleTodoDelete,
  handleTodoUpdate,
}) => {
  useEffect(() => console.log(items), [items]);
  const [isAfterElement, setAfterElement] = useState<Element | undefined>();
  const currentColumnRef = useRef<HTMLUListElement>(null);
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const card_id = e.dataTransfer.getData('card');

    const currentCard = target.closest('.card');
    const currentColumn = target.closest('.cardlist');
    const clickedCard = card_id ? document.getElementById(card_id) : null;

    if (!clickedCard) return;
    console.log(clickedCard, target, currentColumn);
    if (target === currentColumn) currentColumn.appendChild(clickedCard);
    else currentCard?.insertAdjacentElement(getInsertPlace(e), clickedCard);

    // const clickedCard = JSON.parse(card_id);
    // console.log(target);
    // if (!clickedCard) return;
    // if (target === currentColumn) {
    //   const movedItems = (item: TodoTypes[]) =>
    //     item.filter((el: TodoTypes) => el.id !== clickedCard.id).concat(clickedCard);
    //   setItems((item) => movedItems(item.slice()));
    //   console.log('?');
    // } else currentCard?.insertAdjacentElement(getInsertPlace(e), clickedCard);
  };
  /*
  const getDragAfterElement = (currentColumnItemsArray: Element[], y: number): afterElement => {
    const nextItem = currentColumnItemsArray.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY },
    );
    return nextItem;
  };*/

  const handleDragOverOnColumn = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    /*
    const currentColumnItems = currentColumnRef?.current?.children;
    const currentColumnItemsArray = Array.prototype.slice.call(currentColumnItems);
    const afterElement = getDragAfterElement(currentColumnItemsArray, e.clientY).element;

    setAfterElement(afterElement);*/
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
    <Wrapper
      ref={currentColumnRef}
      className="cardlist"
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
          isAfterElement={isAfterElement}
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
