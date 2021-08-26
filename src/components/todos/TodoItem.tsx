import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { DeleteButton, TodoTypes, UpdateForm } from 'components';

interface TodoItemProps {
  status: string;
  todoItem: TodoTypes;
  handleTodoUpdate: (text: string, id: number) => void;
  handleTodoDelete: (taskID: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todoItem: { id, taskName, creator, createdAt, updatedAt },
  handleTodoUpdate,
  handleTodoDelete,
}) => {
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);

  const handleDoubleClick = () => {
    setIsDoubleClicked((prev) => !prev);
  };

  return (
    <Wrapper>
      {isDoubleClicked ? (
        <UpdateForm
          setIsVisibleForm={setIsDoubleClicked}
          handleTodoUpdate={handleTodoUpdate}
          itemId={id}
        />
      ) : (
        <Item onDoubleClick={handleDoubleClick}>
          <TaskName>{taskName}</TaskName>
          <DeleteButton taskID={id} handleTodoDelete={handleTodoDelete} />
          <p>{creator}</p>
          <p>생성일 {createdAt}</p>
          <p>수정일 {updatedAt}</p>
        </Item>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid blue;
`;

const Item = styled.li``;

const TaskName = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

export default TodoItem;
