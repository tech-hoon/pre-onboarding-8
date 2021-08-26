import React from 'react';
import styled from 'styled-components';
import { DeleteButton, TodoTypes } from 'components';
interface TodoItemProps {
  status: string;
  todoItem: TodoTypes;
  handleTodoUpdate: () => void;
  handleTodoDelete: (taskID: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todoItem: { id, taskName, creator, createdAt, updatedAt },
  handleTodoUpdate,
  handleTodoDelete,
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    e.dataTransfer.setData('card', target.id);
  };

  const handleDragOverOnCard = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Wrapper
        id={`card${id}`}
        className="card"
        draggable={true}
        onDragStart={handleDragStart}
        onDragOver={handleDragOverOnCard}
      >
        <TaskName>{taskName}</TaskName>
        <DeleteButton taskID={id} handleTodoDelete={handleTodoDelete} />
        <p>{creator}</p>
        <p>생성일 {createdAt}</p>
        <p>수정일 {updatedAt}</p>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.li`
  border: 1px solid blue;
`;

const TaskName = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

const DroppablePlace = styled.div`
  height: 3px;
  background-color: aquamarine;
`;

export default TodoItem;
