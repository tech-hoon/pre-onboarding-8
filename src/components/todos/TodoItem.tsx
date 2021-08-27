import React, { useState } from 'react';
import styled from 'styled-components';
import { DeleteButton, TodoTypes } from 'components';
interface TodoItemProps {
  status: string;
  todoItem: TodoTypes;
  handleTodoUpdate: () => void;
  handleTodoDelete: (taskID: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todoItem: { id, taskName, status, creator, createdAt, updatedAt },
  handleTodoUpdate,
  handleTodoDelete,
}) => {
  const [dragStart, setDragStart] = useState(false);
  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    e.dataTransfer.setData(
      'card',
      JSON.stringify({ id, taskName, status, creator, createdAt, updatedAt }),
    );
    setDragStart(true);
  };

  const handleDragOverOnCard = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handleDragEnd = (e: React.DragEvent<HTMLElement>) => {
    setDragStart(false);
  };

  return (
    <>
      <Wrapper
        id={`card${id}`}
        className="card"
        draggable={true}
        dragStart={dragStart}
        onDragStart={handleDragStart}
        onDragOver={handleDragOverOnCard}
        onDragEnd={handleDragEnd}
      >
        <TaskName>{taskName + id}</TaskName>
        <DeleteButton taskID={id} handleTodoDelete={handleTodoDelete} />
        <p>{creator}</p>
        <p>생성일 {createdAt}</p>
        <p>수정일 {updatedAt}</p>
      </Wrapper>
    </>
  );
};
interface WrapperProp {
  dragStart: boolean;
}
const Wrapper = styled.li<WrapperProp>`
  border: 1px solid blue;
  opacity: ${(props) => (props.dragStart ? 0.5 : 1)};
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
