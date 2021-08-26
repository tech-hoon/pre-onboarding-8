import React, { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { DeleteButton, TodoTypes } from 'components';
import { useDnD } from 'utils/dragndrop';
interface TodoItemProps {
  status: string;
  todoItem: TodoTypes;
  handleTodoUpdate: () => void;
  handleTodoDelete: (taskID: number) => void;
  markupUpper: boolean;
  setMarkupUpper: Dispatch<SetStateAction<boolean>>;
  clickedCardID: string | null;
  setClickedCardID: Dispatch<SetStateAction<string | null>>;
  enteredCardID: string | null;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todoItem: { id, taskName, creator, createdAt, updatedAt },
  handleTodoUpdate,
  handleTodoDelete,
  markupUpper,
  setMarkupUpper,
  clickedCardID,
  setClickedCardID,
  enteredCardID,
}) => {
  const [isDragStart, setDragStart] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    e.dataTransfer.setData('card', target.id);

    setClickedCardID(target.id);
    setDragStart(true);
  };

  const handleDragEnd = () => setDragStart(false);
  const showLine = (id: string) => {
    return enteredCardID === id && isDragStart;
  };

  const handleDragOverOnCard = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {showLine(`card${id}`) && markupUpper && <DroppablePlace />}
      <Wrapper
        id={`card${id}`}
        className="card"
        draggable={true}
        onDragStart={handleDragStart}
        onDragOver={handleDragOverOnCard}
        onDragEnd={handleDragEnd}
      >
        <TaskName>{taskName}</TaskName>
        <DeleteButton taskID={id} handleTodoDelete={handleTodoDelete} />
        <p>{creator}</p>
        <p>생성일 {createdAt}</p>
        <p>수정일 {updatedAt}</p>
      </Wrapper>
      {showLine(`card${id}`) && !markupUpper && <DroppablePlace />}
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
