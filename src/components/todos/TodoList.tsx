import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { TodoItem, TodoTypes } from 'components';

// interface ChildNodeId extends ChildNode {
//   id: string;
// }
interface TodoListProps {
  status: string;
  todoItems: TodoTypes[];
  handleTodoUpdate: (text: string, id: number) => void;
  handleTodoDelete: (taskID: number) => void;
  handleTodoPosUpdate: (status: string, currentId: string | undefined, clickedId: string) => void;
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
    const card_id = e.dataTransfer.getData('card');
    const currentCard = target.closest('.card');
    const clickedCard = card_id ? document.getElementById(card_id) : null;

    if (clickedCard) {
      handleTodoPosUpdate(status, currentCard?.id, clickedCard.id);
    }
  };

  const handleDragOverOnColumn = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <Wrapper
      id={status}
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
