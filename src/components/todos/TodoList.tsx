import React from 'react';
import styled from 'styled-components';
import { TodoItem, TodoTypes } from 'components';
import { useDnD } from 'utils/dragndrop';
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
  const { handleDragOverOnColumn, handleDrop } = useDnD();
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

const Wrapper = styled.ul``;
