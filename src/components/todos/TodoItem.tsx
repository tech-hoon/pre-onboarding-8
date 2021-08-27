import React, { useState } from 'react';
import styled from 'styled-components';
import { DeleteButton, TodoTypes, UpdateForm } from 'components';
import { getInsertPlace } from 'utils/dragNdrop';

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
  const [dragEnter, setEnterDrag] = useState(false);
  const [onEffect, setEffect] = useState({ up: false, down: false });
  const [isClicked, setIsClicked] = useState(false);

  const handleVisibleForm = () => {
    setIsClicked((prevVisible) => !prevVisible);
  };

  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    e.dataTransfer.setData(
      'card',
      JSON.stringify({ id, taskName, status, creator, createdAt, updatedAt }),
    );
  };

  const handleDragOverOnCard = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    setEnterDrag(true);
    getInsertPlace(target.closest('.card'), e.clientY) === 'beforebegin'
      ? setEffect({ up: true, down: false })
      : setEffect({ up: false, down: true });
  };

  const handleDragLeave = () => setEnterDrag(false);

  const handleDragDrop = () => {
    setEffect({ up: false, down: false });
  };

  return (
    <Wrapper
      id={`${id}`}
      className="card"
      draggable={true}
      dragEnter={dragEnter}
      onEffect={onEffect}
      onDragStart={handleDragStart}
      onDragOver={handleDragOverOnCard}
      onDragLeave={handleDragLeave}
      onDrop={handleDragDrop}
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
interface Effect {
  up: boolean;
  down: boolean;
}
interface WrapperProp {
  dragEnter: boolean;
  onEffect: Effect;
}

const Wrapper = styled.div<WrapperProp>`
  border: 5px solid transparent;
  border-top: ${(props) =>
    props.dragEnter && props.onEffect.up && `5px solid ${props.theme.color.SKYBLUE}`};
  border-bottom: ${(props) =>
    props.dragEnter && props.onEffect.down && `5px solid ${props.theme.color.SKYBLUE}`};
`;

const Item = styled.li`
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;
  &:hover {
    background: rgba(55, 53, 47, 0.03);
    cursor: pointer;
  }
  padding: 0px 18px 18px;
  border-radius: 4px;
`;

const Top = styled.div`
  width: 100%;
  margin-left: 97%;
  padding-top: 3%;

  @media ${({ theme }) => theme.size.mobile} {
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

  @media ${({ theme }) => theme.size.desktop} {
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.size.tablet} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.size.mobile} {
    flex-direction: column;
  }
`;

const BottomRight = styled.div``;

const TaskName = styled.h3`
  color: ${({ theme }) => theme.color.BLACK};
  width: 100%;
  font-weight: 500;
  margin-bottom: 12px;
  @media ${({ theme }) => theme.size.desktop} {
    font-size: 1.3em;
    line-height: 1.5;
  }

  @media ${({ theme }) => theme.size.mobile} {
    font-size: 1.1em;
    line-height: 1.3;
  }
`;

const Creator = styled.h3`
  color: ${({ theme }) => theme.color.SKYBLUE};
  font-size: 1em;
`;

const Date = styled.p`
  color: ${({ theme }) => theme.color.GRAY};
  margin-top: 4px;

  @media ${({ theme }) => theme.size.desktop} {
    font-size: 0.7em;
  }

  @media ${({ theme }) => theme.size.mobile} {
    font-size: 0.3em;
  }
`;

const DateLabel = styled.label`
  @media ${({ theme }) => theme.size.mobile} {
    display: none;
  }
`;

export default React.memo(TodoItem);
