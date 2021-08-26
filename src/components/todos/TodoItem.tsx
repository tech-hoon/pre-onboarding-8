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
  return (
    <Wrapper>
      <Top>
        <TaskName>{taskName}</TaskName>
        <DeleteButton taskID={id} handleTodoDelete={handleTodoDelete} />
      </Top>
      <Creator>{creator}</Creator>
      <Bottom>
        <Date>생성일 {createdAt}</Date>
        {updatedAt && <Date>수정일 {updatedAt}</Date>}
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;
  &:hover {
    background: rgba(55, 53, 47, 0.03);
    cursor: pointer;
  }
  padding: 14px;
  margin: 4px 0 10px 0;
  border-radius: 4px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;
`;

const TaskName = styled.h3`
  font-size: 1.2em;
  line-height: 1.5;
  font-weight: 500;
  margin: 6px 0 12px 0;
`;

const Creator = styled.h3`
  color: rgb(101, 171, 218);
  font-size: 0.8em;
`;

const Date = styled.p`
  font-size: 0.7em;
  color: #999999;
  margin-left: auto;
`;

export default TodoItem;
