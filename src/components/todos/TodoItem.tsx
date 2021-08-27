import React, { useState } from 'react';
import styled from 'styled-components';
import { DeleteButton, TodoTypes, UpdateForm } from 'components';

interface TodoItemProps {
  status: string;
  todoItem: TodoTypes;
  handleTodoUpdate: (text: string, id: number) => void;
  handleTodoDelete: (taskID: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todoItem: { id, taskName, status, creator, createdAt, updatedAt },
  handleTodoUpdate,
  handleTodoDelete,
}) => {
  const [dragStart, setDragStart] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleVisibleForm = () => {
    setIsClicked((prevVisible) => !prevVisible);
  };

  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    e.dataTransfer.setData(
      'card',
      JSON.stringify({ id, taskName, status, creator, createdAt, updatedAt }),
    );
    setDragStart(true);
  };

  const handleDragOverOnCard = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragStart(false);
  };

  return (
    <Wrapper
      id={`${id}`}
      className="card"
      draggable={true}
      dragStart={dragStart}
      onDragStart={handleDragStart}
      onDragOver={handleDragOverOnCard}
    >
      {isClicked ? (
        <UpdateForm
          handleVisibleForm={handleVisibleForm}
          handleTodoUpdate={handleTodoUpdate}
          itemId={id}
          taskName={taskName}
        />
      ) : (
        <Item onClick={handleVisibleForm}>
          <Top>
            <DeleteButton taskID={id} handleTodoDelete={handleTodoDelete} />
          </Top>
          <Middle>
            <TaskName>{taskName}</TaskName>
          </Middle>
          <Bottom>
            <Creator>{creator}</Creator>
            <BottomRight>
              <Date>
                <DateLabel>생성일 </DateLabel>
                {createdAt}
              </Date>
              {updatedAt && (
                <Date>
                  <DateLabel>수정일 </DateLabel>
                  {updatedAt}
                </Date>
              )}
            </BottomRight>
          </Bottom>
        </Item>
      )}
    </Wrapper>
  );
};

interface WrapperProp {
  dragStart: boolean;
}
const Wrapper = styled.div<WrapperProp>`
  opacity: ${(props) => (props.dragStart ? 0.5 : 1)};
`;

const Item = styled.li`
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;
  &:hover {
    background: rgba(55, 53, 47, 0.03);
    cursor: pointer;
  }
  padding: 0px 18px 18px;
  border-radius: 4px;
  margin: 12px 0;
`;

const Top = styled.div`
  width: 100%;
  margin-left: 97%;
  padding-top: 3%;

  @media ${({ theme }) => theme.mobile} {
    margin-left: 95%;
    padding-top: 5%;
  }
`;

const Middle = styled.div`
  width: 100%;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;

  @media ${({ theme }) => theme.desktop} {
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.tablet} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
  }
`;

const BottomRight = styled.div``;

const TaskName = styled.h3`
  color: ${({ theme }) => theme.BLACK};
  width: 100%;
  font-weight: 500;
  margin-bottom: 12px;
  @media ${({ theme }) => theme.desktop} {
    font-size: 1.3em;
    line-height: 1.5;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 1.1em;
    line-height: 1.3;
  }
`;

const Creator = styled.h3`
  color: ${({ theme }) => theme.SKYBLUE};
  font-size: 1em;
`;

const Date = styled.p`
  color: ${({ theme }) => theme.GRAY};
  margin-top: 4px;

  @media ${({ theme }) => theme.desktop} {
    font-size: 0.7em;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 0.3em;
  }
`;

const DateLabel = styled.label`
  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`;

export default React.memo(TodoItem);
